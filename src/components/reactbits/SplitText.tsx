"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: { opacity?: number; y?: number; rotateX?: number };
  to?: { opacity?: number; y?: number; rotateX?: number };
  threshold?: number;
  textAlign?: "left" | "center" | "right";
  rootMargin?: string;
  onLetterAnimationComplete?: () => void;
};

export default function SplitText({
  text,
  className,
  delay = 65,
  duration = 650,
  ease = "cubic-bezier(0.22, 1, 0.36, 1)",
  splitType = "words",
  from = { opacity: 0, y: 14, rotateX: 16 },
  to = { opacity: 1, y: 0, rotateX: 0 },
  threshold = 0.2,
  textAlign = "left",
  rootMargin = "0px",
  onLetterAnimationComplete
}: SplitTextProps) {
  const [inView, setInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const rootRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefersReducedMotion(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!rootRef.current || prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin, prefersReducedMotion]);

  const units = useMemo(() => {
    if (splitType === "chars") {
      return Array.from(text);
    }
    return text.split(" ");
  }, [splitType, text]);

  const totalTime = (units.length - 1) * delay + duration;

  useEffect(() => {
    if (!inView || !onLetterAnimationComplete) {
      return;
    }
    const t = window.setTimeout(onLetterAnimationComplete, totalTime);
    return () => window.clearTimeout(t);
  }, [inView, onLetterAnimationComplete, totalTime]);

  return (
    <span
      ref={rootRef}
      className={className}
      aria-label={text}
      style={{
        display: "inline-block",
        textAlign,
        perspective: 700
      }}
    >
      {units.map((unit, index) => {
        const transitionDelay = prefersReducedMotion ? 0 : index * delay;
        const isWhitespaceChar = splitType === "chars" && unit === " ";

        return (
          <span
            key={`${unit}-${index}`}
            aria-hidden="true"
            style={{
              display: "inline-block",
              whiteSpace: isWhitespaceChar ? "pre" : "normal",
              transformOrigin: "50% 100%",
              opacity: inView ? (to.opacity ?? 1) : (from.opacity ?? 0),
              transform: inView
                ? `translateY(${to.y ?? 0}px) rotateX(${to.rotateX ?? 0}deg)`
                : `translateY(${from.y ?? 0}px) rotateX(${from.rotateX ?? 0}deg)`,
              transitionProperty: "transform, opacity",
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: ease,
              transitionDelay: `${transitionDelay}ms`
            }}
          >
            {unit}
            {splitType === "words" && index !== units.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </span>
  );
}
