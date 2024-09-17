import React, { useState } from 'react';
import { AiOutlineClockCircle, AiOutlineCode, AiOutlineCustomerService, AiOutlineShop, AiOutlineApi, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { IoMenu, IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">ValueAppz</div>
          {/* Navigation for Desktop */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Marketplace Solutions</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Clone Appz</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Portfolio</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Resources</a>
            <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">Get In Touch</a>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ zIndex: 50 }}>
          <div className="flex flex-col space-y-4 p-6">
            {/* Close Button */}
            <button className="text-gray-600 mb-4" onClick={toggleMenu}>
              <IoClose size={24} />
            </button>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Marketplace Solutions</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Clone Appz</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Portfolio</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Resources</a>
              <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">Get In Touch</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-blue-900 text-white py-16 flex flex-col items-center relative"
        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/blue-wallpaper-with-title-blue-wallpaper_483537-4469.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transform Your Business With Our Highly Ranked Marketplace Solutions
          </motion.h1>
          <motion.p
            className="mt-4 text-sm md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            We specialize in Retail, E-commerce, Marketplace, Logistics, Fintech, and On-Demand Software Development.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center mt-8 space-y-6 md:space-y-0 md:space-x-10">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <AiOutlineClockCircle className="text-orange-500 text-4xl md:text-5xl mb-2" />
              <h2 className="text-2xl md:text-3xl font-bold">5+</h2>
              <p className="text-gray-300">Successful Years</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <AiOutlineCode className="text-orange-500 text-4xl md:text-5xl mb-2" />
              <h2 className="text-2xl md:text-3xl font-bold">200+</h2>
              <p className="text-gray-300">Certified Developers</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <AiOutlineCustomerService className="text-orange-500 text-4xl md:text-5xl mb-2" />
              <h2 className="text-2xl md:text-3xl font-bold">500+</h2>
              <p className="text-gray-300">Delighted Clients</p>
            </motion.div>
          </div>
          <motion.button
            className="mt-8 bg-orange-500 px-6 py-3 md:px-8 md:py-4 rounded text-lg hover:bg-orange-600 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            Schedule Consultation
          </motion.button>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Innovative Solutions For Every Marketplace Vision
          </motion.h2>
          <motion.p
            className="mt-4 text-sm md:text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We specialize in transforming innovative marketplace concepts into successful realities.
          </motion.p>

          {/* Tabs */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="bg-orange-500 px-6 py-3 rounded text-white hover:bg-orange-600 transition duration-300 flex items-center">
              <AiOutlineShop className="mr-2 text-xl" /> Product Order & Delivery
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 flex items-center">
              <AiOutlineApi className="mr-2 text-xl" /> On Demand Service
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 flex items-center">
              <AiOutlineAppstoreAdd className="mr-2 text-xl" /> Ride Management Solutions
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 flex items-center">
              <AiOutlineCode className="mr-2 text-xl" /> Unique Marketplace
            </button>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="bg-white shadow-lg rounded p-6">
              <AiOutlineShop className="text-orange-500 text-4xl mb-4" />
              <h3 className="font-bold text-xl">Food & Grocery Delivery</h3>
              <p className="mt-4 text-gray-600">Launch a leading on-demand delivery platform for food, grocery, and daily needs.</p>
            </div>
            <div className="bg-white shadow-lg rounded p-6">
              <AiOutlineAppstoreAdd className="text-orange-500 text-4xl mb-4" />
              <h3 className="font-bold text-xl">Cosmetics & Baby Products</h3>
              <p className="mt-4 text-gray-600">Be part of the fastest-growing eCommerce sector by launching a brand specific to beauty and baby products.</p>
            </div>
            <div className="bg-white shadow-lg rounded p-6">
              <AiOutlineApi className="text-orange-500 text-4xl mb-4" />
              <h3 className="font-bold text-xl">Flowers & Gift Delivery</h3>
              <p className="mt-4 text-gray-600">Develop a user-friendly on-demand flower and gift marketplace.</p>
            </div>
            <div className="bg-white shadow-lg rounded p-6">
              <AiOutlineCode className="text-orange-500 text-4xl mb-4" />
              <h3 className="font-bold text-xl">B2B Product Marketplaces</h3>
              <p className="mt-4 text-gray-600">Create a B2B platform for trading and managing large-scale product inventories.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
