import React from 'react'

const Home = () => {

	return (
		<div>
            <div className="container mt-4">
				<div className="row">
				<div className="col-md-2"></div>
		
				<div className="col-md-8">
					<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src="../images/image1.jpg" className="d-block w-100" alt="..."/>
								<div className="text">It`s a bike's world baby...</div>
								<p>Photo of Markus Spiske in Unsplash</p>
							</div>
							<div className="carousel-item">
								<img src="../images/image2.jpg" className="d-block w-100" alt="..."/>
								<div className="text">Enjoy the city</div>
								<p>Photo of Roman Koester in Unsplash</p>
							</div>
							<div className="carousel-item">
								<img src="../images/image3.jpg" className="d-block w-100" alt="..."/>
								<div className="text">Booking is easy and quick, just with a few clicks</div>
								<p>Photo of Sincerely Media in Unsplash</p>
							</div>
							<div className="carousel-item">
								<img src="../images/image4.jpg" className="d-block w-100" alt="..."/>
								<div className="text">All kind of bikes</div>
								<p>Photo of Viktor Bystrov in Unsplash</p>
							</div>
						</div>
						
					</div>
				</div>
				<div className="col-md-2">
		
				</div>
			</div>

			</div>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
		</div>
	)
}

export default Home