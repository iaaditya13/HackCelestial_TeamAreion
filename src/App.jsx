'use client';

import React from 'react';
import { Search, Briefcase, Code, PenTool, Star, ChevronRight } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LoginPage from './components/Security/LoginPage'; 
import SignupPage from "./components/Security/SignuUPage";
import ClientDashboard from './components/Security/ClientDashboard'; 

const MainContent = () => {
  const location = useLocation();
  const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/client-dashboard" element={<ClientDashboard />} /> */}
        <Route path="/" element={
          !isLoginOrSignup && (
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
                  {[{
                    icon: Briefcase,
                    title: '1. Post a job',
                    content: 'Tell us about your project. FreelanceHub connects you with top talent and agencies around the world, or near you.',
                  }, {
                    icon: Code,
                    title: '2. Hire the best',
                    content: 'Compare bids, reviews, and prior work. Interview favorites and hire the best fit.',
                  }, {
                    icon: PenTool,
                    title: '3. Get work done',
                    content: 'Use FreelanceHub platform to chat, share files, and collaborate from your desktop or mobile.',
                  }].map(({ icon: Icon, title, content }, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <Icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h4 className="text-xl font-semibold mb-2">{title}</h4>
                      <p className="text-gray-600">{content}</p>
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
                  {[{
                    name: 'Alice Johnson',
                    title: 'Full Stack Developer',
                    rating: 4.9,
                    jobs: 152,
                  }, {
                    name: 'Bob Smith',
                    title: 'Graphic Designer',
                    rating: 4.8,
                    jobs: 98,
                  }, {
                    name: 'Carol Williams',
                    title: 'Content Writer',
                    rating: 4.7,
                    jobs: 76,
                  }].map(({ name, title, rating, jobs }, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                          {name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold">{name}</h4>
                          <p className="text-sm text-gray-600">{title}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="font-semibold">{rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">{jobs} jobs completed</div>
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
                <div className="grid md:grid-cols-2 gap-8">
                  {[{
                    title: 'E-commerce Website Development',
                    budget: '$1500-$3000',
                    bids: 12,
                    desc: 'Looking for an experienced developer to create a responsive e-commerce website.',
                  }, {
                    title: 'Logo Design for Tech Startup',
                    budget: '$250-$500',
                    bids: 24,
                    desc: 'Need a modern, sleek logo for our AI-powered startup.',
                  }, {
                    title: 'Content Writing for Blog',
                    budget: '$100-$200',
                    bids: 8,
                    desc: 'Seeking a skilled writer to create engaging blog posts on various tech topics.',
                  }].map(({ title, budget, bids, desc }, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-gray-600 mt-2">{desc}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-gray-600 text-sm">{budget}</span>
                        <span className="text-gray-600 text-sm">{bids} bids</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          )
        } />
      </Routes>
    </>
  );
};

export default function MainPage() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#C04AE2] to-[#090A40] bg-clip-text text-transparent">
                Areion
              </h1>
              <nav className="hidden md:flex space-x-4 pt-1">
                <Link to="/find-work" className="text-gray-600 hover:text-blue-600">Find Work</Link>
                <Link to="/client-dashboard" className="text-gray-600 hover:text-blue-600">Hire Freelancers</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </header>

        <MainContent />

        <footer className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600">© 2023 Areion Freelancing Platform. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
