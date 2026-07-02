import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CLINIC, TESTIMONIALS } from '../../shared/clinic.data';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { SmileDraw } from '../../shared/smile-draw';

@Component({
  selector: 'app-testimonials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScroll, SmileDraw],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  readonly clinic = CLINIC;
  readonly testimonials = TESTIMONIALS;
}
