import { cn } from '@/lib/utils';

type ShapeBlurProps = {
  className?: string;
};

export function ShapeBlur({ className }: ShapeBlurProps) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="mobile-soften absolute -left-16 top-4 h-44 w-44 rounded-full bg-sky-300/45 blur-3xl sm:h-72 sm:w-72" />
      <div className="mobile-soften absolute right-0 top-12 h-36 w-36 rounded-full bg-cyan-200/55 blur-3xl sm:h-64 sm:w-64" />
      <div className="mobile-soften absolute bottom-2 left-1/3 h-32 w-48 rounded-[40%] bg-blue-100/70 blur-3xl sm:h-44 sm:w-72" />
    </div>
  );
}
