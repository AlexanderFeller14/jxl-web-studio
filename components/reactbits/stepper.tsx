'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

type Step = {
  title: string;
  description: string;
};

type StepperProps = {
  steps: Step[];
  className?: string;
};

export function Stepper({ steps, className }: StepperProps) {
  const [active, setActive] = useState(0);

  return (
    <div className={cn('surface-card p-6 sm:p-8', className)}>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const isActive = index === active;

          return (
            <li key={step.title}>
              <button
                type="button"
                className={cn(
                  'h-full w-full rounded-xl border p-4 text-left transition-all duration-300',
                  isActive
                    ? 'border-sky-300/40 bg-sky-400/10 shadow-sm'
                    : 'border-white/10 bg-slate-900/55 hover:border-sky-300/30 hover:bg-slate-900/70'
                )}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Schritt {index + 1}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-slate-100">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
