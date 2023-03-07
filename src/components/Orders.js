import { useEffect, useState } from "react"
import { useAuth0 } from '@auth0/auth0-react'

export default function Orders() {
  const [orderData, setOrderData] = useState([]);
  const MY_DOMAIN = 'https://rent-a-bike-app.herokuapp.com/orders'
  const { user } = useAuth0()
  const biker = user.email
  console.log(biker)

  useEffect(() => {
    //fetch(`http://localhost:3001/orders/${biker}`)
	//fetch(`${MY_DOMAIN}/${biker}`)
	fetch(`/orders/${biker}`)
      .then((res) => res.json())
      .then((data) => {
		setOrderData(data)
		console.log(data)
      })
	  .catch((error) => {
		console.log(error.message);
	  })
  }, [biker]);

if(orderData.length>0){
	return (
		<div className="container p-3">
			<div className="row-fluid">
				<div className="card-group">
					{orderData.map((element) => {
							return (
								<div className="col-sm-6">
									<div className="card-columns-fluid">
										<div className="card m-3 p-2" id="order-card">
											<p><b>Booked at:</b> {element.bookedAt}</p>
											<table className="table table-light table-hover">
												<tbody>
													<tr>
														<th scope="row">Time</th>
														{element.time.map(el=><th>{el}</th>)}
													</tr>
													<tr>
														<th scope="row">Quantity</th>
														{element.quantity.map(el=><td>{el}</td>)}
													</tr>							
												</tbody>
											</table>
											<p>Total price (€) {element.totalPrice}</p>
										</div>											
									</div>
								</div>
							)
						})}							
					</div>
				</div>
			</div>   
		);
	}
	return (
		<div className="container mt-3">
			<h3>{`There are no orders yet, ${user.name}`}</h3>
		</div>
	)
}

