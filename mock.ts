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
  -d '{"site_id":"MLC"}'
*/

export const seller = {
	id: 1214167367,
	nickname: 'TEST0LFSL2FC',
	password: 'oGUCBbD50r',
	site_status: 'active',
	email: 'test_user_23488907@testuser.com'
}

export const customer = {
	id: 1214168093,
	nickname: 'TESTGZTXHHXY',
	password: 'hxxIFnCVSE',
	site_status: 'active',
	email: 'test_user_70331275@testuser.com'
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
	locale: 'es-CL',
	currency: 'CLP'
}
