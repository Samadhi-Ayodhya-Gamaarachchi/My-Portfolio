import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'john.doe@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY'
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-8">Contact Information</h3>
      
      <div className="space-y-6">
        {contactDetails.map((contact, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <contact.icon className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">{contact.label}</p>
              <p className="text-gray-600">{contact.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
        <div className="flex gap-4">
          <a 
            href="#" 
            className="bg-indigo-100 hover:bg-indigo-200 p-3 rounded-full transition-colors duration-200"
          >
            <Github className="w-6 h-6 text-indigo-600" />
          </a>
          <a 
            href="#" 
            className="bg-indigo-100 hover:bg-indigo-200 p-3 rounded-full transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6 text-indigo-600" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;