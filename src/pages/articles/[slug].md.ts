import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

const rawArticles = import.meta.glob('/src/content/articles/*.md', { query: '?raw', import: 'default' });

export async function getStaticPaths() {
  const articles = await getCollection('articles');
  return articles.map((article) => ({
    params: { slug: article.id },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const load = rawArticles[`/src/content/articles/${params.slug}.md`];
  const raw = await load();
  return new Response(raw, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
