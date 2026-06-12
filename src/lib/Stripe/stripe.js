import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)



export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1ThRRKClsenR7b59MmGkFVCW',
    'seeker_premium': 'price_1ThYufClsenR7b59aI6pjzsS',
    'recruiter_enterprise': 'price_1ThYw6ClsenR7b59cGGHwW0a',
    'recruiter_growth': 'price_1ThYvcClsenR7b599rHcuBA8'

}