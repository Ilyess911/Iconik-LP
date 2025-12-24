import React from 'react';
import Section from './ui/Section';
import { CONCIERGE_FEATURES } from '../constants';
import Reveal from './ui/Reveal';

const Concierge: React.FC = () => {
  return (
    <Section id="concierge" pattern="dots" className="bg-[#080808]">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Conciergerie <br />
                <span className="text-zinc-600">All-Inclusive</span>
             </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Profitez pleinement de votre véhicule. <br className="hidden md:block" />
                Nous prenons en charge l’ensemble des démarches, de l’administratif à la logistique, pour une expérience sans contraintes et sans perte de temps.
            </p>
          </Reveal>
          
          <div className="space-y-4">
            {CONCIERGE_FEATURES.map((feature, idx) => (
              <Reveal key={idx} delay={0.2 + (idx * 0.1)}>
                <div className="flex items-start gap-6 group p-4 rounded-2xl transition-colors hover:bg-white/5">
                    <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/5 flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                    <h4 className="text-white font-medium mb-1 text-lg">{feature.title}</h4>
                    <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{feature.description}</p>
                    </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <p className="text-xs text-zinc-600 mt-6 italic">
              * Le service de gardiennage est proposé selon disponibilité.
            </p>
          </Reveal>
        </div>

        {/* Visual Decoration */}
        <Reveal width="100%" delay={0.3}>
            <div className="relative h-[500px] w-full bg-surfaceHighlight rounded-3xl border border-white/5 p-2 overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-10 left-10 right-10">
                    <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-white font-medium italic text-lg leading-relaxed">"La tranquillité d'esprit est le luxe ultime."</p>
                    </div>
                </div>
            </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Concierge;