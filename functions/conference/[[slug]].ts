export const onRequest: PagesFunction = async ({ params }) => {
  const ORIGIN = "https://topic-site-migration.conference-as2.pages.dev";

  const { slug } = params;
  const target = `${ORIGIN}/conference/${typeof slug === "string" ? slug : slug.join("/")}`;
  return fetch(target);
};
