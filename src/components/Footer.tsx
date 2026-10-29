"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const marqueeText =
    "ASYMMETRIC DEVS — INGENIERÍA DE SOFTWARE — PLATAFORMAS WEB · APPS MÓVILES · IA APLICADA — CORRIENTES & CHACO, ARGENTINA — ";

  return (
    <footer className="bg-background border-t border-border-subtle relative overflow-hidden">
      {/* Edge-to-Edge Swiss Architectural Marquee Strip */}
      <div className="w-full bg-surface-contrast text-background border-b border-border-subtle py-3 overflow-hidden select-none">
        <div className="animate-swiss-marquee font-mono text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
          <span className="px-4">{marqueeText}</span>
          <span className="px-4">{marqueeText}</span>
          <span className="px-4">{marqueeText}</span>
          <span className="px-4">{marqueeText}</span>
        </div>
      </div>

      {/* Ruled Footer Grid */}
      <div className="max-w-7xl mx-auto border-x border-border-subtle relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-border-subtle border-b border-border-subtle">
          {/* Left Column: Brand & Bio */}
          <div className="md:col-span-5 p-8 sm:p-10 bg-surface">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="font-sans font-bold tracking-[-0.04em] text-lg text-foreground">
                ASYMMETRIC
              </span>
              <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-none bg-[#FF4D15] text-white uppercase">
                [DEVS]
              </span>
            </Link>
            <p className="font-sans text-xs text-brand-muted leading-relaxed max-w-sm">
              Estudio de ingeniería de software formado por cuatro Ingenieros en Sistemas. Desarrollamos plataformas web comerciales, aplicaciones móviles (iOS/Android) y automatizaciones con IA desde Argentina hacia el mundo.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/5493794797572"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-bold text-[#FF4D15] hover:underline transition-colors duration-150"
              >
                WhatsApp: +54 9 379 479-7572
              </a>
              <span className="text-border-subtle">|</span>
              <a
                href="mailto:asymmetricdevs@gmail.com"
                className="font-mono text-xs font-semibold text-foreground hover:text-[#FF4D15] transition-colors duration-150"
              >
                asymmetricdevs@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 p-8 sm:p-10 bg-background">
            <h4 className="font-mono text-[10px] font-bold text-[#FF4D15] uppercase tracking-widest mb-4">
              [SECCIONES]
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/#inicio"
                  className="font-mono text-xs text-brand-muted hover:text-foreground transition-colors duration-150"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="font-mono text-xs text-brand-muted hover:text-foreground transition-colors duration-150"
                >
                  Todos los Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="font-mono text-xs text-brand-muted hover:text-foreground transition-colors duration-150"
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="font-mono text-xs text-brand-muted hover:text-foreground transition-colors duration-150"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/#nosotros"
                  className="font-mono text-xs text-brand-muted hover:text-foreground transition-colors duration-150"
                >
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="font-mono text-xs text-brand-muted hover:text-foreground transition-colors duration-150"
                >
                  Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Case Study Links */}
          <div className="md:col-span-4 p-8 sm:p-10 bg-background">
            <h4 className="font-mono text-[10px] font-bold text-[#FF4D15] uppercase tracking-widest mb-4">
              [DESARROLLOS DESTACADOS]
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {projectsData.map((proj) => (
                <li key={proj.slug}>
                  <Link
                    href={`/proyectos/${proj.slug}`}
                    className="font-mono text-xs text-brand-muted hover:text-[#FF4D15] transition-colors duration-150 inline-flex items-center gap-1"
                  >
                    {proj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="px-8 sm:px-10 py-6 bg-surface flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-brand-muted uppercase tracking-wider">
            &copy; {currentYear} ASYMMETRIC DEVS · CORRIENTES &amp; CHACO, ARGENTINA.
          </span>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 px-3 py-1.5 border border-border-subtle bg-background hover:bg-foreground hover:text-background font-mono text-[10px] font-bold uppercase tracking-wider text-foreground transition-colors duration-150 cursor-pointer"
          >
            Volver Arriba
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
          </button>
        </div>
      </div>
    </footer>
  );
}
