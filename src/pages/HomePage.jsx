import React from 'react';
import { Search, Shield, Target, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '../components/atoms/Button';

export const HomePage = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Dream Job in Cambodia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              AI-powered job platform with built-in scam detection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<Search size={20} />} 
                onClick={() => onNavigate('/register/candidate')}
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                Start Job Search
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                icon={<Shield size={20} />} 
                onClick={() => onNavigate('/analyze')}
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Try AI Analyzer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose KHFindJob?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield size={32} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI Scam Detection</h3>
              <p className="text-gray-600 mb-4">
                Automatically analyze job postings for red flags and protect yourself from scams
              </p>
              <button 
                onClick={() => onNavigate('/analyze')} 
                className="text-blue-900 font-semibold flex items-center hover:underline"
              >
                See How It Works <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Target size={32} className="text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Job Matching</h3>
              <p className="text-gray-600 mb-4">
                Get personalized job recommendations based on your skills and experience
              </p>
              <button 
                onClick={() => onNavigate('/jobs')} 
                className="text-blue-900 font-semibold flex items-center hover:underline"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 size={32} className="text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Salary Insights</h3>
              <p className="text-gray-600 mb-4">
                Compare salaries and know your worth in the Cambodian job market
              </p>
              <button 
                onClick={() => onNavigate('/analyze')} 
                className="text-blue-900 font-semibold flex items-center hover:underline"
              >
                Check Salary Data <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Next Opportunity?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of job seekers in Cambodia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => onNavigate('/jobs')}
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              Browse Jobs
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => onNavigate('/register/candidate')}
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              Sign Up Free
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};