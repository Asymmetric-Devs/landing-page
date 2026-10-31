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
    <article className="pt-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto border-x border-border-subtle px-6 md:px-12 py-12 sm:py-16">
        {/* Back Breadcrumb & Technical Spec Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-subtle mb-10">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-none font-mono text-xs font-semibold bg-surface hover:bg-foreground hover:text-background text-foreground transition-colors duration-150 border border-border-subtle"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver a Proyectos
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-none font-mono text-[11px] font-bold uppercase tracking-wider bg-surface text-foreground border border-border-subtle">
              {project.categoryLabel}
            </span>
            {project.badge ? (
              <span className="px-3 py-1 rounded-none font-mono text-[11px] font-bold uppercase tracking-wider bg-accent text-accent-foreground">
                {project.badge}
              </span>
            ) : null}
          </div>
        </div>

        {/* Hero Title & Links */}
        <div className="max-w-4xl">
          <span className="font-mono text-xs font-bold text-accent-text dark:text-accent uppercase tracking-wider block mb-2">
            [{project.clientOrContext} · {project.period}]
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] text-foreground leading-[0.98]">
            {project.title}
          </h1>
          <p className="mt-3 font-sans font-semibold text-xl sm:text-2xl text-accent-text dark:text-accent tracking-tight">
            {project.subtitle}
          </p>
          <p className="mt-5 font-sans text-base sm:text-lg text-brand-muted leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground hover:bg-accent-hover transition-colors duration-150"
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider bg-surface hover:bg-foreground hover:text-background text-foreground transition-colors duration-150 border border-border-subtle"
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground hover:bg-accent-hover transition-colors duration-150"
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-none font-mono text-xs font-semibold bg-surface hover:bg-foreground hover:text-background text-foreground transition-colors duration-150 border border-border-subtle"
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-none font-mono text-xs font-semibold bg-surface hover:bg-foreground hover:text-background text-foreground transition-colors duration-150 border border-border-subtle"
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-none font-mono text-xs font-semibold bg-surface hover:bg-foreground hover:text-background text-foreground transition-colors duration-150 border border-border-subtle"
              >
                Repositorio GitHub
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Ruled 4-Column Metric Bar */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 border border-border-subtle divide-y lg:divide-y-0 divide-x divide-border-subtle bg-surface">
          {project.highlights.map((h, idx) => (
            <div key={h.label} className="p-5 sm:p-6">
              <span className="font-mono text-[10px] font-bold text-accent-text dark:text-accent uppercase tracking-wider block mb-1">
                [MÉTRICA 0{idx + 1}]
              </span>
              <span className="block font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {h.metric}
              </span>
              <span className="mt-1 block font-sans text-xs text-brand-muted leading-snug">
                {h.label}
              </span>
            </div>
          ))}
        </div>

        {/* Technical Gallery Viewport */}
        <div className="mt-12 border border-border-subtle bg-surface">
          <div className="px-5 py-3 border-b border-border-subtle bg-background flex items-center justify-between">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-foreground">
              [GALERÍA DE INTERFAZ // {project.title.toUpperCase()}]
            </span>
            <span className="font-mono text-xs text-accent-text dark:text-accent font-bold">
              CAPTURA {activeImageIndex + 1} DE {project.gallery.length}
            </span>
          </div>

          <div className="p-4">
            <div className="relative aspect-16/10 w-full rounded-none overflow-hidden bg-neutral-950 border border-border-subtle group">
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
                  className="w-full h-full object-contain bg-neutral-950 cursor-zoom-in"
                />
              </AnimatePresence>

              {/* Expand Button */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-none bg-black/85 hover:bg-accent hover:text-accent-foreground text-white font-mono text-[11px] font-bold uppercase tracking-wider border border-white/20 transition-colors duration-150 cursor-pointer"
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-none bg-black/80 hover:bg-accent hover:text-accent-foreground text-white border border-white/20 transition-colors duration-150 cursor-pointer"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex((prev) => (prev + 1) % project.gallery.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-none bg-black/80 hover:bg-accent hover:text-accent-foreground text-white border border-white/20 transition-colors duration-150 cursor-pointer"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              ) : null}
            </div>

            {/* Caption */}
            <div className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="font-mono text-xs font-medium text-foreground">
                {currentImage.caption}
              </p>
            </div>

            {/* Thumbnail Strip */}
            {project.gallery.length > 1 ? (
              <div className="mt-4 pt-4 border-t border-border-subtle flex gap-2.5 overflow-x-auto pb-1">
                {project.gallery.map((item, idx) => {
                  const isSelected = idx === activeImageIndex;
                  return (
                    <button
                      key={item.url}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-24 sm:w-28 aspect-16/10 rounded-none overflow-hidden shrink-0 cursor-pointer border transition-opacity duration-150 ${
                        isSelected
                          ? "border-accent ring-2 ring-accent opacity-100"
                          : "border-border-subtle opacity-55 hover:opacity-90"
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
        </div>

        {/* Functional Case Study: Problem vs Solution Dossier Blocks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 border border-border-subtle divide-y md:divide-y-0 md:divide-x divide-border-subtle bg-surface">
          <div className="p-8 sm:p-10">
            <span className="font-mono text-[11px] font-bold text-accent-text dark:text-accent uppercase tracking-widest block mb-3">
              [EL PROBLEMA / NECESIDAD]
            </span>
            <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground mb-4">
              ¿Qué desafío buscábamos resolver?
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-8 sm:p-10 bg-background">
            <span className="font-mono text-[11px] font-bold text-accent-text dark:text-accent uppercase tracking-widest block mb-3">
              [LA SOLUCIÓN IMPLEMENTADA]
            </span>
            <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground mb-4">
              ¿Cómo funciona en la práctica?
            </h2>
            <p className="font-sans text-sm sm:text-base text-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Functional Features Cells */}
        <div className="mt-16">
          <span className="font-mono text-[11px] font-bold text-accent-text dark:text-accent uppercase tracking-widest block mb-2">
            [FUNCIONALIDADES CLAVE]
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            Lo que el sistema permite hacer día a día
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feat, idx) => (
              <div
                key={feat.title}
                className="p-6 sm:p-7 border border-border-subtle bg-surface"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
                      <span>{feat.title}</span>
                      <CheckCircle2 className="w-4 h-4 text-accent-text dark:text-accent shrink-0" />
                    </h3>
                    <p className="mt-2 font-sans text-sm text-brand-muted leading-relaxed">
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
              <Play className="w-4 h-4 text-accent fill-current" />
              <span className="font-mono text-[11px] font-bold text-accent-text dark:text-accent uppercase tracking-widest">
                [DEMOSTRACIÓN EN VIDEO]
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
              Mirá {project.title} en acción
            </h2>
            <div className="border border-border-subtle p-3 bg-surface">
              <div className="aspect-video w-full rounded-none overflow-hidden bg-black border border-border-subtle">
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

        {/* Clean Basic Technical Summary Table */}
        <div className="mt-16 border border-border-subtle bg-surface">
          <div className="p-6 sm:p-8 border-b border-border-subtle bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] font-bold text-accent-text dark:text-accent uppercase tracking-widest block mb-1">
                [FICHA TÉCNICA RESUMIDA]
              </span>
              <h2 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Tecnologías que respaldan este proyecto
              </h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-none font-mono text-[11px] font-semibold bg-surface text-foreground border border-border-subtle"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
            <div className="p-6 sm:p-8 flex items-start gap-3">
              <Layers className="w-5 h-5 text-accent-text dark:text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                  Interfaz &amp; Experiencia
                </h3>
                <p className="mt-1.5 font-sans text-xs text-brand-muted leading-relaxed">
                  {project.techSummary.frontend}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex items-start gap-3">
              <Cpu className="w-5 h-5 text-accent-text dark:text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                  Motor &amp; Lógica
                </h3>
                <p className="mt-1.5 font-sans text-xs text-brand-muted leading-relaxed">
                  {project.techSummary.backend}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex items-start gap-3">
              <Database className="w-5 h-5 text-accent-text dark:text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                  Infraestructura &amp; Datos
                </h3>
                <p className="mt-1.5 font-sans text-xs text-brand-muted leading-relaxed">
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
              className="group p-6 rounded-none bg-surface border border-border-subtle hover:border-foreground flex items-center justify-between gap-4 transition-colors duration-150"
            >
              <div>
                <span className="font-mono text-[10px] text-brand-muted uppercase tracking-wider block">
                  Proyecto Anterior
                </span>
                <span className="font-sans text-base font-bold text-foreground group-hover:text-accent-text dark:group-hover:text-accent transition-colors">
                  {prevProject.title}
                </span>
              </div>
              <ArrowLeft className="w-4 h-4 text-brand-muted group-hover:-translate-x-1 transition-transform duration-150" />
            </Link>

            <Link
              href={`/proyectos/${nextProject.slug}`}
              className="group p-6 rounded-none bg-surface border border-border-subtle hover:border-foreground flex items-center justify-between gap-4 text-right transition-colors duration-150"
            >
              <ArrowRight className="w-4 h-4 text-brand-muted group-hover:translate-x-1 transition-transform duration-150 order-2" />
              <div className="order-1 ml-auto">
                <span className="font-mono text-[10px] text-brand-muted uppercase tracking-wider block">
                  Siguiente Proyecto
                </span>
                <span className="font-sans text-base font-bold text-foreground group-hover:text-accent-text dark:group-hover:text-accent transition-colors">
                  {nextProject.title}
                </span>
              </div>
            </Link>
          </div>

          <div className="p-8 sm:p-10 rounded-none bg-surface-contrast text-background border border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight">
                ¿Buscás desarrollar una solución como {project.title}?
              </h3>
              <p className="mt-2 font-sans text-sm opacity-80 max-w-xl">
                Hablá directamente con los ingenieros que diseñaron y pusieron en marcha este proyecto.
              </p>
            </div>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-none font-mono text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground hover:bg-accent-hover transition-colors duration-150 shrink-0"
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xs flex flex-col items-center justify-center p-4 sm:p-8 overscroll-contain"
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-none bg-accent text-accent-foreground hover:bg-accent-hover transition-colors duration-150 cursor-pointer"
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
                className="max-w-full max-h-[78vh] rounded-none border border-white/20 object-contain"
              />
            </div>

            <div
              className="mt-4 text-center max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-mono text-sm text-white font-medium">
                {currentImage.caption}
              </p>
              <span className="font-mono text-xs text-accent">
                {activeImageIndex + 1} / {project.gallery.length}
              </span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
