// Allproduct.jsx
import React from 'react';
import Card from './Card';
import Recommended from './Recommended.jsx';
import Footer from './Footer.jsx';

function Allproduct({ data, handleInputChange }) {
  return (
    <>
      <div className='bg-gray-800 w-[100vw] h-full py-[70px] z-10'>
        <Recommended handleInputChange={handleInputChange} />
        <div className='flex md:flex-row flex-col flex-wrap gap-[4vw] py-[100px] ml-[3.25rem] mr-[2.25rem] md:ml-[4.25rem] md:mr-[3.25]'>
          {data}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Allproduct;
