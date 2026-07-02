import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CLINIC, whatsappUrl } from '../../shared/clinic.data';
import { Icon } from '../../shared/icon/icon';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { SmileDraw } from '../../shared/smile-draw';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealOnScroll, SmileDraw],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly clinic = CLINIC;
  readonly whatsappLink = whatsappUrl(
    `Hola, me gustaría agendar una cita en ${CLINIC.name}.`,
  );

  /** Horarios condensados en una sola línea para la banda. */
  readonly hoursLine = CLINIC.hours
    .map((h) => `${h.day} ${h.time}`)
    .join(' · ');
}
