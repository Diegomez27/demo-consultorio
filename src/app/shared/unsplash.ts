// Utilidades para servir imágenes de Unsplash de forma responsiva.
// Todos los IDs fueron verificados (resuelven 200 y se inspeccionaron
// visualmente) antes de usarse.

interface UnsplashOpts {
  /** Relación de aspecto, ej. '3:4'. Si se omite, usa el recorte natural. */
  ar?: string;
  /** Enfocar el recorte en rostros (útil para retratos). */
  faces?: boolean;
  q?: number;
}

const CDN = 'https://images.unsplash.com';

export function unsplash(id: string, w: number, opts: UnsplashOpts = {}): string {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(w),
    q: String(opts.q ?? 64),
  });
  if (opts.ar) {
    params.set('ar', opts.ar);
  }
  if (opts.faces) {
    params.set('crop', 'faces,edges');
  }
  return `${CDN}/${id}?${params.toString()}`;
}

/** Genera un srcset de varios anchos para que el navegador elija. */
export function srcset(id: string, widths: number[], opts: UnsplashOpts = {}): string {
  return widths.map((w) => `${unsplash(id, w, opts)} ${w}w`).join(', ');
}
