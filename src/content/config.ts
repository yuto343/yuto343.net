import { z, defineCollection } from "astro:content";

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    at: z.string().optional(),
    date: z.date(),
    type: z.enum(["conf", "company", "article", "development"]),
  }),
});

export const collections = {
  events,
};
