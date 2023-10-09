import { z, defineCollection } from "astro:content";

const event = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    at: z.string().optional(),
    date: z.date(),
  }),
});
const career = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    at: z.string().optional(),
    date: z.date(),
  }),
});
const development = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    at: z.string().optional(),
    date: z.date(),
  }),
});
const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    at: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = {
  event,
  career,
  development,
  writing,
};
