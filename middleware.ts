export const config = {
  matcher: ['/', '/articles/:slug', '/project/:slug'],
};

export default function middleware(request: Request) {
  const accept = request.headers.get('accept') ?? '';
  if (!accept.includes('text/markdown')) return;

  const url = new URL(request.url);

  if (url.pathname === '/') {
    return Response.redirect(new URL('/llms.txt', url.origin).toString(), 302);
  }

  return Response.redirect(new URL(url.pathname + '.md', url.origin).toString(), 302);
}
