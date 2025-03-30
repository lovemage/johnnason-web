import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  category,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-5">
        <div className="mb-2">
          <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-secondary-800 mb-2">{title}</h3>
        <p className="text-secondary-600 mb-4 line-clamp-2">{description}</p>
        <Link
          to={link}
          className="inline-block text-primary-600 hover:text-primary-700 font-medium transition duration-300"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;