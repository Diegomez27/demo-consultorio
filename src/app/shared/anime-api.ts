// Superficie mínima de anime.js que usa esta landing. Al re-exportar solo
// estas funciones, el chunk lazy se tree-shakea (~la mitad del barril
// completo de 'animejs'). Importar siempre vía loadAnime(), nunca directo.
export { animate, onScroll, stagger, svg, utils } from 'animejs';
