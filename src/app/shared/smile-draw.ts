import {
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject,
  input,
} from '@angular/core';
import type { JSAnimation, ScrollObserver } from 'animejs';
import { loadAnime } from './anime-loader';

/**
 * Dibuja el trazo del arco-sonrisa (motivo de marca) con line-draw de SVG.
 *
 * anime.js se carga vía loadAnime() (chunk lazy, tras el primer paint y en
 * idle): el LCP del hero no paga el costo de una animación decorativa.
 *
 * El trazo por defecto está VISIBLE: solo se oculta al armar la animación
 * (createDrawable lo deja en '0 0'), de modo que renders sin JS y
 * prefers-reduced-motion muestran el arco completo, igual que RevealOnScroll.
 *
 * Modos:
 * - 'scroll' (por defecto): el trazo se dibuja una sola vez cuando el SVG
 *   entra en viewport (ScrollObserver con repeat: false).
 * - 'load': se dibuja al cargar la página — para el arco grande del hero,
 *   visible desde el inicio — escalonando sus paths 180 ms.
 */
@Directive({
  selector: 'svg[appSmileDraw]',
})
export class SmileDraw implements OnDestroy {
  /** Disparador del dibujo: 'scroll' (viewport) o 'load' (carga de página). */
  readonly drawOn = input('scroll', {
    alias: 'appSmileDraw',
    transform: (value: string): 'scroll' | 'load' =>
      value === 'load' ? 'load' : 'scroll',
  });

  private readonly el = inject<ElementRef<SVGSVGElement>>(ElementRef);

  private animation?: JSAnimation;
  private observer?: ScrollObserver;
  private destroyed = false;

  constructor() {
    afterNextRender(() => {
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      if (reduced) {
        return;
      }

      const paths = Array.from(
        this.el.nativeElement.querySelectorAll<SVGPathElement>('path'),
      );
      if (paths.length > 0) {
        void this.arm(paths);
      }
    });
  }

  private async arm(paths: SVGPathElement[]): Promise<void> {
    const { animate, onScroll, stagger, svg } = await loadAnime();
    if (this.destroyed) {
      return;
    }

    const atLoad = this.drawOn() === 'load';
    if (!atLoad) {
      this.observer = onScroll({
        target: this.el.nativeElement,
        enter: 'bottom-=10% top',
        repeat: false,
      });
    }

    this.animation = animate(svg.createDrawable(paths), {
      draw: '0 1',
      duration: atLoad ? 1300 : 1000,
      delay: stagger(180),
      ease: 'outQuart',
      autoplay: this.observer ?? true,
    });
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.observer?.revert();
    this.animation?.cancel();
  }
}
