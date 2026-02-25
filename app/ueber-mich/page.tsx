import { BlurText } from '@/components/reactbits/blur-text';
import { ProfileCard } from '@/components/reactbits/profile-card';

export default function UeberMichPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-slate-400">Über mich</p>
        <h1 className="section-title">Founder mit Fokus auf klare Websites und klare Ergebnisse</h1>
        <BlurText
          text="Meine Mission: Digitale Auftritte bauen, die ruhig wirken und messbar verkaufen."
          className="section-copy mt-4"
        />
      </div>

      <ProfileCard
        name="Luca Xaver"
        role="Founder · Webstudio"
        location="Bern"
        focus="Conversion-orientierte Websites für Dienstleister"
        stack={['Next.js', 'TypeScript', 'Tailwind', 'SEO', 'Analytics']}
      />
    </section>
  );
}
