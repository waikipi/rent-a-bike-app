import { Component } from "react";

const styles = {
	bike: {
		position: 'relative',
		backgroundColor: '#FCFCFC',
		border: 'solid 1px grey',
		marginTop: 10,
		marginLeft: 50,
		boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
		borderRadius: '5px',
		width: '600px',
		height: '50px',
		display: 'flex',
		alignItems: 'center'
	},
	stock: {
		color: 'green',
		position: 'absolute',
		right: 90
	},
	time: {
		position: 'absolute',
		left: 20
	},
	price: {
		position: 'absolute',
		right: 125
	},
	button: {
		position: 'absolute',
		right: 20,
		cursor: 'pointer'
	}
	
}

class Bike extends Component {

	render(){
		const { bike, addToCart, showCart, updateStock, runOutStock } = this.props
		
		return(
			<div style={runOutStock(bike)}>
				<h3 style={styles.time}>{bike.time}</h3>
				<div style={styles.stock}><h4>{bike.stock}</h4></div>
				
				<h4 style={styles.price}>{bike.price}</h4>
				{bike.isButtonVisible?
				<button type="button" className='btn btn-outline-primary btn-sm' style={styles.button} 
				onClick={()=>{addToCart(bike); showCart(); updateStock(bike)}}>
					Book
				</button> : null}
				
			</div>	
		)
	}
}

export default Bike