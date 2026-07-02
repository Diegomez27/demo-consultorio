import { FaqItem, Service, Testimonial, TechSpec } from './models';

// Datos de la clínica ficticia "Clínica Dental Alba" (Guadalajara, MX).
// Contenido de demostración — cualquier dato de contacto es ilustrativo.

export const CLINIC = {
  name: 'Clínica Dental Alba',
  short: 'Alba',
  tagline: 'Odontología integral',
  city: 'Guadalajara, Jalisco',
  cityShort: 'Guadalajara',
  neighborhood: 'Col. Americana',
  founded: 2012,
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

// Ficha técnica del equipamiento: cada fila lleva un dato duro protagonista.
// Los datos son ilustrativos pero verosímiles para el equipamiento descrito.
export const TECH_SPECS: TechSpec[] = [
  {
    name: 'Escáner intraoral 3D',
    stat: '3 min',
    statLabel: 'por arcada, sin moldes ni pastas',
    description:
      'Impresión digital completa de tu boca. Ves tu caso en pantalla el mismo día de la valoración.',
  },
  {
    name: 'Radiografía digital',
    stat: '−90%',
    statLabel: 'de radiación frente a la placa convencional',
    description:
      'Imagen inmediata y archivada en tu expediente. Sin revelado, sin repeticiones innecesarias.',
  },
  {
    name: 'Cirugía guiada por computadora',
    stat: '0.1 mm',
    statLabel: 'de margen en la colocación de implantes',
    description:
      'El implante se planifica sobre tu tomografía y se coloca con guía impresa. Menos invasión, mejor recuperación.',
  },
  {
    name: 'Plan de tratamiento visualizado',
    stat: '100%',
    statLabel: 'del presupuesto por escrito antes de empezar',
    description:
      'Simulación del resultado y desglose de costos firmado. Tú decides con toda la información.',
  },
];

// Opiniones ficticias verosímiles — respaldan el mensaje de equipo
// certificado y trato cercano que antes cargaban "equipo" y "diferenciadores".
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Me enseñaron el escaneo de mi boca en pantalla y me explicaron el plan completo antes de tocarme un diente. Nunca había entendido tan bien un presupuesto dental.',
    name: 'Mariana G.',
    treatment: 'Ortodoncia con alineadores',
  },
  {
    quote:
      'Llegué con pánico por una endodoncia y salí preguntándome de qué me había preocupado tanto.',
    name: 'Sebastián M.',
    treatment: 'Endodoncia',
  },
  {
    quote:
      'Llevo a mis dos hijos desde hace tres años. La doctora los conoce por su nombre y ellos van contentos al dentista.',
    name: 'Ana María S.',
    treatment: 'Odontología pediátrica',
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
      'Atendemos con cita para dedicarte el tiempo completo sin esperas. Puedes agendar por WhatsApp, por teléfono o desde el botón "Agendar cita" de esta página; te confirmamos el mismo día.',
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
