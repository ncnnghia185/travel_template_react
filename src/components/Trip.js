import "./Trip.css"
import TripData from "./TripData"
import trip1 from "../assets/trip1.jpg"
import trip2 from "../assets/trip2.jpg"
import trip3 from "../assets/trip3.jpg"

function Trip(){
	return(
		<div className="trip">
			<h1>Recent Trip</h1>
			<p>You can discover unique destinations</p>
			<div className="tripcard">
				<TripData
				imgtrip= {trip1}
				heading = "Welcome to DaLat"
				text="Hà Nội là thủ đô, thành phố trực thuộc trung ương và là một trong hai đô thị loại đặc biệt của nước Cộng hòa xã hội chủ nghĩa Việt Nam."
				/>

				<TripData
					imgtrip={trip2}
					heading = "Welcome to Hanoi"
					text="Hà Nội là thủ đô, thành phố trực thuộc trung ương và là một trong hai đô thị loại đặc biệt của nước Cộng hòa xã hội chủ nghĩa Việt Nam."
				/>

				<TripData
					imgtrip={trip3}
					heading = "Welcome to Sapa"
					text="Hà Nội là thủ đô, thành phố trực thuộc trung ương và là một trong hai đô thị loại đặc biệt của nước Cộng hòa xã hội chủ nghĩa Việt Nam."
				/>

			</div>
		</div>
	)
}

export default Trip