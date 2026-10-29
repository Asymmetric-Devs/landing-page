"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border-subtle py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle">
          {/* Left Column: Brand & Bio */}
          <div className="md:col-span-5 max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="font-sans font-extrabold tracking-tight text-lg text-foreground">
                ASYMMETRIC
              </span>
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/12 text-emerald-800 dark:text-emerald-300 border border-emerald-600/20">
                [devs]
              </span>
            </Link>
            <p className="font-sans text-xs text-neutral-500 dark:text-zinc-400 leading-relaxed">
              Estudio de ingeniería de software formado por cuatro Ingenieros en Sistemas. Desarrollamos plataformas web comerciales, aplicaciones móviles (iOS/Android) y automatizaciones con IA desde Argentina hacia el mundo.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/5493794797572"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline transition-colors duration-150"
              >
                WhatsApp: +54 9 379 479-7572
              </a>
              <span className="text-neutral-300 dark:text-zinc-700">·</span>
              <a
                href="mailto:asymmetricdevs@gmail.com"
                className="font-mono text-xs font-semibold text-neutral-600 dark:text-zinc-300 hover:text-foreground transition-colors duration-150"
              >
                asymmetricdevs@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
              Secciones
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/#inicio"
                  className="font-sans text-xs text-neutral-600 dark:text-zinc-400 hover:text-foreground transition-colors duration-150"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="font-sans text-xs text-neutral-600 dark:text-zinc-400 hover:text-foreground transition-colors duration-150"
                >
                  Todos los Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="font-sans text-xs text-neutral-600 dark:text-zinc-400 hover:text-foreground transition-colors duration-150"
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="font-sans text-xs text-neutral-600 dark:text-zinc-400 hover:text-foreground transition-colors duration-150"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/#nosotros"
                  className="font-sans text-xs text-neutral-600 dark:text-zinc-400 hover:text-foreground transition-colors duration-150"
                >
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="font-sans text-xs text-neutral-600 dark:text-zinc-400 hover:text-foreground transition-colors duration-150"
                >
                  Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Case Study Links */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
              Desarrollos Destacados
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {projectsData.map((proj) => (
                <li key={proj.slug}>
                  <Link
                    href={`/proyectos/${proj.slug}`}
                    className="font-sans text-xs text-neutral-600 dark:text-zinc-400 hover:text-foreground transition-colors duration-150 inline-flex items-center gap-1"
                  >
                    {proj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <span className="font-mono text-[10px] text-neutral-400 dark:text-zinc-500">
            &copy; {currentYear} ASYMMETRIC DEVS · CORRIENTES &amp; CHACO, ARGENTINA.
          </span>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-zinc-400 hover:text-foreground active:scale-[0.96] transition-[color,transform] duration-150 cursor-pointer"
          >
            Volver Arriba
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
          </button>
        </div>
      </div>
    </footer>
  );
}
