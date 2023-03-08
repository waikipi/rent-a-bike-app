import express, { urlencoded, json } from "express"
import Stripe from "stripe"
import cors from "cors"
import Order from '../src/models/Order.js'
import session from "express-session"
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import '../src/database.js'

const stripe = new Stripe("sk_test_51MLyLWJDKVz9SMmjBPON3Ul4WWUjhm44gLDd5ZHCYIjpVlIkLnCPYdXYkJg5YZsv2fYId2pBqEDPJSHk2S70LoBg00RLSQWP6x");

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = join(__dirname, '../build');
app.use(express.static(publicPath));
app.get('https://rent-a-bike-app.herokuapp.com/success', (req, res) => {
   res.sendFile(join(publicPath, '../build/index.html'));
});

const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "*" }));
app.use(urlencoded({extended: true}));
app.use(json());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
  }); 

app.use(
	session({
	  secret: "secret",
	  resave: true,
	  saveUninitialized: true
	})
  )

const MY_DOMAIN = 'https://rent-a-bike-app.herokuapp.com/success'

// receiving the order data for saving in database
app.post('/orders',  async (req,res)=>{
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
app.get('/orders/:user', async (req, res) =>{
	console.log(req.params)
	const data = await Order.find({user: req.params.user})
	res.json(data)
})

// route for stripe check out test
app.post('/create-checkout-session', async (req, res) => {
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

app.listen(PORT, () => {
  console.log("Server on port", PORT);
});

