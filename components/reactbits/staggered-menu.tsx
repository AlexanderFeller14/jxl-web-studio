'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type StaggeredItem = {
  label: string;
  href?: string;
};

type StaggeredMenuProps = {
  items: StaggeredItem[];
  className?: string;
  activePath?: string;
  variant?: 'default' | 'nav';
};

export function StaggeredMenu({ items, className, activePath, variant = 'default' }: StaggeredMenuProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [opened, setOpened] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (variant !== 'nav') {
      return;
    }

    if (!opened) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened, variant]);

  if (variant !== 'nav') {
    return (
      <div className={cn('flex flex-wrap items-center gap-2', className)}>
        {items.map((item, index) => {
          const style = prefersReducedMotion ? undefined : { animationDelay: `${index * 90}ms` };

          if (item.href) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'reveal-once rounded-full border border-white/15 bg-slate-900/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 shadow-sm backdrop-blur-md'
                )}
                style={style}
              >
                {item.label}
              </Link>
            );
          }

          return (
            <span
              key={item.label}
              className="reveal-once rounded-full border border-white/15 bg-slate-900/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 shadow-sm backdrop-blur-md"
              style={style}
            >
              {item.label}
            </span>
          );
        })}
      </div>
    );
  }

  const overlay = (
    <div
      className={cn(
        'fixed inset-0 z-[80] transition-opacity duration-500',
        opened ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        prefersReducedMotion && 'duration-150'
      )}
      aria-hidden={!opened}
    >
      <button
        type="button"
        onClick={() => setOpened(false)}
        className="absolute inset-0 bg-gradient-to-l from-slate-900/70 via-slate-950/62 to-slate-950/58 backdrop-blur-[2px]"
        aria-label="Menü schließen"
      />

      <div className="absolute inset-y-0 left-0 right-[min(42rem,95vw)] overflow-hidden bg-[#07051b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,119,198,0.35)_1px,transparent_0)] [background-size:26px_26px] opacity-40" />
        <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute -left-24 bottom-8 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <aside
        id="site-staggered-menu"
        className={cn(
          'absolute inset-y-0 right-0 w-[min(42rem,95vw)] bg-gradient-to-br from-white via-slate-100 to-violet-50 text-black shadow-[-22px_0_70px_rgba(2,6,23,0.3)] transition-transform duration-500',
          opened ? 'translate-x-0' : 'translate-x-full',
          prefersReducedMotion && 'duration-150'
        )}
      >
        <div className="flex h-full flex-col overflow-hidden px-8 pb-10 pt-8 sm:px-12">
          <div className="mb-10 flex items-center justify-end">
            <button
              type="button"
              onClick={() => setOpened(false)}
              className="text-2xl font-medium tracking-tight text-black/90 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70"
            >
              Close ×
            </button>
          </div>

          <nav className="space-y-1 overflow-hidden">
            {items.map((item, index) => {
              const isActive =
                !!item.href &&
                !!activePath &&
                (activePath === item.href || (item.href !== '/' && activePath.startsWith(item.href)));

              const delay = prefersReducedMotion ? '0ms' : `${120 + index * 80}ms`;

              return (
                <Link
                  key={item.label}
                  href={item.href ?? '#'}
                  onClick={() => setOpened(false)}
                  className={cn(
                    'group flex max-w-full items-start gap-2.5 text-[clamp(2.1rem,6vw,5rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] transition-colors',
                    isActive ? 'text-black' : 'text-black/94 hover:text-black'
                  )}
                  style={
                    prefersReducedMotion
                      ? undefined
                      : {
                          transform: opened ? 'translateX(0px)' : 'translateX(36px)',
                          opacity: opened ? 1 : 0,
                          transitionProperty: 'transform, opacity',
                          transitionDuration: '440ms',
                          transitionTimingFunction: 'cubic-bezier(.22,.61,.36,1)',
                          transitionDelay: delay
                        }
                  }
                >
                  <span>{item.label}</span>
                  <span className="mt-2 text-[clamp(1.35rem,2vw,2rem)] font-medium text-violet-600/90">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-16">
            <p className="text-lg font-semibold text-violet-600">Kontakt</p>
            <a href="mailto:hello@jxl-webstudio.ch" className="mt-2 block text-4xl font-medium tracking-tight text-black/90">
              hello@jxl-webstudio.ch
            </a>
          </div>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpened((prev) => !prev)}
        className={cn(
          'inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-200/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70',
          className
        )}
        aria-expanded={opened}
        aria-controls="site-staggered-menu"
      >
        <span className="relative block h-5 w-[3.8rem] overflow-hidden">
          <span
            className={cn(
              'absolute inset-0 transition-all duration-300',
              opened ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100'
            )}
          >
            Menu
          </span>
          <span
            className={cn(
              'absolute inset-0 transition-all duration-300',
              opened ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            )}
          >
            Close
          </span>
        </span>
        <span className="relative h-3.5 w-4" aria-hidden="true">
          <span
            className={cn(
              'absolute left-0 top-0 block h-[1.5px] w-4 bg-current transition-all duration-300',
              opened ? 'top-1.5 rotate-45' : 'rotate-0'
            )}
          />
          <span
            className={cn(
              'absolute left-0 top-[6px] block h-[1.5px] w-4 bg-current transition-all duration-300',
              opened ? 'opacity-0' : 'opacity-100'
            )}
          />
          <span
            className={cn(
              'absolute left-0 top-3 block h-[1.5px] w-4 bg-current transition-all duration-300',
              opened ? 'top-1.5 -rotate-45' : 'rotate-0'
            )}
          />
        </span>
      </button>
      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
