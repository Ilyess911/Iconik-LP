import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
      </div>

      {/* Volumetric Headlights Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[-20%] left-[10%] w-[30vw] h-[120vh] beam-cone opacity-0 animate-headlight-on origin-bottom -rotate-[15deg] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[10%] w-[30vw] h-[120vh] beam-cone opacity-0 animate-headlight-on origin-bottom rotate-[15deg] mix-blend-screen" style={{ animationDelay: '0.2s' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white/5 to-transparent opacity-0 animate-fade-up" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        
        <Reveal width="100%" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Expertise Automobile Premium</span>
            </div>
        </Reveal>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl">
          <Reveal width="100%" delay={0.2}>
            Nous trouvons
          </Reveal>
          <Reveal width="100%" delay={0.3}>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
              votre exception.
            </span>
          </Reveal>
        </h1>

        <Reveal width="100%" delay={0.4}>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Ne perdez plus de temps à chercher.
            <strong className="text-white font-medium"> Iconik</strong> source, inspecte et livre votre futur véhicule, sans compromis.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Button 
                onClick={() => document.getElementById('recherche')?.scrollIntoView({ behavior: 'smooth' })}
                pulse={true}
                className="w-full sm:w-auto"
            >
              Démarrer ma recherche
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
                variant="outline" 
                className="backdrop-blur-sm w-full sm:w-auto" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir nos services
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-zinc-500">
             <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-zinc-600" /> Réseau Off-Market</span>
             <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-zinc-600" /> Transparence Totale</span>
          </div>
        </Reveal>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce delay-1000 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;