import React from "react";
import { Card } from "./";
import { features } from "../constants/data";

const FeatureCard: React.FC<{ feature: (typeof features)[0] }> = ({
  feature,
}) => {
  return (
    <Card className="h-full">
      <div className="text-center space-y-4">
        {/* Icon */}
        <div className="text-5xl mb-4">{feature.icon}</div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>

        {/* Benefits */}
        <div className="space-y-2 pt-4">
          {feature.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-gray-700"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

const Features: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our IELTS Program?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines cutting-edge technology with
            expert instruction to help you achieve your target IELTS band score
            efficiently and effectively.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your IELTS Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their
              IELTS goals with our proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Enroll Now
              </a>
              <a
                href="#testimonials"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
