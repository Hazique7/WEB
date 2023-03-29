import {Carousel} from 'antd'
import "./slider.css"
import image1 from "../slider/s1.jpg"
import image2 from "../slider/s2.jpg"
import image3 from "../slider/s3.jpg"
function ISlider(){
    return(
<div style={{marginTop:90, width : "1400px",height:"700px" }}  >
    
<Carousel autoplay>
    
    <div>
        <img src={image1} alt="f"  width="100%" height="700"/>
    {/* <img {image1} width="100%" height="700" alt='hfgh'/> */}
        </div>
    <div>
    <img src={image2} alt="f"  width="100%" height="700"/>
        </div>
    <div>
    <img src={image3} alt="f"  width="100%" height="700"/>
        </div>
     
</Carousel>
</div>
    )
}
export default ISlider
