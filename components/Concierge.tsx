import React from 'react';
import Section from './ui/Section';
import { CONCIERGE_FEATURES } from '../constants';

const Concierge: React.FC = () => {
  return (
    <Section id="concierge" pattern="dots" className="bg-[#080808]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Conciergerie <br />
            <span className="text-zinc-500">All-Inclusive</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Profitez de votre véhicule, nous gérons le reste. De la maintenance administrative à la logistique physique, notre service de conciergerie vous libère des contraintes.
          </p>
          
          <div className="space-y-6">
            {CONCIERGE_FEATURES.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-surfaceHighlight border border-white/5 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                  <p className="text-sm text-zinc-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Decoration */}
        <div className="relative h-[400px] md:h-[500px] w-full bg-gradient-to-b from-surfaceHighlight to-surface rounded-3xl border border-white/5 p-2 overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             
             <div className="absolute bottom-8 left-8 right-8">
                 <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                    <p className="text-white font-medium italic">"La tranquillité d'esprit est le luxe ultime."</p>
                 </div>
             </div>
        </div>
      </div>
    </Section>
  );
};

export default Concierge;