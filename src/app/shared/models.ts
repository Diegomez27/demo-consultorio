import { IconName } from './icon/icon';

export interface Service {
  icon: IconName;
  name: string;
  description: string;
  /** Nota corta de encuadre (duración, sesiones, etc.). */
  note: string;
}

export interface TechSpec {
  name: string;
  /** Dato duro protagonista de la fila ("3 min", "−90%"). */
  stat: string;
  /** Qué significa el dato ("por arcada, sin moldes"). */
  statLabel: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  /** Tratamiento que respalda la opinión. */
  treatment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
