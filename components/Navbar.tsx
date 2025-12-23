import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './ui/Button';
import Logo from './ui/Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileOpen ? 'bg-black/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-24 md:h-36 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none">
           <Logo />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
            </a>
          ))}
          <Button variant="secondary" className="!py-2 !px-6" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Prendre RDV
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-black border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 fade-in duration-200">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-zinc-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <Button fullWidth onClick={() => {
              setIsMobileOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'});
            }}>
              Prendre RDV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;