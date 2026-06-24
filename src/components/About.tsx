"use client";

import { motion } from "motion/react";
import { Code, Brain, Cloud, ArrowRight, Zap, Check, Briefcase } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function About() {
  const team = [
    {
      name: "Aldo Omar Andres",
      title: "Ing. en Sistemas & Desarrollador Full Stack especializado en Mobile",
      icon: <Briefcase className="w-5 h-5 text-foreground" />,
      description:
        "Ingeniero enfocado en soluciones escalables y seguras, con amplia experiencia en todo el ciclo de vida del software, flujos DevSecOps e integración de inteligencia artificial para potenciar la experiencia de usuario.",
      bgPastel: "bg-pastel-mint border border-neutral-900/5 dark:border-white/5",
      linkedin: "https://www.linkedin.com/in/aldo-omar-andres-a0b54b218/",
    },
    {
      name: "Sixto Feliciano Arrejin",
      title: "Ing. en Sistemas & Desarrollador Full Stack",
      icon: <Code className="w-5 h-5 text-foreground" />,
      description:
        "Desarrollador con sólido foco en React, Node.js y TypeScript. Ha construido plataformas web completas y aplicaciones móviles publicadas en tiendas, con experiencia en Docker, CI/CD y nubes.",
      bgPastel: "bg-pastel-indigo border border-neutral-900/5 dark:border-white/5",
      linkedin: "https://www.linkedin.com/in/sixto-arrejin/",
    },
    {
      name: "André Leandro San Lorenzo",
      title: "Ing. en Sistemas & Analista de Datos",
      icon: <Brain className="w-5 h-5 text-foreground" />,
      description:
        "Especialista en Ciencia de Datos e Ingeniería de Software. Trabaja aplicando tecnologías de inteligencia artificial generativa (GenAI) y ecosistemas Cloud para resolver problemas de negocio reales y complejos.",
      bgPastel: "bg-pastel-sky border border-neutral-900/5 dark:border-white/5",
      linkedin: "https://www.linkedin.com/in/andre-leandro-san-lorenzo/",
    },
    {
      name: "Tobias Alejandro Maciel Meister",
      title: "Ing. en Sistemas & Desarrollador Full Stack",
      icon: <Cloud className="w-5 h-5 text-foreground" />,
      description:
        "Desarrollador Full Stack enfocado en Python, Node.js y React. Cuenta con experiencia en automatización de despliegues, pipelines de CI/CD (Docker/GitHub Actions) y análisis de datos en proyectos complejos.",
      bgPastel: "bg-pastel-clay border border-neutral-900/5 dark:border-white/5",
      linkedin: "https://www.linkedin.com/in/tobias-alejandro-maciel-meister-41ba39218/",
    },
  ];

  const coreStrengths = [
    "Comunicación directa y sin intermediarios burocráticos.",
    "Enfoque iterativo rápido con entregas semanales funcionales.",
    "Código limpio, estructurado y listo para escalar a futuro.",
  ];

  return (
    <section id="nosotros" className="py-24 bg-background border-t border-border-subtle relative overflow-hidden transition-colors duration-300">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-pastel-clay/35 dark:bg-pastel-clay/10 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Context & Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-[10px] font-semibold text-neutral-500 dark:text-stone-400 uppercase tracking-widest block mb-4">
                [03 // QUIÉNES SOMOS]
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                Ingeniería de precisión. Ejecución ágil.
              </h2>
              <p className="mt-6 font-sans text-base text-neutral-600 dark:text-stone-400 font-light leading-relaxed">
                Somos un equipo compacto de cuatro ingenieros que creemos en el desarrollo de software excelente y sin rodeos. En <strong className="font-semibold text-foreground">Asymmetric Devs</strong> eliminamos las capas administrativas innecesarias: hablas directamente con los creadores de tu producto.
              </p>
              <p className="mt-4 font-sans text-base text-neutral-600 dark:text-stone-400 font-light leading-relaxed">
                Diseñamos cada solución con una visión a largo plazo, asegurando que aquello que empiece como una landing page pueda crecer orgánicamente hasta convertirse en una plataforma automatizada y robusta.
              </p>

              {/* Strengths list */}
              <div className="mt-8 flex flex-col gap-3">
                {coreStrengths.map((strength, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 p-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-sm font-medium text-neutral-700 dark:text-stone-300">
                      {strength}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-12 p-6 rounded-2xl bg-stone-50/80 dark:bg-zinc-900/50 border border-border-subtle flex items-center gap-4">
              <div className="p-3 rounded-xl bg-pastel-mint border border-neutral-900/5 dark:border-white/5 text-foreground">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold text-foreground">
                  Desarrollado con Excelencia
                </h4>
                <p className="font-sans text-xs text-neutral-500 dark:text-stone-400 mt-0.5 leading-relaxed">
                  Garantizamos estándares internacionales y soporte adaptado para Argentina y el mundo.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Team Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {team.map((member, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                key={member.name}
                className="group p-6 rounded-2xl bg-stone-50/60 dark:bg-zinc-900/40 backdrop-blur-xs border border-border-subtle hover:border-neutral-900/10 dark:hover:border-white/10 hover:bg-stone-50 dark:hover:bg-zinc-900 flex flex-col sm:flex-row gap-5 items-start hover:shadow-xs transition-all duration-300 relative"
              >
                {/* Icon box */}
                <div className={`p-3.5 rounded-xl ${member.bgPastel} shrink-0`}>
                  {member.icon}
                </div>

                {/* Content */}
                <div className="flex-1 pr-6 sm:pr-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-sans text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                  <span className="block font-mono text-[10px] font-semibold text-neutral-500 dark:text-stone-400 uppercase tracking-wider mb-3">
                    {member.title}
                  </span>
                  <p className="font-sans text-sm text-neutral-600 dark:text-stone-400 leading-relaxed font-light">
                    {member.description}
                  </p>
                </div>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 inline-flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 dark:bg-zinc-800 text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-200 dark:hover:bg-zinc-700 transition-all shadow-xs"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
