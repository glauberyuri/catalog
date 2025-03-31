
import React, { useState } from 'react';


const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="bg-white">
      <div className="w-full h-72 md:h-96 overflow-hidden">
        <img 
          src={images[selectedImage]} 
          alt="Product" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`min-w-16 h-16 rounded-md overflow-hidden border-2 ${
                selectedImage === index ? 'border-primary' : 'border-transparent'
              }`}
            >
              <img 
                src={image} 
                alt={`Product thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;