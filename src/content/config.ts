import { defineCollection, z } from "astro:content";
const postsCollection = defineCollection ({
    schema: ({image}) => z.object({
        title: z.string(),    
        description: z.string(),            
        ogimage: z.string(),            
        category: z.string(),
        thumb: image(),
        url: z.string(),        
    }),
});

export const collections = {
    posts: postsCollection
};