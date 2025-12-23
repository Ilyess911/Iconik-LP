import React from 'react';
import Section from './ui/Section';
import { TIMELINE_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <Section id="process">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notre Processus</h2>
        <p className="text-zinc-400">Simple, transparent, efficace.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {TIMELINE_STEPS.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="w-24 h-24 mx-auto bg-surfaceHighlight border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
              <span className="text-2xl font-bold text-white/50 group-hover:text-white transition-colors">{step.step}</span>
            </div>
            <div className="text-center px-4">
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Process;