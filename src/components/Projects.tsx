"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, Play, ArrowLeft } from "lucide-react";
import { projectsData, type ProjectCategory } from "@/data/projects";

const categories: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "Todos los Proyectos" },
  { id: "web", label: "Plataformas Web & CRM" },
  { id: "mobile", label: "Apps Móviles (iOS / Android)" },
  { id: "ai-web3", label: "IA, Satélites & Agrotech" },
];

interface ProjectsProps {
  mode?: "home" | "catalog";
}

export default function Projects({ mode = "home" }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProjectCategory>("all");

  const visibleProjects =
    mode === "home"
      ? projectsData.filter((p) => p.featured).slice(0, 4)
      : selectedCategory === "all"
        ? projectsData
        : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="proyectos"
      className={`${
        mode === "home" ? "border-b border-border-subtle" : "pt-24 pb-20"
      } bg-background relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto border-x border-border-subtle px-6 md:px-12 py-20 relative z-10">
        {mode === "catalog" ? (
          <div className="mb-8">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-none font-mono text-xs font-semibold bg-surface hover:bg-foreground hover:text-background text-foreground transition-colors duration-150 border border-border-subtle"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Inicio
            </Link>
          </div>
        ) : null}

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-border-subtle mb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] font-bold text-accent-text dark:text-accent uppercase tracking-widest block mb-3">
              {mode === "home" ? "[02 // PROYECTOS DESTACADOS]" : "[CATÁLOGO DE PROYECTOS]"}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.04em] text-foreground leading-[1.08] sm:leading-[1.02]">
              {mode === "home" ? (
                <>
                  Proyectos y productos que{" "}
                  <span className="marker-highlight inline-block bg-accent text-accent-foreground px-3 py-0.5 font-bold">
                    desarrollamos.
                  </span>
                </>
              ) : (
                <>
                  Todos nuestros proyectos y{" "}
                  <span className="marker-highlight inline-block bg-accent text-accent-foreground px-3 py-0.5 font-bold">
                    desarrollos.
                  </span>
                </>
              )}
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-brand-muted leading-relaxed">
              Conocé qué problema resuelve cada sistema, cómo funciona en la práctica y qué tecnologías utilizamos. Entrá a cualquier proyecto para ver su ficha completa con capturas y video.
            </p>
          </div>

          {mode === "home" ? (
            <div className="shrink-0">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider bg-surface hover:bg-foreground hover:text-background text-foreground transition-colors duration-150 border border-foreground"
              >
                Ver todos los proyectos ({projectsData.length})
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-none font-mono text-xs font-semibold transition-colors duration-150 cursor-pointer border ${
                      active
                        ? "bg-accent text-accent-foreground border-accent font-bold"
                        : "bg-surface text-brand-muted border-border-subtle hover:text-foreground hover:border-foreground"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Projects Grid — Architectural Spec Sheets */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.22 }}
                className="group border border-border-subtle bg-surface hover:border-foreground transition-colors duration-150 flex flex-col justify-between"
              >
                <div>
                  {/* Top Index Header Bar */}
                  <div className="border-b border-border-subtle px-5 py-3 flex items-center justify-between gap-2 bg-background">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-foreground">
                      {String(idx + 1).padStart(2, "0")} / {project.categoryLabel.toUpperCase()}
                    </span>
                    {project.badge ? (
                      <span className="px-2.5 py-0.5 rounded-none text-[10px] font-mono font-bold bg-accent text-accent-foreground uppercase tracking-wider">
                        {project.badge}
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] text-brand-muted uppercase">
                        {project.period}
                      </span>
                    )}
                  </div>

                  {/* Sharp Image Frame */}
                  <div className="p-4 pb-0">
                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="relative block aspect-16/10 w-full rounded-none overflow-hidden bg-neutral-950 border border-border-subtle"
                    >
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      />
                      {project.videoEmbed ? (
                        <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-black/85 text-white font-mono text-[10px] border border-white/20">
                          <Play className="w-3 h-3 fill-current text-accent" />
                          Incluye Video Demo
                        </div>
                      ) : null}
                    </Link>
                  </div>

                  {/* Structured Body */}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[11px] text-brand-muted">
                        {project.clientOrContext}
                      </span>
                      <span className="font-mono text-[11px] text-brand-muted shrink-0">
                        {project.period}
                      </span>
                    </div>

                    <Link href={`/proyectos/${project.slug}`} className="block group/title">
                      <h3 className="font-sans text-2xl font-bold tracking-tight text-foreground group-hover/title:text-accent-text dark:group-hover/title:text-accent transition-colors duration-150">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm font-medium text-brand-muted mt-0.5">
                        {project.subtitle}
                      </p>
                    </Link>

                    <p className="mt-3 font-sans text-sm text-brand-muted leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Actions: Direct to Details & Web */}
                <div className="px-5 py-4 border-t border-border-subtle bg-background flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.links.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-none font-mono text-[11px] font-semibold text-foreground bg-surface hover:bg-foreground hover:text-background border border-border-subtle transition-colors duration-150"
                      >
                        Web
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    {project.links.playStore ? (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-none font-mono text-[11px] font-semibold text-foreground bg-surface hover:bg-foreground hover:text-background border border-border-subtle transition-colors duration-150"
                      >
                        Play Store
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : null}
                  </div>

                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-none font-mono text-[11px] font-bold uppercase tracking-wider bg-accent text-accent-foreground hover:bg-accent-hover transition-colors duration-150"
                  >
                    Ver Detalle
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
