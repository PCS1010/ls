import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import CostCalculator from './components/CostCalculator';
import ServicesSection from './components/ServicesSection';
import FactoryInterio from './components/FactoryInterio';
import GallerySection from './components/GallerySection';
import CorporateClients from './components/CorporateClients';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EstimateModal from './components/EstimateModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Sync theme with DOM attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenEstimate = (customData = null) => {
    setModalInitialData(customData);
    setEstimateModalOpen(true);
  };

  const handleOpenWithService = (serviceTitle) => {
    handleOpenEstimate({
      serviceTitle: `Inquiry for ${serviceTitle}`,
      propertyType: '3 BHK'
    });
  };

  const handleOpenWithCalculatorData = (calcData) => {
    handleOpenEstimate({
      propertyType: calcData.propertyType,
      packageTier: calcData.packageTier,
      estimatedAmount: calcData.estimatedAmount,
      serviceTitle: `Custom package: ${calcData.modulesCount} rooms selected`
    });
  };

  const handleScrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ls-app-root" data-theme={theme}>
      {/* Navigation Header with Theme Toggle */}
      <Navbar
        onOpenEstimate={() => handleOpenEstimate()}
        activeSection={activeSection}
        onNavigate={handleScrollToSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero Banner */}
        <Hero
          onOpenEstimate={() => handleOpenEstimate()}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Key Statistics Strip */}
        <Stats />

        {/* 3. About LS Interiors & Why Choose Us */}
        <WhyChooseUs
          onOpenEstimate={() => handleOpenEstimate()}
        />

        {/* 4. Interactive Transformation Before/After (Crystal Clear HD Engine) */}
        <BeforeAfterSlider
          onOpenEstimate={() => handleOpenEstimate()}
        />

        {/* 5. Interactive Cost Estimator Calculator */}
        <CostCalculator
          onOpenEstimateWithData={handleOpenWithCalculatorData}
        />

        {/* 6. Comprehensive Services Grid */}
        <ServicesSection
          onOpenEstimateWithService={handleOpenWithService}
        />

        {/* 7. Factory Interio & Custom Manufacturing Moosapet */}
        <FactoryInterio
          onOpenEstimate={() => handleOpenEstimate()}
        />

        {/* 8. Portfolio & Project Gallery */}
        <GallerySection
          onOpenEstimate={() => handleOpenEstimate()}
        />

        {/* 9. Corporate Clients & Enterprise Trust */}
        <CorporateClients />

        {/* 10. Homeowner Testimonials */}
        <Testimonials
          onOpenEstimate={() => handleOpenEstimate()}
        />

        {/* 11. Contact & Booking Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenEstimate={() => handleOpenEstimate()}
      />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Lead Capture 3D Estimate Modal */}
      <EstimateModal
        isOpen={estimateModalOpen}
        onClose={() => setEstimateModalOpen(false)}
        initialData={modalInitialData}
      />
    </div>
  );
}
