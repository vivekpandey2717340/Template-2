import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Dr. Rishi Bista
            </h1>
            <div className="text-lg text-gray-600 mb-6 space-y-2">
              <p>MBBS</p>
              <p>MS (Orthopedic - NAMS)</p>
              <p>Fellowship Joint Replacement (India)</p>
              <p>Fellowship AO Trauma (Israel)</p>
              <p>NMC No. 4767</p>
            </div>
            <p className="text-xl text-gray-700 mb-8">
              Dedicated to providing exceptional orthopedic care with expertise in joint replacement and trauma surgery.
            </p>
            <a
              href="#appointments"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </a>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="https://res.cloudinary.com/dq76pknoe/image/upload/v1742910339/mhxbathleh8ek8gnfqot.png"
              alt="Doctor"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;