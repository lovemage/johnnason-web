import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Clock, ThumbsUp, Shield, Microscope, Puzzle, Zap, Layers, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const MoldSolutions: React.FC = () => {
  const moldTypes = [
    {
      title: 'Injection Molds',
      description: 'Precision-engineered injection molds for high-volume production across various industries.',
      image: 'https://images.unsplash.com/photo-1581093067310-9a6e831518bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      features: [
        'High-precision cavity design',
        'Optimized cooling channels',
        'Multi-cavity capabilities',
        'Hot runner systems',
      ]
    },
    {
      title: 'Compression Molds',
      description: 'Advanced compression molds for thermoset materials requiring high-strength and heat resistance.',
      image: 'https://images.unsplash.com/photo-1581093196077-ca3b0485e327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      features: [
        'Precision flash control',
        'Excellent dimensional stability',
        'Uniform material distribution',
        'Low maintenance design',
      ]
    },
    {
      title: 'Blow Molds',
      description: 'Specialized blow molds for hollow products like bottles, containers, and automotive parts.',
      image: 'https://images.unsplash.com/photo-1610147323279-5da8413d1be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      features: [
        'Extrusion blow molding',
        'Injection blow molding',
        'Stretch blow molding',
        'Complex geometry capability',
      ]
    },
    {
      title: 'Die Cast Molds',
      description: 'Heavy-duty die cast molds for metal components requiring high precision and durability.',
      image: 'https://images.unsplash.com/photo-1581091195657-51329f856fbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      features: [
        'Heat-resistant alloy construction',
        'Precision cooling system',
        'Wear-resistant surfaces',
        'Multiple cavity options',
      ]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Reduced Cycle Time',
      description: 'Our optimized mold designs significantly reduce cycle times, increasing production efficiency and output.'
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: 'Superior Quality',
      description: 'Advanced engineering ensures consistent part quality with minimal variation and defects.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Extended Mold Life',
      description: 'Premium materials and precision construction extend mold lifespan, maximizing your investment.'
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: 'Enhanced Precision',
      description: 'Cutting-edge design and manufacturing techniques deliver tight tolerances and exceptional detail.'
    }
  ];

  const industriesServed = [
    'Automotive',
    'Consumer Electronics',
    'Medical Devices',
    'Aerospace',
    'Consumer Goods',
    'Industrial Equipment',
    'Packaging',
    'Building Products'
  ];

  return (
    <div>
      <HeroSection
        title="Advanced Mold Solutions"
        subtitle="Precision-engineered molds for various manufacturing applications"
        imageUrl="https://images.unsplash.com/photo-1612521589232-bf1837a9f4e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary-800">
                Innovative Mold Engineering & Manufacturing
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                At GlobalTech, we specialize in designing and manufacturing high-precision molds for various applications across industries. Our advanced mold solutions combine cutting-edge technology with decades of engineering expertise to deliver exceptional quality, consistency, and performance.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                Whether you need complex injection molds for automotive components, precision blow molds for packaging, or specialized compression molds for advanced materials, our team creates custom solutions tailored to your specific requirements.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Puzzle className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-800">Custom Design</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-800">Rapid Development</span>
                </div>
                <div className="flex items-center">
                  <Layers className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-800">Multi-material Capability</span>
                </div>
                <div className="flex items-center">
                  <Settings className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-800">Precision Engineering</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1611193815012-9c13e1a7e3a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Advanced Mold Manufacturing"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mold Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Mold Solutions"
            subtitle="Comprehensive range of specialized mold types for diverse applications"
          />
          
          <div className="space-y-16">
            {moldTypes.map((mold, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="h-64 lg:h-auto">
                    <img
                      src={mold.image}
                      alt={mold.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-secondary-800 mb-4">{mold.title}</h3>
                    <p className="text-secondary-600 mb-6">{mold.description}</p>
                    <h4 className="text-xl font-medium text-secondary-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {mold.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-primary-600 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="ml-2 text-secondary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Benefits of Our Mold Solutions"
            subtitle="Why leading manufacturers choose GlobalTech for their mold needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl border-t-4 border-primary-500">
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2 text-center">{benefit.title}</h3>
                <p className="text-secondary-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Design Process */}
      <section className="py-16 bg-secondary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Mold Design Process"
            subtitle="A systematic approach to creating high-performance molds"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Requirements Analysis</h3>
              <p className="text-secondary-300 mb-4">
                We start by thoroughly understanding your specific requirements, including part geometry, material properties, production volume, and quality standards.
              </p>
              <ul className="space-y-2 text-secondary-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2">Material selection analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2">Production volume estimation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2">Technical specifications review</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Design & Engineering</h3>
              <p className="text-secondary-300 mb-4">
                Our engineering team develops comprehensive 3D models and performs advanced simulations to ensure optimal mold performance.
              </p>
              <ul className="space-y-2 text-secondary-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2">3D CAD modeling</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2">Flow and cooling simulation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2">Structural analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Precision Manufacturing</h3>
              <p className="text-secondary-300 mb-4">
                Using advanced CNC equipment and skilled craftsmen, we manufacture your mold with exceptional precision and attention to detail.
              </p>
              <ul className="space-y-2 text-secondary-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2">5-axis CNC machining</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2">EDM technology</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2">Quality inspection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries Served */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Industries Served"
            subtitle="Our mold solutions are used across various sectors"
          />
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industriesServed.map((industry, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-center font-medium text-secondary-800">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Mold Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our experienced team to discuss your mold design and manufacturing needs. We'll help you create the perfect solution for your application.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Request a Consultation
            </Link>
            <Link
              to="/services"
              className="bg-transparent hover:bg-primary-600 border border-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoldSolutions;