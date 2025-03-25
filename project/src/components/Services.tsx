import React from 'react';
import { Bone, Activity, Heart, Dumbbell } from 'lucide-react';

const services = [
  {
    icon: Bone,
    title: 'Joint Replacement',
    description: 'State-of-the-art joint replacement procedures for knees, hips, and shoulders.',
  },
  {
    icon: Activity,
    title: 'Trauma Surgery',
    description: 'Expert care for fractures, injuries, and emergency orthopedic conditions.',
  },
  {
    icon: Dumbbell,
    title: 'Sports Medicine',
    description: 'Specialized treatment for sports-related injuries and performance enhancement.',
  },
  {
    icon: Heart,
    title: 'Physiotherapy',
    description: 'Comprehensive rehabilitation programs for optimal recovery and mobility.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;