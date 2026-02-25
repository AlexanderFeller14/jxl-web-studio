'use client';

import { useEffect, useState } from 'react';

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefersReducedMotion(media.matches);
    onChange();

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return prefersReducedMotion;
}

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const width = window.matchMedia('(max-width: 768px)').matches;
    setIsTouch(coarse || width);
  }, []);

  return isTouch;
}
