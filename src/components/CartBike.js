import { Component } from "react"

const styles = {
	cartBike: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		position: 'absolute',
		left: 190
	},
	quantity: {
		position: 'absolute',
		left: 100,
		color: 'orange'
	},
	price: {
		position: 'absolute',
		left: 130
	}
}

class CartBike extends Component {
	render(){
		const { deleteBike, cartBike } = this.props
		
		return(
			<div style={styles.container}>
				{cartBike.isBikeInCart?<div style={styles.cartBike}><h4>{cartBike.time}</h4>
				<h3 style={styles.quantity}>{cartBike.quantity}</h3>
				<h4 style={styles.price}>{cartBike.price}</h4>
				<button className='btn btn-danger btn-sm' style={styles.button} 
				onClick={()=>deleteBike(cartBike)}>Delete</button></div>
				: null}
			</div>
		)
	}
}

export default CartBike