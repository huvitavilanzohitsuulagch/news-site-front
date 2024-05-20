'use client'
import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://via.placeholder.com/600x400/0000FF/808080',
    'https://via.placeholder.com/600x400/FF0000/FFFFFF',
    'https://via.placeholder.com/600x400/00FF00/000000',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-96 overflow-hidden">
      <button
        onClick={prevImage}
        className="absolute left-0 z-10 p-2 m-2 text-white bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        ‹
      </button>
      <img
        src={images[currentImageIndex]}
        alt="Slider"
        className="object-cover w-full h-full rounded-2xl"
      />
      <button
        onClick={nextImage}
        className="absolute right-0 z-10 p-2 m-2 text-white bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
