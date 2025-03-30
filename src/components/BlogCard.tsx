import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  title,
  excerpt,
  date,
  author,
  category,
}) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link to={`/blog/${id}`} className="block h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </Link>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2 text-sm text-secondary-500">
          <span>{date}</span>
          <span className="inline-block bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-semibold">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-secondary-800 mb-2">
          <Link to={`/blog/${id}`} className="hover:text-primary-600 transition-colors duration-300">
            {title}
          </Link>
        </h3>
        <p className="text-secondary-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-secondary-500">By {author}</span>
          <Link
            to={`/blog/${id}`}
            className="text-primary-600 hover:text-primary-700 font-medium transition duration-300"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;