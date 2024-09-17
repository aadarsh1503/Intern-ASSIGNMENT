import React from 'react';
import { AiOutlineAppstore, AiOutlineShoppingCart, AiOutlineProject, AiOutlineCar, AiOutlineGift, AiOutlineSearch } from 'react-icons/ai';

const Middle = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Clone App Section Header */}
      <section className="text-center py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
            <AiOutlineAppstore className="text-4xl mr-3 text-orange-500" />
            Launch Your Business Quickly With Our Ready-To-Use Clones
          </h2>
          <p className="mt-4 text-gray-600">Customize the clone apps per your business needs and launch your brand in just days.</p>
        </div>
      </section>

      {/* Clone App Cards Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://www.grepixit.com/images/grocery-delivery/instacart-clone-app.jpg" alt="Uber Eats Clone App" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold flex items-center justify-center">
                <AiOutlineShoppingCart className="text-2xl mr-2 text-orange-500" />
                Uber Eats Clone App
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://www.inoru.com/blog/wp-content/uploads/2020/11/poster_1.jpg" alt="Instacart Clone App" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold flex items-center justify-center">
                <AiOutlineProject className="text-2xl mr-2 text-orange-500" />
                Instacart Clone App
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/000/470/original/TR_Linkedin_1200x644_monstera_(1).jpg?1664319254" alt="TaskRabbit Clone App" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold flex items-center justify-center">
                <AiOutlineSearch className="text-2xl mr-2 text-orange-500" />
                TaskRabbit Clone App
              </h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8snka5Do9vfvOXBauOiBvTtKD7LcU3ghDnQ&s" alt="BlaBlaCar Clone App" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold flex items-center justify-center">
                <AiOutlineCar className="text-2xl mr-2 text-orange-500" />
                BlaBlaCar Clone App
              </h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://media.designrush.com/inspirations/129792/conversions/_1531237312_377_Postmates-Top-Logo-Design-preview.jpg" alt="Postmates Clone App" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold flex items-center justify-center">
                <AiOutlineGift className="text-2xl mr-2 text-orange-500" />
                Postmates Clone App
              </h3>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZHjYbnLNRDoV2b5CX1fz5Q1br8OUc74SMbA&s" alt="Gojek Clone App" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold flex items-center justify-center">
                <AiOutlineAppstore className="text-2xl mr-2 text-orange-500" />
                Gojek Clone App
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
      className="bg-orange-500 text-white py-12"
      style={{ 
        backgroundImage: "url('https://img.freepik.com/free-photo/orange-texture_95678-73.jpg?w=900&t=st=1726579083~exp=1726579683~hmac=3092394d18e9cc9866923bedd19fb1ef0800e665c8fda4326f51ace7c7848533')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-bold flex items-center justify-center">
          <AiOutlineAppstore className="text-4xl mr-3" />
          Get a Clone App for Your Industry-Specific Needs
        </h2>
        <p className="mt-4">Consult With the Right Expert at ValueAppz.</p>
        <button className="mt-6 bg-white text-orange-500 px-6 py-3 rounded text-lg hover:bg-gray-100">
          Schedule Consultation
        </button>
      </div>
    </section>
    </div>
  );
};

export default Middle;
