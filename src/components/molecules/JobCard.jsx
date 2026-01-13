import React from 'react';
import { MapPin, Briefcase, Clock, Users, Heart, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { SkillsMatchCircle } from './SkillsMatchCircle';

export const JobCard = ({ job, onSave, isSaved, onApply, userSkills = [] }) => {
  const getScamBadge = (score) => {
    if (score <= 20) return { variant: 'success', icon: <CheckCircle size={14} />, text: 'Very Safe' };
    if (score <= 50) return { variant: 'warning', icon: <AlertTriangle size={14} />, text: 'Be Careful' };
    return { variant: 'danger', icon: <XCircle size={14} />, text: 'High Risk' };
  };

  const scamBadge = getScamBadge(job.scamScore);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-[1.01] cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start space-x-4 flex-1">
          <div className="text-5xl">{job.logo}</div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 mb-1 hover:text-blue-600 transition">
              {job.title}
            </h3>
            <p className="text-gray-700 font-medium">{job.company}</p>
            <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600">
              <span className="flex items-center">
                <MapPin size={14} className="mr-1" />
                {job.location}
              </span>
              <span className="flex items-center">
                <Briefcase size={14} className="mr-1" />
                {job.type}
              </span>
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />
                {job.posted}
              </span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => onSave(job.id)} 
          className="text-gray-400 hover:text-red-500 transition"
        >
          <Heart size={24} fill={isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="flex items-center gap-4 mb-4 py-4 border-y border-gray-100">
        <SkillsMatchCircle percentage={job.matchScore} />
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">
            You have {Math.round(job.skills.length * job.matchScore / 100)} of {job.skills.length} required skills
          </p>
          <div className="flex flex-wrap gap-1">
            {job.skills.map(skill => (
              <Badge 
                key={skill} 
                variant={userSkills.includes(skill) ? 'success' : 'default'}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-2xl font-bold text-blue-900">{job.salary}</p>
            <p className="text-xs text-gray-500">per month</p>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div>
            <p className="text-sm text-gray-600 flex items-center">
              <Users size={16} className="mr-1" /> {job.applicants} applicants
            </p>
          </div>
        </div>
        <Badge variant={scamBadge.variant}>
          {scamBadge.icon} {scamBadge.text}
        </Badge>
      </div>

      <div className="flex gap-2">
        <Button
          variant="primary"
          size="md"
          fullWidth
          icon={<Briefcase size={18} />}
          onClick={() => onApply(job)}
        >
          Easy Apply
        </Button>
        <Button variant="outline" size="md">
          View Details
        </Button>
      </div>
    </div>
  );
};