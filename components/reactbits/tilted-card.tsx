'use client';

import { type ReactNode, useState } from 'react';
import { useIsTouchDevice, usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type TiltedCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltedCard({ children, className }: TiltedCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();
  const disabled = prefersReducedMotion || isTouch;

  const [transformStyle, setTransformStyle] = useState('perspective(900px) rotateX(0deg) rotateY(0deg)');

  return (
    <article
      className={cn('surface-card relative p-6 transition-transform duration-300 sm:p-7', className)}
      style={{ transform: transformStyle }}
      onMouseMove={(event) => {
        if (disabled) {
          return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
        setTransformStyle(`perspective(900px) rotateX(${-y.toFixed(2)}deg) rotateY(${x.toFixed(2)}deg)`);
      }}
      onMouseLeave={() => setTransformStyle('perspective(900px) rotateX(0deg) rotateY(0deg)')}
    >
      {children}
    </article>
  );
}
