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
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[280px] rounded-full bg-pastel-indigo/25 dark:bg-pastel-indigo/10 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Direct Channels & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-3">
                [06 // CONTACTO]
              </span>

              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                Contanos qué estás buscando desarrollar.
              </h2>

              <p className="mt-4 font-sans text-base text-neutral-600 dark:text-zinc-400 leading-relaxed">
                Escribinos por WhatsApp o correo electrónico para contarnos sobre tu idea o proyecto. Te respondemos directo nosotros para evaluar qué solución se adapta mejor a lo que necesitás.
              </p>

              {/* Direct Contact Cards */}
              <div className="mt-8 flex flex-col gap-3.5">
                {/* WhatsApp Direct Card */}
                <div className="p-4 rounded-2xl bg-white/85 dark:bg-zinc-900/70 border border-border-subtle flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-3 rounded-xl bg-emerald-500/12 text-emerald-700 dark:text-emerald-400 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-wider block">
                        WhatsApp Directo
                      </span>
                      <span className="font-mono text-sm font-bold text-foreground truncate block mt-0.5">
                        +54 9 379 479-7572
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-emerald-500/12 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold active:scale-[0.96] transition-[background-color,transform] duration-150 shrink-0"
                  >
                    Chatear
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Email Direct Card */}
                <div className="p-4 rounded-2xl bg-white/85 dark:bg-zinc-900/70 border border-border-subtle flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-3 rounded-xl bg-pastel-clay text-foreground shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-wider block">
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 dark:hover:bg-zinc-700 text-neutral-700 dark:text-zinc-300 font-mono text-xs font-semibold active:scale-[0.96] transition-[background-color,transform] duration-150 cursor-pointer shrink-0"
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
                          className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400"
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
              <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col gap-2.5 font-mono text-xs text-neutral-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Corrientes y Chaco, Argentina · Trabajo remoto</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Respuesta dentro de las 24 horas hábiles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 w-full rounded-3xl p-6 sm:p-8 bg-white/90 dark:bg-zinc-900/75 border border-border-subtle shadow-sm"
          >
            <div className="flex flex-col gap-6">
              {/* Name / Company Field */}
              <div>
                <label
                  htmlFor="sender-name"
                  className="font-mono text-[11px] font-bold text-neutral-600 dark:text-zinc-300 uppercase tracking-wider block mb-2"
                >
                  1. Tu nombre o empresa (opcional)
                </label>
                <input
                  id="sender-name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Ej: Juan Pérez / Mi Empresa"
                  className="w-full rounded-2xl px-4 py-3 font-sans text-sm bg-stone-50 dark:bg-zinc-950/70 text-foreground placeholder:text-neutral-400 dark:placeholder:text-zinc-500 border border-neutral-300/80 dark:border-zinc-800 focus:border-foreground focus:outline-hidden transition-colors duration-150"
                />
              </div>

              {/* Project Type Selector */}
              <div>
                <span className="font-mono text-[11px] font-bold text-neutral-600 dark:text-zinc-300 uppercase tracking-wider block mb-2.5">
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
                        className={`px-4 py-3 rounded-2xl text-left font-sans text-xs sm:text-sm font-semibold border transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.98] cursor-pointer ${
                          isSelected
                            ? "bg-foreground text-background border-foreground shadow-xs"
                            : "bg-stone-50 dark:bg-zinc-950/60 text-neutral-700 dark:text-zinc-300 border-border-subtle hover:border-neutral-400 dark:hover:border-zinc-700"
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
                  className="font-mono text-[11px] font-bold text-neutral-600 dark:text-zinc-300 uppercase tracking-wider block mb-2"
                >
                  3. Contanos brevemente sobre la idea o necesidad (opcional)
                </label>
                <textarea
                  id="project-note"
                  rows={4}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Ej: Necesitamos renovar nuestro sitio con un catálogo administrable o desarrollar una aplicación para nuestros clientes..."
                  className="w-full rounded-2xl px-4 py-3 font-sans text-sm bg-stone-50 dark:bg-zinc-950/70 text-foreground placeholder:text-neutral-400 dark:placeholder:text-zinc-500 border border-neutral-300/80 dark:border-zinc-800 focus:border-foreground focus:outline-hidden transition-colors duration-150 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white active:scale-[0.98] transition-[background-color,transform] duration-150 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enviar por WhatsApp
                </a>

                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider bg-foreground text-background hover:opacity-90 active:scale-[0.98] transition-[opacity,transform] duration-150 shadow-xs"
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
