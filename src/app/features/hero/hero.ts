import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CLINIC } from '../../shared/clinic.data';
import { Icon } from '../../shared/icon/icon';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { srcset, unsplash } from '../../shared/unsplash';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealOnScroll],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly clinic = CLINIC;

  private readonly heroId = 'photo-1629909613654-28e377c37b09';
  readonly heroSrc = unsplash(this.heroId, 1080, { q: 62 });
  readonly heroSrcset = srcset(this.heroId, [768, 1080, 1440], { q: 62 });
}
