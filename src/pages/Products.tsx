import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { Sliders, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    'All', 
    'Automotive', 
    'Electronics', 
    'Medical', 
    'Consumer Goods', 
    'Industrial'
  ];
  
  const products = [
    {
      id: 1,
      title: 'Precision Injection Molded Components',
      description: 'High-precision plastic components manufactured using advanced injection molding techniques for automotive applications.',
      category: 'Automotive',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '/products/1'
    },
    {
      id: 2,
      title: 'Electronic Enclosures',
      description: 'Durable and precise enclosures for electronic devices with excellent dimensional stability and heat resistance.',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1580745294621-0f8c34e4cb2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      link: '/products/2'
    },
    {
      id: 3,
      title: 'Medical Device Components',
      description: 'ISO-certified components for medical devices requiring biocompatibility and sterilization resistance.',
      category: 'Medical',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      link: '/products/3'
    },
    {
      id: 4,
      title: 'Consumer Product Housings',
      description: 'Aesthetically pleasing and functional housings for consumer electronics and appliances.',
      category: 'Consumer Goods',
      image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '/products/4'
    },
    {
      id: 5,
      title: 'Industrial Control Components',
      description: 'Reliable components for industrial automation and control systems designed for harsh environments.',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '/products/5'
    },
    {
      id: 6,
      title: 'Automotive Interior Parts',
      description: 'High-quality interior components for automotive applications with excellent surface finish and durability.',
      category: 'Automotive',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '/products/6'
    },
    {
      id: 7,
      title: 'Wearable Device Components',
      description: 'Lightweight and durable components for wearable electronic devices with precise tolerances.',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1553545204-4f7d339aa06a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '/products/7'
    },
    {
      id: 8,
      title: 'Surgical Tool Components',
      description: 'Precision components for surgical instruments with sterilization compatibility and ergonomic design.',
      category: 'Medical',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '/products/8'
    },
    {
      id: 9,
      title: 'Home Appliance Components',
      description: 'Durable and heat-resistant components for various home appliances with excellent electrical insulation properties.',
      category: 'Consumer Goods',
      image: 'https://images.unsplash.com/photo-1589820943434-3060930a9531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: '/products/9'
    }
  ];
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <HeroSection
        title="Finished Products"
        subtitle="High-quality precision components for various industries"
        imageUrl="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
      />

      {/* Product Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Product Range"
            subtitle="Discover our comprehensive range of precision-engineered products"
          />
          
          {/* Search and Filter */}
          <div className="mb-10 bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <Sliders className="h-5 w-5 text-secondary-700 mr-2" />
                  <span className="text-secondary-700 mr-4">Filter by Category:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`px-3 py-1 rounded-full text-sm ${
                          activeCategory === category
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-200 text-secondary-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                  link={product.link}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-secondary-600 mb-4">No products match your search criteria.</p>
              <button
                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Manufacturing Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Manufacturing Process"
            subtitle="How we create high-quality precision components"
          />
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="col-span-2 bg-primary-700 text-white p-8">
                <h3 className="text-2xl font-semibold mb-4">Manufacturing Excellence</h3>
                <p className="mb-6">
                  At GlobalTech, we leverage state-of-the-art technology and decades of manufacturing expertise to produce components that meet the most demanding specifications.
                </p>
                <p>
                  Our comprehensive manufacturing capabilities include injection molding, precision machining, assembly, and finishing operations, all supported by rigorous quality control systems.
                </p>
              </div>
              <div className="col-span-3">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1720&q=80"
                  alt="Manufacturing Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">Design & Engineering</h3>
              <p className="text-secondary-600">
                Our engineering team works closely with clients to design components that meet all functional, aesthetic, and manufacturing requirements. Advanced CAD/CAM software and simulation tools ensure optimal designs before manufacturing.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">Tooling & Setup</h3>
              <p className="text-secondary-600">
                We create precision tooling using high-grade materials and advanced machining techniques. Our tool design incorporates optimal cooling systems, gate locations, and ejection mechanisms for efficient production.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">Material Selection</h3>
              <p className="text-secondary-600">
                We select the optimal materials for each application based on performance requirements, cost considerations, and environmental factors. Our extensive material knowledge ensures the best choice for every component.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">Production & Monitoring</h3>
              <p className="text-secondary-600">
                Our advanced production equipment operates with high precision and efficiency. Real-time monitoring systems track key parameters to ensure consistent quality throughout the production run.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <span className="text-xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">Quality Control</h3>
              <p className="text-secondary-600">
                Comprehensive quality control measures include in-process inspection, statistical process control, and final testing. Advanced measurement equipment ensures all components meet specified tolerances.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <span className="text-xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">Assembly & Finishing</h3>
              <p className="text-secondary-600">
                When required, we provide value-added assembly and finishing operations including surface treatment, painting, printing, and decorative features to deliver complete, ready-to-use components.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quality Assurance */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary-800">
                Quality Assurance
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Our comprehensive quality management system ensures that every product we manufacture meets the highest standards of precision, durability, and performance. We utilize advanced inspection equipment and rigorous testing protocols to verify quality at every stage of production.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-secondary-800">ISO 9001:2015 Certified</h4>
                    <p className="text-secondary-600">Our quality management system is certified to ISO 9001:2015 standards, ensuring consistent processes and continuous improvement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-secondary-800">Advanced Inspection Equipment</h4>
                    <p className="text-secondary-600">We use coordinate measuring machines (CMM), optical measurement systems, and material testing equipment to verify dimensional accuracy and material properties.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-secondary-800">Traceability</h4>
                    <p className="text-secondary-600">Complete lot traceability from raw material to finished product ensures quality accountability and efficient issue resolution if needed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Quality Assurance"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Components for Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team can help you design and manufacture precision components that perfectly meet your requirements, no matter how complex.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Request a Quote
            </Link>
            <Link
              to="/services"
              className="bg-transparent hover:bg-primary-600 border border-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;