import React from 'react'
import { Link } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'

const SelectBike = () => {

	const { loginWithRedirect, isAuthenticated } = useAuth0()

	return (
		<div className='container mt-5'>
			<h5 className='mb-4'>Please select your bike</h5>
			<div className='row'>
				<div className='col-md-4'>
					{isAuthenticated? <Link to="/book"><img src="../images/image7.jpg" className="d-block w-100 select" alt="..."/></Link> : 
					<Link to="/select" onClick={()=>loginWithRedirect()}><img src="../images/image7.jpg" className="d-block w-100 select" alt="..."/></Link>}
					<h5 className='text-center mt-1'>City bikes</h5>
					<p className='text-center'>Photo of Nhi Dam in Unsplash</p>
				</div>
				<div className='col-md-4'>
					{isAuthenticated? <Link to="/book"><img src="../images/image5.jpg" className="d-block w-100 select" alt="..."/></Link> : 
					<Link to="/select" onClick={()=>loginWithRedirect()}><img src="../images/image5.jpg" className="d-block w-100 select" alt="..."/></Link>}
					<h5 className='text-center mt-1'>Mountain bikes</h5>
					<p className='text-center'>Photo of Alexandra Dech in Unsplash</p>
				</div>
				<div className='col-md-4'>
					{isAuthenticated? <Link to="/book"><img src="../images/image6.jpg" className="d-block w-100 select" alt="..."/></Link> : 
					<Link to="/select" onClick={()=>loginWithRedirect()}><img src="../images/image6.jpg" className="d-block w-100 select" alt="..."/></Link>}
					<h5 className='text-center mt-1'>Racing bikes</h5>
					<p className='text-center'>Photo of Jack Delulio in Unsplash</p>
				</div>
			</div>
		</div>
	)
}

export default SelectBike