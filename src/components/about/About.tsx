import Marquee from "react-fast-marquee"
import "./about.css"
import image1 from "../about/i1.jpg"
import image2 from "../about/i2.jpg"
import image3 from "../about/i3.jpg"
function About(){
    return(
<div className="about" id="ABOUT">
    <h1 >Saylani Welfare Mass Training & Job Creation Program</h1>
    <Marquee speed={30}gradient={false} >
        <img src = {image1} height={300} width={500}/>
        <img src = {image2} height={300} width={500}/>     
        <img src = {image3} height={300} width={500}/>
    </Marquee>
    <p>Saylani Mass IT Training program is an institute who delivers Latest IT education (FREE OF COST) to the
         youth of country to make Pakistan technically strong and to promote Entrepreneurship and startup culture in Pakistan</p>
         <p>Saylani Mass Training Department is one of the Department which is running under Saylani
             Welfare Trust Management. This department is related to Saylani education Board.</p>
</div>
    )
}
export default About