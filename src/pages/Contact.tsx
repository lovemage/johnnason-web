import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, User, Building } from 'lucide-react';

const Contact: React.FC = () => {
  const offices = [
    {
      city: 'Detroit',
      country: 'USA',
      address: '123 Manufacturing Avenue, Detroit, MI 48201',
      phone: '+1 (555) 123-4567',
      email: 'detroit@globaltech-industry.com',
      hours: 'Mon-Fri: 8am - 5pm EST',
      image: 'https://images.unsplash.com/photo-1512076249812-fd58fb2c8748?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      city: 'Stuttgart',
      country: 'Germany',
      address: '45 Industrie Strasse, 70565 Stuttgart, Germany',
      phone: '+49 (0) 711 123 45 67',
      email: 'stuttgart@globaltech-industry.com',
      hours: 'Mon-Fri: 9am - 6pm CET',
      image: 'https://images.unsplash.com/photo-1527142879-95b61a0916bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80'
    },
    {
      city: 'Shenzhen',
      country: 'China',
      address: '789 Innovation Road, Nanshan District, Shenzhen, 518057',
      phone: '+86 755 8888 7777',
      email: 'shenzhen@globaltech-industry.com',
      hours: 'Mon-Fri: 9am - 6pm CST',
      image: 'https://images.unsplash.com/photo-1563998873-f15fe11ad631?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    }
  ];

  const departmentContacts = [
    {
      icon: <User className="h-5 w-5" />,
      department: 'Sales Inquiries',
      email: 'sales@globaltech-industry.com',
      phone: '+1 (555) 234-5678'
    },
    {
      icon: <Building className="h-5 w-5" />,
      department: 'Customer Support',
      email: 'support@globaltech-industry.com',
      phone: '+1 (555) 345-6789'
    },
    {
      icon: <User className="h-5 w-5" />,
      department: 'Careers',
      email: 'careers@globaltech-industry.com',
      phone: '+1 (555) 456-7890'
    },
    {
      icon: <Building className="h-5 w-5" />,
      department: 'Media Relations',
      email: 'media@globaltech-industry.com',
      phone: '+1 (555) 567-8901'
    }
  ];

  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our expert team for all your manufacturing needs"
        imageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
      />

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary-800">
                Get In Touch
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                We're here to answer any questions you may have about our manufacturing services, products, or capabilities. Reach out to us using the form below or contact our offices directly.
              </p>
              
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                    <span className="text-secondary-700">
                      Global Headquarters<br />
                      123 Manufacturing Avenue, Detroit, MI 48201, USA
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">
                      info@globaltech-industry.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">
                      Monday - Friday: 8am - 5pm EST
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departmentContacts.map((contact, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-center mb-2">
                      <div className="p-2 rounded-full bg-primary-100 text-primary-600 mr-3">
                        {contact.icon}
                      </div>
                      <h4 className="font-semibold text-secondary-800">
                        {contact.department}
                      </h4>
                    </div>
                    <div className="ml-10 space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 text-primary-600 mr-2" />
                        <span className="text-secondary-700">{contact.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 text-primary-600 mr-2" />
                        <span className="text-secondary-700">{contact.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Offices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Global Offices"
            subtitle="Visit or contact one of our international locations"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={`${office.city} Office`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    {office.city}, {office.country}
                  </h3>
                  <div className="space-y-3 text-secondary-700">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Find Us"
            subtitle="Our headquarters location"
          />
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94371.54970627882!2d-83.11438575347249!3d42.33138571342432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C%20MI!5e0!3m2!1sen!2sus!4v1635784135751!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers to common inquiries"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                What industries do you serve?
              </h3>
              <p className="text-secondary-700">
                We serve a wide range of industries including automotive, aerospace, electronics, medical devices, consumer goods, and industrial equipment. Our manufacturing capabilities are versatile and adaptable to various sector requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                Can you help with product design?
              </h3>
              <p className="text-secondary-700">
                Yes, our experienced engineering team provides comprehensive design services to optimize your product for manufacturability, performance, and cost-effectiveness. We can work from concept sketches or refine existing designs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                What is your minimum order quantity?
              </h3>
              <p className="text-secondary-700">
                Minimum order quantities vary depending on the product complexity, material requirements, and production process. We offer flexible solutions for both high-volume production and smaller specialty runs. Contact us for specific details.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                How do you ensure quality control?
              </h3>
              <p className="text-secondary-700">
                We maintain ISO 9001:2015 certified quality management systems and employ rigorous testing protocols throughout the manufacturing process. This includes material testing, in-process inspections, and final product verification using advanced measurement equipment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                Do you offer expedited production?
              </h3>
              <p className="text-secondary-700">
                Yes, we offer expedited production services for time-sensitive projects. Lead times depend on project complexity, material availability, and current production schedules. Please contact our sales team to discuss your specific timeline requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                Can you provide material certifications?
              </h3>
              <p className="text-secondary-700">
                Yes, we provide comprehensive material certifications and documentation for all products upon request. This includes material composition, mechanical properties, and compliance with relevant industry standards and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today and discover how GlobalTech can help you bring your manufacturing vision to reality with precision, quality, and efficiency.
          </p>
          <a
            href="tel:+15551234567"
            className="inline-block bg-white text-primary-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition duration-300 mx-2"
          >
            Call Us: +1 (555) 123-4567
          </a>
          <a
            href="mailto:info@globaltech-industry.com"
            className="inline-block bg-transparent hover:bg-primary-600 border border-white font-medium px-6 py-3 rounded-md transition duration-300 mx-2 mt-4 sm:mt-0"
          >
            Email: info@globaltech-industry.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;