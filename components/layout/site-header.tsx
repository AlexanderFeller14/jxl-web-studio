'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { StaggeredMenu } from '@/components/reactbits/staggered-menu';
import { navLinks } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-slate-100">
          JXL WEBSTUDIO
        </Link>
        <StaggeredMenu items={navLinks} activePath={pathname} variant="nav" />
      </div>
    </header>
  );
}
