import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Success: NextPage = () => {
	const [response, setResponse] = useState<any | null>(null)

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search)
		const params = Object.fromEntries(urlParams)
		setResponse(params)
	}, [])

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
          Pago {response?.collection_status?.toUpperCase()}
				</h1>
				<h3>
					<pre>
						{JSON.stringify(response, null, 2)}
					</pre>
				</h3>
				<small style={{ fontWeight: 'bold' }}>
					<Link href='/'>
						Home
					</Link>
				</small>
			</main>
		</div>
	)
}

export default Success
