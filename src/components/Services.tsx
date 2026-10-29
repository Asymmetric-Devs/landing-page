"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Globe, Smartphone, Cpu, ArrowRight, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      icon: <Globe className="w-6 h-6 text-foreground" />,
      title: "Sitios Web, Catálogos y Sistemas de Gestión",
      description:
        "Diseñamos y desarrollamos sitios web comerciales, catálogos interactivos y plataformas internas para mostrar tus servicios y organizar la operación diaria de tu negocio.",
      accentClass: "bg-pastel-mint border border-neutral-900/5 dark:border-white/5",
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
      icon: <Smartphone className="w-6 h-6 text-foreground" />,
      title: "Aplicaciones Móviles (iOS y Android)",
      description:
        "Desarrollamos aplicaciones móviles para iOS y Android acompañándote desde el diseño de las pantallas hasta la publicación en Google Play y App Store.",
      accentClass: "bg-pastel-sky border border-neutral-900/5 dark:border-white/5",
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
      icon: <Cpu className="w-6 h-6 text-foreground" />,
      title: "Automatización e Inteligencia Artificial",
      description:
        "Sumamos herramientas de Inteligencia Artificial e integraciones donde aportan valor práctico: asistentes de consulta, motores de recomendación, análisis de imágenes o trazabilidad.",
      accentClass: "bg-pastel-indigo border border-neutral-900/5 dark:border-white/5",
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
          <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-3">
            [04 // SERVICIOS]
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Qué podemos construir para tu empresa o proyecto.
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-neutral-600 dark:text-zinc-400 leading-relaxed">
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
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="p-8 rounded-3xl bg-white/80 dark:bg-zinc-900/60 border border-border-subtle hover:border-neutral-900/15 dark:hover:border-white/15 flex flex-col justify-between shadow-xs hover:shadow-lg transition-[border-color,box-shadow] duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-7">
                  <div className={`p-4 rounded-2xl ${service.accentClass}`}>
                    {service.icon}
                  </div>
                  <span className="font-mono text-sm text-neutral-400 dark:text-zinc-500 font-bold">
                    /{service.id}
                  </span>
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-neutral-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 font-sans text-xs text-neutral-700 dark:text-zinc-300 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real Case Studies Proof + CTA */}
              <div className="border-t border-border-subtle pt-5 flex flex-col gap-4">
                <div>
                  <span className="font-mono text-[10px] font-semibold text-neutral-400 dark:text-zinc-500 uppercase tracking-wider block mb-2">
                    Proyectos relacionados:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.proofProjects.map((proj) => (
                      <Link
                        key={proj.slug}
                        href={`/proyectos/${proj.slug}`}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-mono text-[11px] font-medium bg-stone-100 dark:bg-zinc-800 hover:bg-emerald-500/15 hover:text-emerald-700 dark:hover:text-emerald-300 text-foreground transition-colors duration-150"
                      >
                        {proj.name}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-150 pt-1"
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
