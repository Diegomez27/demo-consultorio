import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CLINIC } from '../../shared/clinic.data';
import { Icon } from '../../shared/icon/icon';
import { Logo } from '../../shared/logo/logo';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Logo, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly clinic = CLINIC;
  readonly year = new Date().getFullYear();

  readonly links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'Opiniones', href: '#opiniones' },
    { label: 'Preguntas frecuentes', href: '#faq' },
    { label: 'Agendar cita', href: '#contacto' },
  ];

  readonly mapUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.mapUrl = sanitizer.bypassSecurityTrustResourceUrl(CLINIC.mapEmbed);
  }
}
