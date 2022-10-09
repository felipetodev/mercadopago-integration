import api from '../../service/api'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
	req: NextApiRequest,
	res: NextApiResponse
) {
	const subscriptionResponse = await api.getSubscriptionLink(req, res)
	return subscriptionResponse
}
