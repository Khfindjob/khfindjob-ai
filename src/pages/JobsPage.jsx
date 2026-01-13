import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '../components/atoms/Button';
import { JobCard } from '../components/molecules/JobCard';

export const JobsPage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [savedJobs, setSavedJobs] = useState([]);
  const [filters, setFilters] = useState([
    { id: 'remote', label: 'Remote', active: false },
    { id: 'fulltime', label: 'Full-time', active: false },
    { id: 'highsalary', label: '$1,000+', active: false },
    { id: 'phnompenh', label: 'Phnom Penh', active: false },
  ]);

  const userSkills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'];

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Cambodia',
      logo: '🏢',
      location: 'Phnom Penh',
      type: 'Full-time',
      salary: '$1,200 - $1,800',
      posted: '2 days ago',
      applicants: 25,
      skills: ['React', 'JavaScript', 'CSS', 'TypeScript'],
      scamScore: 15,
      matchScore: 85,
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Digital Agency KH',
      logo: '📱',
      location: 'Siem Reap',
      type: 'Full-time',
      salary: '$800 - $1,200',
      posted: '1 week ago',
      applicants: 42,
      skills: ['SEO', 'Content Marketing', 'Social Media'],
      scamScore: 8,
      matchScore: 45,
    },
    {
      id: 3,
      title: 'Data Entry - Work From Home',
      company: 'QuickCash International',
      logo: '💰',
      location: 'Remote',
      type: 'Part-time',
      salary: '$3,000 - $5,000',
      posted: '3 hours ago',
      applicants: 234,
      skills: ['Typing', 'Excel'],
      scamScore: 92,
      matchScore: 20,
    },
  ];

  const toggleFilter = (id) => {
    setFilters(filters.map(f => f.id === id ? { ...f, active: !f.active } : f));
  };

  const handleSave = (jobId) => {
    setSavedJobs(savedJobs.includes(jobId) 
      ? savedJobs.filter(id => id !== jobId) 
      : [...savedJobs, jobId]
    );
  };

  const handleApply = (job) => {
    console.log('Applying to:', job);
    alert(`Easy Apply feature coming soon for: ${job.title}`);
  };

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={20} 
              />
              <input
                type="text"
                placeholder="Search jobs by title, skill, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>
            <Button variant="primary" size="lg" icon={<Search size={20} />}>
              Search
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-gray-700">Filters:</span>
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter.active 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
                {filter.active && <X size={14} className="inline ml-1" />}
              </button>
            ))}
            <button className="px-4 py-2 rounded-full text-sm font-medium text-blue-600 hover:bg-blue-50 transition">
              All filters +
            </button>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Recommended Jobs</h1>
            <p className="text-gray-600 mt-1">
              {jobs.length} jobs found • Based on your profile
            </p>
          </div>
          <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none">
            <option>Best Match</option>
            <option>Most Recent</option>
            <option>Highest Salary</option>
          </select>
        </div>

        <div className="space-y-6">
          {jobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              isSaved={savedJobs.includes(job.id)}
              onSave={handleSave}
              onApply={handleApply}
              userSkills={userSkills}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </div>
      </div>
    </div>
  );
};