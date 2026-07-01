import {
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

/**
 * Revela el elemento al entrar en viewport con un desplazamiento suave.
 *
 * El estado por defecto del elemento es VISIBLE. Solo cuando hay JS la
 * directiva "arma" el estado inicial (clase .is-armed), de modo que en
 * renders sin JS, headless o Lighthouse el contenido nunca queda en blanco.
 * Respeta prefers-reduced-motion: no arma nada y deja todo visible.
 */
@Directive({
  selector: '[data-reveal]',
})
export class RevealOnScroll {
  /** Retraso de entrada en ms (para escalonar listas). */
  readonly revealDelay = input(0, {
    alias: 'data-reveal',
    transform: numberAttribute,
  });

  private readonly el = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement as HTMLElement;

      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      if (reduced || !('IntersectionObserver' in window)) {
        return;
      }

      const delay = Number(this.revealDelay()) || 0;
      if (delay > 0) {
        node.style.setProperty('--reveal-delay', `${delay}ms`);
      }
      node.classList.add('is-armed');

      const observer = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              obs.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(node);
    });
  }
}
