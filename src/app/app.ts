import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Appointment } from './features/appointment/appointment';
import { Differentiators } from './features/differentiators/differentiators';
import { Faq } from './features/faq/faq';
import { Footer } from './features/footer/footer';
import { Hero } from './features/hero/hero';
import { Services } from './features/services/services';
import { Team } from './features/team/team';
import { SiteHeader } from './shared/site-header/site-header';
import { WhatsappFab } from './shared/whatsapp-fab/whatsapp-fab';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteHeader,
    Hero,
    Services,
    Differentiators,
    Team,
    Appointment,
    Faq,
    Footer,
    WhatsappFab,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
