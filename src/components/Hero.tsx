"use client";

import { motion } from "motion/react";
import { ArrowDown, ChevronRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-grid-pattern transition-colors duration-300"
    >
      {/* Soft Radial Ambient Lights (Adapted to support both Light and Dark themes dynamically) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-pastel-mint/30 dark:bg-pastel-mint/15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-pastel-sky/20 dark:bg-pastel-sky/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-pastel-indigo/25 dark:bg-pastel-indigo/10 blur-[110px] pointer-events-none z-0" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center z-10 flex flex-col items-center">
        {/* Monospace Tech Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-neutral-900 border border-border-subtle shadow-xs mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
            [01 // INGENIERÍA DE SOFTWARE & SOLUCIONES TI]
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-4xl sm:text-5xl md:text-6.5xl font-extrabold tracking-tight text-foreground leading-[1.08] max-w-4xl"
        >
          Transformamos ideas complejas en
          <span className="block mt-1 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-800 dark:from-white dark:via-stone-200 dark:to-stone-400 bg-clip-text text-transparent">
            experiencias digitales que escalan.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-sans text-base sm:text-lg md:text-xl text-neutral-600 dark:text-stone-400 max-w-2xl leading-relaxed font-light"
        >
          Diseño web moderno enfocado en conversión, automatización de procesos con IA y desarrollo de software a medida con absoluta precisión técnica.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-foreground text-background hover:opacity-90 active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
          >
            Iniciar Proyecto
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-stone-200/40 dark:bg-white/5 hover:bg-stone-200/70 dark:hover:bg-white/10 text-foreground active:scale-[0.98] transition-all border border-border-subtle shadow-xs"
          >
            Conocer Servicios
          </a>
        </motion.div>

        {/* Mockup Dashboard Container / Interactive Code Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-4xl glass-card rounded-2xl overflow-hidden shadow-2xl aspect-video sm:aspect-auto flex flex-col"
        >
          {/* Windows-like Bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border-subtle bg-stone-100/40 dark:bg-zinc-900/40">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400 dark:text-stone-500">
              <Terminal className="w-3 h-3" />
              <span>asymmetric-system.ts</span>
            </div>
            <div className="w-12" /> {/* spacer */}
          </div>

          {/* IDE Content */}
          <div className="p-6 md:p-8 text-left font-mono text-xs md:text-sm text-neutral-700 dark:text-stone-300 bg-white/30 dark:bg-zinc-950/20 overflow-x-auto flex-1 select-none">
            <div>
              <span className="text-neutral-400 dark:text-stone-500">// Asymmetric Devs - Configuración del Proyecto</span>
            </div>
            <div className="mt-2">
              <span className="text-foreground font-semibold">const</span>{" "}
              <span className="text-neutral-600 dark:text-stone-400">agencia</span> = {"{"}
            </div>
            <div className="pl-6">
              <span className="text-neutral-500 dark:text-stone-500">nombre:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">"Asymmetric Devs"</span>,
            </div>
            <div className="pl-6">
              <span className="text-neutral-500 dark:text-stone-500">enfoque:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">"Ingeniería de Software & IA"</span>,
            </div>
            <div className="pl-6">
              <span className="text-neutral-500 dark:text-stone-500">mision:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">"Impulsar ideas al siguiente paso"</span>,
            </div>
            <div className="pl-6">
              <span className="text-neutral-500 dark:text-stone-500">escalabilidad:</span>{" "}
              <span className="text-amber-600 dark:text-amber-500">true</span>,
            </div>
            <div className="pl-6">
              <span className="text-neutral-500 dark:text-stone-500">servicios:</span> [
              <span className="text-indigo-600 dark:text-indigo-400">"Landing Pages"</span>,{" "}
              <span className="text-indigo-600 dark:text-indigo-400">"Automatizaciones con IA"</span>,{" "}
              <span className="text-indigo-600 dark:text-indigo-400">"Sistemas a Medida"</span>]
            </div>
            <div>{"};"}</div>
            <div className="mt-4">
              <span className="text-foreground font-semibold">export default</span>{" "}
              <span className="text-neutral-600 dark:text-stone-400">agencia</span>;
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 text-neutral-400 dark:text-stone-500 flex flex-col items-center gap-1.5 cursor-pointer"
          onClick={() => {
            document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="font-mono text-[10px] tracking-wider uppercase">Explorar</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
