import React from 'react';
import { BsFillBagFill } from "react-icons/bs";
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
const Card = ({ id,img, title, star, reviews, prevPrice, newPrice }) => {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart({ id,img, title, newPrice,prevPrice }));
  };
  const handleAdded =()=>{
      alert("Item Added to cart Go to cart!! ");
  }
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4 md:w-[25vw] md:h-[50vh] w-[80%] hover:scale-[1.2] transition duration-300 ease-in-out">
       <div className='md:h-[200px] md:w-[450px] overflow-hidden'>
       <img src={img} alt={title} className="w-full h-full p-4" />
       </div>
      <div className="p-4 md:h-2 ">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          {/* Render star rating */}
          <section className=" flex flex-row">
            {star} {star} {star} {star} 
          </section>
          <span className="total-reviews">{reviews}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div onClick={handleAdded}>
            <button onClick={handleAddToCart}><BsFillBagFill className="text-gray-600 h-6 w-6" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
