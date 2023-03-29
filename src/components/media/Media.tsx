import ReactPlayer from "react-player";
import "./media.css"
function Media(){

    return(
<div className="media-container" id="MEDIA">
    <h1>MEDIA</h1>
    <div className="media" style={{display:"inline-block",padding:4,marginTop:30,width:340,height:160}}><ReactPlayer url={"https://fb.watch/hKHCJyIXSt/"} height={160} width={340}/></div>
    <div  className="media" style={{display:"inline-block",padding:4,marginTop:30,width:340,height:160}}><ReactPlayer url={"https://fb.watch/hKHNmTq1Je/"}height={160} width={340} /></div>
    <div className="media"  style={{display:"inline-block",padding:4,marginTop:30,width:340,height:160}}><ReactPlayer url={"https://fb.watch/hKHQvjiIGY/"}height={160} width={340} /></div>

</div>
    )
}
export default Media;
