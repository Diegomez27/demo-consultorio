import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SERVICES } from '../../shared/clinic.data';
import { Icon } from '../../shared/icon/icon';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { SmileDraw } from '../../shared/smile-draw';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealOnScroll, SmileDraw],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly services = SERVICES;
}
