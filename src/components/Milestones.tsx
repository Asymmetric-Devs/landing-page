"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Trophy,
  Radio,
  Rocket,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Calendar,
} from "lucide-react";
import { milestonesData, type MilestoneItem } from "@/data/projects";

function getMilestoneIcon(type: MilestoneItem["type"]) {
  switch (type) {
    case "premio":
      return <Trophy className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />;
    case "prensa":
      return <Radio className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
    case "lanzamiento":
      return <Rocket className="w-4 h-4 text-sky-700 dark:text-sky-400" />;
  }
}

const newsFilters: { id: "all" | MilestoneItem["type"]; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "premio", label: "Competencias & Premios" },
  { id: "prensa", label: "Prensa & Medios" },
  { id: "lanzamiento", label: "Lanzamientos" },
];

interface MilestonesProps {
  mode?: "home" | "catalog";
}

export default function Milestones({ mode = "home" }: MilestonesProps) {
  const [selectedType, setSelectedType] = useState<"all" | MilestoneItem["type"]>("all");

  const visibleNews =
    mode === "home"
      ? milestonesData.slice(0, 3)
      : selectedType === "all"
        ? milestonesData
        : milestonesData.filter((m) => m.type === selectedType);

  return (
    <section
      id="noticias"
      className={`${
        mode === "home"
          ? "py-24 bg-stone-100/50 dark:bg-zinc-950/60 border-t border-border-subtle"
          : "pt-28 pb-24 bg-background"
      } relative overflow-hidden`}
    >
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-pastel-mint/30 dark:bg-pastel-mint/10 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {mode === "catalog" ? (
          <div className="mb-8">
            <Link
              href="/#noticias"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold bg-stone-100 dark:bg-zinc-900 hover:bg-stone-200 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Inicio
            </Link>
          </div>
        ) : null}

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-3">
              {mode === "home" ? "[03 // NOTICIAS]" : "[ARCHIVO DE NOTICIAS]"}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {mode === "home"
                ? "Noticias y actividad reciente."
                : "Todas las noticias y novedades de Asymmetric."}
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-neutral-600 dark:text-zinc-400 leading-relaxed">
              Participaciones en competencias, lanzamientos y notas en medios sobre los proyectos que venimos construyendo.
            </p>
          </div>

          {mode === "home" ? (
            <div className="shrink-0">
              <Link
                href="/noticias"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-white dark:bg-zinc-900 hover:bg-stone-200/70 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
              >
                Ver todas las noticias ({milestonesData.length})
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {newsFilters.map((f) => {
                const active = selectedType === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSelectedType(f.id)}
                    className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-[background-color,color,transform,border-color] duration-150 active:scale-[0.96] cursor-pointer border ${
                      active
                        ? "bg-foreground text-background border-foreground shadow-xs"
                        : "bg-white/80 dark:bg-zinc-900/70 text-neutral-600 dark:text-zinc-400 border-border-subtle hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* News Grid: 3-column compact row on Home, 2-column detailed grid on /noticias */}
        <div
          className={
            mode === "home"
              ? "grid grid-cols-1 lg:grid-cols-3 gap-6"
              : "grid grid-cols-1 lg:grid-cols-2 gap-7"
          }
        >
          {visibleNews.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="rounded-3xl p-6 bg-white/90 dark:bg-zinc-900/75 border border-border-subtle hover:border-neutral-900/15 dark:hover:border-white/15 shadow-xs hover:shadow-md transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-zinc-800 border border-border-subtle">
                    {getMilestoneIcon(item.type)}
                    <span className="font-mono text-[10px] font-bold text-foreground">
                      {item.typeLabel}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-neutral-500 dark:text-zinc-400">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-sans text-lg sm:text-xl font-extrabold text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p
                  className={`mt-3 font-sans text-sm text-neutral-600 dark:text-zinc-400 leading-relaxed ${
                    mode === "home" ? "line-clamp-4" : ""
                  }`}
                >
                  {item.description}
                </p>

                <div className="mt-3 flex items-center gap-1 font-mono text-[11px] text-neutral-400 dark:text-zinc-500">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap items-center gap-2">
                {item.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full font-mono text-[11px] font-semibold bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 dark:hover:bg-zinc-700 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.url}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full font-mono text-[11px] font-bold bg-foreground text-background hover:opacity-90 active:scale-[0.96] transition-[opacity,transform] duration-150"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {mode === "home" && milestonesData.length > 3 ? (
          <div className="mt-10 flex justify-center">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-white dark:bg-zinc-900 hover:bg-stone-200/70 dark:hover:bg-zinc-800 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-border-subtle"
            >
              Ver todas las noticias ({milestonesData.length})
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
