
import "./Destination.css"
import { Component } from "react"
		
		class DestiantionData extends Component {
			render() {
				return(
					<div className="trip-card">
						<div className="trip-image">
							<img alt="tripimage" src= {this.props.imgtrip}/>
						</div>
						<h4>{this.props.heading}</h4>
						<p>{this.props.text}</p>
					</div> 
				)
			}
		}
		
		export default DestiantionData