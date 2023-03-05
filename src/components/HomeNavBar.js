import React from 'react'
import { Link } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'


const HomeNavBar = ({isAboutUpdated, isSelectBikeUpdated}) => {

	const {loginWithRedirect, isAuthenticated, logout} = useAuth0()

	return (
		<div>
			<div className='container'>
				<ul className="nav mt-3">
					<li className="nav-item">
						<Link to="/select" className="nav-link" onClick={isSelectBikeUpdated}>Book</Link>
					</li>
					<li class="nav-item">
						<Link to="/about" className="nav-link" onClick={isAboutUpdated}>About me</Link>
					</li>
					{isAuthenticated?<li className="nav-item" id="logout">
						<Link to="/register" className="nav-link" onClick={()=>logout()}>Logout</Link>
					</li> : <li className="nav-item" id="login">
						<Link to="/login" className="nav-link" onClick={()=>loginWithRedirect()}>Login</Link>
					</li>}
					{isAuthenticated?<li className="nav-item" id="orders">
						<Link to="/orders" className="nav-link">History</Link>
					</li> : <li className="nav-item" id="login">
						<Link to="/login" className="nav-link" onClick={()=>loginWithRedirect()}>Login</Link>
					</li>}
				</ul>
			</div>
		</div>
	)
}

export default HomeNavBar