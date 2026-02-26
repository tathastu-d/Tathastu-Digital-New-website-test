
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import ServicesGrid from './components/ServicesGrid';
import GrowthEngineFlow from './components/GrowthEngineFlow';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NeuralAssistant from './components/NeuralAssistant';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen selection:bg-[#8F62AA] selection:text-white">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />

      <Navbar scrollProgress={scrollProgress} />

      <main>
        <Hero />
        
        <div className="container mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8F62AA] to-transparent opacity-30 shadow-[0_0_10px_#8F62AA]" />
        </div>

        <WhyUs />
        <ServicesGrid />
        <GrowthEngineFlow />
        <Stats />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
      <NeuralAssistant />
    </div>
  );
};

export default App;
