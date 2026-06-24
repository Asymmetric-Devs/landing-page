"use client";

import { motion } from "motion/react";
import { Globe, Cpu, Layers, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      icon: <Globe className="w-6 h-6 text-foreground" />,
      title: "Presencia Digital",
      techTag: "[01 // WEBS DE ALTA CONVERSIÓN]",
      description:
        "Diseñamos y desarrollamos landing pages modernas, sitios corporativos y embudos optimizados para captar clientes. Velocidad extrema, diseño a medida y enfoque comercial orientado a resultados.",
      accentClass: "bg-pastel-mint border border-neutral-900/5 dark:border-white/5",
      bullets: ["Landing Pages persuasivas", "Optimización de velocidad (Core Web Vitals)", "SEO local y global integrado"],
    },
    {
      id: "02",
      icon: <Cpu className="w-6 h-6 text-foreground" />,
      title: "Automatización & IA",
      techTag: "[02 // OPTIMIZACIÓN INTELIGENTE]",
      description:
        "Maximizamos la eficiencia de tu negocio. Diseñamos e integramos flujos de trabajo inteligentes, agentes de inteligencia artificial y conectamos tus herramientas preferidas para reducir procesos manuales.",
      accentClass: "bg-pastel-indigo border border-neutral-900/5 dark:border-white/5",
      bullets: ["Integración de APIs y CRMs", "Automatización de flujos de trabajo", "Agentes e IA para atención y soporte"],
    },
    {
      id: "03",
      icon: <Layers className="w-6 h-6 text-foreground" />,
      title: "Desarrollo a Medida",
      techTag: "[03 // SISTEMAS ESCALABLES]",
      description:
        "Construimos aplicaciones web robustas, arquitecturas en la nube y plataformas escalables diseñadas específicamente para resolver los retos particulares de tu negocio con máxima solidez.",
      accentClass: "bg-pastel-sky border border-neutral-900/5 dark:border-white/5",
      bullets: ["Aplicaciones web (SaaS)", "Bases de datos y APIs robustas", "Infraestructura Cloud (DevOps)"],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Structural background lines (hidden on mobile, perfectly layered in z-0 at low opacity) */}
      <div className="absolute inset-y-0 left-1/3 w-[1px] bg-neutral-200/40 dark:bg-neutral-800/30 z-0 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-1/3 w-[1px] bg-neutral-200/40 dark:bg-neutral-800/30 z-0 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-[10px] font-semibold text-neutral-500 dark:text-stone-400 uppercase tracking-widest block mb-4">
            [02 // NUESTRO CATÁLOGO]
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Soluciones digitales con precisión de ingeniería.
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-neutral-600 dark:text-stone-400 font-light max-w-xl">
            Desde el posicionamiento de tu marca con landings ultrarrápidas, hasta sistemas complejos a la medida de tu visión.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group p-8 rounded-2xl bg-stone-50/80 dark:bg-zinc-900/60 backdrop-blur-xs border border-border-subtle hover:border-neutral-900/10 dark:hover:border-white/10 hover:bg-stone-50 dark:hover:bg-zinc-900 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md relative z-10"
            >
              <div>
                {/* Icon & ID */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-4 rounded-xl ${service.accentClass}`}>
                    {service.icon}
                  </div>
                  <span className="font-mono text-sm text-neutral-400 dark:text-stone-500 font-bold">
                    /{service.id}
                  </span>
                </div>

                {/* Tech tag */}
                <span className="font-mono text-[9px] font-bold text-neutral-400 dark:text-stone-500 tracking-wider block mb-2">
                  {service.techTag}
                </span>

                {/* Title */}
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-neutral-600 dark:text-stone-400 leading-relaxed font-light mb-6">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-sans text-xs text-neutral-600 dark:text-stone-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Indicator */}
              <div className="border-t border-neutral-200/60 dark:border-neutral-800/60 pt-6">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:text-stone-400 group-hover:text-foreground transition-colors"
                >
                  Me interesa
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
