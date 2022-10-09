/* 👉 Generate 2 MP users (one for seller and one for buyer) */

/*
  curl -X POST \
  -H "Content-Type: application/json" \
  -H 'Authorization: Bearer TEST_ACCESS_TOKEN' \
  "https://api.mercadopago.com/users/test_user" \
  -d '{"site_id":"MLA"}'
*/

export const seller = {
	id: 1213559435,
	nickname: 'TESTTG8SXYHC',
	password: 'LniwAxjN7p',
	site_status: 'active',
	email: 'test_user_53872121@testuser.com'
}

export const customer = {
	id: 1213560756,
	nickname: 'TESTO2IRDXVO',
	password: '9CKB9tUj1q',
	site_status: 'active',
	email: 'test_user_3735590@testuser.com'
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
