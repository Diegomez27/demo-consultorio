import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CLINIC, FAQS, whatsappUrl } from '../../shared/clinic.data';
import { Icon } from '../../shared/icon/icon';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { SmileDraw } from '../../shared/smile-draw';

@Component({
  selector: 'app-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealOnScroll, SmileDraw],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  readonly clinic = CLINIC;
  readonly faqs = FAQS;
  readonly whatsappLink = whatsappUrl(
    `Hola, tengo una duda sobre ${CLINIC.name}.`,
  );

  /** Índice del panel abierto (-1 = todos cerrados). Accordion de apertura única. */
  readonly openIndex = signal(-1);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? -1 : index));
  }

  isOpen(index: number): boolean {
    return this.openIndex() === index;
  }
}
