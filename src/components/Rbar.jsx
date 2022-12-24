import Card from "./Card";
import "./Rbar.css"
import sources from "../sources.json"

function Rbar(){
    return(
       
           <div className="container-fluid Rbar print"> 
                <div className="projects container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
                        {sources.map(({id,imgsrc,title})=>(
                            <Card key={id} imageSrc={imgsrc} title={title}/>
                        ))}
                </div>
                </div>
            </div>
        
    )
}

export default Rbar; 