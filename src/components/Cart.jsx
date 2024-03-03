import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { clearCart } from '../redux/cartSlice';
import cart from '../assets/cart.json';
import Lottie from 'lottie-react';
import Footer from './Footer';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <>
        <div className="bg-gray-800 min-h-screen py-8 sm:py-16 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-12 md:mb-1">
          <Lottie animationData={cart} className="w-full h-[400px]" />
        </div>
        <div className='flex items-center justify-center'>
        <button onClick={()=>{dispatch(clearCart())}} className=" flex items-center justify-center h-[50px] w-[250px] bg-blue-500 rounded-md font-semibold mb-2 hover:bg-red-500 ">Clear cart  <MdDelete className='text-black text-2xl'/></button>
        </div>
        <div className='justify-center items-center flex md:flex-row flex-col flex-wrap gap-[4vw] py-[100px] ml-[3.25rem] mr-[2.25rem] md:ml-[4.25rem] md:mr-[3.25rem] mt-3'>
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden md:h-[350px] sm:[200px] ">
              <img src={item.img} alt={item.title} className=" md:w-[550px] md:h-[250px] object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">${item.newPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};
export default Cart;
