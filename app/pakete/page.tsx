import Link from 'next/link';
import { CountUp } from '@/components/reactbits/count-up';
import { GlareHover } from '@/components/reactbits/glare-hover';

const packages = [
  {
    name: 'Starter',
    description: 'Für Selbstständige mit klarem Angebot und schnellem Launch.',
    price: 'ab CHF 2.900',
    bullets: ['One-Pager oder kompakte Website', 'SEO-Basis', 'Kontakt-Setup'],
    recommended: false
  },
  {
    name: 'Growth',
    description: 'Für Teams, die kontinuierlich neue Anfragen generieren möchten.',
    price: 'ab CHF 5.400',
    bullets: ['Mehrseitige Website', 'Conversion-Funnel', 'Tracking & Reporting'],
    recommended: true
  },
  {
    name: 'Signature',
    description: 'Für Premium-Brands mit hohen Ansprüchen an Brand und Performance.',
    price: 'ab CHF 8.900',
    bullets: ['Designsystem + Skalierung', 'Individuelle Integrationen', 'Launch-Begleitung'],
    recommended: false
  }
];

export default function PaketePage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-slate-400">Pakete</p>
        <h1 className="section-title">Klare Pakete, transparente Preise, planbarer Ablauf</h1>
        <p className="section-copy mt-4">Keine versteckten Positionen, keine Agenturfloskeln, nur das was für dein Ziel nötig ist.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {packages.map((entry) => {
          const card = (
            <article
              className={`surface-card h-full p-6 sm:p-7 ${entry.recommended ? 'border-sky-300/35 bg-sky-400/10' : ''}`}
            >
              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-slate-400">{entry.recommended ? 'Recommended' : 'Paket'}</p>
              <h2 className="text-2xl font-semibold text-slate-100">{entry.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{entry.description}</p>
              <p className="mt-5 text-xl font-semibold text-slate-100">{entry.price}</p>

              <ul className="mt-5 grid gap-2 text-sm text-slate-300">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>

              {entry.recommended && (
                <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-sky-200/20 bg-slate-900/45 p-3 text-center">
                  <div>
                    <p className="text-xs text-slate-400">Seiten</p>
                    <p className="text-lg font-semibold">
                      <CountUp to={7} suffix="+" className="stat-gradient" />
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Sektionen</p>
                    <p className="text-lg font-semibold">
                      <CountUp to={16} suffix="+" className="stat-gradient" />
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Revisionen</p>
                    <p className="text-lg font-semibold">
                      <CountUp to={3} className="stat-gradient" />
                    </p>
                  </div>
                </div>
              )}

              <Link href="/kontakt" className="button-base mt-6 w-full">
                Paket anfragen
              </Link>
            </article>
          );

          if (entry.recommended) {
            return (
              <GlareHover key={entry.name} className="h-full rounded-2xl">
                {card}
              </GlareHover>
            );
          }

          return <div key={entry.name}>{card}</div>;
        })}
      </div>
    </section>
  );
}
