import Navbar from "../components/Navbar"
import Banner from "../components/Banner";
import service from "../assets/service.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service () {
	return(
		<>
			 <Navbar />
				<Banner 
					cName="banner-mid"
					bannerImg = {service}
					title = "Your Journy Your Story"
					text = "Choose your favorites destination"
					buttonText = "Travel Plan"
					url= "/"
					btnClass = "show"
				/>
				<Trip/>
				<Footer/>
		</>
	)
}

export default Service;