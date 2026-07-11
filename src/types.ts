export interface ProductSpec {
  id: string;
  name: string;
  tagline: string;
  category: 'MacBook Pro' | 'Display' | 'Software' | 'iPad Pro';
  image: string;
  badge?: string;
  description: string;
  keySpecs: { label: string; value: string }[];
  highlights: string[];
  startingPrice: number;
}

export interface WorkstationConfig {
  finish: 'space-black' | 'silver';
  chip: 'm4-pro-14' | 'm4-max-16' | 'm4-max-40-gpu';
  memory: 36 | 64 | 128;
  storage: 1 | 2 | 4 | 8;
  displayAddon: 'none' | 'xdr-standard' | 'xdr-nano';
  softwareSuite: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  metric?: string;
  metricLabel?: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  studio: string;
  avatar: string;
  category: '3D Animation' | 'VFX' | 'Motion Graphics' | 'UI/UX Interactive';
  projectExample: string;
  renderTimeReduction: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceUpfront: number;
  popular?: boolean;
  features: string[];
  hardwareIncluded: string[];
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Hardware & M4 Max' | 'ProMotion & Color' | 'Software Compatibility' | 'Financing & Trade-in';
}
