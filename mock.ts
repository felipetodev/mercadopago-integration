/*
	👉 Generate 2 MP users (one for seller and one for buyer)
		replace your country code curl command below

	MPE: Mercado Libre Perú 🇵🇪
	MLU: Mercado Libre Uruguay 🇺🇾
	MLA: Mercado Libre Argentina 🇦🇷
	MLC: Mercado Libre Chile 🇨🇱
	MCO: Mercado Libre Colombia 🇨🇴
	MLB: Mercado Libre Brasil 🇧🇷
	MLM: Mercado Libre México 🇲🇽
*/

/*
  curl -X POST \
  -H "Content-Type: application/json" \
  -H 'Authorization: Bearer TEST_ACCESS_TOKEN' \
  "https://api.mercadopago.com/users/test_user" \
  -d '{"site_id":"MLM"}'
*/

export const seller = {
	id: 1214402080,
	nickname: 'TEST1XBKZ5RS',
	password: 'ye2hcBRuh1',
	site_status: 'active',
	email: 'test_user_72008086@testuser.com'
}

export const customer = {
	id: 1214401170,
	nickname: 'TESTE3QU7FBP',
	password: 'tj6AJCdqLU',
	site_status: 'active',
	email: 'test_user_81030439@testuser.com'
}

export const cart = [
	{
		title: 'Colchón Matrimonial',
		description: 'Colchón matrimonial Luuna, el mejor calificado de México.',
		picture_url: 'http://www.myapp.com/myimage.jpg',
		category_id: 'MX-LUU-COL-ORG-MATRI',
		quantity: 1,
		unit_price: 10
	}
]

export const countryOpts = {
	locale: 'es-MX',
	currency: 'MXN'
}

export const domain = 'https://mercadopago-integration.vercel.app'
