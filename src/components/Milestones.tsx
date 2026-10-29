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
      return <Trophy className="w-4 h-4 text-teal-600 dark:text-teal-300" />;
    case "prensa":
      return <Radio className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
    case "lanzamiento":
      return <Rocket className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
  }
}

function getMilestoneBadgeStyle(type: MilestoneItem["type"]) {
  switch (type) {
    case "premio":
      return "bg-teal-500/12 border-teal-500/25 text-teal-800 dark:text-teal-300";
    case "prensa":
      return "bg-amber-500/12 border-amber-500/25 text-amber-800 dark:text-amber-300";
    case "lanzamiento":
      return "bg-indigo-500/12 border-indigo-500/25 text-indigo-800 dark:text-indigo-300";
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
          ? "py-24 bg-slate-100/60 dark:bg-[#090D16]/70 border-t border-border-subtle"
          : "pt-32 pb-24 bg-background"
      } relative overflow-hidden`}
    >
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/8 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {mode === "catalog" ? (
          <div className="mb-8">
            <Link
              href="/#noticias"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold bg-white/85 dark:bg-[#0D111C]/90 hover:bg-slate-100 dark:hover:bg-[#131929] text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-slate-900/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Inicio
            </Link>
          </div>
        ) : null}

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] font-semibold text-indigo-600 dark:text-teal-300 uppercase tracking-widest block mb-3">
              {mode === "home" ? "[03 // NOTICIAS]" : "[ARCHIVO DE NOTICIAS]"}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {mode === "home"
                ? "Noticias y actividad reciente."
                : "Todas las noticias y novedades de Asymmetric."}
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Participaciones en competencias, lanzamientos y notas en medios sobre los proyectos que venimos construyendo.
            </p>
          </div>

          {mode === "home" ? (
            <div className="shrink-0">
              <Link
                href="/noticias"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-[#0D111C]/90 hover:bg-slate-100 dark:hover:bg-[#131929] text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-slate-900/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] tabular-nums"
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
                        ? "bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-400/30 shadow-[0_4px_16px_-2px_rgba(99,102,241,0.45),inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                        : "bg-white/80 dark:bg-[#0D111C]/85 text-slate-600 dark:text-slate-400 border-slate-900/10 dark:border-white/10 hover:text-foreground hover:border-indigo-500/30"
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
              transition={{ type: "spring", duration: 0.45, delay: idx * 0.06, bounce: 0 }}
              className="rounded-[28px] p-6 sm:p-7 bg-white/90 dark:bg-[#0D111C]/90 border border-slate-900/8 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/15 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${getMilestoneBadgeStyle(
                      item.type
                    )}`}
                  >
                    {getMilestoneIcon(item.type)}
                    <span className="font-mono text-[10px] font-bold">
                      {item.typeLabel}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-500 dark:text-slate-400 tabular-nums">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-sans text-lg sm:text-xl font-extrabold text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] font-semibold text-indigo-600 dark:text-teal-300">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p
                  className={`mt-3 font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                    mode === "home" ? "line-clamp-4" : ""
                  }`}
                >
                  {item.description}
                </p>

                <div className="mt-3 flex items-center gap-1 font-mono text-[11px] text-slate-400 dark:text-slate-500">
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
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full font-mono text-[11px] font-semibold bg-slate-100 dark:bg-[#131929] hover:bg-slate-200 dark:hover:bg-[#1E293B] text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-slate-900/8 dark:border-white/8"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.url}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full font-mono text-[11px] font-bold bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white active:scale-[0.96] transition-[background-color,transform] duration-150 border border-indigo-400/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-[#0D111C]/90 hover:bg-slate-100 dark:hover:bg-[#131929] text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150 border border-slate-900/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] tabular-nums"
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
