import Link from "next/link";
import { Facebook, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-[#2A4B7C] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium tracking-widest opacity-90">
              Jakub Ponikelský
            </p>
            <p className="mt-1 text-sm opacity-80">
              Průvodce efektivitou a osobním růstem
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <a
              href="https://www.facebook.com/jakub.ponikelsky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-90 transition-opacity hover:opacity-100"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ponikelskyjakub/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-90 transition-opacity hover:opacity-100"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <Link
              href="mailto:info@ponikelsky.cz"
              className="flex items-center gap-2 text-sm opacity-90 transition-opacity hover:opacity-100"
            >
              <Mail className="h-5 w-5" />
              <span>info@ponikelsky.cz</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
