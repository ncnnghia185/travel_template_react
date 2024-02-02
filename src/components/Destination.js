import "./Destination.css"
import desti1 from "../assets/desti1.jpg"
import desti2 from "../assets/desti2.jpg"
import desti3 from "../assets/desti3.jpg"
import desti4 from "../assets/desti4.jpg"
import desti5 from "../assets/desti5.jpg"
import desti6 from "../assets/desti6.jpg"
import DestiantionData from "./DestinationData"

const Destiantion = () =>{
	return (
		<div className="destination">
			<h1>Popular Destinations</h1>
			<p>Tours give your the opportunity to see a lot with in a time frame.</p>

			<DestiantionData 
			className = "first-des"
			heading = "Hanoi, VietNam"
			text = "Hà Nội là vùng miền đặc trưng với khí hậu nhiệt đới gió mùa,độ ẩm cao. Do đó, đây cũng là nơi biểu hiện bốn mùa Xuân, Hạ, Thu, Đông  rõ rệt nhất trong năm. Để có một chuyến đi trọn vẹn, bạn đừng quên đọc kỹ mục thời tiết và khí hậu trong các bài giới thiệu về Hà Nội. Mùa hè Hà Nội thường nóng và nhiều mưa kéo dài từ tháng 5 – tháng 9; mùa đông lạnh buốt và hanh khô, kéo dài từ tháng 11 – tháng 3 năm sau. Hai mùa có thời tiết đẹp và dễ chịu nhất tại thành phố này là mùa xuân và mùa thu vì lúc này khí hậu trở nên khá dễ chịu và mát mẻ"
			img1 = {desti1}
			img2 = {desti2}
			/>

			<DestiantionData 
			className = "first-des-reverse"
			heading = "DaLat, VietNam"
			text = "Do nằm ở độ cao 1.500m so với mực nước biển, xung quanh được bao bọc bởi núi rừng nên nhiệt độ tại Đà Lạt vô cùng lý tưởng. Nhiệt độ trung bình tại đây giao động khoảng 20 - 21 độ C và không dưới 10 độ C vào những ngày thời tiết trở lạnh. Khí hậu Đà Lạt chia thành 2 mùa rõ rệt là mùa mưa và mùa khô. "
			img1 = {desti3}
			img2 = {desti4}
			/>

			<DestiantionData 
			className = "first-des"
						heading = "Sapa, VietNam"
						text = "Hà Nội là vùng miền đặc trưng với khí hậu nhiệt đới gió mùa,độ ẩm cao. Do đó, đây cũng là nơi biểu hiện bốn mùa Xuân, Hạ, Thu, Đông  rõ rệt nhất trong năm. Để có một chuyến đi trọn vẹn, bạn đừng quên đọc kỹ mục thời tiết và khí hậu trong các bài giới thiệu về Hà Nội. Mùa hè Hà Nội thường nóng và nhiều mưa kéo dài từ tháng 5 – tháng 9; mùa đông lạnh buốt và hanh khô, kéo dài từ tháng 11 – tháng 3 năm sau. Hai mùa có thời tiết đẹp và dễ chịu nhất tại thành phố này là mùa xuân và mùa thu vì lúc này khí hậu trở nên khá dễ chịu và mát mẻ"
						img1 = {desti5}
						img2 = {desti6}
			/>
		</div>
	)
}

export default Destiantion