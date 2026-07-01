import { Dentist, Differentiator, FaqItem, Service } from './models';

// Datos de la clínica ficticia "Clínica Dental Alba" (Guadalajara, MX).
// Contenido de demostración — cualquier dato de contacto es ilustrativo.

export const CLINIC = {
  name: 'Clínica Dental Alba',
  short: 'Alba',
  tagline: 'Odontología integral',
  city: 'Guadalajara, Jalisco',
  cityShort: 'Guadalajara',
  address: 'Av. Chapultepec Sur 210, Col. Americana, 44160 Guadalajara, Jal.',
  phoneDisplay: '33 1234 5678',
  phoneHref: '+523312345678',
  whatsappHref: '+523312345678',
  email: 'hola@clinicadentalalba.mx',
  hours: [
    { day: 'Lun – Vie', time: '9:00 – 20:00' },
    { day: 'Sábado', time: '9:00 – 14:00' },
    { day: 'Domingo', time: 'Urgencias con cita' },
  ],
  stats: {
    years: 14,
    patients: '8,500+',
    rating: '4.9',
  },
  // Embed de Google Maps (place sin API key — coordenadas de la Col. Americana, GDL).
  mapEmbed:
    'https://www.google.com/maps?q=Av.%20Chapultepec%20Sur%20210%2C%20Col.%20Americana%2C%20Guadalajara&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Av.+Chapultepec+Sur+210+Col.+Americana+Guadalajara',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${CLINIC.whatsappHref.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

export const SERVICES: Service[] = [
  {
    icon: 'tooth',
    name: 'Limpieza dental',
    description:
      'Profilaxis y control de sarro con ultrasonido. La base para prevenir caries y enfermedad de encías.',
    note: 'Sesión de 40 min · cada 6 meses',
  },
  {
    icon: 'sparkle',
    name: 'Blanqueamiento',
    description:
      'Aclaramos el tono de tus dientes de forma segura, en consultorio o con férulas para casa.',
    note: 'Resultados desde la 1.ª sesión',
  },
  {
    icon: 'braces',
    name: 'Ortodoncia',
    description:
      'Brackets y alineadores transparentes. Plan de tratamiento visualizado en 3D antes de empezar.',
    note: 'Brackets · alineadores invisibles',
  },
  {
    icon: 'implant',
    name: 'Implantes',
    description:
      'Reemplazo de piezas perdidas con implantes de titanio guiados por cirugía digital.',
    note: 'Cirugía guiada por computadora',
  },
  {
    icon: 'endodoncia',
    name: 'Endodoncia',
    description:
      'Tratamiento de conducto para salvar el diente cuando la caries llega al nervio. Sin dolor.',
    note: 'Rotativa · anestesia moderna',
  },
  {
    icon: 'child',
    name: 'Odontología pediátrica',
    description:
      'Primeras visitas sin miedo. Cuidamos la salud dental de los peques con paciencia y juego.',
    note: 'Desde los 2 años',
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: 'heartHand',
    title: 'Atención personalizada',
    description:
      'Un mismo dentista te acompaña de principio a fin. Te explicamos cada paso antes de tocarte un diente.',
  },
  {
    icon: 'certificate',
    title: 'Equipo certificado',
    description:
      'Especialistas con cédula profesional y formación continua en las técnicas que aplican.',
  },
  {
    icon: 'scan',
    title: 'Tecnología digital',
    description:
      'Escáner intraoral 3D y radiografía digital: menos radiación, diagnósticos precisos y sin moldes incómodos.',
  },
  {
    icon: 'clock',
    title: 'Horarios flexibles',
    description:
      'Abrimos temprano y hasta la noche entre semana, y sábados por la mañana. Urgencias con cita el domingo.',
  },
];

export const DENTISTS: Dentist[] = [
  {
    name: 'Dra. Renata Alba',
    role: 'Directora · Ortodoncia',
    license: 'Céd. Prof. 7 481 209',
    imageId: 'photo-1594824476967-48c8b964273f',
    focus: ['Ortodoncia', 'Alineadores', 'Estética'],
    alt: 'Dra. Renata Alba, directora de la clínica, sonriendo con uniforme clínico turquesa',
  },
  {
    name: 'Dr. Mateo Fuentes',
    role: 'Implantología y cirugía oral',
    license: 'Céd. Prof. 8 902 517',
    imageId: 'photo-1622253692010-333f2da6031d',
    focus: ['Implantes', 'Cirugía guiada', 'Endodoncia'],
    alt: 'Dr. Mateo Fuentes, especialista en implantes, con uniforme azul y estetoscopio',
  },
  {
    name: 'Dra. Camila Ortiz',
    role: 'Odontología pediátrica y estética',
    license: 'Céd. Prof. 9 316 044',
    imageId: 'photo-1651008376811-b90baee60c1f',
    focus: ['Pediátrica', 'Blanqueamiento', 'Prevención'],
    alt: 'Dra. Camila Ortiz, odontopediatra, sonriendo con saco claro',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Trabajan con seguros dentales?',
    answer:
      'Recibimos las principales aseguradoras (GNP, AXA, MetLife y Seguros Monterrey) y te ayudamos con el papeleo de reembolso. Si tu póliza es de otra compañía, dínoslo al agendar y lo verificamos antes de tu cita.',
  },
  {
    question: '¿Necesito cita previa o puedo llegar directo?',
    answer:
      'Atendemos con cita para dedicarte el tiempo completo sin esperas. Puedes agendar por el formulario de esta página, por WhatsApp o por teléfono; te confirmamos el mismo día.',
  },
  {
    question: '¿Qué hago ante una urgencia dental?',
    answer:
      'Un dolor fuerte, un golpe o una pieza rota no esperan. Escríbenos por WhatsApp con la palabra "urgencia" y te damos indicaciones de inmediato; reservamos espacios diarios para atenderte el mismo día, incluso domingo con cita.',
  },
  {
    question: '¿Ofrecen planes de pago o financiamiento?',
    answer:
      'Sí. Los tratamientos de ortodoncia e implantes se pueden diferir a mensualidades sin intereses con tarjetas participantes, y armamos planes a la medida para tratamientos largos. Te entregamos el presupuesto por escrito antes de empezar.',
  },
  {
    question: '¿Desde qué edad pueden atender a mi hijo?',
    answer:
      'La primera visita recomendada es alrededor de los 2 años, cuando ya salieron los primeros dientes. Nuestra odontopediatra trabaja el vínculo con calma y juego para que la consulta sea una buena experiencia, no un mal recuerdo.',
  },
  {
    question: '¿Cuánto cuesta la primera consulta?',
    answer:
      'La valoración inicial incluye revisión completa, diagnóstico y plan de tratamiento con presupuesto claro. Al agendar te decimos el costo exacto según lo que necesites; no hay cargos sorpresa.',
  },
];

// Opciones del select de servicio en el formulario de cita.
export const SERVICE_OPTIONS: string[] = [
  'Valoración general',
  'Limpieza dental',
  'Blanqueamiento',
  'Ortodoncia',
  'Implantes',
  'Endodoncia',
  'Odontología pediátrica',
  'Urgencia',
];
