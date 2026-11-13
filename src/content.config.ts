import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const profile = defineCollection({
  loader: glob({ base: "./src/content/profile", pattern: "*.md" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    department: z.string(),
    lead: z.string(),
    biography: z.array(z.string()),
    education: z.array(
      z.object({
        degree: z.string(),
        institution: z.string(),
        period: z.string(),
        result: z.string(),
        location: z.string().optional(),
        yearResults: z.array(z.string()).default([]),
      }),
    ),
    tagGroups: z.array(
      z.object({
        title: z.string(),
        items: z.array(z.string()),
      }),
    ),
    ongoingProjects: z.array(
      z.object({
        category: z.string(),
        status: z.string(),
        title: z.string(),
        description: z.array(z.string()),
        supervisor: z.string().optional(),
      }),
    ),
    completedProjectsPlaceholder: z.string(),
    activityGroups: z.array(
      z.object({
        title: z.string(),
        items: z.array(
          z.object({
            role: z.string(),
            organization: z.string().optional(),
            period: z.string().optional(),
            detail: z.string().optional(),
          }),
        ),
      }),
    ),
    contacts: z.array(
      z.object({
        label: z.string(),
        text: z.string(),
        href: z.string(),
        kind: z.enum(["email", "github", "linkedin", "facebook", "instagram", "whatsapp"]),
      }),
    ),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(99),
  }),
});

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

const gallery = defineCollection({
  loader: glob({ base: "./src/content/gallery", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
});

export const collections = { profile, projects, posts, gallery };
