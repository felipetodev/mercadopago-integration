/* eslint-disable @next/next/no-img-element */
import React from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator: React.FC<{ url: string }> = ({ url }) => (
	<div style={{ marginTop: '20px' }}>
		<div style={{ height: 'auto', margin: '0 auto', maxWidth: 140, width: '100%' }}>
			<QRCode
				size={256}
				style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
				value={url}
				viewBox={'0 0 256 256'}
			/>
		</div>
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<h3 style={{ marginRight: '10px' }}>Escanea y paga con</h3>
			<img height='28' src='/me-pago.webp' alt='mercadopago' />
		</div>
	</div>
)

export default QRCodeGenerator
