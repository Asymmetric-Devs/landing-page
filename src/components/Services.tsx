"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Globe, Smartphone, Cpu, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      icon: <Globe className="w-5 h-5 text-accent-foreground" />,
      title: "Sitios Web & Sistemas de Gestión",
      description:
        "Plataformas web comerciales, catálogos interactivos y paneles autogestionables para operar tu negocio sin fricción.",
      bullets: [
        "Diseño responsivo optimizado para alta velocidad, SEO y conversión",
        "Paneles propios para administrar productos o clientes sin depender de terceros",
      ],
    },
    {
      id: "02",
      icon: <Smartphone className="w-5 h-5 text-accent-foreground" />,
      title: "Aplicaciones Móviles (iOS y Android)",
      description:
        "Desarrollo integral en React Native y Expo, desde el diseño de interfaz hasta la publicación en App Store y Google Play.",
      bullets: [
        "Una sola base de código nativa para ambas plataformas",
        "Notificaciones push, pagos, mapas y sincronización en tiempo real",
      ],
    },
    {
      id: "03",
      icon: <Cpu className="w-5 h-5 text-accent-foreground" />,
      title: "Automatización & Inteligencia Artificial",
      description:
        "Herramientas de IA e integraciones aplicadas donde generan impacto operativo real y medible para tu empresa.",
      bullets: [
        "Asistentes inteligentes conectados a WhatsApp y sistemas de gestión",
        "Procesamiento de documentos, visión satelital y automatización de procesos",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-background border-b border-border-subtle relative overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto border-x border-border-subtle px-6 md:px-12 py-20 relative z-10">
        {/* Section Header */}
        <div className="pb-12 border-b border-border-subtle mb-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-bold text-accent-text dark:text-accent uppercase tracking-widest block mb-3">
              [01 // SERVICIOS]
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.04em] text-foreground leading-[1.08] sm:leading-[1.02]">
              Qué podemos construir para tu{" "}
              <span className="marker-highlight inline-block bg-accent text-accent-foreground px-3 py-0.5 font-bold">
                empresa o proyecto.
              </span>
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-brand-muted leading-relaxed">
              Nos encargamos del diseño de interfaz, el desarrollo completo y la puesta en producción para que tengas un sistema claro, rápido y fácil de mantener.
            </p>
          </div>
        </div>

        {/* 3-Column Architectural Board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle border border-border-subtle bg-surface">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex flex-col justify-between"
            >
              <div>
                {/* Top Index Cell Header */}
                <div className="px-7 py-5 border-b border-border-subtle bg-background flex items-center justify-between gap-4 min-h-[96px]">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-tight">
                    {service.title}
                  </h3>
                  <div className="w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center rounded-none font-bold shrink-0">
                    {service.icon}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7">
                  <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 font-sans text-xs text-foreground leading-relaxed"
                      >
                        <span className="w-2 h-2 bg-accent shrink-0 mt-1.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="p-7 border-t border-border-subtle bg-background">
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-accent-text dark:text-accent hover:underline group transition-colors duration-150"
                >
                  Consultar por este servicio
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
