"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Cpu,
  Database,
  Maximize2,
} from "lucide-react";
import type { ProjectItem } from "@/data/projects";

interface Props {
  project: ProjectItem;
  prevProject: ProjectItem;
  nextProject: ProjectItem;
}

export default function ProjectDetailClient({ project, prevProject, nextProject }: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentImage = project.gallery[activeImageIndex] ?? {
    url: project.coverImage,
    caption: project.title,
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, project.gallery.length]);

  return (
    <article className="pt-28 pb-24 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Back Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold bg-stone-100 dark:bg-zinc-900 hover:bg-stone-200 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver a Proyectos
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider bg-stone-100 dark:bg-zinc-900 text-neutral-700 dark:text-zinc-300 border border-border-subtle">
              {project.categoryLabel}
            </span>
            {project.badge ? (
              <span className="px-3 py-1 rounded-full font-mono text-[11px] font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25">
                {project.badge}
              </span>
            ) : null}
          </div>
        </div>

        {/* Hero Title & Links */}
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-neutral-500 dark:text-zinc-400 block mb-2">
            {project.clientOrContext} · {project.period}
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.06]">
            {project.title}
          </h1>
          <p className="mt-3 font-sans text-xl sm:text-2xl font-semibold text-emerald-700 dark:text-emerald-400">
            {project.subtitle}
          </p>
          <p className="mt-5 font-sans text-base sm:text-lg text-neutral-600 dark:text-zinc-300 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-foreground text-background hover:opacity-90 active:scale-[0.96] transition-[opacity,transform] duration-150 shadow-sm"
              >
                {project.links.liveLabel ?? "Visitar Sitio Web"}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : null}

            {project.links.secondaryLive ? (
              <a
                href={project.links.secondaryLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-stone-100 dark:bg-zinc-900 hover:bg-stone-200 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
              >
                {project.links.secondaryLiveLabel ?? "Demo Secundaria"}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : null}

            {project.links.playStore ? (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-500 active:scale-[0.96] transition-[background-color,transform] duration-150 shadow-sm"
              >
                Ver en Google Play Store
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : null}

            {project.links.linkedinPost ? (
              <a
                href={project.links.linkedinPost}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs font-semibold bg-stone-100 dark:bg-zinc-900 hover:bg-stone-200 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
              >
                Publicación en LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : null}

            {project.links.pressUrl ? (
              <a
                href={project.links.pressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs font-semibold bg-stone-100 dark:bg-zinc-900 hover:bg-stone-200 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
              >
                Nota Oficial UTN-FRRe
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : null}

            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs font-semibold bg-stone-100 dark:bg-zinc-900 hover:bg-stone-200 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
              >
                Repositorio GitHub
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {project.highlights.map((h) => (
            <div
              key={h.label}
              className="p-5 rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-border-subtle shadow-2xs"
            >
              <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-foreground">
                {h.metric}
              </span>
              <span className="mt-1 block font-sans text-xs text-neutral-600 dark:text-zinc-400 leading-snug">
                {h.label}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Image Gallery Showcase */}
        <div className="mt-12 rounded-3xl p-3 sm:p-4 bg-white/80 dark:bg-zinc-900/60 border border-border-subtle shadow-lg">
          <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-zinc-950 img-frame group">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={currentImage.url}
                src={currentImage.url}
                alt={currentImage.caption}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightboxOpen(true)}
                className="w-full h-full object-contain bg-neutral-950/5 dark:bg-black/40 cursor-zoom-in"
              />
            </AnimatePresence>

            {/* Expand Button */}
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/75 hover:bg-black text-white font-mono text-[11px] font-semibold backdrop-blur-md active:scale-[0.96] transition-[background-color,transform] duration-150 cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              Ampliar imagen
            </button>

            {/* Prev / Next Controls if multiple images */}
            {project.gallery.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white active:scale-[0.96] transition-[background-color,transform] duration-150 cursor-pointer"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white active:scale-[0.96] transition-[background-color,transform] duration-150 cursor-pointer"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            ) : null}
          </div>

          {/* Caption & Counter */}
          <div className="mt-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p className="font-sans text-xs sm:text-sm font-medium text-neutral-700 dark:text-zinc-300">
              {currentImage.caption}
            </p>
            <span className="font-mono text-xs text-neutral-400 dark:text-zinc-500 shrink-0">
              Captura {activeImageIndex + 1} de {project.gallery.length}
            </span>
          </div>

          {/* Thumbnail Strip */}
          {project.gallery.length > 1 ? (
            <div className="mt-4 pt-3 border-t border-border-subtle flex gap-2.5 overflow-x-auto pb-1">
              {project.gallery.map((item, idx) => {
                const isSelected = idx === activeImageIndex;
                return (
                  <button
                    key={item.url}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 sm:w-28 aspect-16/10 rounded-xl overflow-hidden shrink-0 cursor-pointer transition-[opacity,transform] duration-150 active:scale-[0.96] img-frame ${
                      isSelected
                        ? "ring-2 ring-emerald-500 opacity-100"
                        : "opacity-55 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

        {/* Functional Case Study: Challenge vs Solution */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-stone-100/80 dark:bg-zinc-900/50 border border-border-subtle">
            <span className="font-mono text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest block mb-3">
              [EL PROBLEMA / NECESIDAD]
            </span>
            <h2 className="font-sans text-2xl font-extrabold text-foreground mb-4">
              ¿Qué desafío buscábamos resolver?
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-zinc-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-emerald-500/8 dark:bg-emerald-500/10 border border-emerald-500/20">
            <span className="font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-3">
              [LA SOLUCIÓN IMPLEMENTADA]
            </span>
            <h2 className="font-sans text-2xl font-extrabold text-foreground mb-4">
              ¿Cómo funciona en la práctica?
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-700 dark:text-zinc-200 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Functional Features */}
        <div className="mt-16">
          <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-2">
            [FUNCIONALIDADES CLAVE]
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-foreground mb-8">
            Lo que el sistema permite hacer día a día
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feat) => (
              <div
                key={feat.title}
                className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-zinc-900/60 border border-border-subtle shadow-2xs"
              >
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 p-2 rounded-xl bg-emerald-500/12 text-emerald-700 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-foreground">
                      {feat.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-neutral-600 dark:text-zinc-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Demo Section (if available) */}
        {project.videoEmbed ? (
          <div className="mt-16">
            <div className="flex items-center gap-2 mb-3">
              <Play className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-current" />
              <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
                [DEMOSTRACIÓN EN VIDEO]
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
              Mirá {project.title} en acción
            </h2>
            <div className="rounded-3xl p-3 bg-white/80 dark:bg-zinc-900/60 border border-border-subtle shadow-md">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
                <iframe
                  src={project.videoEmbed}
                  title={`Video demostración de ${project.title}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        ) : null}

        {/* Clean Basic Technical Summary */}
        <div className="mt-16 p-8 rounded-3xl bg-stone-100/70 dark:bg-zinc-900/50 border border-border-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-[11px] font-semibold text-neutral-500 dark:text-zinc-400 uppercase tracking-widest block mb-1">
                [FICHA TÉCNICA RESUMIDA]
              </span>
              <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-foreground">
                Tecnologías que respaldan este proyecto
              </h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full font-mono text-[11px] font-semibold bg-white dark:bg-zinc-800 text-foreground border border-border-subtle"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border-subtle">
            <div className="flex items-start gap-3">
              <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                  Interfaz &amp; Experiencia
                </h3>
                <p className="mt-1 font-sans text-xs text-neutral-600 dark:text-zinc-400 leading-relaxed">
                  {project.techSummary.frontend}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                  Motor &amp; Lógica
                </h3>
                <p className="mt-1 font-sans text-xs text-neutral-600 dark:text-zinc-400 leading-relaxed">
                  {project.techSummary.backend}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                  Infraestructura &amp; Datos
                </h3>
                <p className="mt-1 font-sans text-xs text-neutral-600 dark:text-zinc-400 leading-relaxed">
                  {project.techSummary.infraAndData}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next / Prev Project Navigation + Conversion Banner */}
        <div className="mt-16 pt-10 border-t border-border-subtle flex flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/proyectos/${prevProject.slug}`}
              className="group p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/50 border border-border-subtle hover:border-neutral-400 dark:hover:border-zinc-700 flex items-center justify-between gap-4 transition-colors duration-150"
            >
              <div>
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block">
                  Proyecto Anterior
                </span>
                <span className="font-sans text-base font-bold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {prevProject.title}
                </span>
              </div>
              <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:-translate-x-1 transition-transform duration-150" />
            </Link>

            <Link
              href={`/proyectos/${nextProject.slug}`}
              className="group p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/50 border border-border-subtle hover:border-neutral-400 dark:hover:border-zinc-700 flex items-center justify-between gap-4 text-right transition-colors duration-150"
            >
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform duration-150 order-2" />
              <div className="order-1 ml-auto">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block">
                  Siguiente Proyecto
                </span>
                <span className="font-sans text-base font-bold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {nextProject.title}
                </span>
              </div>
            </Link>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-foreground text-background flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold">
                ¿Buscás desarrollar una solución como {project.title}?
              </h3>
              <p className="mt-2 font-sans text-sm opacity-80 max-w-xl">
                Hablá directamente con los ingenieros que diseñaron y pusieron en marcha este proyecto.
              </p>
            </div>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-background text-foreground hover:opacity-90 active:scale-[0.96] transition-[opacity,transform] duration-150 shrink-0"
            >
              Iniciar Consulta
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 overscroll-contain"
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white active:scale-[0.96] transition-[background-color,transform] duration-150 cursor-pointer"
              aria-label="Cerrar vista ampliada"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-6xl w-full max-h-[82vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.url}
                alt={currentImage.caption}
                className="max-w-full max-h-[78vh] rounded-xl object-contain"
              />
            </div>

            <div
              className="mt-4 text-center max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-sans text-sm text-white font-medium">
                {currentImage.caption}
              </p>
              <span className="font-mono text-xs text-zinc-400">
                {activeImageIndex + 1} / {project.gallery.length}
              </span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
