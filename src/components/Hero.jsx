import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero1.jpg';
import hero from '../assets/hero2.jpg';
import hero6 from '../assets/hero6.webp';
import hero5 from '../assets/hero5.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [heroImage, hero, hero6];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [currentSlide]); // Run effect whenever currentSlide change

  return (
    <div
      className="hero w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${images[currentSlide]})`, height: '100vh' }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          Discover Your Perfect Shoes
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center">
          Shop the latest collection of trendy footwear
        </p>
        <Link
          to="/allproduct"
          className="btn bg-red-600 hover:bg-red-700 py-3 px-6 rounded-full text-lg md:text-xl lg:text-2xl"
        >
          Shop Now
        </Link>
      </div>
      
      
    </div>
  );
};

export default Hero;
