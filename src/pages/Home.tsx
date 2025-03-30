import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/ProductCard';
import Testimonial from '../components/Testimonial';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { Award, Package, Factory, Globe, CheckCircle, Zap, TimerReset, Puzzle } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Quality Assurance',
      description: 'Our products meet the highest international quality standards with ISO 9001 certification.'
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: 'Custom Solutions',
      description: 'Tailor-made manufacturing solutions that perfectly fit your specific requirements.'
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: 'Advanced Facilities',
      description: 'State-of-the-art manufacturing facilities with the latest technology and equipment.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Distribution',
      description: 'Streamlined logistics and distribution network to serve clients worldwide.'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1621619856624-43c2781c542a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      title: 'Industrial Molds',
      description: 'High-precision injection molds for automotive and consumer electronics applications.',
      category: 'Mold Solutions',
      link: '/mold-solutions'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      title: 'Premium Polymers',
      description: 'Advanced polymer materials for various industrial applications with superior quality.',
      category: 'Raw Materials',
      link: '/raw-materials'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1610566310365-7fdd3f255942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      title: 'Precision Components',
      description: 'Engineered precision parts and components for critical applications.',
      category: 'Finished Products',
      link: '/products'
    }
  ];

  const testimonials = [
    {
      content: 'GlobalTech has consistently provided us with high-quality components that meet our exact specifications. Their attention to detail and commitment to quality is unmatched in the industry.',
      author: 'Michael Chen',
      position: 'Procurement Director',
      company: 'Automotive Innovations Inc.'
    },
    {
      content: "We have been working with GlobalTech for over 5 years, and they have been an invaluable partner in helping us bring our products to market faster with their efficient manufacturing solutions.",
      author: 'Sarah Johnson',
      position: 'Operations Manager',
      company: 'TechSolutions Ltd.'
    },
    {
      content: 'The custom molds created by GlobalTech significantly improved our production efficiency and product quality. Their engineering team is responsive and innovative.',
      author: 'David Rodriguez',
      position: 'Manufacturing Director',
      company: 'Consumer Essentials Co.'
    }
  ];

  const latestBlogs = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      title: 'The Future of Sustainable Manufacturing',
      excerpt: 'Discover how sustainable practices are reshaping the manufacturing industry and how GlobalTech is leading the way in environmentally responsible production.',
      date: 'June 15, 2025',
      author: 'Emma Wilson',
      category: 'Industry Trends'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      title: 'Innovations in Polymer Science',
      excerpt: 'Explore the latest advancements in polymer science and how these innovations are creating new possibilities for product development across industries.',
      date: 'May 28, 2025',
      author: 'Robert Chang',
      category: 'Technology'
    }
  ];

  return (
    <div>
      <HeroSection
        title="Precision Manufacturing for Global Industries"
        subtitle="Advanced manufacturing solutions with uncompromising quality and innovation"
        imageUrl="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        buttonText="Discover Our Solutions"
        buttonLink="/services"
      />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose GlobalTech"
            subtitle="We combine cutting-edge technology with decades of manufacturing expertise to deliver exceptional results"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="GlobalTech Facility"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary-800">
                Global Manufacturing Excellence Since 1995
              </h2>
              <p className="text-secondary-600 mb-6">
                For over three decades, GlobalTech has been at the forefront of industrial manufacturing, 
                providing innovative solutions to clients worldwide. Our commitment to quality, precision, 
                and customer satisfaction has established us as a trusted partner across diverse industries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-1" />
                  <span>30+ years of industry experience</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-1" />
                  <span>ISO 9001 & 14001 certified</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-1" />
                  <span>Global distribution network</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-1" />
                  <span>Advanced R&D capabilities</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-secondary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Core Services"
            subtitle="Comprehensive manufacturing solutions tailored to your industry needs"
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary-800 p-6 rounded-lg transition-all duration-300 hover:bg-secondary-700">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mb-4">
                <Puzzle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Mold Design</h3>
              <p className="text-secondary-300 mb-4">
                Expert design and development of custom molds for various applications and industries.
              </p>
              <Link
                to="/mold-solutions"
                className="text-primary-400 hover:text-primary-300 inline-flex items-center"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
            <div className="bg-secondary-800 p-6 rounded-lg transition-all duration-300 hover:bg-secondary-700">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Material Processing</h3>
              <p className="text-secondary-300 mb-4">
                Advanced material processing with cutting-edge technology for optimal performance.
              </p>
              <Link
                to="/raw-materials"
                className="text-primary-400 hover:text-primary-300 inline-flex items-center"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
            <div className="bg-secondary-800 p-6 rounded-lg transition-all duration-300 hover:bg-secondary-700">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mb-4">
                <Factory className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precision Manufacturing</h3>
              <p className="text-secondary-300 mb-4">
                High-precision component manufacturing with stringent quality control processes.
              </p>
              <Link
                to="/products"
                className="text-primary-400 hover:text-primary-300 inline-flex items-center"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
            <div className="bg-secondary-800 p-6 rounded-lg transition-all duration-300 hover:bg-secondary-700">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mb-4">
                <TimerReset className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Prototyping</h3>
              <p className="text-secondary-300 mb-4">
                Fast and accurate prototyping services to accelerate your product development cycle.
              </p>
              <Link
                to="/services"
                className="text-primary-400 hover:text-primary-300 inline-flex items-center"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Products"
            subtitle="Discover our range of high-quality manufacturing solutions designed for excellence"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                category={product.category}
                link={product.link}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Hear from the companies that rely on our manufacturing expertise"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Manufacturing Process?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with GlobalTech and experience the difference that quality, precision, and innovation can make for your products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Contact Us Today
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

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Latest Industry Insights"
            subtitle="Stay updated with our latest news, trends, and innovations in manufacturing"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                image={blog.image}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.date}
                author={blog.author}
                category={blog.category}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;