"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Copy, Check, ArrowUpRight, Clock, MapPin, Globe } from "lucide-react";

const projectTypes = [
  "Plataforma Web / Catálogo Comercial",
  "Aplicación Móvil (iOS & Android)",
  "Automatización & Agentes de IA",
  "Software / Sistema a Medida",
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [customNote, setCustomNote] = useState("");
  const emailAddress = "asymmetricdevs@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoHref = `mailto:${emailAddress}?subject=${encodeURIComponent(
    `Consulta de Proyecto: ${selectedType}`
  )}&body=${encodeURIComponent(
    `Hola equipo de Asymmetric Devs,\n\nMe interesa conversar sobre un proyecto de tipo: ${selectedType}.\n\n${
      customNote.trim()
        ? `Resumen de lo que buscamos:\n${customNote.trim()}\n\n`
        : "Quisiera coordinar una breve llamada para comentarles la idea.\n\n"
    }Saludos,`
  )}`;

  return (
    <section
      id="contacto"
      className="py-24 bg-background border-t border-border-subtle relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-pastel-indigo/25 dark:bg-pastel-indigo/10 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-3">
          [06 // CONTACTO DIRECTO]
        </span>

        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight max-w-2xl">
          ¿Tenés una idea o desafío operativo? Lo llevamos a producción.
        </h2>

        <p className="mt-5 font-sans text-base sm:text-lg text-neutral-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          Seleccioná qué tipo de solución estás buscando o escribinos directamente. Te respondemos en menos de 24 horas hábiles para coordinar una reunión de diagnóstico sin cargo.
        </p>

        {/* Interactive Project Inquiry Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 w-full glass-card rounded-3xl p-6 sm:p-10 text-left"
        >
          {/* Step 1: Select project type */}
          <div>
            <span className="font-mono text-[11px] font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider block mb-3">
              1. ¿Qué estás buscando desarrollar?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {projectTypes.map((type) => {
                const isSelected = selectedType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-3 rounded-2xl text-left font-sans text-xs sm:text-sm font-semibold border transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.98] cursor-pointer ${
                      isSelected
                        ? "bg-foreground text-background border-foreground shadow-xs"
                        : "bg-white/70 dark:bg-zinc-900/60 text-neutral-700 dark:text-zinc-300 border-border-subtle hover:border-neutral-400 dark:hover:border-zinc-700"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Optional note */}
          <div className="mt-6">
            <label
              htmlFor="project-note"
              className="font-mono text-[11px] font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider block mb-2"
            >
              2. Contanos brevemente sobre tu negocio o idea (opcional)
            </label>
            <textarea
              id="project-note"
              rows={3}
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="Ej: Somos una empresa comercial y queremos digitalizar nuestro catálogo y automatizar consultas por WhatsApp..."
              className="w-full rounded-2xl px-4 py-3 font-sans text-sm bg-white/80 dark:bg-zinc-900/80 text-foreground placeholder:text-neutral-400 dark:placeholder:text-zinc-500 border border-neutral-300/80 dark:border-zinc-800 focus:border-foreground focus:outline-hidden transition-colors duration-150 resize-none"
            />
          </div>

          {/* Step 3: Direct Email & Action Bar */}
          <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 rounded-2xl bg-pastel-clay border border-neutral-900/5 dark:border-white/5 text-foreground shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold text-neutral-400 dark:text-zinc-500 tracking-wider block uppercase">
                  Correo Directo del Equipo
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-mono text-sm sm:text-base font-bold text-foreground">
                    {emailAddress}
                  </span>
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 dark:hover:bg-zinc-700 text-neutral-600 dark:text-zinc-300 font-mono text-[10px] font-semibold active:scale-[0.96] transition-[background-color,transform] duration-150 cursor-pointer"
                    aria-label="Copiar correo"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {copied ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ type: "spring", duration: 0.25, bounce: 0 }}
                          className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400"
                        >
                          <Check className="w-3.5 h-3.5" />
                          Copiado
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ type: "spring", duration: 0.25, bounce: 0 }}
                          className="inline-flex items-center gap-1"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          Copiar
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </div>

            <a
              href={mailtoHref}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-foreground text-background hover:opacity-90 active:scale-[0.96] transition-[opacity,transform] duration-150 shrink-0 shadow-sm"
            >
              Enviar Consulta
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Operational Metadata */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 font-mono text-[11px] text-neutral-500 dark:text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 dark:text-zinc-500" />
            <span>CORRIENTES &amp; CHACO, ARGENTINA / REMOTO GLOBAL</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-neutral-400 dark:text-zinc-500" />
            <span>RESPUESTA &lt; 24 HORAS HÁBILES</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-neutral-400 dark:text-zinc-500" />
            <span>TRATO DIRECTO CON INGENIEROS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
