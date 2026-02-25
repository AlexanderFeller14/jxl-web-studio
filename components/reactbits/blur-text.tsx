'use client';

import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type BlurTextProps = {
  text: string;
  className?: string;
  delayMs?: number;
  as?: 'p' | 'span' | 'div';
};

export function BlurText({ text, className, delayMs = 120, as = 'p' }: BlurTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const timer = window.setTimeout(() => setVisible(true), delayMs);
    return () => window.clearTimeout(timer);
  }, [delayMs, prefersReducedMotion]);

  const Component = as;

  return (
    <Component
      className={cn('transition-all duration-700 ease-out motion-fade-static', className)}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? 'blur(0px)' : 'blur(12px)',
        transform: visible ? 'translateY(0)' : 'translateY(12px)'
      }}
    >
      {text}
    </Component>
  );
}
