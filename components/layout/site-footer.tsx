import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-8 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-slate-300 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} JXL Webstudio · Bern</p>
        <div className="flex items-center gap-6">
          <Link href="/referenzen" className="transition-colors hover:text-white">
            Referenzen
          </Link>
          <Link href="/pakete" className="transition-colors hover:text-white">
            Pakete
          </Link>
          <Link href="/kontakt" className="transition-colors hover:text-white">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
