import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="PONIKELSKÝ – osobní portfolio"
        >
          <span className="sr-only">PONIKELSKÝ</span>
          <span
            aria-hidden
            className="logo-text inline-block text-xl font-medium text-[#2A4B7C]"
          >
            P<span className="split-ring" />NIKELSKÝ
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-500 sm:flex">
          <a href="#o-mne" className="transition-colors hover:text-primary">
            O mně
          </a>
          <a href="#sluzby" className="transition-colors hover:text-primary">
            Služby
          </a>
          <a href="#kontakt" className="transition-colors hover:text-primary">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}

