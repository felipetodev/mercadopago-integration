/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useState } from 'react'
import useMercadoPago from '../hooks/useMercadoPago'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import QRCodeGenerator from '../components/QRCodeGenerator'

const Home: NextPage = () => {
	const [type, setType] = useState<'payment' | 'subscription'>('payment')
	const { data, handlePayment, handleLoadScript, loading } = useMercadoPago({ type })
	return (
		<>
			{/* We load MP sdk */}
			<Script
				id='mercadopago-js'
				src='https://sdk.mercadopago.com/js/v2'
				onLoad={handleLoadScript}
			/>
			<div className={styles.container}>
				<main className={styles.main}>
					<h1 className={styles.title}>
						MercadoPago
					</h1>
					<h2>(Checkout Pro Example)</h2>
					<h3>
						<pre>
							{JSON.stringify({
								'api/payment': 'generates a payment link',
								'api/subscription': 'generates a subscription link'
							}, null, 2)}
						</pre>
					</h3>
					<div style={{ padding: '20px 0px' }}>
						<label>
							<input
								type='radio'
								name='fetchtype'
								value='payment'
								defaultChecked
								onChange={e => setType(e.target.value as 'payment')}
							/>
							payment
						</label>
						<label>
							<input
								type='radio'
								name='fetchtype'
								value='subscription'
								onChange={e => setType(e.target.value as 'subscription')}
							/>
							subscription
						</label>
					</div>
					<button id='button-checkout' onClick={handlePayment}>
						<img height='30' src='/me-pago.webp' alt='mercadopago' />
					</button>
					{loading && <span className={styles.text}>Cargando...</span>}
					{data?.error && (
						<pre className={styles.error}>{JSON.stringify(data, null, 2)}</pre>
					)}
					{data?.init_point && (
						<>
							<div className={styles.success}>
								<span>Pagar:{' '}</span>
								<a href={data.init_point} title='payment link' target='_blank' rel='noreferrer'>
									{data.init_point}
								</a>
							</div>
							<small>
								👉 Abre el link en modo incógnito y continua la compra con un test user 👈
							</small>
							{type === 'payment' && (
								<QRCodeGenerator url={data.init_point} />
							)}
						</>
					)}
				</main>
				<a
					className={styles.owner}
					href='https://github.com/felipetodev'
					target='_blank'
					rel='noreferrer'
				>
					@felipetodev
				</a>
			</div>
		</>
	)
}

export default Home
