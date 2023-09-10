
import "./Button.css"
//button component to return our buttons from one place.
const Button = (props)=>{
    const {title, clickHandler} = props;
    return(
        <>
            <button className='but'  onClick={clickHandler}>{title}</button>
        </>
    )
}

export default Button