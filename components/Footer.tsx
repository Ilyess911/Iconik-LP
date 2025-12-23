import React from 'react';
import Logo from './ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
             <Logo className="!h-10 md:!h-12" />
        </div>
        
        <div className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Iconik Automotive. All rights reserved.
        </div>
        
        <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Mentions Légales</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;