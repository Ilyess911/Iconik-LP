import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SourcingStepper from './components/SourcingStepper';
import Concierge from './components/Concierge';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 35% of page
      const threshold = document.documentElement.scrollHeight * 0.35;
      setShowWhatsApp(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <SourcingStepper />
      <Concierge />
      <Process />
      <Contact prefillMessage="" />
      <Footer />
      
      {/* Sticky WhatsApp CTA */}
      <a
        href="https://wa.me/33663472173"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-[0_10px_30px_-5px_rgba(37,211,102,0.4)] transition-all duration-500 ease-out hover:scale-105 hover:bg-[#20bd5a] group ${
          showWhatsApp ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="font-semibold pr-1 hidden md:inline-block">WhatsApp</span>
      </a>
    </main>
  );
};

export default App;