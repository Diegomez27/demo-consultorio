import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DENTISTS } from '../../shared/clinic.data';
import { Dentist } from '../../shared/models';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { srcset, unsplash } from '../../shared/unsplash';

interface DentistCard extends Dentist {
  src: string;
  srcset: string;
}

@Component({
  selector: 'app-team',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScroll],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  readonly dentists: DentistCard[] = DENTISTS.map((d) => ({
    ...d,
    src: unsplash(d.imageId, 600, { ar: '3:4', faces: true }),
    srcset: srcset(d.imageId, [400, 600, 800], { ar: '3:4', faces: true }),
  }));
}
