import React from 'react';
import { Card } from './';
import { testimonials } from '../constants/data';

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <Card className="h-full">
      <div className="space-y-4">
        {/* Rating */}
        <div className="flex justify-center">
          {renderStars(testimonial.rating)}
        </div>
        
        {/* Testimonial Text */}
        <blockquote className="text-gray-700 italic text-center leading-relaxed">
          "{testimonial.text}"
        </blockquote>
        
        {/* Student Info */}
        <div className="text-center space-y-2">
          {/* Avatar */}
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          
          {/* Name */}
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          
          {/* Achievement */}
          <div className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
            {testimonial.achievement}
          </div>
        </div>
      </div>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say 
            about their IELTS journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Success Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">8.5</div>
              <div className="text-gray-600">Average Band Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
