import Navbar from "../components/Navbar"
import Banner from "../components/Banner";
import contact from "../assets/contact.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact () {
	return(
		<>
			 <Navbar />
			 <Banner 
				cName="banner-mid"
				bannerImg = {contact}
				title = "Your Journy Your Story"
				text = "Choose your favorites destination"
				buttonText = "Travel Plan"
				url= "/"
				btnClass = "show"
			/>
			<ContactForm/>
			<Footer/>
		</>
	)
}

export default Contact;