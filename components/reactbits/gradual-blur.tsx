import { cn } from '@/lib/utils';

type GradualBlurProps = {
  className?: string;
  direction?: 'up' | 'down';
  intensity?: 'soft' | 'medium';
};

export function GradualBlur({ className, direction = 'down', intensity = 'soft' }: GradualBlurProps) {
  const opacity =
    intensity === 'soft'
      ? 'from-slate-950/0 via-slate-950/55 to-slate-950/90'
      : 'from-slate-950/0 via-slate-950/70 to-slate-950/95';

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-x-0 h-24 backdrop-blur-[2px] sm:h-32',
        direction === 'down' ? 'bottom-0 bg-gradient-to-b' : 'top-0 bg-gradient-to-t',
        opacity,
        className
      )}
    />
  );
}
