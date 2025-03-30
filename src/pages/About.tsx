import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { CheckCircle, Award, Users, Zap, Briefcase as BriefcaseBusiness, Factory } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    {
      year: '1995',
      title: 'Company Founded',
      description: 'GlobalTech was established with a vision to revolutionize industrial manufacturing.'
    },
    {
      year: '2005',
      title: 'International Expansion',
      description: 'Expanded operations to Asia and Europe, establishing a global presence.'
    },
    {
      year: '2012',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001 and ISO 14001 certifications for quality and environmental management.'
    },
    {
      year: '2018',
      title: 'Advanced Facility',
      description: 'Opened state-of-the-art 200,000 sq. ft. manufacturing facility.'
    },
    {
      year: '2022',
      title: 'Industry 4.0 Integration',
      description: 'Implemented comprehensive Industry 4.0 technologies across all production lines.'
    },
    {
      year: '2025',
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive sustainability program with carbon-neutral manufacturing goals.'
    }
  ];

  const teamMembers = [
    {
      name: 'David Zhang',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      bio: 'With over 25 years of experience in industrial manufacturing, David has led GlobalTech to become an industry leader through strategic vision and innovation.'
    },
    {
      name: 'Michelle Rodriguez',
      position: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
      bio: 'Michelle oversees all operational aspects of GlobalTech, ensuring efficiency, quality, and continuous improvement across all facilities.'
    },
    {
      name: 'Robert Chen',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      bio: 'Robert leads our R&D and engineering teams, driving technological innovation and developing cutting-edge manufacturing solutions.'
    },
    {
      name: 'Jennifer Kim',
      position: 'Director of Global Sales',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
      bio: 'Jennifer manages our global sales strategy, building strong client relationships and expanding our international presence.'
    }
  ];

  const values = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product quality to customer service.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, both internally and with our clients and partners.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We continuously innovate to develop better solutions and stay ahead of industry trends.'
    },
    {
      icon: <BriefcaseBusiness className="h-6 w-6" />,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices.'
    }
  ];

  return (
    <div>
      <HeroSection
        title="About GlobalTech Industries"
        subtitle="Leading the way in precision manufacturing for over 30 years"
        imageUrl="https://images.unsplash.com/photo-1621619856624-43c2781c542a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />
      
      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary-800">
                Our Company Story
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Founded in 1995, GlobalTech Industries began as a small precision manufacturing shop with a big vision: to revolutionize industrial component production through technology, quality, and customer-focused solutions.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                Today, we've grown into a global leader with manufacturing facilities across three continents, serving clients in automotive, aerospace, electronics, medical, and consumer goods industries. Our commitment to excellence and innovation remains at the core of everything we do.
              </p>
              <p className="text-lg text-secondary-600">
                With over 1,500 skilled employees worldwide, we combine cutting-edge technology with decades of manufacturing expertise to deliver exceptional products that meet the most demanding specifications.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="GlobalTech Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Vision & Mission</h2>
            <div className="bg-primary-800 p-8 rounded-lg mb-10">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-xl">
                To be the global leader in innovative manufacturing solutions, setting industry standards for quality, efficiency, and sustainable practices.
              </p>
            </div>
            <div className="bg-primary-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-xl">
                We empower businesses with precision-engineered components and manufacturing solutions that drive innovation, enhance performance, and create sustainable value for our clients, employees, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide everything we do at GlobalTech"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl border-t-4 border-primary-500">
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Journey"
            subtitle="Three decades of growth, innovation, and global expansion"
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:block w-1/2"></div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-primary-600 z-10">
                      <Factory className="h-4 w-4 text-white" />
                    </div>
                    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md md:ml-8 md:mr-8">
                      <div className="flex items-center mb-2">
                        <div className="bg-primary-100 text-primary-800 text-xl font-bold px-4 py-1 rounded mr-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-secondary-800">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-secondary-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet the experts guiding GlobalTech's vision and strategy"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-secondary-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Certifications & Accreditations"
            subtitle="Our commitment to quality and standards"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">ISO 9001:2015</h3>
              <p className="text-secondary-600">
                Certified quality management system ensuring consistent product quality and customer satisfaction.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">ISO 14001:2015</h3>
              <p className="text-secondary-600">
                Environmental management certification demonstrating our commitment to sustainable practices.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">IATF 16949:2016</h3>
              <p className="text-secondary-600">
                Automotive quality management system certification for suppliers in the automotive industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Presence */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Global Presence"
            subtitle="Serving clients worldwide with strategic locations across continents"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80"
                alt="Global Map"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-secondary-800 mb-6">
                Strategic Global Locations
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="font-semibold text-primary-600">US</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-secondary-800 mb-1">North America</h4>
                    <p className="text-secondary-600">
                      Headquarters in Detroit, Michigan with manufacturing facilities in Chicago and Mexico City.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="font-semibold text-primary-600">EU</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-secondary-800 mb-1">Europe</h4>
                    <p className="text-secondary-600">
                      Advanced manufacturing center in Stuttgart, Germany and R&D facility in Milan, Italy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="font-semibold text-primary-600">AS</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-secondary-800 mb-1">Asia</h4>
                    <p className="text-secondary-600">
                      Primary production facilities in Shenzhen, China and innovation center in Singapore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;