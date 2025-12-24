import React from 'react';
import { BUY_SELL_FEATURES } from '../constants';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Section id="services" pattern="grid" className="overflow-visible">
      
      {/* Header Section */}
      <div className="mb-20 text-center relative z-10">
        <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                L’excellence, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-500">
                    standardisée.
                </span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Notre protocole de transaction en trois étapes a été conçu pour éliminer toute incertitude.
                Chaque détail est contrôlé, chaque décision est justifiée.
            </p>
        </Reveal>
      </div>

      {/* The Arrow Process Flow */}
      <div className="relative">
        
        {/* Background Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {BUY_SELL_FEATURES.map((feature, idx) => (
                <Reveal key={idx} delay={idx * 0.2} className="h-full">
                    <div className="group relative h-full">
                        
                        {/* Desktop Arrow Connector (except last item) - Perfectly centered in the gap-8 (2rem) */}
                        {idx !== BUY_SELL_FEATURES.length - 1 && (
                            <div className="hidden md:flex absolute top-1/2 -right-8 w-8 h-8 z-20 -translate-y-1/2 items-center justify-center">
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors duration-500" />
                            </div>
                        )}

                        {/* Mobile Arrow Connector (except last item) */}
                         {idx !== BUY_SELL_FEATURES.length - 1 && (
                            <div className="md:hidden flex justify-center py-4">
                                <ArrowRight className="w-6 h-6 text-zinc-600 rotate-90" />
                            </div>
                        )}

                        {/* The Card */}
                        <div className="h-full bg-surfaceHighlight/30 backdrop-blur-sm border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)] hover:border-white/20 hover:bg-surfaceHighlight/50 flex flex-col items-center text-center">
                            
                            {/* Icon Container with Glow */}
                            <div className="relative mb-8 mt-2">
                                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                                {feature.title}
                            </h3>
                            
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4 group-hover:via-white/50 transition-all" />

                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>

    </Section>
  );
};

export default Services;