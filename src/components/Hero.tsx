"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Settings,
  Lightbulb,
} from "lucide-react";

const studioOutputs = [
  {
    id: 0,
    num: "01",
    label: "Sitios & Sistemas Web",
    sublabel: "Presencia profesional y gestión",
    description:
      "Páginas comerciales rápidas, catálogos interactivos y paneles propios para administrar tus clientes, ventas o inventario desde cualquier dispositivo.",
    icon: Globe,
    yPos: 44,
  },
  {
    id: 1,
    num: "02",
    label: "Apps para Celulares",
    sublabel: "iPhone y Android listas para usar",
    description:
      "Aplicaciones móviles pensadas para que tus clientes reserven, compren o interactúen con tu negocio desde su teléfono todos los días.",
    icon: Smartphone,
    yPos: 135,
  },
  {
    id: 2,
    num: "03",
    label: "Automatización & IA",
    sublabel: "Atención y tareas sin fricción",
    description:
      "Asistentes inteligentes conectados a tu WhatsApp o sistema que responden consultas, agendan turnos y ahorran horas de trabajo manual.",
    icon: Settings,
    yPos: 226,
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

          {/* Right Column: Minimalist Architectural Node Graph */}
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

            {/* Interactive Node Architecture Diagram */}
            <div className="relative my-3 lg:my-4 py-2 flex items-center justify-center">
              {/* Desktop / Tablet Connected Graph */}
              <div className="w-full relative">
                {/* SVG Connection Lines Behind Nodes (visible on sm+) */}
                <svg
                  viewBox="0 0 560 270"
                  className="hidden sm:block w-full h-[250px] overflow-visible pointer-events-none"
                  fill="none"
                >
                  {/* Base line from Origin (Tu Idea) to Central Hub (Asymmetric) */}
                  <line
                    x1="108"
                    y1="135"
                    x2="164"
                    y2="135"
                    stroke="currentColor"
                    className="text-border-subtle"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <motion.line
                    x1="108"
                    y1="135"
                    x2="164"
                    y2="135"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* 3 Branch Curves from Central Hub (x=272) to Output Nodes (x=334) */}
                  {studioOutputs.map((item) => {
                    const isActive = activeIdx === item.id;
                    const curve = `M 272 135 C 302 135, 304 ${item.yPos}, 334 ${item.yPos}`;
                    return (
                      <g key={item.id}>
                        <path
                          d={curve}
                          stroke="currentColor"
                          className="text-border-subtle"
                          strokeWidth="1.5"
                        />
                        {isActive && (
                          <>
                            <motion.path
                              d={curve}
                              stroke="var(--accent)"
                              strokeWidth="2.5"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.45, ease: "easeOut" }}
                            />
                            <motion.circle
                              r="4"
                              fill="var(--accent)"
                              initial={{ offsetDistance: "0%" }}
                              animate={{ offsetDistance: "100%" }}
                              transition={{
                                duration: 1.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{ offsetPath: `path('${curve}')` }}
                            />
                          </>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Positioned Nodes Overlay on sm+, Stacked cleanly on mobile */}
                <div className="sm:absolute sm:inset-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  {/* Node 1: Tu Idea (Origin) */}
                  <div className="sm:w-[108px] shrink-0 bg-background border border-border-subtle p-3 flex sm:flex-col items-center sm:items-start gap-2.5 shadow-2xs">
                    <div className="w-7 h-7 bg-accent/20 border border-accent flex items-center justify-center shrink-0">
                      <Lightbulb className="w-3.5 h-3.5 text-foreground" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-brand-muted uppercase tracking-wider block">
                        INICIO
                      </span>
                      <span className="font-sans text-xs font-bold text-foreground leading-tight block">
                        Tu Idea o Negocio
                      </span>
                    </div>
                  </div>

                  {/* Node 2: ASYMMETRIC (Center Hub) */}
                  <div className="sm:w-[110px] shrink-0 bg-surface-contrast text-background p-3.5 border border-foreground flex sm:flex-col items-center sm:items-center justify-center text-center gap-1.5 relative">
                    <span className="w-2 h-2 bg-accent inline-block" />
                    <span className="font-sans text-xs font-bold tracking-tight uppercase block">
                      ASYMMETRIC
                    </span>
                    <span className="font-mono text-[9px] opacity-75 uppercase tracking-wider block">
                      Diseño &amp; Desarrollo
                    </span>
                  </div>

                  {/* Node 3: 3 Interactive Output Destinations */}
                  <div className="sm:w-[228px] shrink-0 flex flex-col justify-between sm:h-[240px] gap-2">
                    {studioOutputs.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeIdx === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveIdx(item.id)}
                          onMouseEnter={() => setActiveIdx(item.id)}
                          className={`w-full p-2.5 text-left border transition-all duration-150 cursor-pointer flex items-center gap-3 ${
                            isActive
                              ? "bg-accent text-accent-foreground border-foreground shadow-xs translate-x-0 sm:-translate-x-0.5"
                              : "bg-background text-foreground border-border-subtle hover:border-foreground"
                          }`}
                        >
                          <div
                            className={`w-7 h-7 flex items-center justify-center shrink-0 border ${
                              isActive
                                ? "bg-foreground text-background border-foreground"
                                : "bg-surface text-foreground border-border-subtle"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span
                              className={`font-sans text-xs sm:text-[13px] font-bold leading-snug block ${
                                isActive ? "text-accent-foreground" : "text-foreground"
                              }`}
                            >
                              {item.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
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
