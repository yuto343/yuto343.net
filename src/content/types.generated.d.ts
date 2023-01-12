declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"events": {
"1.md": {
  id: "1.md",
  slug: "1",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
"2.md": {
  id: "2.md",
  slug: "2",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
"3.md": {
  id: "3.md",
  slug: "3",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
"4.md": {
  id: "4.md",
  slug: "4",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
"5.md": {
  id: "5.md",
  slug: "5",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
"6.md": {
  id: "6.md",
  slug: "6",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
},

	};

	type ContentConfig = typeof import("./config");
}
