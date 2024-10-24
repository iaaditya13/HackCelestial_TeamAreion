// MainContent.jsx
import React from 'react';
import { Search, Briefcase, Code, PenTool, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Hire the best freelancers for any job, online.</h2>
        <p className="text-xl text-gray-600 mb-8">Millions of people use FreelanceHub to turn their ideas into reality.</p>
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Try 'build responsive website'"
              className="w-full pl-10 pr-20 py-3 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {['PHP', 'JavaScript', 'WordPress', 'HTML', 'CSS', 'Python', 'React', 'Node.js'].map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">How it works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Briefcase, title: '1. Post a job', content: 'Tell us about your project. FreelanceHub connects you with top talent and agencies around the world, or near you.' },
            { icon: Code, title: '2. Hire the best', content: 'Compare bids, reviews, and prior work. Interview favorites and hire the best fit.' },
            { icon: PenTool, title: '3. Get work done', content: 'Use FreelanceHub platform to chat, share files, and collaborate from your desktop or mobile.' }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <item.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Featured Freelancers</h3>
          <Link to="/client-dashboard" className="text-blue-600 hover:underline flex items-center">
            View All <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Alice Johnson', title: 'Full Stack Developer', rating: 4.9, jobs: 152 },
            { name: 'Bob Smith', title: 'Graphic Designer', rating: 4.8, jobs: 98 },
            { name: 'Carol Williams', title: 'Content Writer', rating: 4.7, jobs: 76 },
          ].map((freelancer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {freelancer.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{freelancer.name}</h4>
                  <p className="text-sm text-gray-600">{freelancer.title}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="font-semibold">{freelancer.rating}</span>
                </div>
                <div className="text-sm text-gray-600">{freelancer.jobs} jobs completed</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Recent Projects</h3>
          <button className="text-blue-600 hover:underline flex items-center">
            View All <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="mb-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full mr-2">All</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full mr-2">Web Development</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full mr-2">Design</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-full">Writing</button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
