import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SourcingStepper from './components/SourcingStepper';
import Concierge from './components/Concierge';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // No longer needed since Sourcing redirects to Google Forms
  // const [inquiryMessage, setInquiryMessage] = useState('');

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
    </main>
  );
};

export default App;