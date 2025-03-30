import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Droplets, Leaf, BarChart, ThumbsUp, Beaker, Gauge, FileSpreadsheet, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const RawMaterials: React.FC = () => {
  const materialCategories = [
    {
      name: 'Thermoplastics',
      description: 'High-performance thermoplastics for various applications requiring durability and precision.',
      image: 'https://images.unsplash.com/photo-1635314924786-f3a501d3bce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      materials: [
        'Polyethylene (PE)',
        'Polypropylene (PP)',
        'Acrylonitrile Butadiene Styrene (ABS)',
        'Polycarbonate (PC)',
        'Polyamide (Nylon)',
        'Acetal (POM)',
      ]
    },
    {
      name: 'Thermosets',
      description: 'Durable thermoset materials with excellent heat resistance and dimensional stability.',
      image: 'https://images.unsplash.com/photo-1611204687033-d9ab4507d4d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      materials: [
        'Epoxy Resins',
        'Phenolic Resins',
        'Polyurethane',
        'Unsaturated Polyester',
        'Melamine Formaldehyde',
        'Silicone',
      ]
    },
    {
      name: 'Engineering Polymers',
      description: 'Advanced polymers engineered for demanding applications and enhanced performance.',
      image: 'https://images.unsplash.com/photo-1581093057302-9c4263be394d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      materials: [
        'Polyetheretherketone (PEEK)',
        'Polytetrafluoroethylene (PTFE)',
        'Liquid Crystal Polymer (LCP)',
        'Polyetherimide (PEI)',
        'Polyphenylene Sulfide (PPS)',
        'Thermoplastic Polyurethane (TPU)',
      ]
    },
    {
      name: 'Sustainable Materials',
      description: 'Eco-friendly materials with reduced environmental impact and sustainable properties.',
      image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      materials: [
        'Polylactic Acid (PLA)',
        'Polyhydroxyalkanoates (PHA)',
        'Bio-based Polyethylene',
        'Bio-based Polyamides',
        'Cellulose Acetate',
        'Recycled Polymers',
      ]
    }
  ];

  const services = [
    {
      icon: <Beaker className="h-6 w-6" />,
      title: 'Material Testing',
      description: 'Comprehensive testing of material properties to ensure quality and performance standards are met.'
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6" />,
      title: 'Material Certification',
      description: 'Full documentation and certification of material properties, composition, and compliance.'
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: 'Quality Analysis',
      description: 'Detailed quality analysis to verify material consistency and identify potential issues.'
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: 'Performance Testing',
      description: 'Simulated testing of materials under various conditions to predict real-world performance.'
    }
  ];

  const benefits = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: 'Consistent Quality',
      description: 'Stringent quality control ensures consistent material properties batch after batch.'
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: 'Sustainability Options',
      description: 'Eco-friendly and sustainable material alternatives for environmentally conscious manufacturing.'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Performance Optimization',
      description: 'Material selection and formulation optimized for your specific application requirements.'
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: 'Technical Support',
      description: 'Expert guidance on material selection, processing parameters, and troubleshooting.'
    }
  ];

  return (
    <div>
      <HeroSection
        title="Premium Raw Materials"
        subtitle="High-quality polymers and compounds for advanced manufacturing"
        imageUrl="https://images.unsplash.com/photo-1581093588401-cdeca0a6e975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary-800">
                Premium Materials for Superior Results
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                At GlobalTech, we provide a comprehensive range of high-quality raw materials designed to meet the most demanding manufacturing requirements. Our materials are carefully selected and tested to ensure exceptional performance, consistency, and reliability.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                Whether you're looking for standard thermoplastics, specialized engineering polymers, or sustainable alternatives, we offer materials with precise specifications and properties tailored to your application needs.
              </p>
              <p className="text-lg text-secondary-600">
                Our materials are backed by comprehensive technical support, detailed documentation, and quality assurance to help you achieve optimal results in your manufacturing processes.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1610822587385-611689d792d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Raw Materials"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Material Categories"
            subtitle="Explore our diverse range of raw materials for various applications"
          />
          
          <div className="space-y-12">
            {materialCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="h-64 lg:h-auto">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-secondary-800 mb-4">{category.name}</h3>
                    <p className="text-secondary-600 mb-6">{category.description}</p>
                    <h4 className="text-xl font-medium text-secondary-800 mb-3">Available Materials:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.materials.map((material, materialIndex) => (
                        <div key={materialIndex} className="flex items-center">
                          <div className="flex-shrink-0 h-4 w-4 rounded-full bg-primary-600 mr-2"></div>
                          <span className="text-secondary-700">{material}</span>
                        </div>
                      ))}
                    </div>
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
            title="Benefits of Our Raw Materials"
            subtitle="Why manufacturers choose GlobalTech for their material needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl border-t-4 border-primary-500">
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2 text-center">{benefit.title}</h3>
                <p className="text-secondary-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Material Selection Guide */}
      <section className="py-16 bg-secondary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Material Selection Guide"
            subtitle="Finding the perfect material for your application"
            light={true}
          />
          
          <div className="bg-secondary-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Considerations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-primary-400 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-secondary-100">
                      <strong className="text-white">Mechanical Properties:</strong> Tensile strength, impact resistance, flexural modulus, elongation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-primary-400 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-secondary-100">
                      <strong className="text-white">Thermal Properties:</strong> Heat deflection temperature, thermal conductivity, coefficient of thermal expansion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-primary-400 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-secondary-100">
                      <strong className="text-white">Chemical Resistance:</strong> Compatibility with chemicals, UV resistance, oxidation resistance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-primary-400 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-secondary-100">
                      <strong className="text-white">Processability:</strong> Melt flow rate, shrinkage, processing temperature range
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-primary-400 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-secondary-100">
                      <strong className="text-white">Regulatory Compliance:</strong> FDA, RoHS, REACH, UL certifications
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Selection Process</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Application Analysis</h4>
                      <p className="text-secondary-300">We analyze your application requirements in detail</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Material Recommendation</h4>
                      <p className="text-secondary-300">Our experts recommend suitable materials based on requirements</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Sample Testing</h4>
                      <p className="text-secondary-300">Test samples to verify material performance</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Production Implementation</h4>
                      <p className="text-secondary-300">Roll out the selected material with full documentation and support</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/contact"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
              >
                Schedule a Material Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Material Testing Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Material Testing Services"
            subtitle="Comprehensive testing to ensure material quality and performance"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2 text-center">{service.title}</h3>
                <p className="text-secondary-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-primary-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">Advanced Laboratory Facilities</h3>
                <p className="text-secondary-600 mb-4">
                  Our state-of-the-art testing laboratories are equipped with advanced instrumentation and staffed by experienced technicians to provide comprehensive material testing and analysis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-secondary-700">Tensile, impact, and flexural testing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-secondary-700">Rheological characterization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-secondary-700">Thermal analysis (DSC, TGA, DMA)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-secondary-700">Chemical composition analysis</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-secondary-700">Aging and weathering tests</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                  alt="Material Testing Laboratory"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Find the Perfect Material for Your Application</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our material specialists to discuss your specific requirements and discover the optimal raw material solution for your manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Request Material Samples
            </Link>
            <Link
              to="/products"
              className="bg-transparent hover:bg-primary-600 border border-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              See Finished Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RawMaterials;