import Navbar from "../components/Navbar"
import Banner from "../components/Banner";
import about from "../assets/about.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/Aboutus";
function About () {
	return(
		<>
			 <Navbar />
			 <Banner 
				cName="banner-mid"
				bannerImg = {about}
				title = "About Our Story"
		
				btnClass = "hide"
			/>
			<AboutUs/>
			<Footer/>
		</>
	)
}

export default About;