import React from "react"
import { Link } from "react-router-dom"

function SuccesfulMessage(){
	return(
		<div>
			<div className="container mt-3">
				<div className="card">
					<div className="card-body">
						<h3>Thank you!! Your booking is confirmed. Happy biking!!</h3>
						<p>Go to <Link to="/" className="success">Home</Link> page or to <Link to="/book" className="success">Book</Link> again</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SuccesfulMessage