import React from 'react';
import { Shield } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield size={32} className="text-blue-400" />
              <span className="text-xl font-bold">KHFindJob</span>
            </div>
            <p className="text-gray-400">
              AI-powered job platform for Cambodia with scam detection.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">For Job Seekers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => onNavigate('/jobs')} 
                  className="hover:text-white transition"
                >
                  Browse Jobs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/analyze')} 
                  className="hover:text-white transition"
                >
                  AI Analyzer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/register/candidate')} 
                  className="hover:text-white transition"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">For Employers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => onNavigate('/register/employer')} 
                  className="hover:text-white transition"
                >
                  Post Jobs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/login')} 
                  className="hover:text-white transition"
                >
                  Employer Login
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-white transition">
                  About Us
                </button>
              </li>
              <li>
                <button className="hover:text-white transition">
                  Contact
                </button>
              </li>
              <li>
                <button className="hover:text-white transition">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-white transition">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 KHFindJob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
