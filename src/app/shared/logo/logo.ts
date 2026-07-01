import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Marca de Clínica Dental Alba: un azulejo con el arco-sonrisa que se repite
 * como motivo de firma en toda la landing. `variant` adapta el color del
 * wordmark según el fondo (blanco vs. banda marino).
 */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="logo" [class.logo--light]="variant() === 'light'">
      <svg class="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect class="logo__tile" x="1" y="1" width="38" height="38" rx="10" />
        <path
          class="logo__arc"
          d="M11 17c1.6 5.4 16.4 5.4 18 0"
          fill="none"
          stroke-width="2.6"
          stroke-linecap="round"
        />
        <circle class="logo__spark" cx="20" cy="27.5" r="1.4" />
      </svg>
      <span class="logo__word">
        <span class="logo__name">Clínica Dental Alba</span>
      </span>
    </span>
  `,
  styles: `
    .logo {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
    }
    .logo__mark {
      width: 2.35rem;
      height: 2.35rem;
      flex: none;
    }
    .logo__tile {
      fill: var(--navy);
    }
    .logo__arc {
      stroke: oklch(0.99 0 0);
    }
    .logo__spark {
      fill: var(--blue-bright);
    }
    .logo__word {
      display: flex;
      flex-direction: column;
      line-height: 1;
    }
    .logo__name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 1.14rem;
      letter-spacing: -0.01em;
      color: var(--navy);
    }
    .logo--light .logo__name {
      color: var(--on-navy);
    }
    .logo--light .logo__tile {
      fill: oklch(0.99 0 0);
    }
    .logo--light .logo__arc {
      stroke: var(--navy);
    }
    .logo--light .logo__spark {
      fill: var(--blue);
    }
  `,
})
export class Logo {
  readonly variant = input<'ink' | 'light'>('ink');
}
