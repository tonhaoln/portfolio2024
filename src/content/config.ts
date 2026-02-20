import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    thumbBg: z.string().optional(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(), // bold prefix in writing list e.g. "Design diary"
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { projects, articles };
