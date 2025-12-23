import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { ExternalLink, Search, Target, Sparkles } from 'lucide-react';

const SourcingStepper: React.FC = () => {
  const handleRedirect = () => {
      window.open('https://forms.gle/5tTQHyZrWU2v83nh7', '_blank');
  };

  return (
    <Section id="sourcing" className="bg-surfaceHighlight/30" pattern="grid">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-zinc-500 text-sm font-medium tracking-widest uppercase mb-2 block">Sur Mesure</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Recherche Personnalisée</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Vous cherchez une configuration introuvable ? Une édition limitée ? <br/>
            Dites-nous ce que vous voulez, nous parcourons le marché pour vous.
          </p>
        </div>

        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-3xl bg-black border border-white/10 p-8 md:p-16 text-center group">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-white/10 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
                    <Search className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Votre temps est précieux.
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12 w-full max-w-3xl text-left">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                        <Target className="w-6 h-6 text-zinc-300 mb-4" />
                        <h4 className="text-white font-semibold mb-2">Ciblage Précis</h4>
                        <p className="text-sm text-zinc-400">Nous filtrons 99% du marché pour ne retenir que l'excellence.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                        <Sparkles className="w-6 h-6 text-zinc-300 mb-4" />
                        <h4 className="text-white font-semibold mb-2">Off Market</h4>
                        <p className="text-sm text-zinc-400">Accès à des véhicules exclusifs avant leur mise en ligne officielle.</p>
                    </div>
                     <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                        <ExternalLink className="w-6 h-6 text-zinc-300 mb-4" />
                        <h4 className="text-white font-semibold mb-2">Simplicité</h4>
                        <p className="text-sm text-zinc-400">Un formulaire unique pour déclencher notre force de frappe.</p>
                    </div>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <Button onClick={handleRedirect} className="text-lg px-10 py-4">
                        Lancer ma recherche maintenant
                        <ExternalLink className="w-5 h-5 ml-2 opacity-60" />
                    </Button>
                    <p className="mt-4 text-xs text-zinc-500">
                        Redirection sécurisée vers notre formulaire de critères
                    </p>
                </div>
            </div>
        </div>

      </div>
    </Section>
  );
};

export default SourcingStepper;