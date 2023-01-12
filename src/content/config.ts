import { z, defineCollection } from "astro:content";

const events = defineCollection({
  schema: {
    title: z.string(),
    at: z.string(),
    date: z.string(),
    type: z.enum(["conf"]),
  },
});

export const collections = {
  events,
};
