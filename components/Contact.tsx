import React, { useEffect, useRef } from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { STATS } from '../constants';
import Reveal from './ui/Reveal';

interface ContactProps {
    prefillMessage: string;
}

const Contact: React.FC<ContactProps> = ({ prefillMessage }) => {
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (prefillMessage && messageRef.current) {
        messageRef.current.value = prefillMessage;
        messageRef.current.focus();
    }
  }, [prefillMessage]);

  const InputClass = "w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/5 focus:ring-1 focus:ring-white/30 transition-all duration-300 backdrop-blur-sm";

  return (
    <Section id="contact" className="bg-gradient-to-t from-black to-surfaceHighlight/20">
      <div className="grid lg:grid-cols-5 gap-16">
        {/* Contact Info & Stats */}
        <div className="lg:col-span-2 space-y-12">
          <Reveal>
            <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contactez-nous</h2>
                <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                    Parlez-nous de votre projet.<br />
                    Un expert Iconik vous répond personnellement sous 24 h.
                </p>
                
                <div className="space-y-4">
                    <a href="mailto:iconikautomative@gmail.com" className="flex items-start gap-5 text-zinc-300 hover:text-white transition-all p-5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 glass-panel group">
                        <div className="mt-1 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors border border-white/5">
                             <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Email</div>
                            <div className="text-lg font-medium text-white">iconikautomative@gmail.com</div>
                        </div>
                    </a>

                    <a href="tel:+33663472173" className="flex items-start gap-5 text-zinc-300 hover:text-white transition-all p-5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 glass-panel group">
                        <div className="mt-1 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors border border-white/5">
                            <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Téléphone</div>
                            <div className="text-lg font-medium text-white">+33 6 63 47 21 73</div>
                        </div>
                    </a>

                    <div className="flex items-start gap-5 text-zinc-300 p-5 rounded-2xl glass-panel group">
                        <div className="mt-1 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors border border-white/5">
                            <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Localisation</div>
                            <div className="text-lg font-medium text-white">Boulogne-Billancourt</div>
                        </div>
                    </div>
                </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
            <Reveal delay={0.3} width="100%">
                <div className="glass-panel-heavy rounded-[32px] p-8 lg:p-12 shadow-2xl">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider">Nom Complet</label>
                            <input type="text" id="name" className={InputClass} placeholder="Jean Dupont" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider">Téléphone</label>
                            <input type="tel" id="phone" className={InputClass} placeholder="+33 6 00..." />
                        </div>
                        </div>

                        <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider">Email</label>
                        <input type="email" id="email" className={InputClass} placeholder="jean@example.com" />
                        </div>

                        <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider">Message</label>
                        <textarea id="message" ref={messageRef} rows={4} className={`${InputClass} resize-none`} placeholder="Je suis intéressé par..." />
                        </div>

                        <div className="pt-4">
                            <Button fullWidth className="!py-4 text-lg backdrop-blur-md">
                                Envoyer la demande
                            </Button>
                        </div>
                        
                        <p className="text-xs text-center text-zinc-500">
                            Vos données restent strictement confidentielles.
                        </p>
                    </form>
                </div>
            </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default Contact;