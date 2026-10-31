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
      return <Trophy className="w-3.5 h-3.5 text-accent-text dark:text-accent" />;
    case "prensa":
      return <Radio className="w-3.5 h-3.5 text-accent-text dark:text-accent" />;
    case "lanzamiento":
      return <Rocket className="w-3.5 h-3.5 text-accent-text dark:text-accent" />;
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
          ? "border-b border-border-subtle bg-background"
          : "pt-24 pb-20 bg-background"
      } relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto border-x border-border-subtle px-6 md:px-12 py-20 relative z-10">
        {mode === "catalog" ? (
          <div className="mb-8">
            <Link
              href="/#noticias"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-none font-mono text-xs font-semibold bg-surface hover:bg-foreground hover:text-background text-foreground transition-colors duration-150 border border-border-subtle"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Inicio
            </Link>
          </div>
        ) : null}

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-border-subtle mb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] font-bold text-accent-text dark:text-accent uppercase tracking-widest block mb-3">
              {mode === "home" ? "[03 // NOTICIAS]" : "[ARCHIVO DE NOTICIAS]"}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.04em] text-foreground leading-[1.08] sm:leading-[1.02]">
              {mode === "home" ? (
                <>
                  Noticias y{" "}
                  <span className="marker-highlight inline-block bg-accent text-accent-foreground px-3 py-0.5 font-bold">
                    actividad reciente.
                  </span>
                </>
              ) : (
                <>
                  Todas las noticias y novedades de{" "}
                  <span className="marker-highlight inline-block bg-accent text-accent-foreground px-3 py-0.5 font-bold">
                    Asymmetric.
                  </span>
                </>
              )}
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-brand-muted leading-relaxed">
              Participaciones en competencias, lanzamientos y notas en medios sobre los proyectos que venimos construyendo.
            </p>
          </div>

          {mode === "home" ? (
            <div className="shrink-0">
              <Link
                href="/noticias"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider bg-surface hover:bg-foreground hover:text-background text-foreground transition-colors duration-150 border border-foreground"
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
                    className={`px-4 py-2.5 rounded-none font-mono text-xs font-semibold transition-colors duration-150 cursor-pointer border ${
                      active
                        ? "bg-accent text-accent-foreground border-accent font-bold"
                        : "bg-surface text-brand-muted border-border-subtle hover:text-foreground hover:border-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Editorial Press & Activity Ledger */}
        <div
          className={
            mode === "home"
              ? "grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle border border-border-subtle bg-surface"
              : "grid grid-cols-1 lg:grid-cols-2 gap-6"
          }
        >
          {visibleNews.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className={`flex flex-col justify-between ${
                mode === "home"
                  ? "bg-surface hover:bg-background transition-colors duration-150"
                  : "border border-border-subtle bg-surface hover:border-foreground transition-colors duration-150"
              }`}
            >
              <div>
                {/* Top Ledger Metadata Row */}
                <div className="border-b border-border-subtle px-6 py-3.5 flex items-center justify-between gap-2 bg-background">
                  <div className="inline-flex items-center gap-2">
                    {getMilestoneIcon(item.type)}
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-foreground">
                      {item.typeLabel}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-accent-text dark:text-accent uppercase">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11px] font-semibold text-accent-text dark:text-accent uppercase tracking-wider">
                    {item.subtitle}
                  </p>

                  <p
                    className={`mt-4 font-sans text-sm text-brand-muted leading-relaxed ${
                      mode === "home" ? "line-clamp-4" : ""
                    }`}
                  >
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border-subtle/60 flex items-center gap-1.5 font-mono text-[11px] text-brand-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent-text dark:text-accent" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="px-6 py-4 border-t border-border-subtle bg-background flex flex-wrap items-center gap-2">
                {item.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-none font-mono text-[11px] font-semibold bg-surface hover:bg-foreground hover:text-background text-foreground border border-border-subtle transition-colors duration-150"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.url}
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-none font-mono text-[11px] font-bold uppercase tracking-wider bg-accent text-accent-foreground hover:bg-accent-hover transition-colors duration-150"
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
      </div>
    </section>
  );
}
