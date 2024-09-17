import React from 'react';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai';

const Last = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Middle Section */}
      <div className="relative z-10 flex flex-col justify-center items-center flex-grow py-12 pb-20 bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white">
        <div className="shadow-2xl rounded-lg flex flex-col md:flex-row w-[90%] lg:w-[80%] xl:w-[70%] h-auto md:h-[50vh]">
          {/* Left Section: "Transform Your Vision" */}
          <div className="p-10 md:w-1/2 flex flex-col justify-center items-start bg-gray-600 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Transform Your Vision Into Reality
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              Unlock the Power of Custom Software Solutions for Your Business.
            </p>
          </div>

          {/* Right Section: "Schedule a Meeting" */}
          <div className="p-10 md:w-1/2 flex justify-center items-center bg-white text-gray-800">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
              Schedule a Meeting
            </h2>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto flex flex-wrap justify-between px-4">
          {/* Quick Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#disclaimer" className="hover:underline">Disclaimer</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#partnership" className="hover:underline">Partnership Program</a></li>
            </ul>
          </div>

          {/* On-Demand Apps */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-3">On-Demand Apps</h3>
            <ul className="space-y-2">
              <li>Food Delivery</li>
              <li>Grocery Delivery</li>
              <li>Beauty Services</li>
              <li>Home Services</li>
              <li>Pharmacy Delivery</li>
              <li>Handyman Service</li>
              <li>Car Washing Services</li>
            </ul>
          </div>

          {/* Clone Apps */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-3">Food Delivery Clone Apps</h3>
            <ul className="space-y-2">
              <li>Zomato Clone App</li>
              <li>Swiggy Clone App</li>
              <li>Talabat Clone App</li>
              <li>Grubhub Clone App</li>
              <li>BigBasket Clone App</li>
            </ul>
            <h3 className="font-bold text-lg mt-6 mb-3">Grocery Delivery Clone Apps</h3>
            <ul className="space-y-2">
              <li>Instacart Clone App</li>
              <li>Getir Clone App</li>
            </ul>
          </div>

          {/* Global Presence */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-3">Our Global Presence</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>Private Office 552, 305 E Huntland Dr, Austin, TX 78752, United States</li>
              <li>+1-619-309-4653</li>
              <li>Bestech Business Tower, A-413, 4th Floor, Lower A, Sector-66, Mohali, Punjab 160066, IN</li>
              <li>+919888006976</li>
              <li>info@valueappz.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-blue-400 transition-colors duration-300">
            <AiOutlineTwitter size={30} />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-blue-600 transition-colors duration-300">
            <AiOutlineFacebook size={30} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-blue-500 transition-colors duration-300">
            <AiOutlineLinkedin size={30} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="text-white hover:text-red-500 transition-colors duration-300">
            <AiOutlineYoutube size={30} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-sm">&copy; 2024 All Rights Reserved</p>
          <p className="text-sm">Powered by Signity</p>
        </div>
      </footer>
    </div>
  );
};

export default Last;
