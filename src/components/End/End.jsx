import React, { useState } from 'react';
import { AiOutlineBulb, AiOutlineCreditCard, AiOutlineMessage, AiOutlineBarChart, AiOutlineShopping, AiOutlineIdcard } from 'react-icons/ai';

const End = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    <div className="bg-white">
      {/* Section: Call to Action */}
      <section
      className="text-center py-12 bg-blue-800 text-white relative overflow-hidden"
      style={{ 
        backgroundImage: "url('https://img.freepik.com/free-vector/blue-wallpaper-with-title-blue-wallpaper_483537-4469.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-30"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Ready to Launch A Digital Platform and Boost Your Business Growth?
        </h2>
        <p className="mt-2 text-base md:text-lg">
          Contact Us Today to Discuss the Best Ideas
        </p>
        <div className="mt-6">
          <button className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105">
            Connect Now
          </button>
        </div>
      </div>
    </section>

      {/* Section: Pre-Integration with Tabs */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Pre-Integration With Industry-Leading Platforms to Save Your Time</h2>
        <p className="text-base md:text-lg text-center mb-10 max-w-2xl mx-auto px-4">Our custom on-demand software development services focus on saving time and providing the most value to clients.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16">
          {/* Tabs */}
          <div className="space-y-4">
            <button
              className={`w-full py-4 px-6 text-left font-semibold border rounded-lg transition-transform transform ${selectedTab === 1 ? 'bg-orange-500 text-white scale-105' : 'bg-gray-100'}`}
              onClick={() => handleTabClick(1)}
            >
              <AiOutlineBulb className="inline-block mr-3 text-orange-500" /> Technology and Innovation
            </button>
            <button
              className={`w-full py-4 px-6 text-left font-semibold border rounded-lg transition-transform transform ${selectedTab === 2 ? 'bg-orange-500 text-white scale-105' : 'bg-gray-100'}`}
              onClick={() => handleTabClick(2)}
            >
              <AiOutlineCreditCard className="inline-block mr-3 text-orange-500" /> Payment Integrations
            </button>
            <button
              className={`w-full py-4 px-6 text-left font-semibold border rounded-lg transition-transform transform ${selectedTab === 3 ? 'bg-orange-500 text-white scale-105' : 'bg-gray-100'}`}
              onClick={() => handleTabClick(3)}
            >
              <AiOutlineMessage className="inline-block mr-3 text-orange-500" /> Communication and Marketing
            </button>
            <button
              className={`w-full py-4 px-6 text-left font-semibold border rounded-lg transition-transform transform ${selectedTab === 4 ? 'bg-orange-500 text-white scale-105' : 'bg-gray-100'}`}
              onClick={() => handleTabClick(4)}
            >
              <AiOutlineBarChart className="inline-block mr-3 text-orange-500" /> Data and Analytics
            </button>
            <button
              className={`w-full py-4 px-6 text-left font-semibold border rounded-lg transition-transform transform ${selectedTab === 5 ? 'bg-orange-500 text-white scale-105' : 'bg-gray-100'}`}
              onClick={() => handleTabClick(5)}
            >
              <AiOutlineShopping className="inline-block mr-3 text-orange-500" /> E-Commerce and Logistics
            </button>
            <button
              className={`w-full py-4 px-6 text-left font-semibold border rounded-lg transition-transform transform ${selectedTab === 6 ? 'bg-orange-500 text-white scale-105' : 'bg-gray-100'}`}
              onClick={() => handleTabClick(6)}
            >
              <AiOutlineIdcard className="inline-block mr-3 text-orange-500" /> Identity and Verification
            </button>
          </div>

          {/* Content based on selected tab */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            {selectedTab === 1 && (
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <AiOutlineBulb className="text-3xl mr-3 text-orange-500" />
                  Technology and Innovation
                </h3>
                <p className="mt-4 text-gray-700 text-sm md:text-base">
                  Stay ahead of the competition with our cutting-edge technology integration.
                </p>
              </div>
            )}
            {selectedTab === 2 && (
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <AiOutlineCreditCard className="text-3xl mr-3 text-orange-500" />
                  Payment Integrations
                </h3>
                <p className="mt-4 text-gray-700 text-sm md:text-base">
                  Simplify transactions with seamless payment integrations for various platforms.
                </p>
              </div>
            )}
            {selectedTab === 3 && (
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <AiOutlineMessage className="text-3xl mr-3 text-orange-500" />
                  Communication and Marketing
                </h3>
                <ul className="list-disc list-inside mt-4 text-gray-700 text-sm md:text-base">
                  <li>Marketing Automation platforms like WebEngage, MoEngage, OneSignal</li>
                  <li>SMS, Email, and WhatsApp integrations with Twilio, SendGrid, and more</li>
                  <li>Social Media integrations</li>
                  <li>Intelligent chatbot integration</li>
                </ul>
              </div>
            )}
            {selectedTab === 4 && (
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <AiOutlineBarChart className="text-3xl mr-3 text-orange-500" />
                  Data and Analytics
                </h3>
                <p className="mt-4 text-gray-700 text-sm md:text-base">
                  Use data-driven insights to optimize your business operations and improve decision-making.
                </p>
              </div>
            )}
            {selectedTab === 5 && (
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <AiOutlineShopping className="text-3xl mr-3 text-orange-500" />
                  E-Commerce and Logistics
                </h3>
                <p className="mt-4 text-gray-700 text-sm md:text-base">
                  Enhance your e-commerce and logistics capabilities with our integrated solutions.
                </p>
              </div>
            )}
            {selectedTab === 6 && (
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <AiOutlineIdcard className="text-3xl mr-3 text-orange-500" />
                  Identity and Verification
                </h3>
                <p className="mt-4 text-gray-700 text-sm md:text-base">
                  Ensure secure identity verification with our reliable platforms.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105">Book a Free Demo</button>
        </div>
      </section>

      {/* Section: Client Testimonial */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Hear What Our Clients Say</h2>
        <p className="text-base md:text-lg text-center mb-10 max-w-2xl mx-auto px-4">
          Explore the transformative experiences of our valued customers and how our services have positively impacted their business.
        </p>

        <div className="flex justify-center px-4">
          <div className="p-6 bg-white shadow-lg rounded-lg w-full md:w-3/4 lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-200 opacity-50 rounded-lg"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Client" 
                className="w-24 h-24 rounded-full border-4 border-orange-500" 
              />
              <div className="text-center md:text-left">
                <p className="text-lg font-bold">Mansi</p>
                <p className="text-sm text-gray-600">Founder - Aaqya, India</p>
                <p className="mt-4 text-gray-700 font-semibold text-sm md:text-base">
                  "I am happy to have chosen ValueAppz to launch my Hyperlocal Food and Grocery Delivery Business. We got all the necessary features of Zomato, BlinkIt into a single platform in less than 3 months and at a fraction of the cost..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default End;
