import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(), // bold prefix in writing list e.g. "Design diary"
    ogImage: z.string().optional(),
  }),
});

export const collections = { projects, articles };
