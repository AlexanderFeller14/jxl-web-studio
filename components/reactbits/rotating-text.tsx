'use client';

import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type RotatingTextProps = {
  texts: string[];
  className?: string;
  intervalMs?: number;
  highlighted?: boolean;
};

export function RotatingText({ texts, className, intervalMs = 1500, highlighted = false }: RotatingTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || texts.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((previous) => (previous + 1) % texts.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, prefersReducedMotion, texts.length]);

  return (
    <span
      className={cn(
        'relative inline-flex min-h-[1.2em] items-center',
        highlighted &&
          'rounded-2xl border border-sky-200/20 bg-gradient-to-r from-sky-500/80 to-cyan-400/80 px-4 py-1.5 text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.28)]',
        className
      )}
    >
      <span
        className="transition-all duration-500 motion-fade-static"
        style={{
          opacity: 1,
          filter: 'blur(0px)',
          transform: 'translateY(0)'
        }}
      >
        {texts[prefersReducedMotion ? 0 : index]}
      </span>
    </span>
  );
}
