import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

// Server-side Stripe client
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

// Client-side Stripe instance (singleton)
let stripePromise: ReturnType<typeof loadStripe>
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

// Subscription plan config
export const PLANS = {
  essential: {
    name: 'Essential',
    price: 149,
    priceId: process.env.STRIPE_PRICE_ESSENTIAL!,
    description: 'Core peptide protocol, physician consult, monthly shipment',
    features: [
      'One peptide protocol',
      'Monthly physician check-in',
      'Monthly shipment',
      'Patient portal access',
      'Email support',
    ],
  },
  performance: {
    name: 'Performance',
    price: 249,
    priceId: process.env.STRIPE_PRICE_PERFORMANCE!,
    description: 'Advanced protocol stack, bi-weekly check-ins, priority support',
    features: [
      'Up to two peptide protocols',
      'Bi-weekly physician check-in',
      'Monthly shipment',
      'AI health assistant',
      'Priority support',
    ],
  },
  elite: {
    name: 'Elite',
    price: 399,
    priceId: process.env.STRIPE_PRICE_ELITE!,
    description: 'Full protocol access, unlimited consults, concierge service',
    features: [
      'All peptide protocols',
      'Weekly physician check-in',
      'Monthly shipment',
      'AI health assistant',
      'Video consultations',
      'Concierge support',
    ],
  },
} as const

export type PlanKey = keyof typeof PLANS
