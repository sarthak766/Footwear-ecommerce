import React from 'react';
import contacttwo from '../assets/contacttwo.json';
import Lottie from 'lottie-react';
import Footer from './Footer';

const Contact = () => {
  return (
       <>
        <div className="bg-gray-800 text-white min-h-screen py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <Lottie animationData={contacttwo} loop={true} className="w-72 h-auto mx-auto mb-8 sm:w-96" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="text-lg">
              Do you have questions about our company? Feel free to contact us using the information below or fill out the form, and we'll get back to you as soon as possible.
            </p>
            <ul className="list-disc pl-6">
              <li>Email: info@style.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main Street, Your City, ABC123</li>
            </ul>
          </div>
          <div>
            <form action='https://formspree.io/f/xzbngwkw' method='post' className="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name='username'
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name='email'
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name='message'
                  id="message"
                  placeholder="Your Message"
                  rows="6"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="send"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
       </>
   
  );
}

export default Contact;
