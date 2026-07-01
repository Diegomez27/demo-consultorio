import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { CLINIC } from '../clinic.data';
import { Logo } from '../logo/logo';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Logo],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  readonly clinic = CLINIC;
  readonly links: NavLink[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#cita' },
  ];

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  private readonly doc = inject(DOCUMENT);

  constructor() {
    afterNextRender(() => {
      const win = this.doc.defaultView;
      if (!win) {
        return;
      }
      const onScroll = () => this.scrolled.set(win.scrollY > 12);
      onScroll();
      win.addEventListener('scroll', onScroll, { passive: true });
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.syncScrollLock();
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.syncScrollLock();
  }

  private syncScrollLock(): void {
    this.doc.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }
}
