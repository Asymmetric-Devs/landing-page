import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Milestones from "@/components/Milestones";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Proyectos, Casos de Éxito & Reconocimientos | Asymmetric Devs",
  description:
    "Explorá los desarrollos web, aplicaciones móviles y sistemas de Inteligencia Artificial creados por el equipo de ingeniería de Asymmetric Devs.",
};

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-12">
        <Projects />
        <Milestones />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
