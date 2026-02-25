'use client';

import { type ReactNode, useMemo, useState } from 'react';
import { useIsTouchDevice, usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = usePrefersReducedMotion();
  const disabled = isTouch || prefersReducedMotion;

  const [position, setPosition] = useState({ x: 50, y: 50, active: false });

  const spotlight = useMemo(() => {
    const alpha = position.active ? 0.22 : 0;
    return {
      background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(120,205,255,${alpha}), rgba(120,205,255,0) 48%)`
    };
  }, [position.active, position.x, position.y]);

  return (
    <article
      className={cn('surface-card group relative overflow-hidden p-6 transition-transform duration-300 sm:p-7', className)}
      onMouseMove={(event) => {
        if (disabled) {
          return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPosition({ x, y, active: true });
      }}
      onMouseLeave={() => setPosition((previous) => ({ ...previous, active: false }))}
    >
      <div className="pointer-events-none absolute inset-0" style={disabled ? undefined : spotlight} />
      <div className="relative">{children}</div>
    </article>
  );
}
