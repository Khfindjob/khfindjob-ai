import React, { useState } from 'react';
import { Building2, User, Mail, Phone, Lock } from 'lucide-react';
import { Button } from '../components/atoms/Button';
import { Input } from '../components/atoms/Input';

export const EmployerRegisterPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Register employer:', formData);
    alert('Registration submitted! Our admin team will review your account within 1-2 business days.');
    onNavigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 size={32} className="text-blue-900" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Post Jobs & Find Talent
            </h1>
            <p className="text-gray-600">
              Register your company to start hiring
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Company Name"
              type="text"
              placeholder="Tech Cambodia Co., Ltd."
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              required
              icon={<Building2 size={20} />}
            />

            <Input
              label="Contact Person"
              type="text"
              placeholder="Sok Pisey"
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              required
              icon={<User size={20} />}
            />

            <Input
              label="Company Email"
              type="email"
              placeholder="hr@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              icon={<Mail size={20} />}
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="+855 23 456 789"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              icon={<Phone size={20} />}
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

            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              icon={<Lock size={20} />}
            />

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Your account will be reviewed by our admin team before approval. 
                This usually takes 1-2 business days.
              </p>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" size="lg" fullWidth>
                Submit for Review
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already registered?{' '}
              <button 
                onClick={() => onNavigate('/login')} 
                className="text-blue-900 font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};