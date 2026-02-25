'use client';

import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type TrueFocusProps = {
  words: string[];
  className?: string;
  intervalMs?: number;
  activeClassName?: string;
  inactiveClassName?: string;
};

export function TrueFocus({
  words,
  className,
  intervalMs = 1700,
  activeClassName = 'text-slate-950',
  inactiveClassName = 'text-slate-400'
}: TrueFocusProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || words.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % words.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, prefersReducedMotion, words.length]);

  return (
    <span className={cn('inline-flex flex-wrap gap-x-2 gap-y-1', className)}>
      {words.map((word, index) => {
        const active = index === activeIndex;

        return (
          <span
            key={`${word}-${index}`}
            className={cn(
              'transition-all duration-500 motion-fade-static',
              active ? activeClassName : inactiveClassName
            )}
            style={{
              filter: active || prefersReducedMotion ? 'blur(0px)' : 'blur(1.1px)',
              opacity: active || prefersReducedMotion ? 1 : 0.75,
              transform: active ? 'translateY(0)' : 'translateY(2px)'
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
