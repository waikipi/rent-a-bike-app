import Bikes from './Bikes.js'
import { Component } from 'react'
import CartBox from './CartBox.js'

class BookingSchedule extends Component{

	state = {
		bikes: [
		{time: '09:00', stock: 8, price: '10€', isButtonVisible: true, isBikeInCart: true},
		{time: '10:00', stock: 8, price: '10€', isButtonVisible: true, isBikeInCart: true},
		{time: '11:00', stock: 8, price: '10€', isButtonVisible: true, isBikeInCart: true},
		{time: '12:00', stock: 8, price: '10€', isButtonVisible: true, isBikeInCart: true},
		{time: '13:00', stock: 8, price: '10€', isButtonVisible: true, isBikeInCart: true},
		{time: '14:00', stock: 8, price: '10€', isButtonVisible: true, isBikeInCart: true},
		{time: '15:00', stock: 8, price: '10€', isButtonVisible: true, isBikeInCart: true},
		{time: '16:00', stock: 8, price: '10€', isButtonVisible: true, isBikeInCart: true}],
		cart: [],
		isCartVisible: false,
		totalPrice: 0,
		quantity: 0
	}

	// giving some style when the stock is run out
	runOutStock = (bike) => {
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
			}
		}
		if(bike.stock === 0){
			return {...styles.bike, border: 'solid 3px red'}
		}
		return ({...styles.bike})
	}

	// adding a bike to the cart
	addToCart = (bike) => {
		const {cart, totalPrice, quantity} = this.state
		
		if(bike.stock <= 1){
			bike.isButtonVisible = false
		}
		
		if(cart.find(element => element.time === bike.time)){
			if(bike.stock > 0){
				const newCart = cart.map(element => element.time === bike.time ? 
					({...element, quantity: element.quantity + 1, isBikeInCart:true}) : element)
				return this.setState({cart: newCart, totalPrice: totalPrice + 10, quantity: quantity + 1}) 
			}		
		}

		return this.setState({cart: this.state.cart.concat({...bike, stock: bike.stock - 1, quantity: 1}), 
		totalPrice: totalPrice + 10, quantity: quantity + 1})
	}

	// updating the stock sfter adding a bike to the cart
	updateStock = (bike) => {
		const {bikes} = this.state
		if(bikes.find(element => element.time === bike.time)){
			const newStock = bikes.map(element => element.time === bike.time ? 
				({...element, stock: element.stock - 1}) : element)
			return this.setState({bikes: newStock}) 
		}
	}

	// to show the cart when a bike is added
	showCart = () => this.setState({isCartVisible:true})	

	// to hide the cart after deleting all bikes
	hideFormAndCart = () => this.setState({isCartVisible:false})	

	// to delete a bike from the cart and to update all the data
	deleteBike = (cartBike) => {
		let {cart, totalPrice, quantity} = this.state
		
		const indexBike = cart.indexOf(cartBike)
		cart.splice(indexBike, 1)
		
		const {bikes} = this.state
		if(bikes.find(element => element.time === cartBike.time)){
			const replaceStock = bikes.map(element => element.time === cartBike.time ? 
				({...element, stock: 8, isButtonVisible: true}) : element)
				this.setState({bikes: replaceStock, totalPrice: totalPrice - (10 * cartBike.quantity), 
					quantity: quantity - cartBike.quantity}) 		
		}
		cartBike.quantity = 0;
		if(!cart.length) this.setState({isCartVisible: false})	
	}

	render(){
		const {isCartVisible, totalPrice, quantity} = this.state
		const {cartBike} = this.props
		return(
			<div>
				{isCartVisible?<CartBox 
				cart={this.state.cart}
				showCart={this.showCart}
				isCartVisible={this.state.isCartVisible}
				deleteBike={this.deleteBike}
				isBikeInCart={this.state.isBikeInCart}
				cartBike={cartBike}
				hideFormAndCart={this.hideFormAndCart}
				totalPrice={totalPrice}
				quantity={quantity}/>:null}
				
				<Bikes
				addToCart = {this.addToCart}
				showCart = {this.showCart}
				bikes = {this.state.bikes}
				updateStock = {this.updateStock}
				isButtonVisible = {this.state.isButtonVisible}
				isBikeInCart = {this.state.isBikeInCart}
				runOutStock = {this.runOutStock}
				totalPrice= {totalPrice}
				/>
			</div>
		)
	}
}

export default BookingSchedule


