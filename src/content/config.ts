import { z, defineCollection } from "astro:content";

const event = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    at: z.string().optional(),
    date: z.date(),
    link: z.string().optional(),
  }),
});
const career = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    at: z.string().optional(),
    date: z.date(),
    link: z.string().optional(),
  }),
});
const development = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    at: z.string().optional(),
    date: z.date(),
    link: z.string().optional(),
  }),
});
const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    at: z.string().optional(),
    date: z.date(),
    link: z.string().optional(),
  }),
});

export const collections = {
  event,
  career,
  development,
  writing,
};
