import { Car, Search, ShieldCheck, Key, Settings, FileCheck, Zap, Gauge, Armchair } from 'lucide-react';
import { NavItem, ServiceFeature, Step, StatItem, TimelineStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Achat / Vente', href: '#services' },
  { label: 'Recherche Personnalisée', href: '#sourcing' },
  { label: 'Conciergerie', href: '#concierge' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const BUY_SELL_FEATURES: ServiceFeature[] = [
  { title: "Historique Limpide", description: "Traçabilité complète, factures, et origine vérifiée.", icon: FileCheck },
  { title: "Inspection 110 Points", description: "Audit mécanique, esthétique et consommables.", icon: Search },
  { title: "Interlocuteur Unique", description: "Un expert dédié du premier appel à la livraison.", icon: ShieldCheck },
];

export const CONCIERGE_FEATURES: ServiceFeature[] = [
  { title: "Administratif", description: "Carte grise, assurance, import, WW.", icon: FileCheck },
  { title: "Maintenance", description: "Entretien, detailing céramique, pneus.", icon: Settings },
  { title: "Logistique", description: "Transport sécurisé et gardiennage confidentiel.", icon: Key },
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
  { step: "01", title: "Cahier des charges", description: "Définition ultra-précise de vos critères et attentes." },
  { step: "02", title: "Chasse & Audit", description: "Scan du marché européen et filtrage drastique." },
  { step: "03", title: "Inspection", description: "Déplacement physique et rapport détaillé (+100 photos)." },
  { step: "04", title: "Acquisition", description: "Négociation, sécurisation et livraison clé en main." },
];

export const STATS: StatItem[] = [
  { value: "100%", label: "Transparence" },
  { value: "0", label: "Compromis" },
  { value: "24/7", label: "Support" },
];