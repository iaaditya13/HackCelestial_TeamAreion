import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const freelancers = [
  { id: 1, name: 'John Doe', category: 'Web Dev', rating: 4.8, hourlyRate: 50, completedJobs: 27 },
  { id: 2, name: 'Jane Smith', category: 'UI/UX', rating: 4.9, hourlyRate: 65, completedJobs: 34 },
  { id: 3, name: 'Mike Johnson', category: 'Mobile Dev', rating: 4.7, hourlyRate: 55, completedJobs: 22 },
  { id: 4, name: 'Emily Brown', category: 'Web Dev', rating: 4.6, hourlyRate: 45, completedJobs: 18 },
  { id: 5, name: 'Alex Lee', category: 'UI/UX', rating: 4.8, hourlyRate: 60, completedJobs: 31 },
  { id: 6, name: 'Sarah Wilson', category: 'Mobile Dev', rating: 4.9, hourlyRate: 70, completedJobs: 39 },
];

const categories = ['All', 'Web Dev', 'UI/UX', 'Mobile Dev'];

const CreateGigModal = ({ isOpen, onClose, onSubmit }) => {
  const [gigData, setGigData] = useState({
    title: '',
    description: '',
    duration: '',
    budget: '',
    category: '',
    extraDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGigData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(gigData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-900">Create a Gig</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Gig Title</label>
            <input type="text" id="title" name="title" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter gig title" value={gigData.title} onChange={handleChange} />
          </div>
          {/* Other form fields... */}
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
            <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Gig</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ClientDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredFreelancers = freelancers.filter(
    (freelancer) =>
      (selectedCategory === 'All' || freelancer.category === selectedCategory) &&
      freelancer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleCreateGig = (gigData) => {
    console.log('New gig data:', gigData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="https://media.licdn.com/dms/image/v2/D4D0BAQHiIm-PAWaopw/company-logo_200_200/company-logo_200_200/0/1713469818838?e=2147483647&v=beta&t=l0ouvwLyc2pwP3915PI72NVKxs4baos5ANAooPms2Xw" alt="Logo" />
            </div>
            <div className="flex items-center">
              <Link to="/client-dashboard" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              <Link to="/client-profile" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
              <Link to="/settings" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Settings</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Client Dashboard</h1>

          <div className="mb-6 flex justify-between items-center ">
            <div className="flex-1 max-w-lg ">
              <div className="relative rounded-md shadow-sm ">
                <input type="text" className="form-input block w-full pl-10 sm:text-sm sm:leading-5" placeholder="Search freelancers..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m-2.65 1.35a7 7 0 1111-7c0 3.86-3.14 7-7 7z" />
                  </svg>
                </div>
              </div>
            </div>

            <button onClick={handleOpenModal} className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Create Gig</button>
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Filter by Category</label>
            <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFreelancers.map((freelancer) => (
              <div key={freelancer.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{freelancer.name}</h2>
                  <p className="text-gray-600">{freelancer.category}</p>
                  <p className="text-gray-600">Rating: {freelancer.rating}</p>
                  <p className="text-gray-600">Hourly Rate: ${freelancer.hourlyRate}</p>
                  <p className="text-gray-600">Completed Jobs: {freelancer.completedJobs}</p>
                  <Link to="/freelancer-profile" className="text-indigo-600 hover:underline">View Profile</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CreateGigModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleCreateGig} />
    </div>
  );
};

export default ClientDashboard;
