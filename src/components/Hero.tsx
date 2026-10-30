"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { ArrowRight, Trophy } from "lucide-react";

export default function Hero() {
  // 3D Perspective Tilt for the Hero Monolith
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="inicio"
      className="relative pt-16 bg-background bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto border-x border-b border-border-subtle bg-background">
        {/* Top Architectural Index Bar */}
        <div className="border-b border-border-subtle px-6 sm:px-10 py-2.5 flex items-center justify-between gap-4 bg-surface text-[11px] font-mono text-brand-muted uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span className="font-bold text-foreground">[ESTUDIO DE INGENIERÍA]</span>
            <span className="hidden sm:inline text-border-subtle">|</span>
            <span className="hidden sm:inline">SISTEMAS WEB · APPS MÓVILES · IA</span>
          </div>
        </div>

        {/* Main 12-Col Swiss Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-border-subtle items-stretch">
          {/* Left Column: Editorial Manifesto & CTAs */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            {/* Live Milestone Editorial Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-8"
            >
              <Link
                href="#noticias"
                className="group inline-flex items-center gap-2.5 px-3 py-2 rounded-none bg-surface border border-border-subtle hover:border-[#FF4D15] transition-colors duration-150"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 bg-[#FF4D15] text-white shrink-0">
                  <Trophy className="w-3 h-3" />
                </span>
                <span className="font-mono text-[11px] font-medium text-foreground">
                  <strong className="font-bold uppercase tracking-wider text-[#FF4D15]">Nuevo logro:</strong>{" "}
                  1° Puesto Track Stellar (NEATECH 2026) &amp; 3° Puesto Rally Latam
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-[#FF4D15] group-hover:translate-x-0.5 transition-[color,transform] duration-150 shrink-0" />
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="font-sans text-4xl sm:text-5xl xl:text-[3.65rem] font-bold tracking-[-0.04em] text-foreground leading-[0.98]"
            >
              Ingeniería de software que convierte ideas en{" "}
              <span className="font-serif italic font-normal text-[#FF4D15]">
                productos reales.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-6 font-sans text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl"
            >
              Somos un equipo de cuatro Ingenieros en Sistemas. Desarrollamos{" "}
              <strong className="font-semibold text-foreground">sitios y plataformas web</strong>,{" "}
              <strong className="font-semibold text-foreground">aplicaciones móviles (iOS y Android)</strong> y{" "}
              <strong className="font-semibold text-foreground">herramientas con IA</strong> trabajando en contacto directo con vos durante todo el proyecto.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-none text-xs font-mono font-bold uppercase tracking-wider bg-[#FF4D15] hover:bg-[#E03E0B] text-white transition-colors duration-150"
              >
                Ver Servicios
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-none text-xs font-mono font-bold uppercase tracking-wider bg-surface hover:bg-foreground hover:text-background text-foreground border border-foreground transition-colors duration-150"
              >
                Consultar Proyecto
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 3D Asymmetric Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-6 relative p-6 sm:p-10 lg:p-12 min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] flex flex-col justify-center items-center bg-surface/50 border-t lg:border-t-0 border-border-subtle overflow-hidden select-none"
            style={{ perspective: 1000 }}
          >
            {/* Top Clean Brand Label */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
              <span className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
                [ASYMMETRIC]
              </span>
            </div>

            {/* Ambient Radial Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-[#FF4D15]/10 dark:bg-[#FF4D15]/15 blur-3xl" />
            </div>

            {/* Floating 3D Monolith Centerpiece */}
            <div className="relative flex flex-col items-center justify-center py-4 z-10">
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  y: [-12, 12, -12],
                  rotateZ: [-1, 1, -1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative cursor-grab active:cursor-grabbing will-change-transform"
              >
                <img
                  src="/assets/hero-centerpiece.png"
                  alt="Asymmetric"
                  className="w-64 sm:w-80 md:w-92 lg:w-[380px] max-w-full h-auto select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_20px_45px_rgba(255,77,21,0.15)]"
                  draggable={false}
                />
              </motion.div>

              {/* Dynamic Breathing Floor Shadow */}
              <motion.div
                animate={{
                  scale: [1, 0.85, 1],
                  opacity: [0.35, 0.2, 0.35],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-48 sm:w-60 md:w-72 h-6 sm:h-7 rounded-[100%] bg-neutral-950/40 dark:bg-black/75 blur-xl mt-2 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
