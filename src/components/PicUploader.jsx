import React from "react";

function PicUploader(){
    const uploadedImage = React.useRef(null)

    function handleImageUpload(e){
        console.log(e.target.result)
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
    }
    }

    return(
        <div>  
            <label>
            <input hidden type="file" accept="image/*" onChange={handleImageUpload}/>
            <img ref={uploadedImage} className="circular-image"/>
            </label>
            
        </div>
    )
}

export default PicUploader;