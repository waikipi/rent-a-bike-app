import { Component } from 'react'
import Bike from './Bike.js'

const styles = {
	bikes: {
		display: 'flex',
    	flexDirection: 'column',
		marginTop: '25px'
	}
}
class Bikes extends Component{
	render(){
		const { bikes, addToCart, showCart, updateStock, isButtonVisible, isBikeInCart, runOutStock, totalPrice } = this.props
		return(
			<div style={styles.bikes}>
				{bikes.map(bike => 
					<Bike 
					addToCart={addToCart}
					key={bike.time}
					bike={bike}
					showCart={showCart}
					updateStock={updateStock}
					isButtonVisible={isButtonVisible}
					isBikeInCart={isBikeInCart}
					runOutStock={runOutStock}
					totalPrice={totalPrice}
					/>
				)}
			</div>
		)
	}
}

export default Bikes