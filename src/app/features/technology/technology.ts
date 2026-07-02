import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TECH_SPECS } from '../../shared/clinic.data';
import { Icon } from '../../shared/icon/icon';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { SmileDraw } from '../../shared/smile-draw';
import { srcset, unsplash } from '../../shared/unsplash';

@Component({
  selector: 'app-technology',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealOnScroll, SmileDraw],
  templateUrl: './technology.html',
  styleUrl: './technology.scss',
})
export class Technology {
  readonly specs = TECH_SPECS;

  private readonly imageId = 'photo-1606811841689-23dfddce3e95';
  readonly imageSrc = unsplash(this.imageId, 900, { q: 60 });
  readonly imageSrcset = srcset(this.imageId, [600, 900, 1200], { q: 60 });
}
