import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Briefcase, Clock, DollarSign, Award } from 'lucide-react';

const FreelancerProfile = ({
  name,
  title,
  location,
  hourlyRate,
  rating,
  totalEarnings,
  jobsCompleted,
  onTimeDelivery,
  bio,
  skills,
  education,
  workExperience,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Profile Header */}
      <div className="flex items-center mb-6">
        <img
          src="/placeholder.svg"
          alt={name}
          className="w-32 h-32 rounded-full mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-xl text-gray-600">{title}</p>
          <div className="flex items-center mt-2">
            <MapPin className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-gray-500">{location}</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <DollarSign className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
          <p className="text-lg font-semibold">${hourlyRate?.toFixed(2) || 'N/A'}/hr</p>
          <p className="text-sm text-gray-500">Hourly Rate</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
          <p className="text-lg font-semibold">{rating?.toFixed(1) || 'N/A'}/5.0</p>
          <p className="text-sm text-gray-500">Rating</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Briefcase className="w-6 h-6 text-green-500 mx-auto mb-2" />
          <p className="text-lg font-semibold">{jobsCompleted || 0}</p>
          <p className="text-sm text-gray-500">Jobs Completed</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <p className="text-lg font-semibold">{onTimeDelivery || 0}%</p>
          <p className="text-sm text-gray-500">On-Time Delivery</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">{bio}</p>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
            >
              {skill.name} - {skill.level}
            </span>
          )) || 'No skills listed'}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        {education?.map((edu, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">{edu.degree}</p>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p>
          </div>
        )) || 'No education listed'}
      </div>

      {/* Work Experience Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        {workExperience?.map((exp, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{exp.title}</p>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500">{exp.duration}</p>
            <p className="text-gray-700 mt-1">{exp.description}</p>
          </div>
        )) || 'No work experience listed'}
      </div>

      {/* Earnings and Hire Me Button */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center">
          <Award className="w-6 h-6 text-indigo-500 mr-2" />
          <span className="text-lg font-semibold">${totalEarnings?.toLocaleString() || '0'} earned</span>
        </div>
        <Link to="/hire">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
            Hire Me
          </button>
        </Link>
      </div>
    </div>
  );
};

// Profile Data and Page Rendering
export default function FreelancerProfilePage() {
  const freelancerData = {
    name: "John Doe",
    title: "Full Stack Developer",
    location: "New York, USA",
    hourlyRate: 75,
    rating: 4.9,
    totalEarnings: 150000,
    jobsCompleted: 87,
    onTimeDelivery: 98,
    bio: "Experienced full stack developer with a passion for creating efficient and scalable web applications. Proficient in modern JavaScript frameworks and cloud technologies.",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Node.js", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "AWS", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        year: "2018",
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "MIT",
        year: "2016",
      },
    ],
    workExperience: [
      {
        title: "Senior Full Stack Developer",
        company: "Tech Innovators Inc.",
        duration: "2019 - Present",
        description: "Lead developer for multiple high-profile projects, focusing on scalable architecture and performance optimization.",
      },
      {
        title: "Full Stack Developer",
        company: "WebSolutions Co.",
        duration: "2016 - 2019",
        description: "Developed and maintained various web applications using React, Node.js, and AWS technologies.",
      },
    ],
  };

  return <FreelancerProfile {...freelancerData} />;
}
