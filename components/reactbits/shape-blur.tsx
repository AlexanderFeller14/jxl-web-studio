import { cn } from '@/lib/utils';

type ShapeBlurProps = {
  className?: string;
};

export function ShapeBlur({ className }: ShapeBlurProps) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(35%_70%_at_12%_50%,rgba(56,189,248,0.14),transparent_75%),radial-gradient(26%_60%_at_86%_50%,rgba(59,130,246,0.13),transparent_75%)]" />
      <div className="mobile-soften absolute left-1/2 top-1/2 h-16 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/12 blur-2xl sm:h-20 sm:w-[28rem]" />
      <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-200/25 to-transparent" />
    </div>
  );
}
