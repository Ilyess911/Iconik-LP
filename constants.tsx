import { Car, Search, ShieldCheck, Key, Settings, FileCheck } from 'lucide-react';
import { NavItem, ServiceFeature, Step, StatItem, TimelineStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Achat / Vente', href: '#services' },
  { label: 'Recherche', href: '#sourcing' },
  { label: 'Conciergerie', href: '#concierge' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const BUY_SELL_FEATURES: ServiceFeature[] = [
  { title: "Historique vérifié", description: "Traçabilité complète et limpide.", icon: FileCheck },
  { title: "Vérifications multi-points", description: "Inspection mécanique et esthétique.", icon: Search },
  { title: "Accompagnement humain", description: "Un interlocuteur unique dédié.", icon: ShieldCheck },
];

export const CONCIERGE_FEATURES: ServiceFeature[] = [
  { title: "Gestion administrative", description: "Carte grise, assurance, import.", icon: FileCheck },
  { title: "Entretien / Detailing", description: "Maintenance préventive et cosmétique.", icon: Settings },
  { title: "Logistique & Gardiennage", description: "Transport sécurisé et stockage.", icon: Key },
];

export const SOURCING_STEPS: Step[] = [
  // Deprecated/Unused now, keeping for type safety if needed elsewhere temporarily
  {
    id: 1,
    question: "Quel est votre usage principal ?",
    options: []
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  { step: "01", title: "Échange", description: "Définition précise de vos besoins et critères." },
  { step: "02", title: "Analyse", description: "Recherche marché et sélection rigoureuse." },
  { step: "03", title: "Vérification", description: "Inspection physique et historique complet." },
  { step: "04", title: "Livraison", description: "Remise des clés premium et prise en main." },
];

export const STATS: StatItem[] = [
  { value: "100%", label: "Transparence" },
  { value: "0", label: "Compromis" },
  { value: "24/7", label: "Disponibilité" },
];