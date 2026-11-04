"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Settings,
} from "lucide-react";
import { IsoHeroApparatus } from "./hero-isometric/IsoHeroApparatus";

const studioOutputs = [
  {
    id: 0,
    num: "01",
    label: "Sitios & Sistemas Web",
    sublabel: "Presencia profesional y gestión",
    description:
      "Páginas comerciales rápidas, catálogos interactivos y paneles propios para administrar tus clientes, ventas o inventario desde cualquier dispositivo.",
    icon: Globe,
  },
  {
    id: 1,
    num: "02",
    label: "Apps para Celulares",
    sublabel: "iPhone y Android listas para usar",
    description:
      "Aplicaciones móviles pensadas para que tus clientes reserven, compren o interactúen con tu negocio desde su teléfono todos los días.",
    icon: Smartphone,
  },
  {
    id: 2,
    num: "03",
    label: "Automatización & IA",
    sublabel: "Atención y tareas sin fricción",
    description:
      "Asistentes inteligentes conectados a tu WhatsApp o sistema que responden consultas, agendan turnos y ahorran horas de trabajo manual.",
    icon: Settings,
  },
] as const;

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState<0 | 1 | 2>(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
    }, 4800);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeItem = studioOutputs[activeIdx];

  return (
    <section
      id="inicio"
      className="relative pt-16 bg-background border-b border-border-subtle lg:min-h-[calc(100dvh-4rem)] lg:flex lg:flex-col overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto w-full border-x border-border-subtle bg-background flex-1 flex flex-col justify-center">
        {/* Main 12-Col Swiss Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-border-subtle items-stretch flex-1">
          {/* Left Column: Editorial Manifesto & CTAs */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 xl:p-14 flex flex-col justify-center">
            <div>
              {/* Headline with Dosel Signature Highlighter Block */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="font-sans text-4xl sm:text-5xl xl:text-[3.25rem] font-bold tracking-[-0.04em] text-foreground leading-[1.06] sm:leading-[1.03]"
              >
                Ingeniería de software que convierte ideas en{" "}
                <span className="marker-highlight inline-block bg-accent text-accent-foreground px-3 py-0.5 font-bold">
                  productos reales.
                </span>
              </motion.h1>

              {/* Subheading for Everyday Clients */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="mt-6 font-sans text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl"
              >
                Somos un equipo de cuatro Ingenieros en Sistemas. Diseñamos y construimos{" "}
                <strong className="font-semibold text-foreground">páginas y sistemas web</strong>,{" "}
                <strong className="font-semibold text-foreground">aplicaciones para celulares</strong> y{" "}
                <strong className="font-semibold text-foreground">herramientas con IA</strong> trabajando en contacto directo con vos de principio a fin.
              </motion.p>

              {/* Primary & Secondary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              >
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-none text-xs font-mono font-bold uppercase tracking-wider bg-accent hover:bg-accent-hover text-accent-foreground transition-colors duration-150"
                >
                  Contanos tu idea
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-none text-xs font-mono font-bold uppercase tracking-wider bg-surface hover:bg-foreground hover:text-background text-foreground border border-foreground transition-colors duration-150"
                >
                  Ver qué hacemos
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Isometric Architecture Flow */}
          <div
            className="lg:col-span-6 p-6 sm:p-8 lg:p-8 xl:p-10 flex flex-col justify-between bg-surface/40 border-t lg:border-t-0 border-border-subtle relative overflow-hidden select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Subtle top bar */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold text-brand-muted uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-accent inline-block" />
                DE LA IDEA AL PRODUCTO FUNCIONANDO
              </span>
              <span className="font-mono text-xs font-bold text-foreground">
                0{activeIdx + 1} / 03
              </span>
            </div>

            {/* Interactive Isometric Diagram (Directly Clickable) */}
            <div className="relative my-2 lg:my-3 flex-1 flex items-center justify-center">
              <IsoHeroApparatus
                activeIdx={activeIdx}
                onSelect={setActiveIdx}
                onHoverChange={setIsPaused}
              />
            </div>

            {/* Bottom Minimalist Editorial Caption */}
            <div className="pt-4 border-t border-border-subtle">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
                >
                  <div className="max-w-md">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2 py-0.5 bg-accent text-accent-foreground font-mono text-[10px] font-bold uppercase">
                        {activeItem.num} &middot; {activeItem.label}
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {activeItem.description}
                    </p>
                  </div>

                  {/* Stepper Indicators */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {studioOutputs.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveIdx(item.id)}
                        aria-label={`Ver ${item.label}`}
                        className={`h-2 transition-all duration-200 cursor-pointer ${
                          activeIdx === item.id
                            ? "w-7 bg-accent border border-foreground/30"
                            : "w-2 bg-border-subtle hover:bg-foreground/40"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
