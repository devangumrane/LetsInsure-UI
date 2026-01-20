import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InsuranceProductsGrid from './components/InsuranceProductsGrid';
import ProductGrid from './components/ProductGrid';
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
      {/* 
           The requirements say "Navbar = 1440 x 64". This implies the design is optimized for 1440 but likely full-width background.
           For now, I'll assume full width background, constrained content.
       */}
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
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
    </div>
  );
}

export default App;
