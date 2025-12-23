import React from 'react';
import Section from './ui/Section';
import { TIMELINE_STEPS } from '../constants';
import Reveal from './ui/Reveal';

const Process: React.FC = () => {
  return (
    <Section id="process">
      <div className="text-center mb-20">
        <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notre Processus</h2>
            <p className="text-zinc-400">Simple, transparent, efficace.</p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {TIMELINE_STEPS.map((step, idx) => (
          <Reveal key={idx} delay={idx * 0.15} className="h-full">
            <div className="relative group h-full flex flex-col items-center">
                <div className="w-24 h-24 mx-auto bg-black border border-white/10 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-white transition-all duration-500 shadow-[0_0_0_8px_rgba(0,0,0,1)]">
                    <span className="text-2xl font-bold text-zinc-600 group-hover:text-white transition-colors duration-300">{step.step}</span>
                </div>
                <div className="text-center px-4">
                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Process;