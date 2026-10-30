"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Globe, Smartphone, Cpu, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      icon: <Globe className="w-5 h-5 text-white" />,
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
      icon: <Smartphone className="w-5 h-5 text-white" />,
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
      icon: <Cpu className="w-5 h-5 text-white" />,
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
      <div className="max-w-7xl mx-auto border-x border-border-subtle px-6 md:px-12 py-20 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl pb-12 border-b border-border-subtle mb-12">
          <span className="font-mono text-[11px] font-bold text-[#FF4D15] uppercase tracking-widest block mb-3">
            [01 // SERVICIOS]
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.04em] text-foreground leading-[0.98]">
            Qué podemos construir para tu{" "}
            <span className="font-serif italic font-normal text-[#FF4D15]">
              empresa o proyecto.
            </span>
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-brand-muted leading-relaxed">
            Nos encargamos del diseño de interfaz, el desarrollo completo y la puesta en producción para que tengas un sistema claro, rápido y fácil de mantener.
          </p>
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
                <div className="px-7 py-5 border-b border-border-subtle bg-background flex items-center justify-between">
                  <span className="font-sans text-3xl sm:text-4xl font-bold tracking-tighter text-foreground">
                    {service.id}
                  </span>
                  <div className="w-10 h-10 bg-[#FF4D15] flex items-center justify-center rounded-none">
                    {service.icon}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 font-sans text-xs text-foreground leading-relaxed"
                      >
                        <span className="w-2 h-2 bg-[#FF4D15] shrink-0 mt-1.5" />
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
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FF4D15] hover:text-[#E03E0B] group transition-colors duration-150"
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
