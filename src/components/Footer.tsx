import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Factory className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-2xl font-semibold">GlobalTech</span>
            </div>
            <p className="text-secondary-100 mb-4">
              Leading manufacturer of precision industrial components with global reach and exceptional quality standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-100 hover:text-primary-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-100 hover:text-primary-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-100 hover:text-primary-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-100 hover:text-primary-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-100 hover:text-primary-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-100 hover:text-primary-400">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-100 hover:text-primary-400">Services</Link>
              </li>
              <li>
                <Link to="/products" className="text-secondary-100 hover:text-primary-400">Products</Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-100 hover:text-primary-400">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-100 hover:text-primary-400">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mold-solutions" className="text-secondary-100 hover:text-primary-400">Mold Solutions</Link>
              </li>
              <li>
                <Link to="/raw-materials" className="text-secondary-100 hover:text-primary-400">Raw Materials</Link>
              </li>
              <li>
                <Link to="/products" className="text-secondary-100 hover:text-primary-400">Finished Products</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <span className="text-secondary-100">123 Industrial Park, Manufacturing District, Business City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3" />
                <span className="text-secondary-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3" />
                <span className="text-secondary-100">info@globaltech-industry.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-300">
          <p>&copy; {new Date().getFullYear()} GlobalTech Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;