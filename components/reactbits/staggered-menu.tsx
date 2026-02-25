'use client';

import Link from 'next/link';
import { usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type StaggeredItem = {
  label: string;
  href?: string;
};

type StaggeredMenuProps = {
  items: StaggeredItem[];
  className?: string;
};

export function StaggeredMenu({ items, className }: StaggeredMenuProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {items.map((item, index) => {
        const baseClass = cn(
          'rounded-full border border-white/15 bg-slate-900/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 shadow-sm backdrop-blur-md',
          !prefersReducedMotion && 'reveal-once'
        );
        const style = prefersReducedMotion ? undefined : { animationDelay: `${index * 90}ms` };

        if (item.href) {
          return (
            <Link key={item.label} href={item.href} className={baseClass} style={style}>
              {item.label}
            </Link>
          );
        }

        return (
          <span key={item.label} className={baseClass} style={style}>
            {item.label}
          </span>
        );
      })}
    </div>
  );
}
