import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

// component to add meta data in order to show the preview in respective platforms.

const  HelmetMetaData = (props) =>{
   let currentUrl = props.url !==undefined ? props.url:"";
   let quote = props.quote !== undefined ? props.quote : "";
   let title = props.title !== undefined ? props.title : "image";
   let image = props.image !== undefined ? props.image : "https://fastly.picsum.photos/id/48/200/200.jpg?hmac=3FKJwSlm1FM1GD916vZX2Z3HUjHsUXvQM3rYWYXsQvc";
   let description = props.description !== undefined ? props.description  : "Image shared from random image generator!";
   let hashtag = props.hashtag !== undefined ? props.hashtag : "#randomimage";
return (
   <HelmetProvider>
      <Helmet>
         <title>{title}</title>
         <meta charset="utf-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta property="type" content="website" />
         <meta property="url" content={currentUrl} />
         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
         <meta name="msapplication-TileColor" content="#ffffff" />
         <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
         <meta name="theme-color" content="#ffffff" />
         <meta name="robots" content="noodp" />
         <meta property="title" content={title} />
         <meta property="quote" content={quote} />
         <meta name="description" content={description} />
         <meta property="image" content={image} />
         <meta property="og:locale" content="en_US" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content={title} />
         <meta property="og:quote" content={quote} />
         <meta property="og:hashtag" content={hashtag} />
         <meta property="og:image" content={image} />
         <meta content="image/*" property="og:image:type" />
         <meta property="og:url" content={currentUrl} />
         <meta property="og:site_name" content="Random image" />
         <meta property="og:description" content={description} />    
      </Helmet>
   </HelmetProvider>
);
}

export default HelmetMetaData;