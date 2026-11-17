
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects";

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getProjects();
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <Link href="/projects" className="text-sm underline">
        ← Back to Projects
      </Link>

      <h1 className="mt-6 text-4xl font-bold">{project.title}</h1>

      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <h2 className="mt-8 text-xl font-semibold">Technologies Used</h2>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-zinc-200 px-3 py-1 text-sm dark:bg-zinc-800"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-5">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub Repository
        </a>

        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Live Demo
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Community Comments</h2>

        {project.comments.map((comment) => (
          <article key={comment.id} className="mt-4 rounded-lg border p-4">
            <p className="font-semibold">{comment.authorName}</p>
            <p className="mt-2 text-sm">{comment.content}</p>
            <p className="mt-2 text-xs text-zinc-500">
              {comment.createdAt}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
