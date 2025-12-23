import React from 'react';
import { BUY_SELL_FEATURES } from '../constants';
import Section from './ui/Section';
import { Shield, TrendingUp, Car } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Section id="services" pattern="grid">
      <div className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Transactions <br />Premium</h2>
        <div className="h-1 w-20 bg-white/20 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Main Card */}
        <div className="lg:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-surface border border-border p-8 md:p-12 transition-all hover:border-white/20">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Car size={300} strokeWidth={0.5} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="mb-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white mb-4 border border-white/5">
                        Achat & Vente
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4">L'excellence sans compromis</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                        Que vous souhaitiez acquérir la voiture de vos rêves ou céder votre véhicule actuel, nous orchestrons chaque étape avec une rigueur absolue.
                    </p>
                </div>
            </div>
        </div>

        {/* Feature Cards */}
        {BUY_SELL_FEATURES.map((feature, idx) => (
          <div 
            key={idx}
            className="group p-8 rounded-3xl bg-surfaceHighlight/50 border border-border hover:bg-surfaceHighlight hover:border-white/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
              <feature.icon className="text-zinc-300 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
            <p className="text-sm text-zinc-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;