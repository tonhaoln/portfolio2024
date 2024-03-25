import { defineCollection, z } from "astro:content";
const postsCollection = defineCollection ({
    schema: ({image}) => z.object({
        image: image(),
        category: z.string(),
        title: z.string(),                
    }),
});

export const collections = {
    posts: postsCollection
};