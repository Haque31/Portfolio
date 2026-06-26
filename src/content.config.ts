import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    role: z.string(),
    year: z.string(),
    tags: z.array(z.string()).min(1),
    github: z.url().optional(),
    live: z.url().optional(),
    status: z.string().optional(),
    featured: z.boolean().default(true),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = { projects };
