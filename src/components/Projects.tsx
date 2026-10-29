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
        mode === "home" ? "py-24 border-t border-border-subtle" : "pt-28 pb-24"
      } bg-background relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {mode === "catalog" ? (
          <div className="mb-8">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold bg-stone-100 dark:bg-zinc-900 hover:bg-stone-200 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Inicio
            </Link>
          </div>
        ) : null}

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-3">
              {mode === "home" ? "[02 // PROYECTOS DESTACADOS]" : "[CATÁLOGO DE PROYECTOS]"}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {mode === "home"
                ? "Proyectos y productos que desarrollamos."
                : "Todos nuestros proyectos y desarrollos."}
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-neutral-600 dark:text-zinc-400 leading-relaxed">
              Conocé qué problema resuelve cada sistema, cómo funciona en la práctica y qué tecnologías utilizamos. Entrá a cualquier proyecto para ver su ficha completa con capturas y video.
            </p>
          </div>

          {mode === "home" ? (
            <div className="shrink-0">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-stone-100 dark:bg-zinc-900 hover:bg-stone-200 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
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
                        ? "bg-foreground text-background border-foreground shadow-xs"
                        : "bg-white/70 dark:bg-zinc-900/60 text-neutral-600 dark:text-zinc-400 border-border-subtle hover:text-foreground hover:border-neutral-300 dark:hover:border-zinc-700"
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
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="group rounded-3xl p-3 bg-white/80 dark:bg-zinc-900/60 border border-border-subtle hover:border-neutral-900/15 dark:hover:border-white/15 shadow-xs hover:shadow-xl transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Cover Image Container */}
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="relative block aspect-16/10 w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-zinc-950 img-frame"
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-90 group-hover:opacity-100 transition-opacity duration-200" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-950/85 text-white backdrop-blur-md">
                        {project.categoryLabel}
                      </span>
                      {project.badge ? (
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-zinc-950 shadow-sm">
                          {project.badge}
                        </span>
                      ) : null}
                    </div>

                    {/* Video Indicator if present */}
                    {project.videoEmbed ? (
                      <div className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 text-white font-mono text-[10px] backdrop-blur-md">
                        <Play className="w-3 h-3 fill-current text-emerald-400" />
                        Incluye Video Demo
                      </div>
                    ) : null}
                  </Link>

                  {/* Card Body */}
                  <div className="px-3 pt-6 pb-4">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[11px] text-neutral-500 dark:text-zinc-400">
                        {project.clientOrContext}
                      </span>
                      <span className="font-mono text-[11px] text-neutral-400 dark:text-zinc-500 shrink-0">
                        {project.period}
                      </span>
                    </div>

                    <Link href={`/proyectos/${project.slug}`} className="block group/title">
                      <h3 className="font-sans text-2xl font-extrabold text-foreground group-hover/title:text-emerald-700 dark:group-hover/title:text-emerald-400 transition-colors duration-150">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm font-medium text-neutral-700 dark:text-zinc-300 mt-0.5">
                        {project.subtitle}
                      </p>
                    </Link>

                    <p className="mt-3 font-sans text-sm text-neutral-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Functional Highlights */}
                    <div className="mt-5 grid grid-cols-2 gap-2.5">
                      {project.highlights.slice(0, 2).map((item) => (
                        <div
                          key={item.label}
                          className="p-3 rounded-xl bg-stone-100/80 dark:bg-zinc-950/60 border border-border-subtle"
                        >
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span className="font-sans text-xs font-bold text-foreground">
                              {item.metric}
                            </span>
                          </div>
                          <span className="block font-sans text-[11px] text-neutral-500 dark:text-zinc-400 mt-0.5 leading-snug">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tags + Action Buttons */}
                <div className="px-3 pb-3 pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md font-mono text-[10px] font-medium bg-stone-100 dark:bg-zinc-800/80 text-neutral-600 dark:text-zinc-300"
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
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-full font-mono text-[11px] font-semibold text-neutral-700 dark:text-zinc-300 bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 dark:hover:bg-zinc-700 active:scale-[0.96] transition-[background-color,transform] duration-150"
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
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-full font-mono text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-500/12 hover:bg-emerald-500/20 active:scale-[0.96] transition-[background-color,transform] duration-150"
                      >
                        Play Store
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="inline-flex items-center gap-1.5 pl-4 pr-3.5 py-2 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider bg-foreground text-background hover:opacity-90 active:scale-[0.96] transition-[opacity,transform] duration-150"
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
              className="inline-flex items-center gap-2 pl-7 pr-6 py-4 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-foreground text-background hover:opacity-90 active:scale-[0.96] transition-[opacity,transform] duration-150 shadow-sm"
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
