import React, { useState } from 'react';

const SecondLast = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Frequently Asked Questions */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">Frequently Asked Questions</h2>

        <div className="max-w-4xl mx-auto mt-10 space-y-6">
          {/* FAQ 1 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 font-semibold transition duration-300 ${faqOpen === 1 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => toggleFaq(1)}
            >
              What would be the cost to develop an on-demand delivery app for my business?
            </button>
            {faqOpen === 1 && (
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-gray-600">
                  Every business differs from another and so do the services. The estimated cost for building an on-demand delivery app may vary depending on your business, requirements, and services. For a detailed estimation, get in touch with our experts.
                </p>
                <a href="#contact" className="text-blue-500 hover:underline mt-2 inline-block">Click here to get in touch.</a>
              </div>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 font-semibold transition duration-300 ${faqOpen === 2 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => toggleFaq(2)}
            >
              How can I make my on-demand app more secure?
            </button>
            {faqOpen === 2 && (
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-gray-600">Implementing secure authentication, encryption, and regular security updates can enhance the security of your app.</p>
              </div>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 font-semibold transition duration-300 ${faqOpen === 3 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => toggleFaq(3)}
            >
              How quickly can I develop my delivery app with ValueAppz?
            </button>
            {faqOpen === 3 && (
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-gray-600">The development timeline depends on the complexity of the features and services required. Generally, apps can be developed in 3-6 months.</p>
              </div>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 font-semibold transition duration-300 ${faqOpen === 4 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => toggleFaq(4)}
            >
              Can you develop a mobile app from my existing website?
            </button>
            {faqOpen === 4 && (
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-gray-600">Yes, we can integrate your existing website services into a mobile app for a seamless user experience.</p>
              </div>
            )}
          </div>

          {/* FAQ 5 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 font-semibold transition duration-300 ${faqOpen === 5 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => toggleFaq(5)}
            >
              Do you provide maintenance or support?
            </button>
            {faqOpen === 5 && (
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-gray-600">Yes, we offer post-development maintenance and support services to ensure your app runs smoothly.</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">Book a Free Demo</button>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="py-12 bg-white">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">Recent Blogs</h2>
        <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-gray-600">
          Mobile App & Web Development Trends, Tips, and Tricks by our experts for continuous learning & market insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 mt-10">
          {/* Blog 1 */}
          <div className="border rounded-lg shadow-lg bg-white overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbia-fib7MF3RDf-WDyhAnPAIne6h45KQuQ&s" alt="Blog 1" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Overcoming Common Challenges in Real Estate</h3>
              <p className="mt-4 text-gray-600">Quick Summary: Have you faced challenges while building a real estate app? Explore common hurdles and solutions.</p>
              <p className="text-gray-400 mt-2">2024-06-19</p>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="border rounded-lg shadow-lg bg-white overflow-hidden">
            <img src="https://insidesmallbusiness.com.au/wp-content/uploads/2021/04/bigstock-171209699-e1623988357460.jpg" alt="Blog 2" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">How SMBs Can Leverage Emerging Tech</h3>
              <p className="mt-4 text-gray-600">Quick Summary: Discover how small and medium businesses can harness the power of emerging technologies for growth.</p>
              <p className="text-gray-400 mt-2">2024-06-14</p>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="border rounded-lg shadow-lg bg-white overflow-hidden">
            <img src="https://www.cprime.com/wp-content/uploads/2022/12/cprimebloghow-build-your-own-health-and-fitness-app-scratch.jpeg" alt="Blog 3" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">7 Steps To Create A Health and Fitness App</h3>
              <p className="mt-4 text-gray-600">Summary: Learn the essential steps for building a successful health and fitness app for your startup or business.</p>
              <p className="text-gray-400 mt-2">2024-06-11</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">Read All</button>
        </div>
      </section>
    </div>
  );
};

export default SecondLast;
