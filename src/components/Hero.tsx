"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Trophy,
  Sparkles,
  CheckCircle2,
  Layers,
  Smartphone,
  Cpu,
} from "lucide-react";
import { projectsData } from "@/data/projects";

export default function Hero() {
  const showcaseProjects = projectsData.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = showcaseProjects[activeIndex];

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Subtle ambient atmosphere */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[680px] h-[380px] rounded-full bg-pastel-mint/45 dark:bg-pastel-mint/20 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] rounded-full bg-pastel-indigo/35 dark:bg-pastel-indigo/15 blur-[120px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        {/* Top Row: Live Milestone Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <Link
            href="#novedades"
            className="group inline-flex items-center gap-2.5 pl-3 pr-4 py-1.5 rounded-full bg-white/80 dark:bg-zinc-900/90 border border-border-subtle hover:border-emerald-500/40 shadow-xs transition-[border-color,transform] duration-150 active:scale-[0.98]"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <Trophy className="w-3 h-3" />
            </span>
            <span className="font-mono text-[11px] font-medium text-neutral-700 dark:text-zinc-300">
              <strong className="font-bold text-foreground">Nuevo logro:</strong> 1° Puesto Track Stellar (NEATECH 2026) &amp; 3° Puesto Rally Latam
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 transition-[color,transform] duration-150" />
          </Link>
        </motion.div>

        {/* Main Asymmetric 12-Col Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Value Proposition & Direct Action */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="font-sans text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold tracking-tight text-foreground leading-[1.06]"
            >
              Ingeniería de software que convierte ideas en productos reales.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
              className="mt-6 font-sans text-base sm:text-lg text-neutral-600 dark:text-zinc-400 leading-relaxed max-w-xl"
            >
              Somos un equipo de cuatro Ingenieros en Sistemas. Diseñamos y desarrollamos{" "}
              <strong className="font-semibold text-foreground">plataformas web comerciales</strong>,{" "}
              <strong className="font-semibold text-foreground">aplicaciones móviles (iOS &amp; Android)</strong> y{" "}
              <strong className="font-semibold text-foreground">automatizaciones con IA</strong> listas para escalar tu negocio sin intermediarios.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.23, 1, 0.32, 1] }}
              className="mt-8 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto"
            >
              <Link
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 pl-7 pr-6 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-foreground text-background hover:opacity-90 active:scale-[0.96] transition-[opacity,transform] duration-150 shadow-md"
              >
                Ver Proyectos Reales
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/80 dark:bg-zinc-900/80 hover:bg-neutral-100 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
              >
                Cotizar un Proyecto
              </Link>
            </motion.div>

            {/* Concrete Proof Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: [0.23, 1, 0.32, 1] }}
              className="mt-10 pt-8 border-t border-border-subtle grid grid-cols-3 gap-6 w-full"
            >
              <div>
                <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-foreground">
                  4 Ing.
                </span>
                <span className="font-mono text-[11px] text-neutral-500 dark:text-zinc-400">
                  Trato directo sin intermediarios
                </span>
              </div>
              <div>
                <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-foreground">
                  +6 Apps
                </span>
                <span className="font-mono text-[11px] text-neutral-500 dark:text-zinc-400">
                  En producción y Google Play
                </span>
              </div>
              <div>
                <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  3 Podios
                </span>
                <span className="font-mono text-[11px] text-neutral-500 dark:text-zinc-400">
                  NEATECH &amp; Rally Latam
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Live Shipped Product Explorer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-6 w-full"
          >
            {/* Outer radius = inner radius (16px / rounded-2xl) + padding (8px / p-2) = 24px (rounded-3xl) */}
            <div className="glass-card rounded-3xl p-2 sm:p-3 shadow-xl">
              {/* Top Interactive Project Selector Bar */}
              <div className="flex items-center justify-between gap-2 px-3 py-2.5 border-b border-border-subtle overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-1.5 shrink-0">
                  {showcaseProjects.map((proj, idx) => {
                    const isSelected = idx === activeIndex;
                    return (
                      <button
                        key={proj.slug}
                        onClick={() => setActiveIndex(idx)}
                        className={`px-3 py-1.5 rounded-full font-mono text-[11px] font-semibold transition-[background-color,color,transform] duration-150 active:scale-[0.96] cursor-pointer shrink-0 ${
                          isSelected
                            ? "bg-foreground text-background shadow-2xs"
                            : "text-neutral-600 dark:text-zinc-400 hover:bg-neutral-200/60 dark:hover:bg-zinc-800/70 hover:text-foreground"
                        }`}
                      >
                        {proj.title}
                      </button>
                    );
                  })}
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-700 dark:text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 shrink-0">
                  <Sparkles className="w-3 h-3" />
                  Caso Real
                </span>
              </div>

              {/* Active Project Preview Card */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeProject.slug}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="p-2 sm:p-3"
                >
                  {/* Screenshot Frame */}
                  <Link
                    href={`/proyectos/${activeProject.slug}`}
                    className="group relative block aspect-16/10 w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-zinc-900 img-frame"
                  >
                    <img
                      src={activeProject.coverImage}
                      alt={`Vista previa de ${activeProject.title}`}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent flex flex-col justify-end p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-zinc-900">
                          {activeProject.categoryLabel}
                        </span>
                        {activeProject.badge ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/90 text-white">
                            {activeProject.badge}
                          </span>
                        ) : null}
                      </div>
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h2 className="font-sans text-xl sm:text-2xl font-bold text-white">
                            {activeProject.title}
                          </h2>
                          <p className="font-sans text-xs sm:text-sm text-zinc-200 line-clamp-1">
                            {activeProject.subtitle}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-white text-zinc-900 font-mono text-[11px] font-bold shrink-0 group-hover:bg-emerald-400 transition-colors duration-150">
                          Ver Detalle
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Bottom Functional Summary Bar */}
                  <div className="mt-3 px-2 pt-2 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                      {activeProject.highlights.slice(0, 2).map((h) => (
                        <div key={h.label} className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>
                            <strong className="font-semibold text-foreground">{h.metric}:</strong> {h.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {activeProject.links.live ? (
                        <a
                          href={activeProject.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] font-semibold text-neutral-500 dark:text-zinc-400 hover:text-foreground inline-flex items-center gap-1 transition-colors duration-150"
                        >
                          Web en vivo
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : null}
                      <Link
                        href={`/proyectos/${activeProject.slug}`}
                        className="font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                      >
                        Caso de estudio completo
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Domain Capabilities Strip under Showcase */}
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              <div className="px-3.5 py-2.5 rounded-2xl bg-white/60 dark:bg-zinc-900/50 border border-border-subtle flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-neutral-700 dark:text-zinc-300 shrink-0" />
                <span className="font-sans text-xs font-medium text-neutral-700 dark:text-zinc-300 truncate">
                  Webs &amp; Plataformas SaaS
                </span>
              </div>
              <div className="px-3.5 py-2.5 rounded-2xl bg-white/60 dark:bg-zinc-900/50 border border-border-subtle flex items-center gap-2.5">
                <Smartphone className="w-4 h-4 text-neutral-700 dark:text-zinc-300 shrink-0" />
                <span className="font-sans text-xs font-medium text-neutral-700 dark:text-zinc-300 truncate">
                  Apps iOS &amp; Android
                </span>
              </div>
              <div className="px-3.5 py-2.5 rounded-2xl bg-white/60 dark:bg-zinc-900/50 border border-border-subtle flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-neutral-700 dark:text-zinc-300 shrink-0" />
                <span className="font-sans text-xs font-medium text-neutral-700 dark:text-zinc-300 truncate">
                  Agentes IA &amp; Blockchain
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
