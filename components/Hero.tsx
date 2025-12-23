import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none animate-pulse duration-[5000ms]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 animate-in slide-in-from-bottom-8 fade-in duration-1000 fill-mode-both">
          L’automobile <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-100 bg-[length:200%_auto] animate-[shine_4s_linear_infinite]">
            autrement.
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-zinc-300 font-light max-w-3xl mx-auto mb-12 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200 fill-mode-both leading-relaxed">
          Faire de chaque vente une expérience ICONIK ✨
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 fill-mode-both">
          <Button onClick={() => document.getElementById('sourcing')?.scrollIntoView({ behavior: 'smooth' })}>
            Démarrer une recherche
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            Découvrir nos offres
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce delay-1000">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;