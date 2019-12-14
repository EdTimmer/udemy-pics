import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const searchImages = images.map((image) => { 

        return <ImageCard key={image.id} image={image} />
        // console.log(image.urls.regular)

  })
  return (
    <div className="image-list">{searchImages}</div>
  )
  
}

export default ImageList;