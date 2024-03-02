// Recommended.jsx
import React from 'react';

function Recommended({ handleInputChange }) {
  return (
    <>
      <div className='bg-gray-800 py-10 flex flex-row justify-center items-center '>
        <input
          placeholder='    Search Your brand'
          className='h-10 w-80 rounded-md items-center flex justify-center'
          onChange={handleInputChange}
        />
      </div>
   
     
    </>
  );
}

export default Recommended;
