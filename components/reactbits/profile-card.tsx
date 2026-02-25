import { cn } from '@/lib/utils';

type ProfileCardProps = {
  name: string;
  role: string;
  location: string;
  focus: string;
  stack: string[];
  className?: string;
};

export function ProfileCard({ name, role, location, focus, stack, className }: ProfileCardProps) {
  return (
    <article className={cn('surface-card relative overflow-hidden p-7 sm:p-9', className)}>
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-sky-300/25 blur-2xl" aria-hidden />
      <div className="relative grid gap-6">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-slate-800 text-xl font-semibold text-slate-100 shadow-sm">
            LX
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-100">{name}</h2>
            <p className="text-sm uppercase tracking-[0.14em] text-slate-400">{role}</p>
          </div>
        </div>

        <dl className="grid gap-3 text-sm text-slate-300">
          <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
            <dt>Standort</dt>
            <dd className="text-slate-100">{location}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
            <dt>Fokus</dt>
            <dd className="text-right text-slate-100">{focus}</dd>
          </div>
        </dl>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-slate-400">Stack</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((entry) => (
              <span key={entry} className="rounded-full border border-white/15 bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
                {entry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
