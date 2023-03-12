import CartBike from './CartBike.js'
import '../App.css'
import axios from "axios"
import { useAuth0 } from '@auth0/auth0-react'

const styles = {
	cartBox: {
		display: 'flex',
		backgroundColor: '#FCFCFC',
		position:'absolute',
		boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
		borderRadius: '5px',
		width: '300px',
		left: 900,
		top: 90,
		paddingTop: 25
	},
	ul: {
		listStyleType: 'none'
	}
}


const CartBox = ({cart, deleteBike, isBikeInCart, totalPrice}) => {

	const { user } = useAuth0()
	
		const handleSubmit = async (e) => {
			const biker = user.email
			try{
				const {data} = await axios.post('/orders',
			{	
				user:biker,
				cart:cart,
				totalPrice: totalPrice
			},
			)
			console.log(data)
			} catch(error){
				console.log(error)
			}
		}
	
	return (
		<div style={styles.cartBox}>
			{<ul style={styles.ul}>
				{cart.map(cartBike => 
					<li key={cartBike.time}><CartBike 
					cartBike={cartBike}
					deleteBike={deleteBike}
					isBikeInCart={isBikeInCart}
					/></li>
				)}
				<li>{`Total: ${totalPrice}€`}</li>
				<button type="button" class="btn btn-outline-primary btn-sm" 
				onClick={handleSubmit} data-bs-toggle="modal" data-bs-target="#exampleModal">Confirm</button>

				<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Booking confirmed!!</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<p>The ticket of your booking is already available on History section. But first,
									I encourage you to finish the payment simulation by clicking on the "Pay" button.
									Please use the credit card number <b>4242 4242 4242 4242</b> to go through 
									successfully with the process. The rest of the fields can be filled in as you prefer. 
									Thank you!!
								</p>
							</div>
							<div class="modal-footer">
								<form action="/create-checkout-session" method="POST">
									<button type="button" class="btn btn-secondary m-2" data-bs-dismiss="modal">Close</button>
									<button type="submit" class="btn btn-primary">Pay</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</ul>}
		</div>
	)
	
}

export default CartBox