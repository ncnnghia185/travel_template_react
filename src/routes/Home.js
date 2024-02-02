import Banner from "../components/Banner";
import Navbar from "../components/Navbar"
import home from "../assets/home.jpg"
import Destiantion from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home () {
	return(
		<>
		 	<Navbar />
			<Banner 
				cName="banner"
				bannerImg = {home}
				title = "Your Journy Your Story"
				text = "Choose your favorites destination"
				buttonText = "Travel Plan"
				url= "/"
				btnClass = "show"
			/>
			<Destiantion/>
			<Trip/>
			<Footer/>
		</>
	)
}

export default Home;