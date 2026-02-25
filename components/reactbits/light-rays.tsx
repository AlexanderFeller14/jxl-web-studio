'use client';

import { useIsTouchDevice, usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type LightRaysProps = {
  className?: string;
};

export function LightRays({ className }: LightRaysProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();

  const opacity = isTouch ? 0.42 : 0.64;

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      style={{ opacity }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,65,120,0.42),rgba(8,14,24,0.98)_55%,rgba(5,10,18,1)_100%)]" />
      <div
        className={cn('absolute -inset-x-20 -top-28 h-[140%] bg-[length:140%_140%] blur-[1px]', !prefersReducedMotion && 'animate-[rays_18s_linear_infinite]')}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 8%, rgba(180,225,255,0.72), rgba(255,255,255,0) 42%), linear-gradient(128deg, rgba(86, 155, 255, 0.38) 0%, rgba(255,255,255,0) 58%), linear-gradient(58deg, rgba(67, 124, 230, 0.32) 8%, rgba(255,255,255,0) 62%)'
        }}
      />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-slate-900/25 via-transparent to-transparent" />
    </div>
  );
}
