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
      className="relative pt-16 bg-background bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto border-x border-b border-border-subtle bg-background">
        {/* Top Architectural Index Bar */}
        <div className="border-b border-border-subtle px-6 sm:px-10 py-2.5 flex flex-wrap items-center justify-between gap-4 bg-surface text-[11px] font-mono text-brand-muted uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span className="font-bold text-foreground">[01 // ESTUDIO DE INGENIERÍA]</span>
            <span className="hidden sm:inline text-border-subtle">|</span>
            <span className="hidden sm:inline">SISTEMAS WEB · APPS MÓVILES · IA</span>
          </div>
          <div className="flex items-center gap-2">
            <span>LAT -27.4692° / LON -58.8306°</span>
          </div>
        </div>

        {/* Main 12-Col Swiss Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-border-subtle items-stretch">
          {/* Left Column: Editorial Manifesto + Proof Cells */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Live Milestone Editorial Ticker */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-8"
              >
                <Link
                  href="#noticias"
                  className="group inline-flex items-center gap-2.5 px-3 py-2 rounded-none bg-surface border border-border-subtle hover:border-[#FF4D15] transition-colors duration-150"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-[#FF4D15] text-white shrink-0">
                    <Trophy className="w-3 h-3" />
                  </span>
                  <span className="font-mono text-[11px] font-medium text-foreground">
                    <strong className="font-bold uppercase tracking-wider text-[#FF4D15]">Nuevo logro:</strong>{" "}
                    1° Puesto Track Stellar (NEATECH 2026) &amp; 3° Puesto Rally Latam
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-[#FF4D15] group-hover:translate-x-0.5 transition-[color,transform] duration-150 shrink-0" />
                </Link>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="font-sans text-4xl sm:text-5xl xl:text-[3.65rem] font-bold tracking-[-0.04em] text-foreground leading-[0.98]"
              >
                Ingeniería de software que convierte ideas en{" "}
                <span className="font-serif italic font-normal text-[#FF4D15]">
                  productos reales.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="mt-6 font-sans text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl"
              >
                Somos un equipo de cuatro Ingenieros en Sistemas. Desarrollamos{" "}
                <strong className="font-semibold text-foreground">sitios y plataformas web</strong>,{" "}
                <strong className="font-semibold text-foreground">aplicaciones móviles (iOS y Android)</strong> y{" "}
                <strong className="font-semibold text-foreground">herramientas con IA</strong> trabajando en contacto directo con vos durante todo el proyecto.
              </motion.p>

              {/* Primary & Secondary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              >
                <Link
                  href="#proyectos"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-none text-xs font-mono font-bold uppercase tracking-wider bg-[#FF4D15] hover:bg-[#E03E0B] text-white transition-colors duration-150"
                >
                  Ver Proyectos
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-none text-xs font-mono font-bold uppercase tracking-wider bg-surface hover:bg-foreground hover:text-background text-foreground border border-foreground transition-colors duration-150"
                >
                  Consultar Proyecto
                </Link>
              </motion.div>
            </div>

            {/* Bottom Edge-to-Edge Ruled Proof Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="grid grid-cols-3 divide-x divide-border-subtle border-t border-border-subtle -mx-6 sm:-mx-10 lg:-mx-12 -mb-6 sm:-mb-10 lg:-mb-12 mt-10 bg-surface"
            >
              <div className="p-4 sm:p-6">
                <span className="block font-mono text-[10px] text-[#FF4D15] uppercase tracking-wider mb-1">
                  [01 / EQUIPO]
                </span>
                <span className="block font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  4 Ing.
                </span>
                <span className="font-mono text-[11px] text-brand-muted block mt-1 leading-tight">
                  Trato directo con quienes programan
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <span className="block font-mono text-[10px] text-[#FF4D15] uppercase tracking-wider mb-1">
                  [02 / PORTFOLIO]
                </span>
                <span className="block font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  6 Proyectos
                </span>
                <span className="font-mono text-[11px] text-brand-muted block mt-1 leading-tight">
                  Web, apps móviles e IA
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <span className="block font-mono text-[10px] text-[#FF4D15] uppercase tracking-wider mb-1">
                  [03 / PREMIOS]
                </span>
                <span className="block font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#FF4D15]">
                  2 Podios
                </span>
                <span className="font-mono text-[11px] text-brand-muted block mt-1 leading-tight">
                  NEATECH 2026 y Rally Latam
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Swiss Technical Viewport Project Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-6 p-4 sm:p-8 lg:p-10 bg-surface flex flex-col justify-center border-t lg:border-t-0 border-border-subtle"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              stopDraggingTabs();
            }}
          >
            <div className="border border-foreground/20 bg-background">
              {/* Top Bar: Fixed "PROYECTOS" label + Wheel/Drag Horizontal Tabs */}
              <div className="flex items-center gap-2 px-2.5 py-2 border-b border-border-subtle bg-surface">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#FF4D15] text-white rounded-none px-2.5 py-1 shrink-0">
                  Proyectos
                </span>

                {/* Wheel + Drag + Touch Horizontal Scroll Strip without scrollbar */}
                <div
                  ref={tabsContainerRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={stopDraggingTabs}
                  onMouseLeave={stopDraggingTabs}
                  className="relative flex-1 flex items-center gap-1 overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing py-0.5"
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
                        className={`px-3 py-1 rounded-none font-mono text-[11px] font-semibold border transition-colors duration-150 cursor-pointer shrink-0 ${
                          isSelected
                            ? "bg-foreground text-background border-foreground"
                            : "bg-background text-brand-muted border-border-subtle hover:border-foreground hover:text-foreground"
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
                    className="p-1.5 rounded-none border border-border-subtle bg-background text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 cursor-pointer"
                    aria-label="Proyecto anterior"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="p-1.5 rounded-none border border-border-subtle bg-background text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 cursor-pointer"
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
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.22 }}
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
                  className="p-3 sm:p-4"
                >
                  {/* Screenshot Frame */}
                  <Link
                    href={`/proyectos/${activeProject.slug}`}
                    className="group relative block aspect-16/10 w-full rounded-none overflow-hidden bg-neutral-900 border border-border-subtle"
                  >
                    <img
                      src={activeProject.coverImage}
                      alt={`Vista previa de ${activeProject.title}`}
                      draggable={false}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300 select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-none text-[10px] font-mono font-bold uppercase tracking-wider bg-white text-black">
                          {activeProject.categoryLabel}
                        </span>
                        {activeProject.badge ? (
                          <span className="px-2.5 py-0.5 rounded-none text-[10px] font-mono font-bold bg-[#FF4D15] text-white">
                            {activeProject.badge}
                          </span>
                        ) : null}
                      </div>
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h2 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white">
                            {activeProject.title}
                          </h2>
                          <p className="font-sans text-xs sm:text-sm text-zinc-200 line-clamp-1">
                            {activeProject.subtitle}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 px-3.5 py-2 rounded-none bg-[#FF4D15] text-white font-mono text-[11px] font-bold uppercase tracking-wider shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-150">
                          Ver Detalle
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Bottom Functional Specification Bar */}
                  <div className="mt-3 pt-3 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                      {activeProject.highlights.slice(0, 2).map((h) => (
                        <div
                          key={h.label}
                          className="flex items-center gap-1.5 text-xs text-brand-muted"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D15] shrink-0" />
                          <span>
                            <strong className="font-mono font-bold text-foreground">
                              {h.metric}:
                            </strong>{" "}
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
                          className="font-mono text-[11px] font-semibold text-brand-muted hover:text-foreground inline-flex items-center gap-1 transition-colors duration-150"
                        >
                          Web en vivo
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : activeProject.links.playStore ? (
                        <a
                          href={activeProject.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] font-semibold text-brand-muted hover:text-foreground inline-flex items-center gap-1 transition-colors duration-150"
                        >
                          Play Store
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : null}
                      <Link
                        href={`/proyectos/${activeProject.slug}`}
                        className="font-mono text-[11px] font-bold text-[#FF4D15] hover:underline inline-flex items-center gap-1 uppercase"
                      >
                        Ver ficha del proyecto
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Rectangular Progress Segments */}
              <div className="px-4 py-2.5 border-t border-border-subtle bg-surface flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-brand-muted uppercase tracking-wider">
                  ÍNDICE {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1.5">
                  {showcaseProjects.map((proj, idx) => {
                    const isSelected = idx === activeIndex;
                    return (
                      <button
                        key={proj.slug}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Ir a ${proj.title}`}
                        className={`h-1.5 rounded-none transition-[width,background-color] duration-200 cursor-pointer ${
                          isSelected
                            ? "w-8 bg-[#FF4D15]"
                            : "w-3 bg-border-subtle hover:bg-foreground/50"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
