import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../services'

export default async function handler (
	req: NextApiRequest,
	res: NextApiResponse
) {
	const paymentResponse = await api.getPaymentLink(req, res)
	return paymentResponse
}
