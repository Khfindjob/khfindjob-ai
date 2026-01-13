import React, { useState } from 'react';
import { Shield, Bell, Menu, X, User } from 'lucide-react';
import { Button } from '../atoms/Button';

export const Navigation = ({ currentPage, onNavigate, user }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => onNavigate('/')} 
                className="flex items-center space-x-2"
              >
                <Shield size={32} className="text-blue-900" />
                <span className="text-2xl font-bold text-blue-900">KHFindJob</span>
              </button>
              <div className="flex space-x-1">
                <button 
                  onClick={() => onNavigate('/jobs')} 
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    currentPage === '/jobs' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Find Jobs
                </button>
                <button 
                  onClick={() => onNavigate('/analyze')} 
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    currentPage === '/analyze' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  AI Analyzer
                </button>
                <button 
                  onClick={() => onNavigate('/register/employer')} 
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    currentPage === '/register/employer' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  For Employers
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Bell size={24} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">Profile {user.profileComplete}%</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={() => onNavigate('/login')}>
                    Login
                  </Button>
                  <Button variant="primary" onClick={() => onNavigate('/register/candidate')}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            onClick={() => onNavigate('/')} 
            className="flex items-center space-x-2"
          >
            <Shield size={28} className="text-blue-900" />
            <span className="text-xl font-bold text-blue-900">KHFindJob</span>
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 p-4 space-y-2">
            <button
              onClick={() => { onNavigate('/jobs'); setMobileMenuOpen(false); }}
              className="flex items-center w-full px-4 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-100"
            >
              Find Jobs
            </button>
            <button
              onClick={() => { onNavigate('/analyze'); setMobileMenuOpen(false); }}
              className="flex items-center w-full px-4 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-100"
            >
              AI Analyzer
            </button>
            <button
              onClick={() => { onNavigate('/register/employer'); setMobileMenuOpen(false); }}
              className="flex items-center w-full px-4 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-100"
            >
              For Employers
            </button>
          </div>
        )}
      </nav>
    </>
  );
};