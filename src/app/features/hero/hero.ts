import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  afterNextRender,
  viewChild,
} from '@angular/core';
import type { JSAnimation } from 'animejs';
import { loadAnime } from '../../shared/anime-loader';
import { CLINIC } from '../../shared/clinic.data';
import { Icon } from '../../shared/icon/icon';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { SmileDraw } from '../../shared/smile-draw';
import { srcset, unsplash } from '../../shared/unsplash';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealOnScroll, SmileDraw],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnDestroy {
  readonly clinic = CLINIC;

  private readonly heroId = 'photo-1629909613654-28e377c37b09';
  readonly heroSrc = unsplash(this.heroId, 1080, { q: 62 });
  readonly heroSrcset = srcset(this.heroId, [768, 1080, 1440], { q: 62 });

  // Partes numéricas de las stats. El template renderiza el valor final por
  // defecto (sin JS / prefers-reduced-motion); el conteo solo lo reescribe.
  private readonly patientsValue = Number(CLINIC.stats.patients.replace(/\D/g, ''));
  private readonly ratingValue = Number(CLINIC.stats.rating);
  readonly patientsDisplay = this.patientsValue.toLocaleString('en-US');
  readonly patientsSuffix = CLINIC.stats.patients.replace(/[\d,]/g, '');

  private readonly yearsEl = viewChild.required<ElementRef<HTMLElement>>('statYears');
  private readonly patientsEl = viewChild.required<ElementRef<HTMLElement>>('statPatients');
  private readonly ratingEl = viewChild.required<ElementRef<HTMLElement>>('statRating');

  private countAnimation?: JSAnimation;

  private destroyed = false;

  constructor() {
    afterNextRender(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduced) {
        void this.startCount();
      }
    });
  }

  /**
   * Conteo sobre un objeto JS (no sobre el DOM): cada frame formatea el
   * valor redondeado y lo escribe al textContent. Corre una sola vez por
   * carga — el hero es lo primero visible, no necesita disparo por scroll.
   * anime.js entra vía loadAnime() (lazy, tras el primer paint y en idle)
   * para no retrasar el LCP del hero.
   */
  private async startCount(): Promise<void> {
    const { animate, utils } = await loadAnime();
    if (this.destroyed) {
      return;
    }

    const years = this.yearsEl().nativeElement;
    const patients = this.patientsEl().nativeElement;
    const rating = this.ratingEl().nativeElement;

    const counters = { years: 0, patients: 0, rating: 0 };
    this.countAnimation = animate(counters, {
      years: { to: this.clinic.stats.years, modifier: utils.round(0) },
      patients: { to: this.patientsValue, modifier: utils.round(0) },
      rating: { to: this.ratingValue, modifier: utils.round(1) },
      duration: 1600,
      ease: 'outExpo',
      onUpdate: () => {
        years.textContent = String(counters.years);
        patients.textContent = counters.patients.toLocaleString('en-US');
        rating.textContent = counters.rating.toFixed(1);
      },
    });
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.countAnimation?.cancel();
  }
}
