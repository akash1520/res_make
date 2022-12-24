import Content from "./Content";
import Name from "./Name";
import './Lbar.css'
import PicUploader from "./PicUploader";

function Lbar(){
    return(
        
            <div className="container-fluid Lbar print">
            <PicUploader/>
            <Name/>
            <Content/>    
            </div>
       
    )
}

export default Lbar; 


