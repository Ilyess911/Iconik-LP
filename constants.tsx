import { Car, Search, ShieldCheck, Key, Settings, FileCheck, Zap, Gauge, Armchair } from 'lucide-react';
import { NavItem, ServiceFeature, StatItem, TimelineStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Achat / Vente', href: '#services' },
  { label: 'Recherche personnalisée', href: '#recherche' },
  { label: 'Conciergerie', href: '#concierge' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const BUY_SELL_FEATURES: ServiceFeature[] = [
  { title: "Historique limpide", description: "Origine, factures et traçabilité intégrale vérifiées en amont.", icon: FileCheck },
  { title: "Inspection 110 points", description: "Audit complet : mécanique, esthétique et éléments d’usure.", icon: Search },
  { title: "Interlocuteur unique", description: "Un expert Iconik dédié, présent à chaque étape jusqu’à la livraison.", icon: ShieldCheck },
];

export const CONCIERGE_FEATURES: ServiceFeature[] = [
  { title: "Administratif", description: "Carte grise, assurance, importation, immatriculation provisoire (WW).", icon: FileCheck },
  { title: "Maintenance", description: "Entretien, detailing, protection céramique, gestion des pneumatiques.", icon: Settings },
  { title: "Logistique", description: "Transport sécurisé, stockage et gardiennage confidentiel*.", icon: Key },
];

// Data for informational display only now
export const SOURCING_STEPS_DATA = [
  {
    id: 1,
    title: "Usage",
    question: "Quelle sera l'utilisation principale ?",
    options: [
      { id: 'weekend', label: 'Plaisir / Week-end', icon: Gauge },
      { id: 'daily', label: 'Quotidien / Daily', icon: Armchair },
      { id: 'investment', label: 'Investissement', icon: ShieldCheck },
    ]
  },
  {
    id: 2,
    title: "Catégorie",
    question: "Quel type de véhicule recherchez-vous ?",
    options: [
      { id: 'sport', label: 'Sportive / GT', icon: Zap },
      { id: 'suv', label: 'SUV Premium', icon: Car },
      { id: 'classic', label: 'Collection', icon: FileCheck },
    ]
  },
  {
    id: 3,
    title: "Budget",
    question: "Quelle est votre fourchette de budget ?",
    options: [
      { id: '50-80', label: '50k€ - 80k€', icon: null },
      { id: '80-150', label: '80k€ - 150k€', icon: null },
      { id: '150+', label: '+ 150k€', icon: null },
    ]
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  { step: "01", title: "Cahier des charges", description: "Compréhension approfondie de vos attentes et contraintes." },
  { step: "02", title: "Recherche & audit", description: "Sourcing ciblé à l’échelle européenne et filtrage drastique." },
  { step: "03", title: "Inspection", description: "Déplacement sur site, vérifications complètes et rapport documenté." },
  { step: "04", title: "Acquisition", description: "Négociation, sécurisation de la transaction et livraison clé en main." },
];

export const STATS: StatItem[] = [
  { value: "100 %", label: "Transparence" },
  { value: "0", label: "Compromis" },
  { value: "24/7", label: "Accompagnement" },
];