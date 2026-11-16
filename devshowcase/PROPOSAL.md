# Project proposal

* **Name:** Lok Pradeep Tonny RUTHIRA KUMAR
* **Project title:** DevShowcase – Developer Project Portfolio
* **Pitch:** DevShowcase is a platform where developers can showcase their projects, share the technologies they used, and receive feedback through comments.
* **Target users:** Students, beginner developers, software engineers, and coding enthusiasts.

## Pages

| URL | Content | Dynamic segment? | Rendering strategy and why |
|---|---|---|---|
| `/` | Homepage with an introduction and featured developer projects | No | Static rendering because the homepage content does not change frequently |
| `/projects` | Displays all submitted developer projects | No | Server rendering to retrieve the latest project information |
| `/projects/[slug]` | Displays project details, technologies, GitHub links, and comments | Yes – slug | Dynamic server rendering to display the correct project based on its slug |
| `/submit` | Form for submitting a new developer project | No | Client interactivity for form inputs and submission |
| `/projects/[slug]/edit` | Form for editing an existing project | Yes – slug | Client interactivity to update project information |

## Data

The application will contain three main entities:

1. **Project:** id, title, slug, description, githubUrl, liveDemoUrl, imageUrl, createdAt.
2. **Technology:** id, name, category.
3. **Comment:** id, authorName, content, createdAt, projectId.

### Relationships

- A project can have multiple technologies, and a technology can be associated with multiple projects (many-to-many relationship).
- A project can have multiple comments, while each comment belongs to one project (one-to-many relationship).

## Write actions

Users will be able to:

- Create a new project.
- Update an existing project.
- Delete a project.
- Add comments to a project.

These actions will be implemented using API routes and a database with Prisma.

## Repository

GitHub URL: https://github.com/LokPradeepTonnyRUTHIRAKUMAR/movie-night