import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CountUp } from '@/components/reactbits/count-up';
import { ShapeBlur } from '@/components/reactbits/shape-blur';
import { SpotlightCard } from '@/components/reactbits/spotlight-card';
import { TrueFocus } from '@/components/reactbits/true-focus';
import { caseStudies, getCaseBySlug } from '@/lib/references';

type CaseDetailProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return caseStudies.map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: CaseDetailProps): Metadata {
  const entry = getCaseBySlug(params.slug);

  if (!entry) {
    return { title: 'Referenz nicht gefunden' };
  }

  return {
    title: entry.title,
    description: entry.summary
  };
}

export default function ReferenceDetailPage({ params }: CaseDetailProps) {
  const entry = getCaseBySlug(params.slug);

  if (!entry) {
    notFound();
  }

  return (
    <article className="section-shell py-16 sm:py-20">
      <header className="max-w-4xl">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-slate-400">Case Study · {entry.industry}</p>
        <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-100 sm:text-6xl">
          <TrueFocus words={entry.title.split(' ')} activeClassName="text-slate-100" inactiveClassName="text-slate-500" />
        </h1>
        <p className="section-copy mt-5">{entry.summary}</p>
      </header>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {entry.metrics.map((metric) => (
          <article key={metric.label} className="surface-card p-5">
            <p className="mb-2 text-sm text-slate-400">{metric.label}</p>
            <p className="text-3xl font-semibold">
              <CountUp to={metric.value} suffix={metric.suffix} decimals={metric.value % 1 !== 0 ? 1 : 0} className="stat-gradient" />
            </p>
          </article>
        ))}
      </section>

      <section className="relative mt-10 h-28 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
        <ShapeBlur />
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="surface-card p-6 sm:p-7">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-slate-400">Case Gallery</p>
          <h2 className="text-2xl font-semibold text-slate-100">Visual Storyline</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Strukturierter Seitenaufbau, klare CTA-Pfade und fokussierte Inhalte für bessere Lead-Qualität.
          </p>
        </article>

        <article className="surface-card p-6 sm:p-7">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-slate-400">Ergebnis</p>
          <h2 className="text-2xl font-semibold text-slate-100">Weniger Reibung, mehr qualifizierte Anfragen</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Der gesamte Flow wurde auf schnelle Entscheidungen und Vertrauen optimiert.
          </p>
        </article>

        {entry.keyFeatures.map((feature) => (
          <SpotlightCard key={feature}>
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Key Feature</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-100">{feature}</h3>
            <p className="mt-3 text-sm text-slate-300">
              Spezifisch ausgearbeitet für dieses Projekt, um Conversion und Wahrnehmung parallel zu stärken.
            </p>
          </SpotlightCard>
        ))}
      </section>
    </article>
  );
}
