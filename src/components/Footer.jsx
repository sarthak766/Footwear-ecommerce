import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-3">About Us</h3>
                    <p>Welcome to Style, your one-stop destination for trendy and comfortable footwear. We are committed to offering high-quality shoes that blend style with comfort, ensuring you walk with confidence every step of the way.</p>
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                    <p>Have a question or need assistance? Reach out to our customer service team at <a href="mailto:style@email.com" className="text-blue-300">your@email.com</a> or call us at <a href="tel:+1234567890" className="text-blue-300">+1234567890</a>.</p>
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                    <ul>
                        <li><a href="#" className="text-blue-300">Facebook</a></li>
                        <li><a href="#" className="text-blue-300">Instagram</a></li>
                        <li><a href="#" className="text-blue-300">Twitter</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-bold mb-3">Newsletter</h3>
                    <p>Subscribe to our newsletter to receive exclusive offers, discounts, and updates directly in your inbox.</p>
                    <form className="mt-4">
                        <input type="email" placeholder="Your email address" className="bg-gray-800 text-gray-300 rounded py-2 px-4 w-full"/>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 w-full">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-5">
                <div className="container mx-auto text-center text-sm">
                    <p className="mb-2">&copy; 2024 Style. All rights reserved.</p>
                    <p>Terms of Service | Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
