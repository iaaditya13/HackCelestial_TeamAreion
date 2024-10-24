import { useState } from 'react';
import { Link } from 'react-router-dom';

const gigs = [
  { id: 1, title: 'Web Application Development', category: 'Web Dev', budget: '$1000-$2000', duration: '2 weeks', clientRating: 4.8 },
  { id: 2, title: 'UI/UX Design for Mobile App', category: 'UI/UX', budget: '$500-$1000', duration: '1 week', clientRating: 4.9 },
  { id: 3, title: 'E-commerce Website', category: 'Web Dev', budget: '$2000-$3000', duration: '3 weeks', clientRating: 4.7 },
  { id: 4, title: 'Mobile App Development', category: 'Mobile Dev', budget: '$3000-$5000', duration: '4 weeks', clientRating: 4.6 },
  { id: 5, title: 'Logo Design', category: 'UI/UX', budget: '$200-$500', duration: '3 days', clientRating: 4.8 },
  { id: 6, title: 'WordPress Website', category: 'Web Dev', budget: '$500-$1000', duration: '1 week', clientRating: 4.5 },
];

const categories = ['All', 'Web Dev', 'UI/UX', 'Mobile Dev'];

const SubmitOfferModal = ({ isOpen, onClose, onSubmit, gigTitle }) => {
  // (SubmitOfferModal logic here)
};

const FreelancerDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGig, setSelectedGig] = useState(null);

  const filteredGigs = gigs.filter(
    (gig) => (selectedCategory === 'All' || gig.category === selectedCategory) && gig.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (gig) => {
    setSelectedGig(gig);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGig(null);
  };

  const handleSubmitOffer = (offerData) => {
    console.log('New offer data:', offerData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Nav and Header here */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Search and Category Filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGigs.length > 0 ? (
            filteredGigs.map((gig) => (
              <div key={gig.id} className="bg-white p-6 rounded-lg shadow-md">
                {/* Adding <Link> around gig title */}
                <Link to={`/gigs/${gig.id}`}>
                  <h3 className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 mb-2">{gig.title}</h3>
                </Link>
                <p className="text-gray-700 mb-1">Category: {gig.category}</p>
                <p className="text-gray-700 mb-1">Budget: {gig.budget}</p>
                <p className="text-gray-700 mb-1">Duration: {gig.duration}</p>
                <p className="text-gray-700 mb-1">Client Rating: {gig.clientRating}</p>
                <button
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  onClick={() => handleOpenModal(gig)}
                >
                  Submit Offer
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-700 col-span-full">No gigs found for "{searchTerm}".</p>
          )}
        </div>
      </main>

      {/* Modal Logic */}
      <SubmitOfferModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitOffer}
        gigTitle={selectedGig ? selectedGig.title : ''}
      />
    </div>
  );
};

export default FreelancerDashboard;
