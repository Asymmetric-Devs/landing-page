"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Globe, Smartphone, Cpu, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      icon: <Globe className="w-5 h-5 text-white" />,
      title: "Sitios Web, Catálogos y Sistemas de Gestión",
      description:
        "Diseñamos y desarrollamos sitios web comerciales, catálogos interactivos y plataformas internas para mostrar tus servicios y organizar la operación diaria de tu negocio.",
      bullets: [
        "Sitios y catálogos adaptados a celulares y computadoras",
        "Paneles de administración propios para cargar productos, inmuebles o clientes sin depender de terceros",
        "Buena velocidad de carga, posicionamiento en buscadores (SEO) y despliegue en la nube",
      ],
      proofProjects: [
        { name: "DÚO Propiedades", slug: "duo-propiedades" },
        { name: "Chess Study", slug: "chess-study" },
      ],
    },
    {
      id: "02",
      icon: <Smartphone className="w-5 h-5 text-white" />,
      title: "Aplicaciones Móviles (iOS y Android)",
      description:
        "Desarrollamos aplicaciones móviles para iOS y Android acompañándote desde el diseño de las pantallas hasta la publicación en Google Play y App Store.",
      bullets: [
        "Desarrollo en React Native y Expo para publicar en Android e iOS desde una misma base de código",
        "Notificaciones push, mapas, cámara, sincronización en tiempo real y cobros integrados",
        "Paneles web de administración conectados a la misma base de datos de la app",
      ],
      proofProjects: [
        { name: "DateBox (Google Play)", slug: "datebox" },
        { name: "Elepad (Google Play)", slug: "elepad" },
      ],
    },
    {
      id: "03",
      icon: <Cpu className="w-5 h-5 text-white" />,
      title: "Automatización e Inteligencia Artificial",
      description:
        "Sumamos herramientas de Inteligencia Artificial e integraciones donde aportan valor práctico: asistentes de consulta, motores de recomendación, análisis de imágenes o trazabilidad.",
      bullets: [
        "Asistentes conversacionales conectados a WhatsApp, catálogos o sistemas de turnos",
        "Procesamiento automático de documentos, imágenes y tareas operativas repetitivas",
        "Integración de pasarelas de pago (Mercado Pago), APIs externas y contratos inteligentes",
      ],
      proofProjects: [
        { name: "DOSEL (1° Puesto NEATECH)", slug: "dosel" },
        { name: "PolliNode", slug: "pollinode" },
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
            [04 // SERVICIOS]
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

                  <ul className="flex flex-col gap-3.5">
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

              {/* Real Case Studies Proof + CTA */}
              <div className="p-7 border-t border-border-subtle bg-background flex flex-col gap-4">
                <div>
                  <span className="font-mono text-[10px] font-bold text-brand-muted uppercase tracking-wider block mb-2.5">
                    Proyectos relacionados:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.proofProjects.map((proj) => (
                      <Link
                        key={proj.slug}
                        href={`/proyectos/${proj.slug}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-none font-mono text-[11px] font-semibold bg-surface hover:bg-foreground hover:text-background text-foreground border border-border-subtle transition-colors duration-150"
                      >
                        {proj.name}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#FF4D15] hover:underline pt-1"
                >
                  Consultar por este servicio
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
