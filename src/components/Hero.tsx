import React from "react";
import { Button } from "./";
import { heroContent } from "../constants/data";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {heroContent.headline}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {heroContent.subtext}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={heroContent.ctaHref}
                size="lg"
                className="w-full sm:w-auto"
              >
                {heroContent.ctaText}
              </Button>
              <Button
                href="#about"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">8.5</div>
                <div className="text-sm text-gray-600">Avg Band Score</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Placeholder for hero image */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎓</div>
                    <h3 className="text-2xl font-bold">IELTS Excellence</h3>
                    <p className="text-blue-100">
                      Your path to success starts here
                    </p>
                  </div>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📚</div>
                      <div className="text-sm font-medium">
                        Expert Materials
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">👨‍🏫</div>
                      <div className="text-sm font-medium">
                        Certified Teachers
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🤖</div>
                      <div className="text-sm font-medium">AI Technology</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📊</div>
                      <div className="text-sm font-medium">
                        Progress Tracking
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
