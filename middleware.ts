export const config = {
  matcher: ['/', '/articles/:slug', '/project/:slug'],
};

export default async function middleware(request: Request) {
  const accept = request.headers.get('accept') ?? '';
  if (!accept.includes('text/markdown')) return;

  const url = new URL(request.url);
  const mdPath = url.pathname === '/' ? '/llms.txt' : url.pathname + '.md';
  const mdUrl = new URL(mdPath, url.origin);

  const upstream = await fetch(mdUrl.toString());
  const content = await upstream.text();

  return new Response(content, {
    status: 200,
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
