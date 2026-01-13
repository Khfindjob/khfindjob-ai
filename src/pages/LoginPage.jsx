import React, { useState } from 'react';
import { Shield, Mail, Lock } from 'lucide-react';
import { Button } from '../components/atoms/Button';
import { Input } from '../components/atoms/Input';

export const LoginPage = ({ onNavigate, setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Login:', formData);
    
    const mockUser = {
      name: 'Sok Pisey',
      email: formData.email,
      profileComplete: 75,
    };
    
    if (setUser) {
      setUser(mockUser);
    }
    
    alert('Login successful!');
    onNavigate('/jobs');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={32} className="text-blue-900" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Login to continue your job search
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="pisey@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              icon={<Mail size={20} />}
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              icon={<Lock size={20} />}
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="rounded border-gray-300 text-blue-900 focus:ring-blue-500" 
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button 
                type="button" 
                className="text-sm text-blue-900 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" size="lg" fullWidth>
                Login
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button 
                onClick={() => onNavigate('/register/candidate')} 
                className="text-blue-900 font-semibold hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              For employers:{' '}
              <button 
                onClick={() => onNavigate('/register/employer')} 
                className="text-blue-900 hover:underline"
              >
                Register your company
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
