import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, User, Tag, ChevronLeft, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would normally come from an API or CMS
  // For this demo, we'll just use static content based on the ID
  const blogPost = {
    id: id,
    title: 'The Future of Sustainable Manufacturing',
    content: `
      <p class="lead">The manufacturing industry is undergoing a significant transformation as sustainability becomes an increasingly critical factor in business operations and strategy.</p>
      
      <p>With growing concerns about climate change, resource scarcity, and environmental regulations, manufacturers are reimagining their processes, materials, and overall approach to production. This shift isn't just about compliance or corporate social responsibility—it's becoming a key driver of innovation, efficiency, and competitive advantage.</p>
      
      <h2>The Imperative for Sustainable Manufacturing</h2>
      
      <p>Several factors are accelerating the transition to sustainable manufacturing:</p>
      
      <ul>
        <li><strong>Regulatory Pressure:</strong> Governments worldwide are implementing stricter environmental regulations and carbon pricing mechanisms.</li>
        <li><strong>Consumer Demand:</strong> Today's consumers increasingly prefer products from companies with demonstrated environmental responsibility.</li>
        <li><strong>Investor Expectations:</strong> ESG (Environmental, Social, and Governance) criteria are becoming central to investment decisions.</li>
        <li><strong>Supply Chain Requirements:</strong> Large companies are extending sustainability requirements to their suppliers.</li>
        <li><strong>Resource Constraints:</strong> Rising costs and potential scarcity of raw materials are driving more efficient use of resources.</li>
      </ul>
      
      <p>These pressures are transforming sustainability from a peripheral consideration to a core business imperative for manufacturers.</p>
      
      <h2>Key Trends in Sustainable Manufacturing</h2>
      
      <h3>1. Circular Economy Models</h3>
      
      <p>The linear "take-make-dispose" model is giving way to circular approaches that keep resources in use for as long as possible. Manufacturers are designing products for disassembly, recycling, and remanufacturing, creating closed-loop systems that minimize waste and maximize value recovery.</p>
      
      <h3>2. Renewable Energy Integration</h3>
      
      <p>Manufacturing facilities are increasingly powered by renewable energy sources like solar, wind, and hydroelectric power. On-site generation, power purchase agreements, and renewable energy certificates are enabling manufacturers to reduce their carbon footprint while often reducing energy costs over the long term.</p>
      
      <h3>3. Advanced Materials</h3>
      
      <p>The development of bio-based polymers, recycled composites, and other sustainable materials is enabling manufacturers to reduce reliance on petroleum-based inputs while maintaining or improving product performance. These materials often have lower embodied carbon and reduced environmental impact throughout their lifecycle.</p>
      
      <h3>4. Water Conservation and Management</h3>
      
      <p>Water-intensive industries are implementing closed-loop systems, advanced filtration technologies, and process optimizations to dramatically reduce water consumption and wastewater discharge, addressing both environmental concerns and potential water scarcity issues.</p>
      
      <h2>Technology Enablers for Sustainable Manufacturing</h2>
      
      <p>Several technologies are accelerating the transition to more sustainable manufacturing:</p>
      
      <ul>
        <li><strong>Digital Twins and Simulation:</strong> Virtual modeling of products and processes enables optimization before physical implementation, reducing material waste and energy consumption.</li>
        <li><strong>Industrial IoT and AI:</strong> Connected sensors and machine learning algorithms enable real-time monitoring and optimization of resource usage and emissions.</li>
        <li><strong>Additive Manufacturing:</strong> 3D printing technologies can reduce material waste by up to 90% compared to subtractive methods for certain applications.</li>
        <li><strong>Blockchain for Traceability:</strong> Distributed ledger technologies enable transparent tracking of materials throughout the supply chain, verifying sustainability claims and identifying opportunities for improvement.</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      
      <p>While the benefits of sustainable manufacturing are clear, significant challenges remain:</p>
      
      <ul>
        <li><strong>Initial Investment:</strong> Many sustainable technologies require upfront capital that can be difficult to justify on short-term ROI criteria.</li>
        <li><strong>Complex Supply Chains:</strong> Manufacturers often have limited visibility and control over the environmental impact of their extended supply networks.</li>
        <li><strong>Technical Limitations:</strong> Some processes still lack viable sustainable alternatives that match conventional methods in performance and cost.</li>
        <li><strong>Skills Gap:</strong> The transition requires workers with new skill sets in areas like industrial ecology, green chemistry, and circular design.</li>
      </ul>
      
      <p>However, these challenges also represent opportunities for companies that can develop innovative solutions. Early movers in sustainable manufacturing are finding competitive advantages through reduced costs, enhanced brand reputation, access to green financing, and resilience against future environmental regulations and resource constraints.</p>
      
      <h2>The Path Forward</h2>
      
      <p>For manufacturers looking to enhance their sustainability, several approaches have proven effective:</p>
      
      <ol>
        <li><strong>Lifecycle Assessment (LCA):</strong> Conduct comprehensive analyses to identify environmental hotspots across the entire product lifecycle.</li>
        <li><strong>Science-Based Targets:</strong> Set ambitious but achievable goals aligned with the latest climate science and global agreements.</li>
        <li><strong>Collaborative Innovation:</strong> Partner with suppliers, customers, research institutions, and even competitors to develop industry-wide sustainable solutions.</li>
        <li><strong>Circular Design Principles:</strong> Embed sustainability considerations from the earliest stages of product and process design.</li>
        <li><strong>Transparency and Reporting:</strong> Measure and disclose environmental performance using recognized frameworks to build trust and accountability.</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>Sustainable manufacturing is no longer just an ethical choice—it's becoming an economic necessity. As environmental pressures intensify and stakeholder expectations evolve, manufacturers that proactively embrace sustainability will be better positioned to thrive in a resource-constrained, carbon-conscious world.</p>
      
      <p>The transition requires significant changes to established practices, but it also offers unprecedented opportunities for innovation, efficiency, and value creation. By reimagining products, processes, and business models through the lens of sustainability, manufacturers can secure their competitive position while contributing to a more sustainable future.</p>
    `,
    date: 'June 15, 2025',
    author: 'Emma Wilson',
    authorPosition: 'Director of Sustainability',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
    relatedPosts: [
      {
        id: '5',
        title: 'The Rise of Bioplastics in Manufacturing',
        image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
      },
      {
        id: '7',
        title: 'Circular Economy in Manufacturing',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
      }
    ]
  };

  return (
    <div>
      {/* Hero Image */}
      <div className="w-full h-96 relative">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center text-white mb-4 hover:text-primary-300 transition-colors duration-300">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
              {blogPost.title}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-secondary-600 mb-8 gap-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 text-primary-600" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 mr-2 text-primary-600" />
                <span>{blogPost.category}</span>
              </div>
            </div>
            
            {/* Article Content */}
            <article className="prose lg:prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </article>
            
            {/* Share Article */}
            <div className="border-t border-b border-gray-200 py-6 mb-12">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-medium text-secondary-800">Share this article:</span>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="bg-gray-50 rounded-lg p-6 mb-12">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-secondary-800">{blogPost.author}</h3>
                  <p className="text-primary-600 mb-4">{blogPost.authorPosition}</p>
                  <p className="text-secondary-600">
                    Emma is an industry expert with over 15 years of experience in sustainable manufacturing practices. 
                    She leads GlobalTech's sustainability initiatives and regularly speaks at industry conferences on 
                    environmental innovation in manufacturing.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Related Articles */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {blogPost.relatedPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-secondary-800 group-hover:text-primary-600 transition-colors duration-300">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog?category=Industry+Trends" className="flex items-center text-secondary-700 hover:text-primary-600 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      Industry Trends
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog?category=Technology" className="flex items-center text-secondary-700 hover:text-primary-600 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog?category=Manufacturing" className="flex items-center text-secondary-700 hover:text-primary-600 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog?category=Sustainability" className="flex items-center text-secondary-700 hover:text-primary-600 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      Sustainability
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog?category=Innovation" className="flex items-center text-secondary-700 hover:text-primary-600 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      Innovation
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary-700 text-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-6">Get the latest industry insights and news delivered to your inbox.</p>
                <form>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 text-secondary-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-primary-700 hover:bg-gray-100 px-4 py-2 rounded-md font-medium transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">Need Manufacturing Solutions?</h3>
                <p className="text-secondary-600 mb-6">
                  Our team of experts is ready to help with all your manufacturing needs.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-primary-600 hover:bg-primary-700 text-white font-medium px-4 py-2 rounded-md transition duration-300"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;