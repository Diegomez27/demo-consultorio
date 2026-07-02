import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contact } from './features/contact/contact';
import { Faq } from './features/faq/faq';
import { Footer } from './features/footer/footer';
import { Hero } from './features/hero/hero';
import { Services } from './features/services/services';
import { Technology } from './features/technology/technology';
import { Testimonials } from './features/testimonials/testimonials';
import { SiteHeader } from './shared/site-header/site-header';
import { WhatsappFab } from './shared/whatsapp-fab/whatsapp-fab';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteHeader,
    Hero,
    Services,
    Technology,
    Testimonials,
    Faq,
    Contact,
    Footer,
    WhatsappFab,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
