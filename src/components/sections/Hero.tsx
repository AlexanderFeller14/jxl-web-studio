import SplitText from "@/src/components/reactbits/SplitText";

const trustBadges = ["Launch in 7–14 Tagen", "Mobile first", "SEO Basics inklusive"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(58%_45%_at_18%_20%,rgba(56,189,248,0.22),transparent_62%),radial-gradient(40%_30%_at_82%_18%,rgba(59,130,246,0.2),transparent_68%),linear-gradient(to_bottom,rgba(9,18,36,0.5),rgba(4,8,18,0))]" />
        <div className="absolute left-1/2 top-12 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="grid items-center gap-12 md:grid-cols-[1.03fr_0.97fr] lg:gap-16">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/12 bg-slate-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              Webstudio Bern
            </p>

            <h1 className="max-w-xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.028em] text-white sm:text-5xl lg:text-[4rem]">
              <SplitText
                text="Moderne Websites, die Kunden bringen."
                splitType="words"
                className="inline"
                delay={0}
                duration={260}
                from={{ opacity: 0.88, y: 4, rotateX: 0 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
              />
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Ich designe und entwickle schnelle, hochwertige Websites für Schweizer KMU. Klarer Auftritt, bessere
              Anfragen, messbar mehr Vertrauen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-transparent bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Kostenloses Erstgespräch
              </a>
              <a
                href="#projekte"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Projekte ansehen
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-white/12 bg-slate-900/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-slate-300"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem] md:mx-0">
            <div className="relative rounded-[1.75rem] border border-white/12 bg-slate-900/65 p-3.5 shadow-[0_34px_90px_rgba(2,8,23,0.5)] backdrop-blur-xl">
              <div className="mb-3 flex items-center gap-1.5 px-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300/85" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/85" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/85" />
              </div>

              <div className="rounded-[1.1rem] border border-white/10 bg-slate-950/85 p-4">
                <div className="h-40 rounded-xl bg-gradient-to-br from-sky-300/20 via-blue-300/10 to-transparent" />
                <div className="mt-3 grid grid-cols-3 gap-2.5">
                  <div className="h-16 rounded-lg bg-white/8" />
                  <div className="h-16 rounded-lg bg-white/8" />
                  <div className="h-16 rounded-lg bg-white/8" />
                </div>
                <div className="mt-3 h-24 rounded-xl bg-white/[0.07]" />
              </div>
            </div>

            <div className="absolute -bottom-10 -left-8 w-44 rounded-2xl border border-white/12 bg-slate-900/78 p-2.5 shadow-[0_20px_45px_rgba(2,8,23,0.45)] backdrop-blur-xl sm:w-48">
              <div className="rounded-xl border border-white/10 bg-slate-950/88 p-3">
                <div className="mb-2.5 h-3 w-16 rounded bg-white/12" />
                <div className="h-24 rounded-lg bg-gradient-to-b from-cyan-300/20 to-blue-300/5" />
                <div className="mt-2.5 h-2 w-24 rounded bg-white/10" />
              </div>
            </div>

            <div className="absolute -right-4 top-8 h-24 w-24 rounded-full border border-cyan-200/20 bg-cyan-300/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
