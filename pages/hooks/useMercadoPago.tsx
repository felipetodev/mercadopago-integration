import { useState } from 'react'
import { cart, countryOpts, customer } from '../../mock'
import { PUBLIC_KEY } from '../../service/services'
import type { Payment } from '../../types'

const createCheckoutButton = (mp: any, preferenceId: string) => {
	// Initialize the checkout
	mp.checkout({
		preference: {
			id: preferenceId
		},
		autoOpen: true
	})
}

const useMercadoPago = ({ type }: { type: 'payment' | 'subscription' }) => {
	const [mercadoPago, setMercadoPago] = useState<any>(null)
	const [data, setData] = useState<Payment | any>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const fetchingType = type === 'payment'
		? '/api/payment'
		: '/api/subscription'

	const handleLoadScript = () => {
		console.log('MP Script Loaded')
		const mp = new window.MercadoPago(PUBLIC_KEY, {
			locale: countryOpts.locale
		})
		setMercadoPago(mp)
	}

	const handlePayment = async () => {
		setLoading(true)
		await fetch(fetchingType, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				payerEmail: customer.email,
				items: cart
			})
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setData(data)
				if (type === 'payment') {
					createCheckoutButton(mercadoPago, data.id)
				}
			})
			.catch(err => {
				console.warn(err)
				setData(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	return { data, loading, handlePayment, handleLoadScript }
}

export default useMercadoPago
