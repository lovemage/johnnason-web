import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  content,
  author,
  position,
  company,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <Quote className="h-10 w-10 text-primary-300 mb-4" />
      <blockquote className="text-secondary-600 mb-6">
        "{content}"
      </blockquote>
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-secondary-800">{author}</p>
          <p className="text-sm text-secondary-500">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;