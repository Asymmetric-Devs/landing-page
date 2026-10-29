import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Milestones from "@/components/Milestones";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Noticias y Actualidad | Asymmetric Devs",
  description:
    "Novedades, participaciones en hackathones, premios y notas en medios del equipo de ingeniería de Asymmetric Devs.",
};

export default function NoticiasPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Milestones mode="catalog" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
