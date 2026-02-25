'use client';

import { type ReactNode, useMemo, useState } from 'react';
import { useIsTouchDevice, usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type ReflectiveCardProps = {
  children: ReactNode;
  className?: string;
};

export function ReflectiveCard({ children, className }: ReflectiveCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();
  const [position, setPosition] = useState({ x: 30, y: 16, active: false });

  const disabled = prefersReducedMotion || isTouch;

  const shine = useMemo(() => {
    const alpha = position.active ? 0.5 : 0.28;

    return {
      background: `linear-gradient(120deg, rgba(255,255,255,${alpha}) 0%, rgba(255,255,255,0.04) 44%, rgba(180,221,255,0.35) 100%), radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.45), rgba(255,255,255,0) 52%)`
    };
  }, [position.active, position.x, position.y]);

  return (
    <article
      className={cn('surface-card group relative overflow-hidden p-6 sm:p-7', className)}
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
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-300" style={disabled ? undefined : shine} />
      <div className="relative">{children}</div>
    </article>
  );
}
