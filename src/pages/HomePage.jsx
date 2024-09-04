// HomePage.jsx
import React from 'react';
import WelcomeSection from '../components/Homepage/WelcomeSection';
import MonitoringSection from '../components/Homepage/MonitoringSection';
import TestimonialsSection from '../components/Homepage/TestimonialsSection';
import ContactSection from '../components/Homepage/ContactSection';

const HomePage = () => {
  return (
    <div className="space-y-0">
      <WelcomeSection />
      <MonitoringSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
