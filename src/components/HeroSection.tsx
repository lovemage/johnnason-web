import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageUrl,
  buttonText,
  buttonLink = '/',
  overlay = true,
}) => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-[500px] md:h-[600px]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {overlay && (
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        )}
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-white mb-8">{subtitle}</p>
            {buttonText && (
              <Link
                to={buttonLink}
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;