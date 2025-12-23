import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StepOption {
  label: string;
  value: string;
}

export interface Step {
  id: number;
  question: string;
  options: StepOption[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}