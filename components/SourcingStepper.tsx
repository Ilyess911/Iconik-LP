import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { ArrowRight, Search, SlidersHorizontal, Target } from 'lucide-react';

const SourcingStepper: React.FC = () => {
  const googleFormUrl = "https://forms.gle/5tTQHyZrWU2v83nh7";

  return (
    <Section id="recherche" className="bg-surfaceHighlight/20" pattern="grid">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <Reveal width="100%">
            <span className="text-zinc-500 text-xs font-medium tracking-[0.2em] uppercase mb-4 block">Chasse automobile</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Recherche personnalisée</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                Vous avez une idée précise en tête ? Confiez-nous vos critères. Nous activons notre réseau européen pour trouver la perle rare qui correspond exactement à vos attentes.
            </p>
          </Reveal>
        </div>

        <Reveal width="100%" delay={0.2}>
            <div className="glass-panel-heavy rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
                
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-white/5 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <SlidersHorizontal className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Configuration sur mesure</h4>
                                    <p className="text-zinc-400 text-sm">Définissez vos options, couleurs, motorisation et kilométrage idéal.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Search className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Réseau Européen</h4>
                                    <p className="text-zinc-400 text-sm">Accès aux marchés cachés et aux stocks hors-marché (off-market).</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Target className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Zéro Mauvaise surprise</h4>
                                    <p className="text-zinc-400 text-sm">Inspection physique systématique et rapport détaillé avant achat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                             <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="!px-8 !py-4 text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                    Démarrer ma recherche
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                             </a>
                             <p className="mt-4 text-xs text-zinc-500">
                                Formulaire sécurisé • Réponse sous 24h
                             </p>
                        </div>
                    </div>

                    {/* Right side visual */}
                    <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        {/* Renault Clio V Image */}
                        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/mDcGKK4N/Capture-d-e-cran-2025-12-23-a-18-43-42.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="glass-panel p-4 rounded-xl border border-white/10">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Dernière Recherche</span>
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                </div>
                                <div className="text-white font-bold text-lg">Renault Clio V Intens</div>
                                <div className="text-zinc-400 text-sm">Recherche validée en 48h</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>

      </div>
    </Section>
  );
};

export default SourcingStepper;