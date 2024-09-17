import React from 'react';
import { AiOutlinePhone, AiOutlineCloudServer, AiOutlineAppstore, AiOutlineLock, AiOutlineMobile, AiOutlinePieChart } from 'react-icons/ai';

const Below = () => {
  return (
    <div className="bg-white">
      {/* Section: Who We Are */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 px-4 sm:px-6 md:px-8">
          We Specialize in On-Demand App, Startup Web, Software and AI Development Services
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-6">
          Our specialties in web, mobile app, and AI development services make ValueAppz a leading company to turn startup business ideas into quality software in the shortest time.
          We focus on creating state-of-the-art products for businesses across all industries.
        </p>
        <div className="mt-6">
          <button className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out">
            Explore More
          </button>
        </div>
        {/* Image Placeholder for visuals */}
      </section>

      {/* Section: Why Choose Us */}
      <section className="py-12 bg-pink-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center px-4 sm:px-6">Why Choose Us?</h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto px-4 sm:px-6">
          We are a company with a DNA of entrepreneurship, and hence, we value the time and money invested by our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-6 lg:px-8">
          {/* Card 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <AiOutlineCloudServer className="text-orange-500 text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">Product Development Culture</h3>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              ValueAppz is leading the future of software solutions with an agile software development approach, industry-leading code, and dedicated product management practices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <AiOutlineAppstore className="text-orange-500 text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">Pre-Built Software Packages</h3>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              Get a diverse range of modular and pre-built software packages for common business tasks like CRM, cart management, booking, and more.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <AiOutlineMobile className="text-orange-500 text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">User Experience and Design</h3>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              Our developers excel in engaging UI/UX design, elevating customer experience with excellent user interfaces and content powered by Generative AI.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <AiOutlineLock className="text-orange-500 text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">Low-Code App Development</h3>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              Leverage industry-leading low-code platforms to build scalable software in a short time, meeting your business specifications with ease.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <AiOutlinePieChart className="text-orange-500 text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">Data Analysis and Localization</h3>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              Get industry insights with robust analytics tools, along with well-defined localization for language, taxation, and more.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <AiOutlinePhone className="text-orange-500 text-3xl md:text-4xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">Cutting-Edge Technology</h3>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              Stay ahead with modular technology stacks, systems integration, and AI-driven development to provide enhanced solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Below;
