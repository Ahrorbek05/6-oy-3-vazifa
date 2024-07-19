import React, { useState } from 'react';
import './index.css';

const images = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/id/232/200/300',
  'https://picsum.photos/id/277/200/300',
  'https://picsum.photos/id/239/200/300',
  'https://picsum.photos/id/237/200/300'
];

const Gallery = () => {
  const [BigImage, setImage] = useState(null);

  const openImage = (image) => {
    setImage(image);
  };

  const closeImage = () => {
    setImage(null);
  };

  return (
    <div className="gallery-container">
      <h1>Image Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openImage(image)}
            className="thumbnail"
          />
        ))}
      </div>
      {BigImage && (
        <div className="lightbox" onClick={closeImage}>
          <img src={BigImage} alt="Selected" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
