"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Trophy, Radio, Rocket, ArrowUpRight, ArrowRight, MapPin, Calendar } from "lucide-react";
import { milestonesData, type MilestoneItem } from "@/data/projects";

function getMilestoneIcon(type: MilestoneItem["type"]) {
  switch (type) {
    case "premio":
      return <Trophy className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />;
    case "prensa":
      return <Radio className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    case "lanzamiento":
      return <Rocket className="w-5 h-5 text-sky-700 dark:text-sky-400" />;
  }
}

export default function Milestones() {
  return (
    <section
      id="novedades"
      className="py-24 bg-stone-100/50 dark:bg-zinc-950/60 border-t border-border-subtle relative overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-pastel-mint/30 dark:bg-pastel-mint/10 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-3">
            [03 // EN MOVIMIENTO · PREMIOS, HITOS &amp; PRENSA]
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Un equipo que compite, construye y valida su ingeniería en vivo.
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-neutral-600 dark:text-zinc-400 leading-relaxed">
            No solo desarrollamos desde el escritorio: participamos activamente en hackathones internacionales, articulamos con universidades y llevamos nuestras soluciones a medios y tiendas oficiales.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {milestonesData.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="rounded-3xl p-6 sm:p-8 bg-white/90 dark:bg-zinc-900/75 border border-border-subtle hover:border-neutral-900/15 dark:hover:border-white/15 shadow-xs hover:shadow-md transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-stone-100 dark:bg-zinc-800 border border-border-subtle">
                    {getMilestoneIcon(item.type)}
                    <span className="font-mono text-[11px] font-bold text-foreground">
                      {item.typeLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-[11px] text-neutral-500 dark:text-zinc-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 font-sans text-sm text-neutral-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Links */}
              <div className="mt-7 pt-5 border-t border-border-subtle flex flex-wrap items-center gap-3">
                {item.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-[11px] font-semibold bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 dark:hover:bg-zinc-700 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.url}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-[11px] font-bold bg-foreground text-background hover:opacity-90 active:scale-[0.96] transition-[opacity,transform] duration-150"
                    >
                      {link.label}
                      <ArrowRight className="w-3.5 h-3.5" />
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
