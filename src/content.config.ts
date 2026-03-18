import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),   // SEO meta
    intro: z.string(),          // hero body text
    outcome: z.string(),        // bold stat line in hero
    date: z.coerce.date(),
    url: z.string().optional(),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(), // bold prefix in writing list e.g. "Design diary"
    ogImage: z.string().optional(),
  }),
});

export const collections = { projects, articles };
