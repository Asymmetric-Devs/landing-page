"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, Play, CheckCircle2, ArrowLeft } from "lucide-react";
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
        mode === "home" ? "py-24 border-t border-border-subtle" : "pt-32 pb-24"
      } bg-background relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {mode === "catalog" ? (
          <div className="mb-8">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold bg-white/85 dark:bg-[#0D111C]/90 hover:bg-slate-100 dark:hover:bg-[#131929] text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-slate-900/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Inicio
            </Link>
          </div>
        ) : null}

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] font-semibold text-indigo-600 dark:text-teal-300 uppercase tracking-widest block mb-3">
              {mode === "home" ? "[02 // PROYECTOS DESTACADOS]" : "[CATÁLOGO DE PROYECTOS]"}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {mode === "home"
                ? "Proyectos y productos que desarrollamos."
                : "Todos nuestros proyectos y desarrollos."}
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Conocé qué problema resuelve cada sistema, cómo funciona en la práctica y qué tecnologías utilizamos. Entrá a cualquier proyecto para ver su ficha completa con capturas y video.
            </p>
          </div>

          {mode === "home" ? (
            <div className="shrink-0">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-white/85 dark:bg-[#0D111C]/90 hover:bg-slate-100 dark:hover:bg-[#131929] text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-slate-900/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] tabular-nums"
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
                    className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-[background-color,color,transform,border-color] duration-150 active:scale-[0.96] cursor-pointer border ${
                      active
                        ? "bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-400/30 shadow-[0_4px_16px_-2px_rgba(99,102,241,0.45),inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                        : "bg-white/80 dark:bg-[#0D111C]/85 text-slate-600 dark:text-slate-400 border-slate-900/10 dark:border-white/10 hover:text-foreground hover:border-indigo-500/30"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                className="group rounded-[28px] p-3 bg-white/90 dark:bg-[#0D111C]/90 border border-slate-900/8 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/15 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Cover Image Container — Concentric inner radius rounded-[16px] */}
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="relative block aspect-16/10 w-full rounded-[16px] overflow-hidden bg-slate-100 dark:bg-[#06080F] img-frame"
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/75 via-transparent to-[#06080F]/15 opacity-90 group-hover:opacity-100 transition-opacity duration-200" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#06080F]/85 text-white border border-white/15 backdrop-blur-md">
                        {project.categoryLabel}
                      </span>
                      {project.badge ? (
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-teal-400 text-slate-950 shadow-sm">
                          {project.badge}
                        </span>
                      ) : null}
                    </div>

                    {/* Video Indicator if present */}
                    {project.videoEmbed ? (
                      <div className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06080F]/80 text-white font-mono text-[10px] border border-white/15 backdrop-blur-md">
                        <Play className="w-3 h-3 fill-current text-teal-400" />
                        Incluye Video Demo
                      </div>
                    ) : null}
                  </Link>

                  {/* Card Body */}
                  <div className="px-3 pt-6 pb-4">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        {project.clientOrContext}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 shrink-0 tabular-nums">
                        {project.period}
                      </span>
                    </div>

                    <Link href={`/proyectos/${project.slug}`} className="block group/title">
                      <h3 className="font-sans text-2xl font-extrabold text-foreground group-hover/title:text-indigo-600 dark:group-hover/title:text-teal-300 transition-colors duration-150">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                        {project.subtitle}
                      </p>
                    </Link>

                    <p className="mt-3 font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Functional Highlights — Duotone Indigo/Teal Metric Cards */}
                    <div className="mt-5 grid grid-cols-2 gap-2.5">
                      {project.highlights.slice(0, 2).map((item) => (
                        <div
                          key={item.label}
                          className="p-3 rounded-xl bg-slate-100/80 dark:bg-[#131929]/75 border border-slate-900/6 dark:border-white/8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                        >
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                            <span className="font-sans text-xs font-bold text-foreground tabular-nums">
                              {item.metric}
                            </span>
                          </div>
                          <span className="block font-sans text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tags + Action Buttons */}
                <div className="px-3 pb-2 pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md font-mono text-[10px] font-medium bg-slate-100 dark:bg-[#131929] text-slate-600 dark:text-slate-300 border border-slate-900/5 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.links.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-full font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#131929] hover:bg-slate-200 dark:hover:bg-[#1E293B] active:scale-[0.96] transition-[background-color,transform] duration-150 border border-slate-900/8 dark:border-white/8"
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
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-full font-mono text-[11px] font-semibold text-teal-800 dark:text-teal-300 bg-teal-500/12 hover:bg-teal-500/20 active:scale-[0.96] transition-[background-color,transform] duration-150 border border-teal-500/20"
                      >
                        Play Store
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="inline-flex items-center gap-1.5 pl-4 pr-3.5 py-2 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white active:scale-[0.96] transition-[background-color,transform] duration-150 border border-indigo-400/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                    >
                      Ver Detalle
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA on Home Mode */}
        {mode === "home" ? (
          <div className="mt-12 flex justify-center">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 pl-7 pr-6 py-4 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white active:scale-[0.96] transition-[background-color,transform] duration-150 border border-indigo-400/30 shadow-[0_8px_24px_-4px_rgba(99,102,241,0.4),inset_0_1px_0_0_rgba(255,255,255,0.2)] tabular-nums"
            >
              Explorar todos los proyectos ({projectsData.length})
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
