'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/site';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-slate-100">
          JXL WEBSTUDIO
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white',
                  isActive && 'border border-white/15 bg-slate-900 text-white shadow-card'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
