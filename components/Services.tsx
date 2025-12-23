import React from 'react';
import { BUY_SELL_FEATURES } from '../constants';
import Section from './ui/Section';
import SpotlightCard from './ui/SpotlightCard';
import Reveal from './ui/Reveal';
import { Car } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Section id="services" pattern="grid">
      <div className="mb-16 md:mb-24 relative">
        <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Transactions <br />Premium</h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-white to-transparent" />
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Main Card */}
        <div className="lg:col-span-2 row-span-2">
            <SpotlightCard className="h-full min-h-[400px] p-8 md:p-12 group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:scale-110 group-hover:-rotate-3">
                    <Car size={350} strokeWidth={0.5} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                    <div className="mb-auto">
                        <Reveal delay={0.1}>
                            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white mb-6 backdrop-blur-md">
                                Achat & Vente
                            </span>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">L'excellence sans compromis</h3>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                                Que vous souhaitiez acquérir la voiture de vos rêves ou céder votre véhicule actuel, nous orchestrons chaque étape avec une rigueur absolue.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </SpotlightCard>
        </div>

        {/* Feature Cards */}
        {BUY_SELL_FEATURES.map((feature, idx) => (
            <Reveal key={idx} delay={0.2 + (idx * 0.1)} width="100%">
              <SpotlightCard className="p-8 h-full bg-surfaceHighlight/30 hover:bg-surfaceHighlight/50">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <feature.icon className="text-zinc-300 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
              </SpotlightCard>
            </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Services;