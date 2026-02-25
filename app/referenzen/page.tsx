import { ReferencesGrid } from '@/components/references-grid';

export default function ReferenzenPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-slate-400">Referenzen</p>
        <h1 className="section-title">Websites, die Vertrauen aufbauen und Ergebnisse liefern</h1>
        <p className="section-copy mt-4">
          Jede Referenz zeigt einen klaren Business-Fokus: bessere Positionierung, kürzere Wege zur Anfrage und saubere
          Performance.
        </p>
      </div>

      <ReferencesGrid />
    </section>
  );
}
