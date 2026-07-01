import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DIFFERENTIATORS } from '../../shared/clinic.data';
import { Icon } from '../../shared/icon/icon';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { srcset, unsplash } from '../../shared/unsplash';

@Component({
  selector: 'app-differentiators',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealOnScroll],
  templateUrl: './differentiators.html',
  styleUrl: './differentiators.scss',
})
export class Differentiators {
  readonly items = DIFFERENTIATORS;

  private readonly imageId = 'photo-1606811841689-23dfddce3e95';
  readonly imageSrc = unsplash(this.imageId, 900, { q: 60 });
  readonly imageSrcset = srcset(this.imageId, [600, 900, 1200], { q: 60 });
}
