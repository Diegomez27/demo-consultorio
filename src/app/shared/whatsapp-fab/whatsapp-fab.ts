import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { CLINIC, whatsappUrl } from '../clinic.data';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-whatsapp-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <a
      class="fab"
      [class.fab--visible]="visible()"
      [href]="link"
      target="_blank"
      rel="noopener"
      aria-label="Escribir a Clínica Dental Alba por WhatsApp"
    >
      <app-icon class="fab__icon" name="whatsapp" />
      <span class="fab__label">Agenda por WhatsApp</span>
    </a>
  `,
  styleUrl: './whatsapp-fab.scss',
})
export class WhatsappFab {
  readonly link = whatsappUrl(
    `Hola, me gustaría agendar una cita en ${CLINIC.name}.`,
  );

  readonly visible = signal(false);
  private readonly doc = inject(DOCUMENT);

  constructor() {
    afterNextRender(() => {
      const win = this.doc.defaultView;
      if (!win) {
        return;
      }
      const onScroll = () => this.visible.set(win.scrollY > win.innerHeight * 0.7);
      onScroll();
      win.addEventListener('scroll', onScroll, { passive: true });
    });
  }
}
