import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { 
  Puzzle, 
  Factory, 
  Search, 
  RefreshCw, 
  ZapOff, 
  Workflow, 
  PackageCheck, 
  Layers, 
  Droplets, 
  BarChart3, 
  Settings, 
  PencilRuler 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: <Puzzle className="h-8 w-8" />,
      title: 'Custom Mold Design & Manufacturing',
      description: 'Expert design and development of custom molds for various applications, using advanced CAD/CAM technology and precision engineering.',
      link: '/mold-solutions',
      linkText: 'Explore Mold Solutions'
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: 'Raw Material Processing',
      description: 'Advanced material processing services including custom formulation, testing, and quality control for optimal performance.',
      link: '/raw-materials',
      linkText: 'View Material Options'
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Precision Manufacturing',
      description: 'High-precision component manufacturing with stringent quality control processes for various industries.',
      link: '/products',
      linkText: 'See Our Products'
    },
    {
      icon: <PencilRuler className="h-8 w-8" />,
      title: 'Product Design & Engineering',
      description: 'Comprehensive product design and engineering services to transform concepts into manufacturable components.',
      link: '/services',
      linkText: 'Learn More'
    }
  ];

  const specializedServices = [
    {
      icon: <Search className="h-6 w-6" />,
      title: 'Quality Testing & Validation',
      description: 'Comprehensive testing and validation services to ensure products meet all required specifications and standards.'
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'Rapid Prototyping',
      description: 'Fast and accurate prototyping services to accelerate your product development cycle.'
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: 'Supply Chain Integration',
      description: 'Seamless integration with your supply chain for efficient production and delivery processes.'
    },
    {
      icon: <ZapOff className="h-6 w-6" />,
      title: 'Energy-Efficient Solutions',
      description: 'Implementation of energy-efficient manufacturing processes and sustainable production methods.'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Production Analytics',
      description: 'Advanced analytics and reporting to optimize manufacturing processes and quality control.'
    },
    {
      icon: <PackageCheck className="h-6 w-6" />,
      title: 'Logistics & Fulfillment',
      description: 'Comprehensive logistics and fulfillment services to ensure timely delivery to your customers.'
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: 'Multi-material Processing',
      description: 'Specialized processing techniques for products requiring multiple materials and complex construction.'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, support, and optimization services for all manufactured components.'
    }
  ];

  const industries = [
    { name: 'Automotive', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
    { name: 'Aerospace', image: 'https://images.unsplash.com/photo-1518704618243-f1080c9a4bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80' },
    { name: 'Consumer Electronics', image: 'https://images.unsplash.com/photo-1578598336057-368525a0da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
    { name: 'Medical Devices', image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' }
  ];

  return (
    <div>
      <HeroSection
        title="Comprehensive Manufacturing Services"
        subtitle="Advanced solutions tailored to your industry needs"
        imageUrl="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
      />

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Core Services"
            subtitle="Comprehensive manufacturing solutions that combine precision engineering, cutting-edge technology, and decades of expertise"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="bg-primary-700 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className="mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary-600 mb-6 text-lg">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-md transition duration-300"
                  >
                    {service.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Service Process"
            subtitle="A structured approach to ensure quality and efficiency"
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            <div className="space-y-16">
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary-600 z-10 flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-16 text-right">
                    <h3 className="text-2xl font-semibold text-secondary-800 mb-3">Initial Consultation</h3>
                    <p className="text-lg text-secondary-600">
                      We start by understanding your specific needs, requirements, and goals to develop a custom manufacturing strategy.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <img
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                      alt="Initial Consultation"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary-600 z-10 flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="md:flex items-center flex-row-reverse">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pl-16 text-left">
                    <h3 className="text-2xl font-semibold text-secondary-800 mb-3">Design & Engineering</h3>
                    <p className="text-lg text-secondary-600">
                      Our expert team develops detailed designs and engineering specifications for your product or component.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pr-16">
                    <img
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                      alt="Design & Engineering"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary-600 z-10 flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-16 text-right">
                    <h3 className="text-2xl font-semibold text-secondary-800 mb-3">Prototyping & Testing</h3>
                    <p className="text-lg text-secondary-600">
                      We create prototypes and conduct rigorous testing to ensure quality, functionality, and compliance.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <img
                      src="https://images.unsplash.com/photo-1581093196277-9f032a0c0a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                      alt="Prototyping & Testing"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary-600 z-10 flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                </div>
                <div className="md:flex items-center flex-row-reverse">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pl-16 text-left">
                    <h3 className="text-2xl font-semibold text-secondary-800 mb-3">Full-Scale Production</h3>
                    <p className="text-lg text-secondary-600">
                      Once approved, we implement full-scale production using advanced manufacturing techniques and quality control measures.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pr-16">
                    <img
                      src="https://images.unsplash.com/photo-1563603377584-36127c7b0ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                      alt="Full-Scale Production"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary-600 z-10 flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                </div>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-16 text-right">
                    <h3 className="text-2xl font-semibold text-secondary-800 mb-3">Delivery & Support</h3>
                    <p className="text-lg text-secondary-600">
                      We manage logistics and provide ongoing support and maintenance to ensure long-term success.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <img
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                      alt="Delivery & Support"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Specialized Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Specialized Services"
            subtitle="Additional services to enhance your manufacturing process"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">{service.title}</h3>
                <p className="text-secondary-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries Served */}
      <section className="py-16 bg-secondary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Industries We Serve"
            subtitle="Tailored manufacturing solutions for various sectors"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-64 object-cover transition duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              Ready to Start Your Next Manufacturing Project?
            </h2>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your specific needs and discover how GlobalTech can deliver the perfect manufacturing solution for your business.
            </p>
            <div className="space-x-4">
              <Link
                to="/contact"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
              >
                Request a Consultation
              </Link>
              <Link
                to="/mold-solutions"
                className="inline-block bg-secondary-800 hover:bg-secondary-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
              >
                Explore Mold Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;