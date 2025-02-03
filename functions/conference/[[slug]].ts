export const onRequest: PagesFunction = async ({ params }) => {
  const ORIGIN = "https://topic-site-migration.conference-as2.pages.dev";

  const { slug } = params;

  return fetch(`${ORIGIN}/${typeof slug === "string" ? slug : slug.join("/")}`);
};
