export const config = {
  matcher: ['/articles/:slug', '/project/:slug'],
};

export default function middleware(request: Request) {
  const accept = request.headers.get('accept') ?? '';
  if (accept.includes('text/markdown')) {
    const url = new URL(request.url);
    return Response.redirect(new URL(url.pathname + '.md', url.origin).toString(), 302);
  }
}
