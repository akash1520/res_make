const custStyle={
    color:"whitesmoke",
    textAlign:"left",
    marginLeft:"2%",
    marginRight:"2%"
}

const textStyle={color:"pink",textDecoration:"none",marginLeft:"2%"}


function Content(){
    return(
        <div style={custStyle}>
            <h3 contentEditable>Profile:</h3>
            <p contentEditable>
            Motivated with 1 year of learning experience in the field. Have made few projects using
            React, Bootstrap/MaterialUI, Nodejs, Expressjs, CSS, HTML and vanila JS. Also have made few
            game projects in c# and have learnt c++ for competitive coding.
            </p>
            <br/>
            <h3 contentEditable>Contacts</h3>   
            <p>
               <a contentEditable style={textStyle} href="https://linkedin.com/in/akashmParmar" target="_blank">LinkedIn</a>
               <a contentEditable style={textStyle} href="https://twitter.com/akashhuyaar" target="_blank">Twitter</a>
               <a contentEditable style={textStyle} href="https://youtube.com/@akashhuyaar" target="_blank">Youtube</a>

            </p>
        </div>
    )
    
}

export default Content;