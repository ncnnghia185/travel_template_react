import "./NavbarStyle.css"
import { menuItems } from "./MenuItems"
import {Component} from "react"
import {Link} from "react-router-dom"

 class Navbar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			clicked : false
		}
	}

	handleClicked = () =>{
		this.setState({
			clicked : !this.state.clicked
		})
	}
	 render () {
		return (
			<nav className="NavbarItems">
				<h1 className="navbar-logo">Travel Aboard</h1>
				<div className="menu-icons" onClick={this.handleClicked}>
					<i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
					
				</div>
				<ul className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>

					{menuItems.map((item, index) => {
						return (
							<li key={index}>
								<Link className={item.cName} to={item.url}>
									<i class={item.icon}></i>{item.title}
								</Link>
							</li>
						)
					})}
					<button>Sign Up</button>
				</ul>
			</nav>
		)
	 }
 }


 export default Navbar