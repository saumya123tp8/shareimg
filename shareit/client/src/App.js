
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

import './App.css';
import { useEffect, useState } from 'react';

import HelmetMetaData from './componenets/Helmet';
import Image from './componenets/image/Image'
import Button from './componenets/button/Button';
import Share from './componenets/share/Share';
import Navbar from './componenets/Navbar';
import { Box } from '@mui/material';
function App() {

  const [image,setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showShare, setShowShare] = useState(false)

  const baseUrl = "https://picsum.photos";

  //adding this variable to avoid updating the image twice as react renders components twice in dev mode.
  let imageShown = false;


//fetching image file from the api

const getImageWithGap = () => {
  setLoading(true);

  // Delay the execution of getImage by, for example, 1000 milliseconds (1 second)
  setTimeout(() => {
    getImage();
  }, 100);
};

  const getImage =()=>{
      fetch(`${baseUrl}/200/200`).then(data=>{
        // setLoading(true);
        setLoading(false);
        console.log("recived data: ",data);
        
        if(data && data.url && !imageShown){
          imageShown = true;
          setImage(data.url);
        }
      }).catch(err=>{
        console.log("Error while fetching image: ",err);
        
      })
    }
  

    //using useEffect to fetch image every time component rerenders.
    useEffect(()=>{
      setShow(false);
      // getImage();
      getImageWithGap();
      // eslint-disable-next-line
    },[])
  
  

   const  handleImageDisplay = ()=>{
      setShow(true);
   }

  const handleNext = ()=>{
    // getImage();
    getImageWithGap();
  }

  const handleShare = ()=>{
    setShowShare(!showShare);
  }


  return (
    <>
    <Navbar/>
           <Routes>
        <Route path="/" element={<>
          <div className='container'>
{/* To add meta data to show the preview on the respective websites */}
      <HelmetMetaData image={image} url={image}></HelmetMetaData>

  {/* <Box className="bx"> */}

      {loading ? (
        <img
                src="/gif_load.gif"
                alt="Loading..."
                style={{ width: "30%" }}
              />
            ) : image ? (
              <Image image={image} setShow={handleImageDisplay} show={show}/>
            ) : (
              <img
                src="/gif_load.gif"
                alt="Loading..."
                style={{ width: "40%" }}
                />
                )}


      {/* <Image image={image} setShow={handleImageDisplay} show={show}/> */}

      <div className='but_cont'>
        <Button title = "Next" clickHandler={handleNext}/>
        <Button title = "Share" clickHandler={handleShare}/>
      </div>
      
      <Share showShare={showShare} image={image}/>
                {/* </Box> */}
    </div>
        </>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    
    </>
  );
}

export default App;