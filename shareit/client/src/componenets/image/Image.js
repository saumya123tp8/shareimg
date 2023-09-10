
import "./Image.css";

// image component to render image.
const Image = (props)=>{

    const {show, image, setShow} = props
   
    return (
        <>
        <div className='box'>
            <img 
            onLoad={setShow}
            src={image} 
            alt="random"
            width="100%" 
            height="100%" 
            style={{display: show ? "block" : "none",}}/>
        </div>
        </>
    )
}

export default Image;