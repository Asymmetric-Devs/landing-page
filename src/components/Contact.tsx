"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Copy, Check, ArrowUpRight, Clock, MapPin, Globe } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "asymmetricdevs@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Grid Pattern and Gradient Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-pastel-indigo/20 dark:bg-pastel-indigo/10 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Monospace Tag */}
        <span className="font-mono text-[10px] font-semibold text-neutral-500 dark:text-stone-400 uppercase tracking-widest block mb-4">
          [04 // CONTACTO DIRECTO]
        </span>

        {/* Title */}
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight max-w-2xl">
          ¿Listo para dar el siguiente paso? Llevamos tu idea a producción.
        </h2>

        {/* Subtitle */}
        <p className="mt-6 font-sans text-base sm:text-lg text-neutral-600 dark:text-stone-400 font-light max-w-xl">
          Escríbenos directamente detallando tu idea o requerimiento. Nos pondremos en contacto contigo en menos de 24 horas hábiles para coordinar una llamada de diagnóstico.
        </p>

        {/* Glass Briefcase / Interactive Mail Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 w-full glass-card rounded-3xl p-8 sm:p-10 border border-border-subtle hover:border-neutral-900/10 dark:hover:border-white/10 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-pastel-clay border border-neutral-900/5 dark:border-white/5 text-foreground shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-[9px] font-bold text-neutral-400 dark:text-stone-500 tracking-wider block uppercase">
                Email Oficial
              </span>
              {/* Copyable Email */}
              <div className="flex items-center gap-2 mt-1">
                <span className="font-mono text-base md:text-lg font-bold text-foreground">
                  {emailAddress}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-400 dark:text-stone-500 hover:text-foreground dark:hover:text-stone-200 transition-colors focus:outline-hidden relative"
                  aria-label="Copiar correo"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Copy className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>

          {/* Large CTA Direct Mail Button */}
          <a
            href={`mailto:${emailAddress}`}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-foreground text-background hover:opacity-90 active:scale-[0.98] transition-all shrink-0"
          >
            Enviar Correo
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Operational Metadata */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 font-mono text-[10px] text-neutral-500 dark:text-stone-400 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 dark:text-stone-500" />
            <span>ARGENTINA / REMOTO GLOBAL</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-neutral-400 dark:text-stone-500" />
            <span>RESPUESTA &lt; 24 HORAS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-neutral-400 dark:text-stone-500" />
            <span>DISPONIBILIDAD INMEDIATA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
