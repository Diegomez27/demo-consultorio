type AnimeApi = typeof import('./anime-api');

let anime$: Promise<AnimeApi> | undefined;

/**
 * Carga anime.js en un chunk lazy, después del evento load y con el main
 * thread en idle, para que FCP/LCP nunca esperen a la librería de animación
 * (ni en métricas reales ni en el grafo crítico que simula Lighthouse).
 * La promesa se memoiza: todos los consumidores comparten la misma carga.
 */
export function loadAnime(): Promise<AnimeApi> {
  anime$ ??= whenSettled().then(() => import('./anime-api'));
  return anime$;
}

function whenSettled(): Promise<void> {
  return new Promise((resolve) => {
    const afterLoad = () => {
      // Doble rAF: garantiza al menos un frame pintado tras load antes de idle.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => resolve(), { timeout: 1500 });
          } else {
            setTimeout(resolve, 80);
          }
        });
      });
    };

    if (document.readyState === 'complete') {
      afterLoad();
    } else {
      window.addEventListener('load', afterLoad, { once: true });
    }
  });
}
