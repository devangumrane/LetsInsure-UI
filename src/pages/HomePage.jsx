import React from 'react';
import Hero from '../components/sections/Hero';
import InsuranceProductsGrid from '../features/insurance/components/InsuranceProductsGrid';
import ServicesSection from '../components/sections/ServicesSection';
import TrustSection from '../components/sections/TrustSection';
import VideoSection from '../components/sections/VideoSection';
import Testimonials from '../components/sections/Testimonials';
import AppCTA from '../components/sections/AppCTA';
import Calculators from '../components/sections/Calculators';

const HomePage = () => {
    return (
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
    );
};

export default HomePage;
