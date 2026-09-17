import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY || 'sk_test_build_placeholder',
  {
  apiVersion: '2026-08-26.dahlia',
  typescript: true,
});
