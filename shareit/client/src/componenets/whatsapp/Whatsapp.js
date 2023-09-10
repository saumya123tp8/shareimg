import { useEffect } from "react";
import { WhatsappIcon, WhatsappShareButton } from "react-share";


  const Whatsapp = (props)=>{
    const {image} = props;
    const handleOnSubmit= async()=> {
        const response = await fetch(image);
        // here image is url/location of image
        const blob = await response.blob();
        // const blob = image;
        const file = new File([blob], 'share.jpg', {type:blob.type?blob.type:"image/jpeg"});
        console.log("file==>",file);
        if(navigator.share) {
          await navigator.share({
            title: "image",
            text: "random image",
            url: image,
            files: [file]     
          })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error in sharing', error));
        }else {
          console.log(`system does not support sharing files.`);
        }
      }
      
      useEffect(()=> {
        if (navigator.share === undefined) {
          if (window.location.protocol === 'http:') {
            window.location.replace(window.location.href.replace(/^http:/, 'https:'));
          } 
        }
      }, []);
      return(
        <>
            <button  style={{background:"#fff", border:"none", borderRadius:"35%", width:"90%"}}onClick={handleOnSubmit}>
                <WhatsappIcon size={36} round={true} cursor="pointer" />
            </button>
        </>
      )

  }

  export default Whatsapp;