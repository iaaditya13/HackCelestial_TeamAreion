import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import LoginPage from './Security/LoginPage';
import SignupPage from './Security/SignupPage';
import ClientDashboard from './Security/ClientDashboard';
import FreelancerProfilePage from './Security/FreelancerProfile';
import ClientProfile from './Security/Clientprofile';
import FreelancerDashboard from './Security/FreelancerDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/client-dashboard" element={<ClientDashboard />} />
      <Route path="/freelancer/:id" element={<FreelancerProfilePage />} />
      <Route path="/client-profile" element={<ClientProfile />} />
      <Route path="/find-work" element={<FreelancerDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
