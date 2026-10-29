"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Globe, Smartphone, Cpu, ArrowRight, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      icon: <Globe className="w-6 h-6" />,
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
      icon: <Smartphone className="w-6 h-6" />,
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
      icon: <Cpu className="w-6 h-6" />,
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
      className="py-24 bg-background border-t border-border-subtle relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[11px] font-semibold text-indigo-600 dark:text-teal-300 uppercase tracking-widest block mb-3">
            [04 // SERVICIOS]
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Qué podemos construir para tu empresa o proyecto.
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Nos encargamos del diseño de interfaz, el desarrollo completo y la puesta en producción para que tengas un sistema claro, rápido y fácil de mantener.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", duration: 0.45, delay: idx * 0.06, bounce: 0 }}
              className="rounded-[28px] p-8 bg-white/90 dark:bg-[#0D111C]/90 border border-slate-900/8 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/15 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-7">
                  <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
                    {service.icon}
                  </div>
                  <span className="font-mono text-sm text-slate-400 dark:text-slate-500 font-bold tabular-nums">
                    /{service.id}
                  </span>
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 font-sans text-xs text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real Case Studies Proof + CTA */}
              <div className="border-t border-border-subtle pt-5 flex flex-col gap-4">
                <div>
                  <span className="font-mono text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                    Proyectos relacionados:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.proofProjects.map((proj) => (
                      <Link
                        key={proj.slug}
                        href={`/proyectos/${proj.slug}`}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-mono text-[11px] font-medium bg-slate-100 dark:bg-[#131929] hover:bg-indigo-500/15 hover:text-indigo-600 dark:hover:text-teal-300 text-foreground border border-slate-900/6 dark:border-white/8 active:scale-[0.96] transition-[background-color,color,transform] duration-150"
                      >
                        {proj.name}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-teal-300 hover:underline transition-colors duration-150 pt-1"
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
