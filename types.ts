import { ReactNode } from 'react';

export interface ModuleItem {
  id: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: ReactNode;
}
