import Whatsapp from "../whatsapp/Whatsapp";
import "./Share.css";
import { 
    FacebookShareButton, 
    TwitterShareButton, 
    WhatsappShareButton, 
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon
  } from 'react-share';

// share component to render different platform share buttons
const Share = (props)=>{
    const {showShare, image} = props;
    return (
        <>
            {showShare && <div className='share-box'>
                <FacebookShareButton url={image} >
                <FacebookIcon size={36} round={true} cursor="pointer" />
                </FacebookShareButton>
                <TwitterShareButton url={image}>
                <TwitterIcon size={36} round={true} cursor="pointer" /> 
                </TwitterShareButton>
                <Whatsapp image = {image}/>
                </div>
            }
        </>
    )
}

export default Share;