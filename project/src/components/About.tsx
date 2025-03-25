import React from 'react';
import { Award, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Dr. Rishi Bista</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-blue-50 rounded-lg">
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-600">Over 15 years of experience in orthopedic surgery and patient care.</p>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-lg">
            <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">Advanced training in joint replacement and trauma surgery from prestigious institutions.</p>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-lg">
            <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Specialization</h3>
            <p className="text-gray-600">Expertise in joint replacement, trauma care, and sports medicine.</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Dr. Rishi Bista is a highly qualified orthopedic surgeon with extensive experience in joint replacement surgery,
            trauma care, and sports medicine. His commitment to excellence and patient-centered approach has earned him
            recognition as one of the leading orthopedic specialists in the region.
          </p>
          <p className="text-gray-700 leading-relaxed">
            After completing his MBBS and MS in Orthopedics from NAMS, Dr. Bista pursued advanced training through
            fellowships in Joint Replacement in India and AO Trauma in Israel. His international exposure and continuous
            learning approach ensure that his patients receive the most current and effective treatments available in
            orthopedic care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;