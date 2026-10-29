import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Proyectos y Desarrollos | Asymmetric Devs",
  description:
    "Explorá todos los desarrollos web, aplicaciones móviles y sistemas de Inteligencia Artificial creados por el equipo de ingeniería de Asymmetric Devs.",
};

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Projects mode="catalog" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
