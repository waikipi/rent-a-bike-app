import React from 'react'
import { Link } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'

const SelectBikeNavBar = ({ isAboutUpdated, useHomeNavBar }) => {

	const {loginWithRedirect, isAuthenticated, logout} = useAuth0()

	return (
		<div className='container'>
				<ul className="nav mt-3">
					<li className="nav-item">
						<Link to="/" className="nav-link" onClick={useHomeNavBar}>Home</Link>
					</li>
					<li class="nav-item">
						<Link to="/about" className="nav-link" onClick={isAboutUpdated}>About me</Link>
					</li>
					{isAuthenticated?<li class="nav-item" id="logout">
						<Link to="/register" className="nav-link" onClick={()=>logout()}>Logout</Link>
					</li> : <li class="nav-item" id="login">
						<Link to="/login" className="nav-link" onClick={()=>loginWithRedirect()}>Login</Link>
					</li>}
					{isAuthenticated?<li class="nav-item" id="orders">
						<Link to="/orders" className="nav-link">History</Link>
					</li> : <li class="nav-item" id="login">
						<Link to="/login" className="nav-link" onClick={()=>loginWithRedirect()}>Login</Link>
					</li>}
				</ul>
			</div>
	)
}

export default SelectBikeNavBar