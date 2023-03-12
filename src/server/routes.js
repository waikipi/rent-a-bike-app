import { Router } from "express"
import Order from '../models/Order.js'
import '../database.js'
import Stripe from "stripe"

const router = Router();

const MY_DOMAIN = 'https://rent-a-bike-app.herokuapp.com/success'
const stripe = new Stripe("sk_test_51MLyLWJDKVz9SMmjBPON3Ul4WWUjhm44gLDd5ZHCYIjpVlIkLnCPYdXYkJg5YZsv2fYId2pBqEDPJSHk2S70LoBg00RLSQWP6x");

// receiving the order data for saving in database
router.post('/orders',  async (req,res)=>{
	const {user, totalPrice, cart} = req.body
	let time = []
	let quantity = []
	let date = new Date
	let bookedAt = date.toISOString()
	cart.map(element => {
		time.push(element.time)
		quantity.push(element.quantity)
	})
	
	const newOrder = new Order({
		user, time, quantity, totalPrice, bookedAt
	})
	console.log(newOrder)
	await newOrder.save()
	res.json({message: 'ok saved'})
})

// to retrieve the data from the database for showing in history
router.get('/orders/:user', async (req, res) =>{
	console.log(req.params)
	const data = await Order.find({user: req.params.user})
	res.json(data)
})

// route for stripe check out test
router.post('/create-checkout-session', async (req, res) => {
	const session = await stripe.checkout.sessions.create({
	  line_items: [
		{
		  price_data: {
			currency: 'usd',
			product_data: {
			  name: 'Please use the test credit card number 4242 4242 4242 4242 to go through successfully with the payment. You can use any expiry date and CVC number.',
			},
			unit_amount: 1000,
		  },
		  quantity: 1,
		},
	  ],
	  mode: 'payment',
	  success_url: `${MY_DOMAIN}?success=true`,
	  cancel_url: `${MY_DOMAIN}?canceled=true`,
	});
  
	res.redirect(303, session.url);
  })

export default router