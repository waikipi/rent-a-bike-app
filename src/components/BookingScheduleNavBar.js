import React from 'react'
import { Link } from "react-router-dom"


const BookingScheduleNavBar = ({isAboutUpdated, useHomeNavBar}) => {

	return(
		<div>
			<div className='container'>
				<ul class="nav mt-3">
					<li class="nav-item">
						<Link to="/" className="nav-link" onClick={useHomeNavBar}>Home</Link>
					</li>
					<li class="nav-item">
						<Link to="/about" className="nav-link" onClick={isAboutUpdated}>About me</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}



export default BookingScheduleNavBar