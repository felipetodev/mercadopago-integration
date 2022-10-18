import type { NextApiRequest, NextApiResponse } from 'next'
import service from './api'

const api = {
	getPaymentLink: async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			const payment = await service(req).createPayment()
			return res.status(200).json(payment)
		} catch (error: any) {
			console.log(error)
			return res
				.status(error.status || 500)
				.json({ error: true, message: error.message || 'Failes to create payment' })
		}
	},

	getSubscriptionLink: async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			const subscription = await service(req).createSubscription()
			if (subscription.status >= 400) throw new Error(subscription.message)
			return res.status(200).json(subscription)
		} catch (error: any) {
			console.log(error)
			return res
				.status(error.status || 500)
				.json({ error: true, message: error.message || 'Failes to create subscription' })
		}
	}
}

export default api
