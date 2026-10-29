"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";

const projectTypes = [
  "Sitio Web / Catálogo Comercial",
  "Aplicación Móvil (iOS y Android)",
  "Automatización / IA",
  "Sistema a Medida",
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [customNote, setCustomNote] = useState("");
  const emailAddress = "asymmetricdevs@gmail.com";
  const whatsappNumber = "5493794797572";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const introLine = senderName.trim()
    ? `Hola equipo de Asymmetric, soy ${senderName.trim()}.`
    : "Hola equipo de Asymmetric.";

  const messageBody = `${introLine} Me interesa consultar por un proyecto de tipo: *${selectedType}*.${
    customNote.trim()
      ? `\n\nDetalle del proyecto:\n${customNote.trim()}`
      : "\n\nQuisiera comentarles la idea para evaluarla."
  }`;

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    messageBody
  )}`;

  const mailtoHref = `mailto:${emailAddress}?subject=${encodeURIComponent(
    `Consulta de Proyecto: ${selectedType}${senderName.trim() ? ` - ${senderName.trim()}` : ""}`
  )}&body=${encodeURIComponent(
    `${introLine}\n\nMe interesa consultar por un proyecto de tipo: ${selectedType}.\n\n${
      customNote.trim()
        ? `Detalle del proyecto:\n${customNote.trim()}\n\n`
        : "Quisiera comentarles la idea para evaluarla.\n\n"
    }Saludos,`
  )}`;

  return (
    <section
      id="contacto"
      className="py-24 bg-background border-t border-border-subtle relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-matrix opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[280px] rounded-full bg-indigo-500/12 dark:bg-indigo-500/10 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Direct Channels & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] font-semibold text-indigo-600 dark:text-teal-300 uppercase tracking-widest block mb-3">
                [06 // CONTACTO]
              </span>

              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                Contanos qué estás buscando desarrollar.
              </h2>

              <p className="mt-4 font-sans text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Escribinos por WhatsApp o correo electrónico para contarnos sobre tu idea o proyecto. Te respondemos directo nosotros para evaluar qué solución se adapta mejor a lo que necesitás.
              </p>

              {/* Direct Contact Cards */}
              <div className="mt-8 flex flex-col gap-3.5">
                {/* WhatsApp Direct Card */}
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#0D111C]/90 border border-slate-900/8 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-3 rounded-xl bg-teal-500/12 text-teal-600 dark:text-teal-300 border border-teal-500/20 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                        WhatsApp Directo
                      </span>
                      <span className="font-mono text-sm font-bold text-foreground truncate block mt-0.5 tabular-nums">
                        +54 9 379 479-7572
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-teal-500/12 hover:bg-teal-500/20 text-teal-800 dark:text-teal-300 border border-teal-500/25 font-mono text-xs font-bold active:scale-[0.96] transition-[background-color,transform] duration-150 shrink-0"
                  >
                    Chatear
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Email Direct Card */}
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#0D111C]/90 border border-slate-900/8 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-3 rounded-xl bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                        Correo Electrónico
                      </span>
                      <span className="font-mono text-sm font-bold text-foreground truncate block mt-0.5">
                        {emailAddress}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-[#131929] hover:bg-slate-200 dark:hover:bg-[#1E293B] text-slate-700 dark:text-slate-300 border border-slate-900/8 dark:border-white/8 font-mono text-xs font-semibold active:scale-[0.96] transition-[background-color,transform] duration-150 cursor-pointer shrink-0"
                    aria-label="Copiar correo"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {copied ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-300"
                        >
                          <Check className="w-3.5 h-3.5" />
                          Copiado
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.15 }}
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

              {/* Location & Availability */}
              <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col gap-2.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>Corrientes y Chaco, Argentina · Trabajo remoto</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Respuesta dentro de las 24 horas hábiles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic / Obsidian Inquiry Console */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", duration: 0.45, bounce: 0 }}
            className="lg:col-span-7 w-full rounded-[28px] p-6 sm:p-8 bg-white/92 dark:bg-[#0D111C]/92 border border-slate-900/10 dark:border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6">
              {/* Name / Company Field */}
              <div>
                <label
                  htmlFor="sender-name"
                  className="font-mono text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider block mb-2"
                >
                  1. Tu nombre o empresa (opcional)
                </label>
                <input
                  id="sender-name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Ej: Juan Pérez / Mi Empresa"
                  className="w-full rounded-2xl px-4 py-3 font-sans text-sm bg-slate-50 dark:bg-[#06080F]/80 text-foreground placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300/80 dark:border-white/10 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-hidden transition-colors duration-150"
                />
              </div>

              {/* Project Type Selector */}
              <div>
                <span className="font-mono text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider block mb-2.5">
                  2. ¿Qué tipo de desarrollo buscás?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {projectTypes.map((type) => {
                    const isSelected = selectedType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-3 rounded-2xl text-left font-sans text-xs sm:text-sm font-semibold border transition-[background-color,border-color,color,transform,box-shadow] duration-150 active:scale-[0.98] cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-400/40 shadow-[0_4px_20px_-2px_rgba(99,102,241,0.45),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                            : "bg-slate-50 dark:bg-[#06080F]/70 text-slate-700 dark:text-slate-300 border-slate-900/8 dark:border-white/8 hover:border-indigo-500/40"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Summary Textarea */}
              <div>
                <label
                  htmlFor="project-note"
                  className="font-mono text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider block mb-2"
                >
                  3. Contanos brevemente sobre la idea o necesidad (opcional)
                </label>
                <textarea
                  id="project-note"
                  rows={4}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Ej: Necesitamos renovar nuestro sitio con un catálogo administrable o desarrollar una aplicación para nuestros clientes..."
                  className="w-full rounded-2xl px-4 py-3 font-sans text-sm bg-slate-50 dark:bg-[#06080F]/80 text-foreground placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300/80 dark:border-white/10 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-hidden transition-colors duration-150 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider bg-teal-600 dark:bg-teal-500 hover:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 active:scale-[0.98] transition-[background-color,transform] duration-150 border border-teal-400/30 shadow-[0_8px_24px_-4px_rgba(45,212,191,0.35),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enviar por WhatsApp
                </a>

                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white active:scale-[0.98] transition-[background-color,transform] duration-150 border border-indigo-400/30 shadow-[0_8px_24px_-4px_rgba(99,102,241,0.4),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                >
                  Enviar por Correo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
