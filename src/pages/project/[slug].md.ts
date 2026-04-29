import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

const rawProjects = import.meta.glob('/src/content/projects/*.md', { query: '?raw', import: 'default' });

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((project) => ({
    params: { slug: project.id },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const load = rawProjects[`/src/content/projects/${params.slug}.md`];
  const raw = await load();
  return new Response(raw, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
