"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border-subtle relative z-10">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto border-x border-border-subtle px-6 py-5 sm:px-8 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Origin */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1">
          <Link href="/" className="inline-flex items-center gap-1.5">
            <span className="font-sans font-bold tracking-[-0.04em] text-sm text-foreground">
              ASYMMETRIC
            </span>
            <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-none bg-accent text-accent-foreground uppercase">
              [DEVS]
            </span>
          </Link>
          <span className="text-border-subtle hidden sm:inline">·</span>
          <span className="font-mono text-[10px] text-brand-muted uppercase tracking-wider">
            &copy; {currentYear} ASYMMETRIC DEVS · CORRIENTES &amp; CHACO, ARGENTINA
          </span>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex md:hidden flex-wrap items-center justify-center gap-4 py-1">
          <Link
            href="/#servicios"
            className="font-mono text-xs text-brand-muted hover:text-foreground transition-colors duration-150 py-1"
          >
            Servicios
          </Link>
          <Link
            href="/proyectos"
            className="font-mono text-xs text-brand-muted hover:text-foreground transition-colors duration-150 py-1"
          >
            Proyectos
          </Link>
          <Link
            href="/noticias"
            className="font-mono text-xs text-brand-muted hover:text-foreground transition-colors duration-150 py-1"
          >
            Noticias
          </Link>
          <Link
            href="/#contacto"
            className="font-mono text-xs text-brand-muted hover:text-foreground transition-colors duration-150 py-1"
          >
            Contacto
          </Link>
        </nav>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 px-2.5 py-1.5 border border-border-subtle bg-background hover:bg-foreground hover:text-background font-mono text-[10px] font-bold uppercase tracking-wider text-foreground transition-colors duration-150 cursor-pointer"
          aria-label="Volver arriba"
        >
          <span>Arriba</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
        </button>
      </div>
    </footer>
  );
}
