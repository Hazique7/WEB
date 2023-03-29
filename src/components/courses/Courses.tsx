import React from "react"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import Marquee from "react-fast-marquee"
import "./courses.css"

import { HashLink as Link} from "react-router-hash-link"
import "./courses.css"
function COURSECard(props: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined , img: string | undefined }) {
  return(
    
<div className="card" >
  {/* <h1 >Addmission Open!</h1> */}
 { <Marquee style = {{color:"darkred"}} speed={78} pauseOnHover gradient={false} >Addmission Open!</Marquee> }
 <Marquee />
  <div className="card-body">
    
    <img  src={props.img} alt = ""/>
    <h2 className="card-title" >{props.title}</h2>
    
  </div>
  <Link to="#FORM"  onClick={showADDMISION} smooth><button  className="card-btn" >APPLY</button></Link>
</div>

  )
}
function showADDMISION(){
  document.getElementById("MEDIA")!.style.marginTop = "700px"
  document.getElementById("CONTACT")!.style.marginTop = "300px"
  document.getElementById("FORM")!.style.display = "inline-block"
  document.getElementById("ABOUT")!.style.marginTop = "430px"
}
export default COURSECard