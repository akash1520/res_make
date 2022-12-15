import Content from "./Content";
import "./Lbar.css"
import Name from "./Name";
import PicUploader from "./PicUploader";

function Lbar(){
    return(
        
            <div className="Lbar">
            <PicUploader/>
            <Name/>
            <Content/>    
            </div>
       
    )
}

export default Lbar; 


