export type CaseMetric = {
  label: string;
  value: number;
  suffix?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  featured: boolean;
  hot: boolean;
  conversionTag: 'Best Conversion' | 'Strong Growth' | 'Fast Launch';
  tags: string[];
  metrics: CaseMetric[];
  keyFeatures: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'alpin-consulting',
    title: 'Alpin Consulting',
    industry: 'B2B Beratung',
    summary: 'Neuer Web-Auftritt mit klarer Lead-Strecke und fokussierter Angebotsseite.',
    featured: true,
    hot: false,
    conversionTag: 'Best Conversion',
    tags: ['B2B', 'Lead Funnel', 'SEO'],
    metrics: [
      { label: 'Anfragen / Monat', value: 34, suffix: '+' },
      { label: 'Conversion Rate', value: 5.8, suffix: '%' },
      { label: 'Launch Time', value: 9, suffix: ' Tage' }
    ],
    keyFeatures: ['Service-Funnel', 'Trust-Module', 'Schnelle Ladezeiten']
  },
  {
    slug: 'studio-vela',
    title: 'Studio Vela',
    industry: 'Interior',
    summary: 'High-end Portfolio Site mit Anfrageflow für Premium-Projekte.',
    featured: true,
    hot: true,
    conversionTag: 'Strong Growth',
    tags: ['Portfolio', 'Branding', 'CMS'],
    metrics: [
      { label: 'Projektanfragen', value: 21, suffix: '+' },
      { label: 'Mobile Score', value: 98, suffix: '/100' },
      { label: 'Time to Interactive', value: 1.4, suffix: ' s' }
    ],
    keyFeatures: ['Bento Content', 'Case Storytelling', 'Kontakt-Pipeline']
  },
  {
    slug: 'medinova-praxis',
    title: 'Medinova Praxis',
    industry: 'Gesundheit',
    summary: 'Praxis-Website mit klarer Struktur, Vertrauen und Termin-Anfragen.',
    featured: false,
    hot: true,
    conversionTag: 'Fast Launch',
    tags: ['Praxis', 'Performance', 'UX'],
    metrics: [
      { label: 'Termin-Anfragen', value: 43, suffix: '+' },
      { label: 'Load Time', value: 1.2, suffix: ' s' },
      { label: 'Live in', value: 7, suffix: ' Tagen' }
    ],
    keyFeatures: ['FAQ-Flow', 'Mobile First', 'Kontaktblock mit CTAs']
  },
  {
    slug: 'frey-legal',
    title: 'Frey Legal',
    industry: 'Anwaltskanzlei',
    summary: 'Seriöser Relaunch mit lokalem SEO-Fokus und hochwertigen Mandatsanfragen.',
    featured: false,
    hot: false,
    conversionTag: 'Strong Growth',
    tags: ['Legal', 'Local SEO', 'Conversion'],
    metrics: [
      { label: 'Mandatsanfragen', value: 17, suffix: '+' },
      { label: 'Sichtbarkeit', value: 63, suffix: '% +' },
      { label: 'Core Web Vitals', value: 96, suffix: '/100' }
    ],
    keyFeatures: ['Leistungsseiten', 'Standortseiten', 'Vertrauensmodule']
  },
  {
    slug: 'nordic-skin',
    title: 'Nordic Skin',
    industry: 'Beauty',
    summary: 'Neue Website mit Produktfokus und integriertem Beratungstermin-Flow.',
    featured: false,
    hot: true,
    conversionTag: 'Best Conversion',
    tags: ['Beauty', 'Bookings', 'Brand'],
    metrics: [
      { label: 'Beratungstermine', value: 29, suffix: '+' },
      { label: 'Checkout-Uplift', value: 23, suffix: '%' },
      { label: 'Launch', value: 10, suffix: ' Tage' }
    ],
    keyFeatures: ['Booking UX', 'Produkt-Highlights', 'Social Proof']
  }
];

export function getCaseBySlug(slug: string) {
  return caseStudies.find((entry) => entry.slug === slug);
}
