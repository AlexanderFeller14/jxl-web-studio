'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type CountUpProps = {
  to: number;
  from?: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function CountUp({
  to,
  from = 0,
  durationMs = 1200,
  decimals = 0,
  prefix = '',
  suffix = '',
  className
}: CountUpProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(prefersReducedMotion ? to : from);
  const [hasPlayed, setHasPlayed] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || hasPlayed) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasPlayed(true);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [hasPlayed]);

  useEffect(() => {
    if (!hasPlayed) {
      return;
    }

    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    const start = performance.now();
    const distance = to - from;

    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + distance * eased);

      if (progress < 1) {
        raf = window.requestAnimationFrame(tick);
      }
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [durationMs, from, hasPlayed, prefersReducedMotion, to]);

  const formatted = useMemo(() => {
    return `${prefix}${value.toFixed(decimals)}${suffix}`;
  }, [decimals, prefix, suffix, value]);

  return (
    <span ref={wrapperRef} className={cn('tabular-nums', className)}>
      {hasPlayed || prefersReducedMotion ? formatted : `${prefix}${from.toFixed(decimals)}${suffix}`}
    </span>
  );
}
