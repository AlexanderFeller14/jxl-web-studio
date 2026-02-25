import { GradualBlur } from '@/components/reactbits/gradual-blur';
import { StaggeredMenu } from '@/components/reactbits/staggered-menu';

export default function KontaktPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-slate-400">Kontakt</p>
        <h1 className="section-title">Lass uns dein Projekt konkret machen</h1>
        <p className="section-copy mt-4">Schick mir kurz dein Ziel und ich antworte mit einer klaren Empfehlung.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <aside className="surface-card p-6 sm:p-7">
          <p className="mb-4 text-xs uppercase tracking-[0.14em] text-slate-400">Kontaktoptionen</p>
          <StaggeredMenu
            items={[
              { label: 'Mail', href: 'mailto:hallo@jxl-webstudio.ch' },
              { label: 'WhatsApp', href: 'https://wa.me/41790000000' },
              { label: 'Call', href: 'tel:+41790000000' }
            ]}
          />
          <p className="mt-6 text-sm text-slate-300">Antwortzeit werktags meist innerhalb von 24 Stunden.</p>
        </aside>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/75 p-6 shadow-card sm:p-8">
          <GradualBlur direction="up" intensity="soft" className="h-20" />
          <form className="relative z-10 grid gap-4">
            <label className="grid gap-2 text-sm text-slate-300">
              Name
              <input
                type="text"
                placeholder="Dein Name"
                className="rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-300/60"
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-300">
              E-Mail
              <input
                type="email"
                placeholder="deinname@firma.ch"
                className="rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-300/60"
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-300">
              Projektziel
              <textarea
                rows={5}
                placeholder="Worum geht es und was soll die Website verbessern?"
                className="rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-300/60"
              />
            </label>

            <button type="submit" className="button-base button-primary mt-2 w-full sm:w-fit">
              Anfrage senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
