-- ============================================================
-- PEPVORI DATABASE SCHEMA
-- Run this in Supabase → SQL Editor
-- ============================================================

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- ──────────────────────────────────────────────
-- PATIENTS
-- Mirrors Clerk user — created on first sign-in
-- ──────────────────────────────────────────────
create table public.patients (
  id uuid primary key default uuid_generate_v4(),
  clerk_user_id text unique not null,
  email text not null,
  first_name text,
  last_name text,
  phone text,
  date_of_birth date,
  gender text,
  address_line1 text,
  address_line2 text,
  city text,
  state text,
  zip text,
  stripe_customer_id text,
  subscription_status text default 'inactive', -- inactive | active | paused | cancelled
  subscription_plan text, -- essential | performance | elite
  assigned_physician_id uuid,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ──────────────────────────────────────────────
-- PHYSICIANS
-- ──────────────────────────────────────────────
create table public.physicians (
  id uuid primary key default uuid_generate_v4(),
  clerk_user_id text unique,
  email text not null,
  first_name text not null,
  last_name text not null,
  specialty text,
  license_number text,
  license_state text,
  bio text,
  photo_url text,
  accepting_patients boolean default true,
  created_at timestamptz default now()
);

-- ──────────────────────────────────────────────
-- INTAKE SUBMISSIONS
-- Step 1 + Step 2 of the intake form
-- ──────────────────────────────────────────────
create table public.intake_submissions (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid references public.patients(id) on delete cascade,

  -- Step 1: Personal & Goals
  first_name text,
  last_name text,
  email text,
  phone text,
  date_of_birth date,
  gender text,
  primary_goal text, -- recovery | growth | longevity | sleep
  secondary_goals text[],

  -- Step 2: Health History
  height_ft int,
  height_in int,
  weight_lbs int,
  activity_level text,
  current_medications text,
  allergies text,
  medical_conditions text[],
  previous_peptide_use boolean default false,
  previous_peptides text,
  surgeon_clearance boolean,
  additional_notes text,

  -- Status
  status text default 'pending', -- pending | under_review | approved | rejected
  reviewed_by uuid references public.physicians(id),
  reviewed_at timestamptz,
  physician_notes text,

  -- Consent
  medical_consent_signed boolean default false,
  hipaa_consent_signed boolean default false,
  terms_accepted boolean default false,
  consented_at timestamptz,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ──────────────────────────────────────────────
-- PROTOCOLS (assigned to patients)
-- ──────────────────────────────────────────────
create table public.patient_protocols (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid references public.patients(id) on delete cascade,
  physician_id uuid references public.physicians(id),
  protocol_type text not null, -- recovery | growth | longevity | sleep
  peptides text[],
  dosage_instructions text,
  start_date date,
  end_date date,
  status text default 'active', -- active | paused | completed
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ──────────────────────────────────────────────
-- SHIPMENTS
-- Updated by pharmacy webhook + EasyPost
-- ──────────────────────────────────────────────
create table public.shipments (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid references public.patients(id) on delete cascade,
  protocol_id uuid references public.patient_protocols(id),
  tracking_number text,
  carrier text, -- ups | fedex | usps
  easypost_tracker_id text,
  tracking_url text,
  status text default 'preparing', -- preparing | shipped | in_transit | out_for_delivery | delivered | exception
  estimated_delivery date,
  shipped_at timestamptz,
  delivered_at timestamptz,
  pharmacy_order_id text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ──────────────────────────────────────────────
-- PROGRESS LOGS
-- Patient self-reported check-ins
-- ──────────────────────────────────────────────
create table public.progress_logs (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid references public.patients(id) on delete cascade,
  protocol_id uuid references public.patient_protocols(id),
  energy_level int check (energy_level between 1 and 10),
  sleep_quality int check (sleep_quality between 1 and 10),
  recovery_score int check (recovery_score between 1 and 10),
  mood_score int check (mood_score between 1 and 10),
  side_effects text,
  notes text,
  logged_at timestamptz default now()
);

-- ──────────────────────────────────────────────
-- CONSULTATIONS
-- Video calls via Daily.co
-- ──────────────────────────────────────────────
create table public.consultations (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid references public.patients(id) on delete cascade,
  physician_id uuid references public.physicians(id),
  intake_id uuid references public.intake_submissions(id),
  daily_room_url text,
  daily_room_name text,
  scheduled_at timestamptz,
  duration_minutes int default 30,
  status text default 'scheduled', -- scheduled | in_progress | completed | cancelled | no_show
  physician_notes text,
  created_at timestamptz default now()
);

-- ──────────────────────────────────────────────
-- CONTACT MESSAGES
-- From the contact form
-- ──────────────────────────────────────────────
create table public.contact_messages (
  id uuid primary key default uuid_generate_v4(),
  first_name text not null,
  last_name text not null,
  email text not null,
  topic text,
  message text not null,
  status text default 'unread', -- unread | read | replied
  created_at timestamptz default now()
);

-- ──────────────────────────────────────────────
-- ROW LEVEL SECURITY
-- Patients can only see their own data
-- ──────────────────────────────────────────────
alter table public.patients enable row level security;
alter table public.intake_submissions enable row level security;
alter table public.patient_protocols enable row level security;
alter table public.shipments enable row level security;
alter table public.progress_logs enable row level security;
alter table public.consultations enable row level security;

-- Patients policy: users can only read/write their own rows
create policy "patients_own_data" on public.patients
  for all using (clerk_user_id = current_setting('app.clerk_user_id', true));

create policy "intake_own_data" on public.intake_submissions
  for all using (
    patient_id in (
      select id from public.patients
      where clerk_user_id = current_setting('app.clerk_user_id', true)
    )
  );

create policy "protocols_own_data" on public.patient_protocols
  for all using (
    patient_id in (
      select id from public.patients
      where clerk_user_id = current_setting('app.clerk_user_id', true)
    )
  );

create policy "shipments_own_data" on public.shipments
  for all using (
    patient_id in (
      select id from public.patients
      where clerk_user_id = current_setting('app.clerk_user_id', true)
    )
  );

create policy "logs_own_data" on public.progress_logs
  for all using (
    patient_id in (
      select id from public.patients
      where clerk_user_id = current_setting('app.clerk_user_id', true)
    )
  );

create policy "consultations_own_data" on public.consultations
  for all using (
    patient_id in (
      select id from public.patients
      where clerk_user_id = current_setting('app.clerk_user_id', true)
    )
  );

-- ──────────────────────────────────────────────
-- UPDATED_AT triggers
-- ──────────────────────────────────────────────
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger patients_updated_at before update on public.patients
  for each row execute function update_updated_at();

create trigger intake_updated_at before update on public.intake_submissions
  for each row execute function update_updated_at();

create trigger protocols_updated_at before update on public.patient_protocols
  for each row execute function update_updated_at();

create trigger shipments_updated_at before update on public.shipments
  for each row execute function update_updated_at();
