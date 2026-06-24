"use client";

import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border-subtle py-16 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6 pb-12 border-b border-border-subtle">
          
          {/* Left Column: Brand & Bio */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans font-extrabold tracking-tight text-lg text-foreground">
                ASYMMETRIC
              </span>
              <span className="font-mono text-[9px] font-medium px-2 py-0.5 rounded-full bg-neutral-900/5 dark:bg-white/5 text-neutral-600 dark:text-stone-400">
                [devs]
              </span>
            </div>
            <p className="font-sans text-xs text-neutral-500 dark:text-stone-400 leading-relaxed font-light">
              Desarrollamos sitios web, automatizaciones con IA y software a medida. Soluciones sencillas y escalables para problemas complejos.
            </p>
          </div>

          {/* Right Column: Navigation and Quick Contact */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-mono text-[9px] font-bold text-neutral-400 dark:text-stone-500 uppercase tracking-widest mb-4">
                Navegación
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href="#inicio" className="font-sans text-xs text-neutral-600 dark:text-stone-400 hover:text-foreground transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="font-sans text-xs text-neutral-600 dark:text-stone-400 hover:text-foreground transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="font-sans text-xs text-neutral-600 dark:text-stone-400 hover:text-foreground transition-colors">
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="font-sans text-xs text-neutral-600 dark:text-stone-400 hover:text-foreground transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-mono text-[9px] font-bold text-neutral-400 dark:text-stone-500 uppercase tracking-widest mb-4">
                Legal
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <span className="font-sans text-xs text-neutral-400 dark:text-stone-500 cursor-default">
                    Privacidad
                  </span>
                </li>
                <li>
                  <span className="font-sans text-xs text-neutral-400 dark:text-stone-500 cursor-default">
                    Términos
                  </span>
                </li>
                <li>
                  <span className="font-sans text-xs text-neutral-400 dark:text-stone-500 cursor-default">
                    Cookies
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright and Scroll back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <span className="font-mono text-[10px] text-neutral-400 dark:text-stone-500">
            &copy; {currentYear} ASYMMETRIC DEVS. TODOS LOS DERECHOS RESERVADOS.
          </span>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-stone-400 hover:text-foreground transition-colors focus:outline-hidden"
          >
            Volver Arriba
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
