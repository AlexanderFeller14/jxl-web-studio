import Link from 'next/link';
import Hero from '@/src/components/sections/Hero';
import { CountUp } from '@/components/reactbits/count-up';
import { GradualBlur } from '@/components/reactbits/gradual-blur';
import { ReflectiveCard } from '@/components/reactbits/reflective-card';
import { ShapeBlur } from '@/components/reactbits/shape-blur';
import { SpotlightCard } from '@/components/reactbits/spotlight-card';
import { Stepper } from '@/components/reactbits/stepper';
import { TiltedCard } from '@/components/reactbits/tilted-card';
import { caseStudies } from '@/lib/references';

const homeStats: Array<{ label: string; value: number; suffix: string; decimals?: number }> = [
  { label: 'Erste Version der Webseite in', value: 48, suffix: 'h' },
  { label: 'Erfahrung im Webdesign', value: 5, suffix: '+ Jahre' },
  { label: 'Antwortzeit werktags', value: 3, suffix: 'h' }
];

const services = [
  {
    title: 'Business Website',
    description: 'Klarer Auftritt mit starker Anfrageführung.'
  },
  {
    title: 'SEO Setup',
    description: 'Technische Basis für bessere Google-Sichtbarkeit.'
  },
  {
    title: 'Performance Tuning',
    description: 'Schnelle Ladezeiten auf Desktop und Mobile.'
  }
];

const processSteps = [
  {
    title: 'Strategie Call',
    description: 'Wir klären Zielgruppe, Angebot und welche Anfrage wirklich zählt.'
  },
  {
    title: 'Konzept & Design',
    description: 'Wireframe, visuelle Richtung und Storyline mit Fokus auf Conversion.'
  },
  {
    title: 'Build & Content',
    description: 'Technische Umsetzung, Copy und SEO-Struktur in einem sauberen Flow.'
  },
  {
    title: 'Launch & Optimierung',
    description: 'Go-live, QA und iterative Optimierung mit messbaren KPIs.'
  }
];

export default function HomePage() {
  const previewCases = caseStudies.slice(0, 4);

  return (
    <div className="pb-16">
      <Hero />

      <section className="section-shell py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title">Womit du konkret rechnen kannst</h2>
            <p className="section-copy mt-2">Klare Zahlen, die man direkt versteht und einordnen kann.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((stat) => (
            <article key={stat.label} className="surface-card p-5">
              <p className="mb-2 text-sm text-slate-400">{stat.label}</p>
              <p className="text-3xl font-semibold sm:text-4xl">
                <CountUp
                  to={stat.value}
                  decimals={stat.decimals ?? 0}
                  suffix={stat.suffix}
                  className="stat-gradient"
                />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="mb-8">
          <h2 className="section-title">Leistungen</h2>
          <p className="section-copy mt-2">Fokussiert auf das, was Anfragen bringt.</p>
        </div>

        <div className="space-y-4">
          <SpotlightCard>
            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-slate-400">Top Leistung</p>
            <h3 className="text-2xl font-semibold text-slate-100">{services[0].title}</h3>
            <p className="mt-2 text-base text-slate-300">{services[0].description}</p>
          </SpotlightCard>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(1).map((service) => (
              <SpotlightCard key={service.title}>
                <h3 className="text-xl font-semibold text-slate-100">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{service.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative py-8">
        <div className="surface-card relative h-28 overflow-hidden bg-slate-900/40">
          <ShapeBlur />
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="mb-8">
          <h2 className="section-title">Prozess in 4 klaren Schritten</h2>
          <p className="section-copy mt-2">Planbar, transparent und ohne Agentur-Theater.</p>
        </div>
        <Stepper steps={processSteps} />
      </section>

      <section className="section-shell py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title">Referenzen Preview</h2>
            <p className="section-copy mt-2">Ein Mix aus Featured Cases und starken Conversion-Projekten.</p>
          </div>
          <Link href="/referenzen" className="button-base">
            Alle Cases
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {previewCases.slice(0, 2).map((entry) => (
            <TiltedCard key={entry.slug}>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Hero Case</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-100">{entry.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{entry.summary}</p>
              <Link href={`/referenzen/${entry.slug}`} className="mt-6 inline-flex text-sm font-semibold text-sky-200 hover:text-white">
                Case öffnen
              </Link>
            </TiltedCard>
          ))}

          {previewCases.slice(2).map((entry) => (
            <ReflectiveCard key={entry.slug}>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{entry.conversionTag}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-100">{entry.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{entry.summary}</p>
              <Link href={`/referenzen/${entry.slug}`} className="mt-6 inline-flex text-sm font-semibold text-sky-200 hover:text-white">
                Details lesen
              </Link>
            </ReflectiveCard>
          ))}
        </div>
      </section>

      <section className="section-shell relative mt-6 py-14">
        <div className="surface-card relative overflow-hidden p-8 text-center sm:p-12">
          <h2 className="section-title">Bereit für eine Website, die verkauft statt nur schön aussieht?</h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl">
            Du bekommst klare Positionierung, hochwertiges Design und ein Setup, das in deiner Realität funktioniert.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/kontakt" className="button-base button-primary shadow-glow">
              Unverbindliches Erstgespräch
            </Link>
          </div>
          <GradualBlur direction="down" className="h-28" />
        </div>
      </section>
    </div>
  );
}
