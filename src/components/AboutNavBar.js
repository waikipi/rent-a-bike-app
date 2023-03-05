import React from 'react'
import { Link } from "react-router-dom"


const AboutNavBar = ({isSelectBikeUpdated, useHomeNavBar}) => {
	return (
		<div>
			<div className='container'>
				<ul class="nav mt-3">
					<li class="nav-item">
						<Link to="/" className="nav-link" onClick={useHomeNavBar}>Home</Link>
					</li>
					<li class="nav-item">
						<Link to="/select" className="nav-link" onClick={isSelectBikeUpdated}>Book</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}



export default AboutNavBar