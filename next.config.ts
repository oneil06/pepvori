import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // beforeFiles runs before Next.js page routing — overrides any matching TSX pages
      beforeFiles: [
        { source: '/',                        destination: '/pepvori_landing_page_preview.html' },
        { source: '/about',                   destination: '/pepvori_about.html' },
        { source: '/contact',                 destination: '/pepvori_contact.html' },
        { source: '/how-it-works',            destination: '/pepvori_how_it_works.html' },
        { source: '/intake',                  destination: '/pepvori_intake.html' },
        { source: '/intake/step-2',           destination: '/pepvori_intake2.html' },
        { source: '/physicians',              destination: '/pepvori_physicians.html' },
        { source: '/pricing',                 destination: '/pepvori_pricing.html' },
        { source: '/privacy',                 destination: '/pepvori_privacy.html' },
        { source: '/protocols',               destination: '/pepvori_protocols.html' },
        { source: '/protocols/recovery',      destination: '/pepvori_protocol_recovery.html' },
        { source: '/protocols/growth',        destination: '/pepvori_protocol_growth.html' },
        { source: '/protocols/longevity',     destination: '/pepvori_protocol_longevity.html' },
        { source: '/protocols/sleep',         destination: '/pepvori_protocol_sleep.html' },
        { source: '/terms',                   destination: '/pepvori_terms.html' },
        { source: '/hipaa',                   destination: '/pepvori_hipaa.html' },
        { source: '/medical-consent',         destination: '/pepvori_medical_consent.html' },
        { source: '/login',                   destination: '/pepvori_login.html' },
      ],
    }
  },
};

export default nextConfig;
