"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Globe, Smartphone, Cpu, ArrowRight, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      icon: <Globe className="w-6 h-6 text-foreground" />,
      title: "Plataformas Web & Catálogos Comerciales",
      techTag: "[01 // CONVERSIÓN & AUTOGESTIÓN]",
      description:
        "Diseñamos y desarrollamos sitios corporativos, catálogos interactivos y plataformas web pensadas para captar clientes y facilitar la operación diaria de tu empresa desde cualquier dispositivo.",
      accentClass: "bg-pastel-mint border border-neutral-900/5 dark:border-white/5",
      bullets: [
        "Landing pages y catálogos mobile-first optimizados para pauta (Meta / Google Ads)",
        "Paneles de administración (CRUD) simples para que gestiones tu negocio sin depender de terceros",
        "Velocidad de carga extrema, SEO técnico y arquitectura serverless sin costos fijos ociosos",
      ],
      proofProjects: [
        { name: "DÚO Propiedades", slug: "duo-propiedades" },
        { name: "Chess Study", slug: "chess-study" },
      ],
    },
    {
      id: "02",
      icon: <Smartphone className="w-6 h-6 text-foreground" />,
      title: "Apps Móviles (iOS & Android) y SaaS",
      techTag: "[02 // PRODUCTOS DIGITALES NATIVOS]",
      description:
        "Construimos aplicaciones móviles multiplataforma fluidas y sistemas web a medida, acompañándote desde el diseño de la experiencia (UI/UX) hasta la publicación en Google Play y App Store.",
      accentClass: "bg-pastel-sky border border-neutral-900/5 dark:border-white/5",
      bullets: [
        "Aplicaciones nativas en React Native & Expo para iOS y Android con una sola base de código",
        "Sincronización en tiempo real, notificaciones push, geolocalización y pagos integrados",
        "Portales web B2B y tableros de métricas conectados a la misma infraestructura en la nube",
      ],
      proofProjects: [
        { name: "DateBox", slug: "datebox" },
        { name: "Elepad (Google Play)", slug: "elepad" },
      ],
    },
    {
      id: "03",
      icon: <Cpu className="w-6 h-6 text-foreground" />,
      title: "Automatización, IA Aplicada & Datos",
      techTag: "[03 // OPTIMIZACIÓN INTELIGENTE]",
      description:
        "Integramos Inteligencia Artificial donde realmente ahorra tiempo o genera ingresos: agentes de atención y ventas por WhatsApp, motores de recomendación, visión artificial y trazabilidad.",
      accentClass: "bg-pastel-indigo border border-neutral-900/5 dark:border-white/5",
      bullets: [
        "Agentes de IA conversacionales conectados a WhatsApp, tu catálogo o tu sistema de turnos/CRM",
        "Procesamiento inteligente de documentos, imágenes y flujos repetitivos de negocio",
        "Integración de APIs, pasarelas de pago (Mercado Pago), facturación ARCA y contratos inteligentes",
      ],
      proofProjects: [
        { name: "DOSEL (1° Puesto NEATECH)", slug: "dosel" },
        { name: "PolliNode (Edge AI)", slug: "pollinode" },
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
            [04 // NUESTROS SERVICIOS]
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Soluciones tecnológicas diseñadas para dar retorno real.
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-neutral-600 dark:text-zinc-400 leading-relaxed">
            Combinamos diseño de interfaz de alto nivel con arquitectura de software sólida para que tu inversión tecnológica funcione rápido hoy y escale mañana.
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

                <span className="font-mono text-[10px] font-bold text-neutral-500 dark:text-zinc-400 tracking-wider block mb-2">
                  {service.techTag}
                </span>

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
                    Casos reales desarrollados:
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
