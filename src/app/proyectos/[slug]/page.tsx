import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import { projectsData, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Asymmetric Devs",
    };
  }

  return {
    title: `${project.title} — ${project.subtitle} | Asymmetric Devs`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Caso de Estudio — Asymmetric Devs`,
      description: project.shortDescription,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const prevProject =
    projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProjectDetailClient
          project={project}
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </main>
      <Footer />
    </>
  );
}
