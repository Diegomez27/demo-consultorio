import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Set de iconos de trazo, coherente: viewBox 24, stroke currentColor 1.6,
// round caps/joins. Dibujados a mano — nunca emoji ni sets mezclados.
const ICONS = {
  tooth:
    '<path d="M12 4c-1.4 0-2 .7-3.3.7C7.2 4.7 6.4 4 5.4 4.4 4 5 3.6 6.7 3.9 8.7c.2 1.3.7 2.1 1 3.4.3 1.2.4 2.6.8 4 .2.8.5 1.6.9 2.3.5.9 1.5.8 1.9-.1.5-1.1.7-2.5 1-3.7.2-.9.4-1.4.6-1.4s.4.5.6 1.4c.3 1.2.5 2.6 1 3.7.4.9 1.4 1 1.9.1.4-.7.7-1.5.9-2.3.4-1.4.5-2.8.8-4 .3-1.3.8-2.1 1-3.4.3-2-.1-3.7-1.5-4.3-1-.4-1.8.3-3.3.3C14 4.7 13.4 4 12 4Z"/><path d="M16.8 6.7c.5.4.7 1.1.6 2"/>',
  sparkle:
    '<path d="M12 3.2l1.7 4.6a2 2 0 0 0 1.2 1.2l4.6 1.7-4.6 1.7a2 2 0 0 0-1.2 1.2L12 18.2l-1.7-4.6a2 2 0 0 0-1.2-1.2L4.5 10.7l4.6-1.7a2 2 0 0 0 1.2-1.2L12 3.2Z"/><path d="M18.6 14.4l.5 1.6 1.6.5-1.6.5-.5 1.6-.5-1.6-1.6-.5 1.6-.5.5-1.6Z"/>',
  braces:
    '<path d="M3 12h18"/><rect x="4.8" y="9.4" width="4.2" height="5.2" rx="1.1"/><rect x="15" y="9.4" width="4.2" height="5.2" rx="1.1"/><path d="M11 10.4v3.2M13 10.4v3.2"/>',
  implant:
    '<path d="M7.6 8.2C7.6 5.9 9.6 4.4 12 4.4s4.4 1.5 4.4 3.8c0 .9-.3 1.4-.8 1.9H8.4c-.5-.5-.8-1-.8-1.9Z"/><path d="M12 10.4V19"/><path d="M9.6 12h4.8M10.1 14.3h3.8M10.7 16.6h2.6M11.4 18.5h1.2"/>',
  endodoncia:
    '<path d="M12 4c-1.4 0-2 .7-3.3.7C7.2 4.7 6.4 4 5.4 4.4 4 5 3.6 6.7 3.9 8.7c.2 1.3.7 2.1 1 3.4.3 1.2.4 2.6.8 4 .2.8.5 1.6.9 2.3.5.9 1.5.8 1.9-.1.5-1.1.7-2.5 1-3.7.2-.9.4-1.4.6-1.4s.4.5.6 1.4c.3 1.2.5 2.6 1 3.7.4.9 1.4 1 1.9.1.4-.7.7-1.5.9-2.3.4-1.4.5-2.8.8-4 .3-1.3.8-2.1 1-3.4.3-2-.1-3.7-1.5-4.3-1-.4-1.8.3-3.3.3C14 4.7 13.4 4 12 4Z"/><path d="M12 9.4v5.4M10.4 10.6l1.6 1.4 1.6-1.4"/>',
  child:
    '<circle cx="12" cy="7.6" r="3.1"/><path d="M11.4 4.7c.3-.7 1.2-1.1 1.9-.9"/><path d="M6.4 20c.5-3 2.9-5.1 5.6-5.1S17.1 17 17.6 20"/>',
  heartHand:
    '<path d="M12 8.6c-.8-1.7-3.6-1.5-3.6.7 0 1.7 2 3 3.6 4.1 1.6-1.1 3.6-2.4 3.6-4.1 0-2.2-2.8-2.4-3.6-.7Z"/><path d="M4.3 15.4c1.1-.8 2.4-.6 3.4.1l1.9 1.4c.5.4 1.1.6 1.7.6h3.4c1 0 1-1.5 0-1.5h-3M4.3 14.4v5.1"/>',
  certificate:
    '<circle cx="12" cy="9.4" r="4.9"/><path d="M9.7 9.2l1.6 1.6 3.1-3.2"/><path d="M8.8 13.6 7.6 19l4.4-2.1L16.4 19l-1.2-5.4"/>',
  scan:
    '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M4.5 12h15"/><path d="M9 15.2c1-1 5-1 6 0"/><path d="M9.4 9.2h.01M14.6 9.2h.01"/>',
  clock:
    '<circle cx="12" cy="12" r="8"/><path d="M12 7.8V12l2.7 1.6"/>',
  calendar:
    '<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M4 9.5h16M8.5 3v4M15.5 3v4"/>',
  arrowRight: '<path d="M5 12h13.5M12.5 6l6.5 6-6.5 6"/>',
  chevronDown: '<path d="M6 9.5l6 6 6-6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  checkCircle:
    '<circle cx="12" cy="12" r="8.5"/><path d="M8.4 12.2l2.5 2.5 4.7-5"/>',
  phone:
    '<path d="M6.6 4h3l1.2 4-2 1.3a11 11 0 0 0 4.6 4.6l1.3-2 4 1.2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.6 6.2 2 2 0 0 1 6.6 4Z"/>',
  mail:
    '<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="M4.2 7.6l7.8 5 7.8-5"/>',
  user:
    '<circle cx="12" cy="8" r="3.4"/><path d="M5.6 19.4c.6-3.3 3.2-5.4 6.4-5.4s5.8 2.1 6.4 5.4"/>',
  message:
    '<path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v7A1.5 1.5 0 0 1 18.5 15H9l-4 3.3V6.5Z"/><path d="M8 9.2h8M8 12h5"/>',
  mapPin:
    '<path d="M12 21c4-4.2 6-7.4 6-10a6 6 0 0 0-12 0c0 2.6 2 5.8 6 10Z"/><circle cx="12" cy="11" r="2.3"/>',
  shieldCheck:
    '<path d="M12 3.5l7 2.5v5c0 4.4-3 7.7-7 9.5-4-1.8-7-5.1-7-9.5V6l7-2.5Z"/><path d="M9 11.6l2.2 2.2 4-4.2"/>',
  star:
    '<path d="M12 4l2.3 4.9 5.2.7-3.8 3.6 1 5.3L12 16.9 7.3 18.5l1-5.3L4.5 9.6l5.2-.7L12 4Z"/>',
  whatsapp:
    '<path d="M5 19l1-3.4A7.2 7.2 0 1 1 8.8 18Z"/><path d="M9.3 9.4c-.2.5-.2 1.4.4 2.3.7 1 1.6 1.6 2.4 1.9.6.2 1 .1 1.3-.2.2-.2.3-.5.2-.8l-1-.6c-.2 0-.4.1-.5.3-.6-.3-1-.7-1.2-1.2.2-.2.3-.4.3-.6l-.5-1c-.3-.2-.9-.1-1.1.2Z"/>',
  instagram:
    '<rect x="4.5" y="4.5" width="15" height="15" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.4" cy="7.6" r="0.9" fill="currentColor" stroke="none"/>',
  facebook:
    '<path d="M14.6 8.4h2V5.5h-2.4c-1.9 0-3.1 1.3-3.1 3.3v1.7H9v3h2.1v7h3v-7h2.2l.5-3H14.1V9c0-.4.2-.6.5-.6Z"/>',
} as const;

export type IconName = keyof typeof ICONS;

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    [innerHTML]="svg()"
  ></svg>`,
  styles: `
    :host {
      display: inline-flex;
      line-height: 0;
    }
    svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();

  private readonly sanitizer = inject(DomSanitizer);

  readonly svg = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(ICONS[this.name()]),
  );
}
