
export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  githubUrl: string;
  liveDemoUrl: string;
  imageUrl: string;
  createdAt: string;
  technologies: string[];
  comments: {
    id: number;
    authorName: string;
    content: string;
    createdAt: string;
  }[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "AI Study Assistant",
    slug: "ai-study-assistant",
    description:
      "An AI-powered study assistant that helps students understand difficult topics, generate summaries, and prepare for examinations.",
    githubUrl: "https://github.com/example/ai-study-assistant",
    liveDemoUrl: "https://example.com/study-assistant",
    imageUrl: "/projects/study-assistant.png",
    createdAt: "2026-10-10",
    technologies: ["Python", "FastAPI", "React", "OpenAI API"],
    comments: [
      {
        id: 1,
        authorName: "Alex",
        content: "Great idea! The study features are useful.",
        createdAt: "2026-10-12",
      },
    ],
  },
  {
    id: 2,
    title: "TaskFlow",
    slug: "taskflow",
    description:
      "A task management application that helps teams organize tasks, track progress, and collaborate efficiently.",
    githubUrl: "https://github.com/example/taskflow",
    liveDemoUrl: "https://example.com/taskflow",
    imageUrl: "/projects/taskflow.png",
    createdAt: "2026-10-15",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    comments: [
      {
        id: 2,
        authorName: "Jordan",
        content: "The interface looks clean and easy to use.",
        createdAt: "2026-10-16",
      },
    ],
  },
  {
    id: 3,
    title: "EcoTrack",
    slug: "ecotrack",
    description:
      "A sustainability dashboard that helps users monitor their daily activities and understand their environmental impact.",
    githubUrl: "https://github.com/example/ecotrack",
    liveDemoUrl: "https://example.com/ecotrack",
    imageUrl: "/projects/ecotrack.png",
    createdAt: "2026-10-20",
    technologies: ["JavaScript", "Node.js", "MongoDB"],
    comments: [
      {
        id: 3,
        authorName: "Sam",
        content: "A useful project for promoting sustainability.",
        createdAt: "2026-10-21",
      },
    ],
  },
];

export async function getProjects(): Promise<Project[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
