import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import BookingSchedule from './components/BookingSchedule.js'
import About from './components/About.js'
import SuccesfulMessage from './components/SuccesfulMessage.js'
import Orders from './components/Orders.js'
import SelectBike from './components/SelectBike.js'


const App = () => {

	return (
		<div>
			<Router>
			<NavBar/>
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/select" element={<SelectBike/>}></Route>
					<Route path="/about" element={<About/>}></Route>
					<Route path="/book" element={<BookingSchedule/>}></Route>
					<Route path="/orders" element={<Orders/>}></Route>
					<Route path="/success?success=true" element={<SuccesfulMessage/>}></Route>
				</Routes>
			</Router>
		</div>
	)
}


export default App


