"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Trophy,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projectsData } from "@/data/projects";

const AUTOPLAY_MS = 4500;

export default function Hero() {
  const showcaseProjects = projectsData;
  const total = showcaseProjects.length;
  const loopedProjects = [...showcaseProjects, ...showcaseProjects];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isDraggingTabs = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const hasDragged = useRef(false);

  const activeProject = showcaseProjects[activeIndex];

  // Infinite circular auto-advance
  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  // Position the active tab right after the "PROYECTOS" badge (at the exact position of the first tab)
  useEffect(() => {
    const container = tabsContainerRef.current;
    const firstTab = tabRefs.current[0];
    const activeTab = tabRefs.current[activeIndex];
    if (!container || !firstTab || !activeTab) return;

    const targetLeft = activeTab.offsetLeft - firstTab.offsetLeft;
    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeIndex]);

  // Native non-passive wheel listener on the tab strip so vertical mouse wheel scrolls horizontally
  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = tabsContainerRef.current;
    if (!container) return;
    isDraggingTabs.current = true;
    hasDragged.current = false;
    dragStartX.current = e.pageX - container.offsetLeft;
    scrollStartLeft.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingTabs.current) return;
    const container = tabsContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = x - dragStartX.current;
    if (Math.abs(walk) > 4) {
      hasDragged.current = true;
    }
    container.scrollLeft = scrollStartLeft.current - walk;
  };

  const stopDraggingTabs = () => {
    isDraggingTabs.current = false;
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-dot-matrix"
    >
      {/* Atmospheric radial spotlight at the top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.22),transparent)] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-0 w-[440px] h-[440px] rounded-full bg-teal-500/10 dark:bg-teal-400/8 blur-[130px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        {/* Main Asymmetric 12-Col Hero Grid — aligned at the top (`items-start`) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Milestone Badge + Value Proposition + Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Glowing achievement pill with indigo/teal specular ring */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.45, bounce: 0 }}
              className="mb-6"
            >
              <Link
                href="#noticias"
                className="group inline-flex items-center gap-2.5 pl-3 pr-4 py-1.5 rounded-full bg-white/85 dark:bg-[#0D111C]/90 border border-indigo-500/25 dark:border-white/12 hover:border-indigo-500/50 dark:hover:border-teal-400/40 shadow-[0_4px_20px_-4px_rgba(99,102,241,0.18),inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-[border-color,transform] duration-150 active:scale-[0.98]"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/15 text-teal-600 dark:text-teal-300 border border-teal-500/25 shrink-0">
                  <Trophy className="w-3 h-3" />
                </span>
                <span className="font-mono text-[11px] font-medium text-slate-700 dark:text-slate-300">
                  <strong className="font-bold text-foreground">Nuevo logro:</strong> 1° Puesto Track Stellar (NEATECH 2026) &amp; 3° Puesto Rally Latam
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-500 dark:group-hover:text-teal-300 group-hover:translate-x-0.5 transition-[color,transform] duration-150 shrink-0" />
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.06, bounce: 0 }}
              className="font-sans text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold tracking-tight text-foreground leading-[1.06]"
            >
              Ingeniería de software que convierte ideas en{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 dark:from-indigo-400 dark:via-indigo-300 dark:to-teal-300 bg-clip-text text-transparent">
                productos reales.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.12, bounce: 0 }}
              className="mt-6 font-sans text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
            >
              Somos un equipo de cuatro Ingenieros en Sistemas. Desarrollamos{" "}
              <strong className="font-semibold text-foreground">sitios y plataformas web</strong>,{" "}
              <strong className="font-semibold text-foreground">aplicaciones móviles (iOS y Android)</strong> y{" "}
              <strong className="font-semibold text-foreground">herramientas con IA</strong> trabajando en contacto directo con vos durante todo el proyecto.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.18, bounce: 0 }}
              className="mt-8 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto"
            >
              <Link
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 pl-7 pr-6 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white active:scale-[0.96] transition-[background-color,transform] duration-150 border border-indigo-400/30 shadow-[0_8px_24px_-4px_rgba(99,102,241,0.45),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
              >
                Ver Proyectos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/85 dark:bg-[#0D111C]/90 hover:bg-slate-100 dark:hover:bg-[#131929] text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-slate-900/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
              >
                Consultar Proyecto
              </Link>
            </motion.div>

            {/* Concrete Proof Metrics — 3 Tactile Mini-Panels with tabular-nums */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.24, bounce: 0 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full"
            >
              <div className="rounded-2xl bg-white/80 dark:bg-[#0D111C]/90 border border-border-subtle p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-foreground tabular-nums">
                  4 Ing.
                </span>
                <span className="mt-1 block font-mono text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  Trato directo con quienes programan
                </span>
              </div>
              <div className="rounded-2xl bg-white/80 dark:bg-[#0D111C]/90 border border-border-subtle p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-foreground tabular-nums">
                  6 Proyectos
                </span>
                <span className="mt-1 block font-mono text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  Web, apps móviles e IA
                </span>
              </div>
              <div className="rounded-2xl bg-white/80 dark:bg-[#0D111C]/90 border border-border-subtle p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-300 tabular-nums">
                  2 Podios
                </span>
                <span className="mt-1 block font-mono text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  NEATECH 2026 y Rally Latam
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Infinite Circular Auto-Advancing Project Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6, delay: 0.14, bounce: 0 }}
            className="lg:col-span-6 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              stopDraggingTabs();
            }}
          >
            {/* Tactile macOS / Linear Glass Deck with Concentric Radii: outer rounded-[28px] p-3, inner rounded-[16px] */}
            <div className="rounded-[28px] p-3 bg-white/90 dark:bg-[#0D111C]/95 border border-slate-900/10 dark:border-white/10 shadow-2xl shadow-indigo-950/20 backdrop-blur-xl">
              {/* Top Bar: Fixed "Proyectos" label + Wheel/Drag Horizontal Tabs (no visible scrollbar) */}
              <div className="flex items-center gap-2 px-1 pb-2.5 mb-2.5 border-b border-border-subtle">
                {/* Fixed Badge — always visible */}
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-teal-300 px-2.5 py-1 rounded-full bg-indigo-500/12 dark:bg-teal-400/12 border border-indigo-500/25 dark:border-teal-400/25 shrink-0">
                  Proyectos
                </span>

                {/* Wheel + Drag + Touch Horizontal Scroll Strip without scrollbar */}
                <div
                  ref={tabsContainerRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={stopDraggingTabs}
                  onMouseLeave={stopDraggingTabs}
                  className="relative flex-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing py-0.5"
                >
                  {loopedProjects.map((proj, idx) => {
                    const realIdx = idx % total;
                    const isPrimaryCopy = idx < total;
                    const isSelected = isPrimaryCopy && realIdx === activeIndex;
                    return (
                      <button
                        key={`${proj.slug}-${idx}`}
                        ref={(el) => {
                          if (isPrimaryCopy) {
                            tabRefs.current[realIdx] = el;
                          }
                        }}
                        type="button"
                        onClick={() => {
                          if (!hasDragged.current) {
                            setActiveIndex(realIdx);
                          }
                        }}
                        className={`px-3 py-1.5 rounded-full font-mono text-[11px] font-semibold transition-[background-color,color,transform] duration-150 active:scale-[0.96] cursor-pointer shrink-0 ${
                          isSelected
                            ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-[0_2px_10px_-1px_rgba(99,102,241,0.5),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-[#131929] hover:text-foreground"
                        }`}
                      >
                        {proj.title}
                      </button>
                    );
                  })}
                </div>

                {/* Circular Prev / Next Controls */}
                <div className="hidden sm:flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-[#131929] hover:text-foreground active:scale-[0.96] transition-[background-color,color,transform] duration-150 cursor-pointer"
                    aria-label="Proyecto anterior"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-[#131929] hover:text-foreground active:scale-[0.96] transition-[background-color,color,transform] duration-150 cursor-pointer"
                    aria-label="Siguiente proyecto"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Active Project Preview Card with Touch/Mouse Swipe Support */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeProject.slug}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ type: "spring", duration: 0.28, bounce: 0 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -45) {
                      goNext();
                    } else if (info.offset.x > 45) {
                      goPrev();
                    }
                  }}
                >
                  {/* Screenshot Frame — Concentric inner radius rounded-[16px] */}
                  <Link
                    href={`/proyectos/${activeProject.slug}`}
                    className="group relative block aspect-16/10 w-full rounded-[16px] overflow-hidden bg-slate-100 dark:bg-[#06080F] img-frame"
                  >
                    <img
                      src={activeProject.coverImage}
                      alt={`Vista previa de ${activeProject.title}`}
                      draggable={false}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300 select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/90 via-[#06080F]/25 to-transparent flex flex-col justify-end p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-slate-900">
                          {activeProject.categoryLabel}
                        </span>
                        {activeProject.badge ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-teal-400 text-slate-950">
                            {activeProject.badge}
                          </span>
                        ) : null}
                      </div>
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h2 className="font-sans text-xl sm:text-2xl font-bold text-white">
                            {activeProject.title}
                          </h2>
                          <p className="font-sans text-xs sm:text-sm text-slate-200 line-clamp-1">
                            {activeProject.subtitle}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-white text-slate-950 font-mono text-[11px] font-bold shrink-0 group-hover:bg-teal-300 transition-colors duration-150">
                          Ver Detalle
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Bottom Functional Summary Bar */}
                  <div className="mt-3 px-1 pt-1.5 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                      {activeProject.highlights.slice(0, 2).map((h) => (
                        <div
                          key={h.label}
                          className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                          <span>
                            <strong className="font-semibold text-foreground tabular-nums">{h.metric}:</strong>{" "}
                            {h.label}
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
                          className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-foreground inline-flex items-center gap-1 transition-colors duration-150"
                        >
                          Web en vivo
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : activeProject.links.playStore ? (
                        <a
                          href={activeProject.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-foreground inline-flex items-center gap-1 transition-colors duration-150"
                        >
                          Play Store
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : null}
                      <Link
                        href={`/proyectos/${activeProject.slug}`}
                        className="font-mono text-[11px] font-bold text-indigo-600 dark:text-teal-300 hover:underline inline-flex items-center gap-1"
                      >
                        Ver ficha del proyecto
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Circular Progress Dots */}
              <div className="px-4 pb-1 pt-2 flex items-center justify-center gap-1.5">
                {showcaseProjects.map((proj, idx) => {
                  const isSelected = idx === activeIndex;
                  return (
                    <button
                      key={proj.slug}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Ir a ${proj.title}`}
                      className={`h-1.5 rounded-full transition-[width,background-color] duration-200 cursor-pointer ${
                        isSelected
                          ? "w-6 bg-indigo-600 dark:bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]"
                          : "w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
