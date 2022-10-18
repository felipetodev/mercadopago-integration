import type { NextApiRequest } from 'next'
import { countryOpts, domain } from '../utils/constants'
const URI = 'https://api.mercadopago.com'
const API_PREFERENCES = `${URI}/checkout/preferences`
const API_PREAPPROVAL = `${URI}/preapproval`
export const PUBLIC_KEY = process.env.NEXT_PUBLIC_MERCADOPAGO_KEY

const service = (req: NextApiRequest) => ({
	createPayment: async () => {
		const { items, payerEmail } = req.body
		const body = {
			payer_email: payerEmail,
			items,
			back_urls: {
				success: `${domain}/success`,
				pending: `${domain}/pending`,
				failure: `${domain}/failure`
			}
		}
		const payment = await fetch(API_PREFERENCES, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.TEST_ACCESS_TOKEN}`
			},
			body: JSON.stringify(body)
		})

		const res = await payment.json()

		return res.data || res
	},

	createSubscription: async () => {
		const { payerEmail } = req.body
		const body = {
			reason: 'Suscripción a Luuna',
			auto_recurring: {
				frequency: 1,
				frequency_type: 'months',
				transaction_amount: 1000,
				currency_id: countryOpts.currency
			},
			back_url: `${domain}/subscription`,
			payer_email: payerEmail
		}
		const subscription = await fetch(API_PREAPPROVAL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.TEST_ACCESS_TOKEN}`
			},
			body: JSON.stringify(body)
		})

		const res = await subscription.json()

		return res.data || res
	}
})

export default service
