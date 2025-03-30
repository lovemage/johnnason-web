import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import { Search } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    'All', 
    'Industry Trends', 
    'Technology', 
    'Manufacturing', 
    'Sustainability', 
    'Innovation'
  ];
  
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Sustainable Manufacturing',
      excerpt: 'Discover how sustainable practices are reshaping the manufacturing industry and how companies can adapt to reduce their environmental impact while maintaining productivity and profitability.',
      date: 'June 15, 2025',
      author: 'Emma Wilson',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: '2',
      title: 'Innovations in Polymer Science',
      excerpt: 'Explore the latest advancements in polymer science and how these innovations are creating new possibilities for product development across industries, from aerospace to consumer goods.',
      date: 'May 28, 2025',
      author: 'Robert Chang',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80'
    },
    {
      id: '3',
      title: 'Industry 4.0: Transforming Manufacturing',
      excerpt: 'How smart factories and digital technologies are revolutionizing manufacturing processes, increasing efficiency, and creating new opportunities for innovation and growth.',
      date: 'May 10, 2025',
      author: 'Michael Johnson',
      category: 'Industry Trends',
      image: 'https://images.unsplash.com/photo-1621274281854-15c5a2363445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: '4',
      title: 'Quality Control in Modern Manufacturing',
      excerpt: 'An in-depth look at how advanced technologies and methodologies are enhancing quality control in manufacturing, reducing defects, and improving overall product reliability.',
      date: 'April 22, 2025',
      author: 'Sarah Martinez',
      category: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: '5',
      title: 'The Rise of Bioplastics in Manufacturing',
      excerpt: 'How bioplastics are transforming the manufacturing landscape, offering sustainable alternatives to traditional plastics while meeting performance requirements across industries.',
      date: 'April 5, 2025',
      author: 'David Kim',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: '6',
      title: 'Additive Manufacturing: Beyond Prototyping',
      excerpt: 'Exploring how 3D printing and additive manufacturing technologies have evolved beyond prototyping to become viable solutions for production-grade components.',
      date: 'March 18, 2025',
      author: 'Jennifer Lee',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1581093196077-ca3b0485e327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: '7',
      title: 'Circular Economy in Manufacturing',
      excerpt: 'Understanding the principles of circular economy and how manufacturers are implementing these concepts to reduce waste, conserve resources, and create sustainable business models.',
      date: 'February 25, 2025',
      author: 'Thomas Rodriguez',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: '8',
      title: 'Robotics Integration in Manufacturing',
      excerpt: 'How advanced robotics and automation are being integrated into manufacturing processes to enhance precision, efficiency, and worker safety across various industries.',
      date: 'February 12, 2025',
      author: 'Olivia Chen',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80'
    },
    {
      id: '9',
      title: 'Supply Chain Resilience in Manufacturing',
      excerpt: 'Strategies for building resilient supply chains in the manufacturing sector, addressing vulnerabilities, and ensuring continuity in the face of global disruptions.',
      date: 'January 30, 2025',
      author: 'Christopher Wilson',
      category: 'Industry Trends',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <HeroSection
        title="Industry Insights & News"
        subtitle="Stay updated with the latest trends, innovations, and insights in manufacturing"
        imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Latest Articles"
            subtitle="Insights and expertise from our industry specialists"
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
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
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
          
          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  category={post.category}
                  image={post.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-secondary-600 mb-4">No articles match your search criteria.</p>
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
      
      {/* Newsletter */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8">
              Stay updated with our latest articles, industry insights, and company news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 text-secondary-800 w-full sm:w-auto sm:flex-1 max-w-md"
              />
              <button
                className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 text-primary-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Articles"
            subtitle="Our most popular and influential industry insights"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="Manufacturing Technology"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-sm text-secondary-500">April 15, 2025</span>
                    <span className="inline-block bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-semibold">
                      Technology
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    The Evolution of Smart Manufacturing Technologies
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    An in-depth analysis of how smart manufacturing technologies have evolved over the past decade and their impact on production efficiency, quality control, and business outcomes.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">By James Wilson</span>
                    <a
                      href="/blog/smart-manufacturing"
                      className="text-primary-600 hover:text-primary-700 font-medium transition duration-300"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="Sustainable Manufacturing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-sm text-secondary-500">March 21, 2025</span>
                    <span className="inline-block bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-semibold">
                      Sustainability
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    Achieving Carbon Neutrality in Manufacturing
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    A comprehensive guide to implementing sustainable practices in manufacturing operations to reduce carbon footprint and achieve carbon neutrality while maintaining competitiveness.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">By Emily Chen</span>
                    <a
                      href="/blog/carbon-neutrality"
                      className="text-primary-600 hover:text-primary-700 font-medium transition duration-300"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Explore by Category"
            subtitle="Dive deeper into topics that interest you"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.filter(category => category !== 'All').map(category => (
              <div 
                key={category} 
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => setActiveCategory(category)}
              >
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">{category}</h3>
                <p className="text-secondary-600 text-sm">
                  {filteredPosts.filter(post => post.category === category).length} Articles
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;