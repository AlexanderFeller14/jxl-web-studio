'use client';

import { type ReactNode, useMemo, useState } from 'react';
import { useIsTouchDevice, usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type GlareHoverProps = {
  children: ReactNode;
  className?: string;
  glowClassName?: string;
};

export function GlareHover({ children, className, glowClassName }: GlareHoverProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();
  const [position, setPosition] = useState({ x: 50, y: 50, active: false });

  const disabled = prefersReducedMotion || isTouch;

  const glareStyle = useMemo(() => {
    const alpha = position.active ? 0.34 : 0;
    return {
      background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,${alpha}), rgba(255,255,255,0) 52%)`
    };
  }, [position.active, position.x, position.y]);

  return (
    <div
      className={cn('group relative overflow-hidden rounded-[inherit]', className)}
      onMouseMove={(event) => {
        if (disabled) {
          return;
        }

        const box = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - box.left) / box.width) * 100;
        const y = ((event.clientY - box.top) / box.height) * 100;
        setPosition({ x, y, active: true });
      }}
      onMouseLeave={() => setPosition((previous) => ({ ...previous, active: false }))}
    >
      <div
        className={cn('pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300', glowClassName)}
        style={disabled ? undefined : glareStyle}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
