import { IconName } from './icon/icon';

export interface Service {
  icon: IconName;
  name: string;
  description: string;
  /** Nota corta de encuadre (duración, sesiones, etc.). */
  note: string;
}

export interface Differentiator {
  icon: IconName;
  title: string;
  description: string;
}

export interface Dentist {
  name: string;
  role: string;
  /** Cédula profesional (ficticia). */
  license: string;
  imageId: string;
  /** Foco clínico en 2–3 etiquetas cortas. */
  focus: string[];
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
