import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './ui/Button';
import Logo from './ui/Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted detection zone for better UX
          if (rect.top <= 300 && rect.bottom >= 300) {
            current = section;
          }
        }
      }
      if (window.scrollY < 100) current = '';
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled || isMobileOpen 
          ? 'py-4' 
          : 'py-6'
      }`}
    >
      <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'max-w-6xl' : ''}`}>
        
        {/* Logo Area */}
        <a 
            href="#" 
            className={`relative z-50 transition-all duration-500 ${isScrolled ? 'scale-90 origin-left' : 'scale-100'}`} 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
           <Logo className={isScrolled ? "!h-8 md:!h-10" : ""} />
        </a>

        {/* Desktop Menu - The "Island" */}
        <div className={`hidden md:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${
            isScrolled 
            ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl' 
            : 'bg-transparent border border-transparent'
        }`}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a 
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 overflow-hidden group ${
                    isActive ? 'text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {/* Active Background */}
                <span className={`absolute inset-0 bg-white transition-all duration-500 ease-out ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`} />

                {/* Hover Background (Subtle) */}
                <span className={`absolute inset-0 bg-white/10 transition-all duration-300 rounded-full ${
                    !isActive ? 'group-hover:opacity-100' : 'opacity-0'
                } opacity-0`} />

                {/* Text */}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>
        
        {/* CTA Button */}
        <div className="hidden md:block">
           <Button 
                variant="secondary" 
                className={`!py-2.5 !px-6 !text-xs backdrop-blur-md transition-all duration-500 ${isScrolled ? 'shadow-lg border-white/20' : ''}`} 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
            >
             Prendre RDV
           </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-3 text-white z-50 relative rounded-full hover:bg-white/10 active:scale-90 transition-all"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute inset-0 h-screen glass-panel-heavy transition-all duration-500 flex items-center justify-center ${isMobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-6 p-4 w-full max-w-sm">
          {NAV_ITEMS.map((item, idx) => (
            <a 
              key={item.label}
              href={item.href}
              className={`text-2xl font-light tracking-tight transition-all duration-300 ${
                  activeSection === item.href.substring(1) ? 'text-white scale-110 font-medium' : 'text-zinc-500'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="w-full h-px bg-white/10 my-4" />
          <Button fullWidth onClick={() => {
              setIsMobileOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'});
            }}>
              Prendre RDV
            </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;