"use client";

import { motion } from "motion/react";
import { Check, Globe } from "lucide-react";
import { teamMembers } from "@/data/projects";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function About() {
  const coreStrengths = [
    "Hablás directo con los cuatro ingenieros que diseñan y programan el proyecto.",
    "Avances semanales claros para que puedas probar el sistema mientras se construye.",
    "Código bien estructurado y pensado para que sea simple de mantener y escalar.",
  ];

  return (
    <section
      id="nosotros"
      className="py-24 bg-background border-t border-border-subtle relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-teal-500/8 dark:bg-teal-400/6 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Left Column: Agency Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] font-semibold text-indigo-600 dark:text-teal-300 uppercase tracking-widest block mb-3">
                [05 // EQUIPO]
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                Cuatro Ingenieros en Sistemas trabajando en equipo.
              </h2>
              <p className="mt-6 font-sans text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Nos formamos en la{" "}
                <strong className="font-semibold text-foreground">
                  Universidad Tecnológica Nacional (UTN-FRRe)
                </strong>{" "}
                y venimos desarrollando software juntos en distintos ámbitos: plataformas comerciales para clientes, aplicaciones móviles publicadas en tiendas y prototipos premiados en competencias de tecnología.
              </p>
              <p className="mt-4 font-sans text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                En <strong className="font-semibold text-foreground">Asymmetric Devs</strong> trabajamos sin intermediarios: desde la primera reunión tratás con quienes toman las decisiones técnicas y escriben el código de tu producto.
              </p>

              {/* Strengths list — Tactile Strength Pills */}
              <div className="mt-8 flex flex-col gap-3">
                {coreStrengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 dark:bg-[#0D111C]/90 border border-slate-900/8 dark:border-white/8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                  >
                    <div className="mt-0.5 p-1 rounded-full bg-teal-500/15 text-teal-600 dark:text-teal-300 border border-teal-500/25 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Founder Cards with Real Photos & Verified Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", delay: idx * 0.06, duration: 0.45, bounce: 0 }}
                className="p-6 rounded-[28px] bg-white/90 dark:bg-[#0D111C]/90 border border-slate-900/8 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/15 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Photo + Name Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-0.5 rounded-[18px] bg-gradient-to-br from-indigo-500/40 to-teal-400/40 shrink-0">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-14 h-14 rounded-[16px] object-cover img-frame shrink-0"
                      />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-extrabold text-foreground leading-snug">
                        {member.name}
                      </h3>
                      <span className="block font-mono text-[10px] font-semibold text-indigo-600 dark:text-teal-300 uppercase tracking-wider mt-0.5">
                        {member.specialtyTag}
                      </span>
                    </div>
                  </div>

                  <p className="font-mono text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-3">
                    {member.role}
                  </p>

                  <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md font-mono text-[10px] bg-slate-100 dark:bg-[#131929] text-slate-600 dark:text-slate-300 border border-slate-900/5 dark:border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Links Footer */}
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#131929] hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold active:scale-[0.96] transition-[background-color,color,transform] duration-150 border border-slate-900/6 dark:border-white/8"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#131929] hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold active:scale-[0.96] transition-[background-color,color,transform] duration-150 border border-slate-900/6 dark:border-white/8"
                      aria-label={`GitHub de ${member.name}`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </div>

                  {member.portfolio ? (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-indigo-600 dark:text-teal-300 hover:underline"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Portfolio
                    </a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
