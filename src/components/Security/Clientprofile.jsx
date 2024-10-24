import { useState } from 'react';
import { Star, Briefcase, MessageSquare, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

const ClientProfile = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const client = {
    name: 'John Doe',
    location: 'San Francisco, CA',
    projectsCompleted: 15,
    rating: 4.8,
    profileImage: '/placeholder.svg',
    description:
      'Experienced client in web and mobile app development. Always looking for innovative solutions for new projects.',
  };

  const projects = [
    { id: 1, title: 'E-commerce Website', budget: '$3000', status: 'Completed' },
    { id: 2, title: 'Mobile App UI/UX Design', budget: '$1500', status: 'Ongoing' },
    { id: 3, title: 'WordPress Blog Setup', budget: '$800', status: 'Completed' },
  ];

  const reviews = [
    { id: 1, freelancer: 'Alice Smith', rating: 5, comment: 'Great experience working with John!' },
    { id: 2, freelancer: 'Michael Scott', rating: 4, comment: 'Professional and clear in requirements.' },
  ];

  const tabs = ['Overview', 'Projects', 'Reviews'];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Profile Header */}
        <div className="flex items-center mb-6">
          <Avatar className="h-24 w-24 mr-4">
            <AvatarImage src={client.profileImage} alt={client.name} />
            <AvatarFallback>{client.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{client.name}</h1>
            <p className="text-gray-600">{client.location}</p>
            <p className="text-gray-500">{client.description}</p>
            <div className="mt-2 flex items-center">
              <div className="text-yellow-400 flex items-center mr-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className={`h-5 w-5 ${index < client.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <span className="ml-2 text-gray-600">{client.rating} ({client.projectsCompleted} projects)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg py-2 px-4 font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'Overview' && (
            <div className="text-gray-700">
              <p>{client.description}</p>
            </div>
          )}

          {activeTab === 'Projects' && (
            <div>
              {projects.length > 0 ? (
                <div className="grid gap-6">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-600">Budget: {project.budget}</p>
                        <p className="text-gray-500">Status: {project.status}</p>
                      </div>
                      <Briefcase className="text-indigo-500 h-8 w-8" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No projects available.</p>
              )}
            </div>
          )}

          {activeTab === 'Reviews' && (
            <div>
              {reviews.length > 0 ? (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <User className="h-6 w-6 text-indigo-500 mr-2" />
                        <h4 className="text-lg font-semibold">{review.freelancer}</h4>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={`h-5 w-5 ${index < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No reviews available.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
