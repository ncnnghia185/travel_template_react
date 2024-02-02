import "./Footer.css"

const Footer = () =>{
	return(
		<div className="footer">
			<div className="top">
				<div>
					<h1>Travel Around</h1>
					<p>Choose your favorite destination</p>
				</div>
				<div>
					<a href="/">
						<i className="fa-brands fa-facebook-square"></i>
					</a>

					<a href="/">
						<i className="fa-brands fa-instagram-square"></i>
					</a>

					<a href="/">
						<i className="fa-brands fa-behance-square"></i>
					</a>

					<a href="/">
						<i className="fa-brands fa-twitter-square"></i>
					</a>
				</div>
			</div>
			<div className="bottom">
				<div>
					<h4>Project</h4>
					<a href="/"> Changelog</a>
					<a href="/"> Status</a>
					<a href="/"> Lisence</a>
					<a href="/"> Versions</a>
				</div>

				<div>
					<h4>Commnity</h4>
					<a href="/"> Github</a>
					<a href="/"> Facbook</a>
					<a href="/"> Projects</a>
					<a href="/"> Twitter</a>
				</div>

				<div>
					<h4>Help</h4>
					<a href="/"> Support</a>
					<a href="/"> Trouble</a>
					<a href="/"> Contact Us</a>
					
				</div>

				<div>
					<h4>Others</h4>
					<a href="/"> Teams of service</a>
					<a href="/"> Privacy</a>
					<a href="/"> Policy</a>
					<a href="/"> Lisence</a>
				</div>
			</div>
			
		</div>
	)
}

export default Footer