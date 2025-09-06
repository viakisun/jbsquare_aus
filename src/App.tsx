import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
// import StatsSection from './components/StatsSection';
// import AnnouncementsSection from './components/AnnouncementsSection';
// import EventsSection from './components/EventsSection';
// import CompaniesSection from './components/CompaniesSection';
// import SupportOrgsSection from './components/SupportOrgsSection';
// import PolicyInvestmentSection from './components/PolicyInvestmentSection';
// import TechPatentsSection from './components/TechPatentsSection';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection id="jbsquare" />
      {/* <StatsSection />
      <AnnouncementsSection id="announcements" />
      <EventsSection id="news" />
      <CompaniesSection id="companies" />
      <SupportOrgsSection id="supportorgs" />
      <PolicyInvestmentSection id="investment" />
      <TechPatentsSection id="patents" />
      <Footer id="contact" /> */}
    </div>
  );
};

export default App;
