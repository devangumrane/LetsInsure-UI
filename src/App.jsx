import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InsuranceProductsGrid from './components/InsuranceProductsGrid';
import ServicesSection from './components/ServicesSection';
import TrustSection from './components/TrustSection';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import AppCTA from './components/AppCTA';
import Calculators from './components/Calculators';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <InsuranceProductsGrid />
        <ServicesSection />
        <TrustSection />
        <VideoSection />
        <Testimonials />
        <AppCTA />
        <Calculators />
      </main>

      <Footer />
    </div>
  );
}

export default App;
