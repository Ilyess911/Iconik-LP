import React, { useEffect, useRef } from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { STATS } from '../constants';

interface ContactProps {
    prefillMessage: string;
}

const Contact: React.FC<ContactProps> = ({ prefillMessage }) => {
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (prefillMessage && messageRef.current) {
        messageRef.current.value = prefillMessage;
        // Optionally flash the field to show it was updated
        messageRef.current.focus();
    }
  }, [prefillMessage]);

  return (
    <Section id="contact" className="bg-surfaceHighlight/20">
      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Info & Stats */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Contactez-nous</h2>
            <p className="text-zinc-400 mb-8">
              Échangez avec des passionnés. Nous répondons sous 24h.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:contact@iconik.com" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20">
                <Mail className="w-5 h-5" />
                <span>contact@iconik.com</span>
              </a>
              <a href="tel:+33100000000" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20">
                <Phone className="w-5 h-5" />
                <span>+33 1 00 00 00 00</span>
              </a>
              <div className="flex items-center gap-4 text-zinc-300 p-4 rounded-xl bg-white/5 border border-white/5">
                <MapPin className="w-5 h-5" />
                <span>Paris, 8ème Arrondissement</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            {STATS.map((stat, idx) => (
                <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/10">
              <p className="italic text-zinc-300 text-lg">"La confiance ne se promet pas. Elle se construit."</p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 bg-surface border border-border rounded-3xl p-8 lg:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-zinc-400">Nom Complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm text-zinc-400">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                  placeholder="+33 6 00..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-zinc-400">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                placeholder="jean@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-zinc-400">Message</label>
              <textarea 
                id="message" 
                ref={messageRef}
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none"
                placeholder="Je suis intéressé par..."
              />
            </div>

            <Button fullWidth>
              Envoyer la demande
            </Button>
            
            <p className="text-xs text-center text-zinc-600">
                En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe. 
                Vos données restent confidentielles.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;