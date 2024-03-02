import React from 'react';
import { BsFillBagFill } from "react-icons/bs";
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
const Card = ({ id,img, title, star, reviews, prevPrice, newPrice }) => {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart({ id,img, title, newPrice,prevPrice }));
  };
  return (
  <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4 md:w-[30vw] md:h-[40vh] w-[80%] hover:scale-[1.2] transition duration-300 ease-in-out">
      <div className='md:h-[200px] md:w-[100%] overflow-hidden'>
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <div className="flex">
            {/* Render star rating */}
            <section className=" flex flex-row">
            {star} {star} {star} {star} 
          </section>
          <span className="total-reviews">{reviews}</span>
          </div>
          <span className="total-reviews ml-2">{reviews}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div>
            {/* Ensure the button is visible by setting a background color */}
            <button onClick={handleAddToCart} className="bg-transparent">
              <BsFillBagFill className="text-green-600 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
