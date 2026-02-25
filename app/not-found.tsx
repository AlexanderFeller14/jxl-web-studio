import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-shell py-28">
      <div className="surface-card mx-auto max-w-xl p-10 text-center">
        <h1 className="mb-3 text-3xl font-semibold text-slate-100">Seite nicht gefunden</h1>
        <p className="mb-8 text-slate-300">Die gewünschte Seite existiert nicht oder wurde verschoben.</p>
        <Link href="/" className="button-base button-primary">
          Zur Startseite
        </Link>
      </div>
    </section>
  );
}
