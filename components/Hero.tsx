import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Abstract Luxury Car Texture - Low opacity */}
        <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"
        />
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
      </div>

      {/* Volumetric Headlights Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Left Beam */}
        <div className="absolute bottom-[-20%] left-[10%] w-[30vw] h-[120vh] beam-cone opacity-0 animate-headlight-on origin-bottom -rotate-[15deg] mix-blend-screen" />
        {/* Right Beam */}
        <div className="absolute bottom-[-20%] right-[10%] w-[30vw] h-[120vh] beam-cone opacity-0 animate-headlight-on origin-bottom rotate-[15deg] mix-blend-screen" style={{ animationDelay: '0.2s' }} />
        
        {/* Floor Reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white/5 to-transparent opacity-0 animate-fade-up" style={{ animationDelay: '1s' }} />
      </div>

      {/* Cinematic Spotlight Effect (Top Down) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[120vh] z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-white/[0.08] rounded-full blur-[120px] animate-spotlight mix-blend-screen opacity-0" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] drop-shadow-2xl relative">
           {/* Text Glow behind */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 blur-[80px] -z-10 rounded-full opacity-50" />
           
          <Reveal width="100%" delay={0.1}>
            L’automobile
          </Reveal>
          <Reveal width="100%" delay={0.25}>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
              autrement.
            </span>
          </Reveal>
        </h1>

        <Reveal width="100%" delay={0.4}>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Faire de chaque vente une expérience <span className="text-white font-medium shadow-white/20 drop-shadow-lg">ICONIK</span>.
            <br />
            <span className="text-sm text-zinc-500 mt-4 block border-t border-white/10 pt-4 w-fit mx-auto px-8">
                Recherche • Achat • Vente • Conciergerie
            </span>
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button onClick={() => document.getElementById('recherche')?.scrollIntoView({ behavior: 'smooth' })}>
              Démarrer une recherche
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="backdrop-blur-sm" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Découvrir nos offres
            </Button>
          </div>
        </Reveal>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce delay-1000">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;