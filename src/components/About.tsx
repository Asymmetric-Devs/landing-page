"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";
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
      className="bg-background border-b border-border-subtle relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto border-x border-border-subtle px-6 md:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Manifesto & Ruled Principles */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] font-bold text-[#FF4D15] uppercase tracking-widest block mb-3">
                [05 // EQUIPO]
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.04em] text-foreground leading-[0.98]">
                Cuatro Ingenieros en Sistemas trabajando en{" "}
                <span className="font-serif italic font-normal text-[#FF4D15]">
                  equipo.
                </span>
              </h2>
              <p className="mt-6 font-sans text-base text-brand-muted leading-relaxed">
                Nos formamos en la{" "}
                <strong className="font-semibold text-foreground">
                  Universidad Tecnológica Nacional (UTN-FRRe)
                </strong>{" "}
                y venimos desarrollando software juntos en distintos ámbitos: plataformas comerciales para clientes, aplicaciones móviles publicadas en tiendas y prototipos premiados en competencias de tecnología.
              </p>
              <p className="mt-4 font-sans text-base text-brand-muted leading-relaxed">
                En <strong className="font-semibold text-foreground">Asymmetric Devs</strong> trabajamos sin intermediarios: desde la primera reunión tratás con quienes toman las decisiones técnicas y escriben el código de tu producto.
              </p>

              {/* Ruled Principles List */}
              <div className="mt-8 border border-border-subtle divide-y divide-border-subtle bg-surface">
                {coreStrengths.map((strength, i) => (
                  <div key={strength} className="p-4 flex items-start gap-3.5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#FF4D15] text-white shrink-0">
                      0{i + 1}
                    </span>
                    <span className="font-sans text-sm font-medium text-foreground leading-snug">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Founder Engineering Dossier Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                className="border border-border-subtle bg-surface hover:border-foreground transition-colors duration-150 flex flex-col justify-between"
              >
                <div>
                  {/* Top Dossier Index Bar */}
                  <div className="px-5 py-2.5 border-b border-border-subtle bg-background flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                      {`ING. 0${idx + 1} // UTN-FRRe`}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#FF4D15] uppercase tracking-wider">
                      {member.specialtyTag}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Photo + Name Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-16 h-16 rounded-none object-cover border border-foreground/30 shrink-0"
                      />
                      <div>
                        <h3 className="font-sans text-lg font-bold tracking-tight text-foreground leading-snug">
                          {member.name}
                        </h3>
                        <p className="font-mono text-[11px] font-medium text-brand-muted mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-brand-muted leading-relaxed mb-5">
                      {member.bio}
                    </p>

                    {/* Skills in Sharp Mono Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-none font-mono text-[10px] bg-background text-foreground border border-border-subtle"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Verified Links Footer */}
                <div className="px-6 py-3.5 border-t border-border-subtle bg-background flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-surface hover:bg-foreground hover:text-background text-foreground border border-border-subtle font-mono text-[11px] font-semibold transition-colors duration-150"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-surface hover:bg-foreground hover:text-background text-foreground border border-border-subtle font-mono text-[11px] font-semibold transition-colors duration-150"
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
                      className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#FF4D15] hover:underline uppercase"
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
