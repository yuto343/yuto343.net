declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"career": {
"admission-university.md": {
	id: "admission-university.md";
  slug: "admission-university";
  body: string;
  collection: "career";
  data: InferEntrySchema<"career">
} & { render(): Render[".md"] };
"graduate-university.md": {
	id: "graduate-university.md";
  slug: "graduate-university";
  body: string;
  collection: "career";
  data: InferEntrySchema<"career">
} & { render(): Render[".md"] };
"inno.md": {
	id: "inno.md";
  slug: "inno";
  body: string;
  collection: "career";
  data: InferEntrySchema<"career">
} & { render(): Render[".md"] };
"pxgrid.md": {
	id: "pxgrid.md";
  slug: "pxgrid";
  body: string;
  collection: "career";
  data: InferEntrySchema<"career">
} & { render(): Render[".md"] };
"start.md": {
	id: "start.md";
  slug: "start";
  body: string;
  collection: "career";
  data: InferEntrySchema<"career">
} & { render(): Render[".md"] };
};
"development": {
"isolavita.mdx": {
	id: "isolavita.mdx";
  slug: "isolavita";
  body: string;
  collection: "development";
  data: InferEntrySchema<"development">
} & { render(): Render[".mdx"] };
"overload.mdx": {
	id: "overload.mdx";
  slug: "overload";
  body: string;
  collection: "development";
  data: InferEntrySchema<"development">
} & { render(): Render[".mdx"] };
"sushi-tsuruya.md": {
	id: "sushi-tsuruya.md";
  slug: "sushi-tsuruya";
  body: string;
  collection: "development";
  data: InferEntrySchema<"development">
} & { render(): Render[".md"] };
"yaniv-counter.md": {
	id: "yaniv-counter.md";
  slug: "yaniv-counter";
  body: string;
  collection: "development";
  data: InferEntrySchema<"development">
} & { render(): Render[".md"] };
};
"event": {
"css-nite.md": {
	id: "css-nite.md";
  slug: "css-nite";
  body: string;
  collection: "event";
  data: InferEntrySchema<"event">
} & { render(): Render[".md"] };
"frontend-conference-hokkaido-2024.mdx": {
	id: "frontend-conference-hokkaido-2024.mdx";
  slug: "frontend-conference-hokkaido-2024";
  body: string;
  collection: "event";
  data: InferEntrySchema<"event">
} & { render(): Render[".mdx"] };
"techfeed-experts-night-vol-4.md": {
	id: "techfeed-experts-night-vol-4.md";
  slug: "techfeed-experts-night-vol-4";
  body: string;
  collection: "event";
  data: InferEntrySchema<"event">
} & { render(): Render[".md"] };
};
"writing": {
"2020-tailwind-css-1.md": {
	id: "2020-tailwind-css-1.md";
  slug: "2020-tailwind-css-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2020-tailwind-css-2.md": {
	id: "2020-tailwind-css-2.md";
  slug: "2020-tailwind-css-2";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2020-tailwind-css-3.md": {
	id: "2020-tailwind-css-3.md";
  slug: "2020-tailwind-css-3";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2020-tailwind-css-4.md": {
	id: "2020-tailwind-css-4.md";
  slug: "2020-tailwind-css-4";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2020-tailwind-css-5.md": {
	id: "2020-tailwind-css-5.md";
  slug: "2020-tailwind-css-5";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2020-tailwind-talk-1.md": {
	id: "2020-tailwind-talk-1.md";
  slug: "2020-tailwind-talk-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2020-tailwind-talk-2.md": {
	id: "2020-tailwind-talk-2.md";
  slug: "2020-tailwind-talk-2";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2020-tech-news-1.md": {
	id: "2020-tech-news-1.md";
  slug: "2020-tech-news-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-microcms-1.md": {
	id: "2021-microcms-1.md";
  slug: "2021-microcms-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-microcms-2.md": {
	id: "2021-microcms-2.md";
  slug: "2021-microcms-2";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-microcms-3.md": {
	id: "2021-microcms-3.md";
  slug: "2021-microcms-3";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-microcms-4.md": {
	id: "2021-microcms-4.md";
  slug: "2021-microcms-4";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-microcms-5.md": {
	id: "2021-microcms-5.md";
  slug: "2021-microcms-5";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-microcms-6.md": {
	id: "2021-microcms-6.md";
  slug: "2021-microcms-6";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-microcms-7.md": {
	id: "2021-microcms-7.md";
  slug: "2021-microcms-7";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-practical-jamstack-1.md": {
	id: "2021-practical-jamstack-1.md";
  slug: "2021-practical-jamstack-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-practical-jamstack-2.md": {
	id: "2021-practical-jamstack-2.md";
  slug: "2021-practical-jamstack-2";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-practical-jamstack-3.md": {
	id: "2021-practical-jamstack-3.md";
  slug: "2021-practical-jamstack-3";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2021-practical-jamstack-4.md": {
	id: "2021-practical-jamstack-4.md";
  slug: "2021-practical-jamstack-4";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-1.md": {
	id: "2022-astro-1.md";
  slug: "2022-astro-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-10.md": {
	id: "2022-astro-10.md";
  slug: "2022-astro-10";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-11.md": {
	id: "2022-astro-11.md";
  slug: "2022-astro-11";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-12.md": {
	id: "2022-astro-12.md";
  slug: "2022-astro-12";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-2.md": {
	id: "2022-astro-2.md";
  slug: "2022-astro-2";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-3.md": {
	id: "2022-astro-3.md";
  slug: "2022-astro-3";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-4.md": {
	id: "2022-astro-4.md";
  slug: "2022-astro-4";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-5.md": {
	id: "2022-astro-5.md";
  slug: "2022-astro-5";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-6.md": {
	id: "2022-astro-6.md";
  slug: "2022-astro-6";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-7.md": {
	id: "2022-astro-7.md";
  slug: "2022-astro-7";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-8.md": {
	id: "2022-astro-8.md";
  slug: "2022-astro-8";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-astro-9.md": {
	id: "2022-astro-9.md";
  slug: "2022-astro-9";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-codegrid-guide-1.md": {
	id: "2022-codegrid-guide-1.md";
  slug: "2022-codegrid-guide-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-jamstack-hosting-1.md": {
	id: "2022-jamstack-hosting-1.md";
  slug: "2022-jamstack-hosting-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-my-dev-environment-1.md": {
	id: "2022-my-dev-environment-1.md";
  slug: "2022-my-dev-environment-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-static-site-generator-1.md": {
	id: "2022-static-site-generator-1.md";
  slug: "2022-static-site-generator-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-static-site-generator-2.md": {
	id: "2022-static-site-generator-2.md";
  slug: "2022-static-site-generator-2";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022-static-site-generator-3.md": {
	id: "2022-static-site-generator-3.md";
  slug: "2022-static-site-generator-3";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023-astro-image-1.md": {
	id: "2023-astro-image-1.md";
  slug: "2023-astro-image-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023-astro-view-transitions-1.md": {
	id: "2023-astro-view-transitions-1.md";
  slug: "2023-astro-view-transitions-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023-debugbear-1.md": {
	id: "2023-debugbear-1.md";
  slug: "2023-debugbear-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023-openai-api-1.md": {
	id: "2023-openai-api-1.md";
  slug: "2023-openai-api-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023-openai-api-2.md": {
	id: "2023-openai-api-2.md";
  slug: "2023-openai-api-2";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023-openai-api-3.md": {
	id: "2023-openai-api-3.md";
  slug: "2023-openai-api-3";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023-talk-about-careers-1.md": {
	id: "2023-talk-about-careers-1.md";
  slug: "2023-talk-about-careers-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024-arc-1.md": {
	id: "2024-arc-1.md";
  slug: "2024-arc-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024-supabase-1.md": {
	id: "2024-supabase-1.md";
  slug: "2024-supabase-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024-supabase-2.md": {
	id: "2024-supabase-2.md";
  slug: "2024-supabase-2";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024-tinacms-1.md": {
	id: "2024-tinacms-1.md";
  slug: "2024-tinacms-1";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024-tinacms-2.md": {
	id: "2024-tinacms-2.md";
  slug: "2024-tinacms-2";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024-tinacms-3.md": {
	id: "2024-tinacms-3.md";
  slug: "2024-tinacms-3";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024-tinacms-4.md": {
	id: "2024-tinacms-4.md";
  slug: "2024-tinacms-4";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024-tinacms-5.md": {
	id: "2024-tinacms-5.md";
  slug: "2024-tinacms-5";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"astro-rewrite.md": {
	id: "astro-rewrite.md";
  slug: "astro-rewrite";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"future-works-16.md": {
	id: "future-works-16.md";
  slug: "future-works-16";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"microcms-preview.md": {
	id: "microcms-preview.md";
  slug: "microcms-preview";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"nuxt.md": {
	id: "nuxt.md";
  slug: "nuxt";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"svelte-animation.md": {
	id: "svelte-animation.md";
  slug: "svelte-animation";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
