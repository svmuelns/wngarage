import React from 'react'
import HeroSection from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import AboutSection from './components/about/About';
import ServiceSection from './components/services/Services';
import DeliverySection from './components/delivery/Delivery';
import ContactSection from './components/contact/Contact';
import FooterSection from './components/footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <DeliverySection />
    <ContactSection />
    <FooterSection />
    </>
  );
}

export default App;
