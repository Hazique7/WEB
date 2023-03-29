// import { Link } from 'react-router-dom'

import React from 'react'
import { HashLink as Link} from 'react-router-hash-link'
 import './nav-bar.css'
function Nav(){
    return(
        <div className="nav" id='HOME'>
          <nav className="nav">
              <ul>
                  <li><h1 className='saylani' style={{display:"flex"}}>SAYLANI</h1></li></ul>
                  <ul>
                 <li> <Link to="#HOME" smooth>HOME</Link></li>
                 <li><Link to="#ABOUT" smooth>ABOUT</Link></li> 
                 <li><Link to="#MEDIA" smooth>MEDIA</Link></li> 
                 <li><Link to="#CONTACT" smooth>CONTACT</Link></li> 
                 <li><Link to= "#FORM" smooth onClick={showADDMISION}>ADDMISSION</Link></li>  
              </ul>
          </nav>
        </div>
    )
}

function showADDMISION(){
    document.getElementById("MEDIA")!.style.marginTop = "700px"
    document.getElementById("CONTACT")!.style.marginTop = "300px"
    document.getElementById("FORM")!.style.display = "inline-block"
    document.getElementById("ABOUT")!.style.marginTop = "430px"
    

    
}

export default Nav