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
      className="bg-background bg-grid-pattern relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto border-x border-border-subtle px-6 md:px-12 py-20 relative z-10">
        {/* 2-Column Architectural Contact Board */}
        <div className="border border-border-subtle bg-surface grid grid-cols-1 lg:grid-cols-12 lg:divide-x divide-border-subtle">
          {/* Left Column: Direct Channels & Info */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-background">
            <div>
              <span className="font-mono text-[11px] font-bold text-[#FF4D15] uppercase tracking-widest block mb-3">
                [05 // CONTACTO]
              </span>

              <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-foreground leading-[0.98]">
                Contanos qué estás buscando{" "}
                <span className="font-serif italic font-normal text-[#FF4D15]">
                  desarrollar.
                </span>
              </h2>

              <p className="mt-4 font-sans text-base text-brand-muted leading-relaxed">
                Escribinos por WhatsApp o correo electrónico para contarnos sobre tu idea o proyecto. Te respondemos directo nosotros para evaluar qué solución se adapta mejor a lo que necesitás.
              </p>

              {/* Direct Contact Ruled Cells */}
              <div className="mt-8 border border-border-subtle divide-y divide-border-subtle bg-surface">
                {/* WhatsApp Direct Cell */}
                <div className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 bg-[#FF4D15] text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-bold text-brand-muted uppercase tracking-wider block">
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
                    className="inline-flex items-center gap-1 px-3.5 py-2 rounded-none bg-foreground text-background hover:bg-[#FF4D15] hover:text-white font-mono text-xs font-bold uppercase transition-colors duration-150 shrink-0"
                  >
                    Chatear
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Email Direct Cell */}
                <div className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-bold text-brand-muted uppercase tracking-wider block">
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-none bg-background hover:bg-foreground hover:text-background text-foreground border border-border-subtle font-mono text-xs font-semibold transition-colors duration-150 cursor-pointer shrink-0"
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
                          className="inline-flex items-center gap-1 text-[#FF4D15]"
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
            </div>

            {/* Location & Availability */}
            <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col gap-2.5 font-mono text-xs text-brand-muted">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF4D15] shrink-0" />
                <span>Corrientes y Chaco, Argentina · Trabajo remoto</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF4D15] shrink-0" />
                <span>Respuesta dentro de las 24 horas hábiles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 w-full p-6 sm:p-10 bg-surface border-t lg:border-t-0 border-border-subtle"
          >
            <div className="flex flex-col gap-6">
              {/* Name / Company Field */}
              <div>
                <label
                  htmlFor="sender-name"
                  className="font-mono text-[11px] font-bold text-foreground uppercase tracking-wider block mb-2"
                >
                  1. Tu nombre o empresa (opcional)
                </label>
                <input
                  id="sender-name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Ej: Juan Pérez / Mi Empresa"
                  className="w-full rounded-none px-4 py-3.5 font-sans text-sm bg-background text-foreground placeholder:text-brand-muted/60 border border-border-subtle focus:border-[#FF4D15] focus:outline-hidden transition-colors duration-150"
                />
              </div>

              {/* Project Type Selector — 2x2 Ruled Cells */}
              <div>
                <span className="font-mono text-[11px] font-bold text-foreground uppercase tracking-wider block mb-2.5">
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
                        className={`px-4 py-3.5 rounded-none text-left font-mono text-xs font-bold border transition-colors duration-150 cursor-pointer ${
                          isSelected
                            ? "bg-[#FF4D15] text-white border-[#FF4D15]"
                            : "bg-background text-foreground border-border-subtle hover:border-foreground"
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
                  className="font-mono text-[11px] font-bold text-foreground uppercase tracking-wider block mb-2"
                >
                  3. Contanos brevemente sobre la idea o necesidad (opcional)
                </label>
                <textarea
                  id="project-note"
                  rows={4}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Ej: Necesitamos renovar nuestro sitio con un catálogo administrable o desarrollar una aplicación para nuestros clientes..."
                  className="w-full rounded-none px-4 py-3.5 font-sans text-sm bg-background text-foreground placeholder:text-brand-muted/60 border border-border-subtle focus:border-[#FF4D15] focus:outline-hidden transition-colors duration-150 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-none text-xs font-mono font-bold uppercase tracking-wider bg-[#FF4D15] hover:bg-[#E03E0B] text-white transition-colors duration-150"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enviar por WhatsApp
                </a>

                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-none text-xs font-mono font-bold uppercase tracking-wider bg-foreground text-background hover:bg-foreground/90 transition-colors duration-150"
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
