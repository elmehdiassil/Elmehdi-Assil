export interface CaseStudy {
  id: string;
  title: string;
  category: 'E-Commerce' | 'Restaurant' | 'Beauté' | 'Dropshipping' | 'B2B';
  badge: string;
  problem: string;
  strategy: string;
  metrics: {
    roas?: string;
    salesIncrease?: string;
    cpaReduction?: string;
    orders?: string;
    roi?: string;
    commissionReduction?: string;
    followers?: string;
    rdvMultiplier?: string;
    caAddressed?: string;
    views?: string;
  };
  tags: string[];
  imageUrl: string;
  adPlatforms: ('Meta' | 'Google' | 'TikTok')[];
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  currency: string;
  period: string;
  isPopular?: boolean;
  savingsBadge?: string;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  initials: string;
  rating: number;
  text: string;
  avatarColor: string;
  videoThumbUrl?: string;
  videoDuration?: string;
}

export interface PseoPage {
  slug: string;
  title: string;
  metaDescription: string;
  longTailKeywords: string[];
  industry: string;
  targetPlatform: string;
  location: string;
  heroHeadline: string;
  heroSubtitle: string;
  projectedRoas: string;
  typicalCpa: string;
  keyStrategies: string[];
  faqs: { question: string; answer: string }[];
}

export interface WhatsappConfig {
  phoneNumber: string; // e.g., '212600000000' or user input
  displayNumber: string; // e.g., '+212 6 00 00 00 00'
  defaultMessage: string;
}
