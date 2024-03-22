import { defineCollection, z } from "astro:content";
const postsCollection = defineCollection ({
    schema: z.object({
        image: z.string(),
        category: z.string(),
        title: z.string(),                
    }),
});

export const collections = {
    posts: postsCollection
};