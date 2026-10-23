// src/data/content.js
import HeroPic from "../images/HeroPic.avif";
import AboutMePic from "../images/AboutMePic.avif";
import GalleryPic1 from "../images/Gallery-1.avif";
import GalleryPic2 from "../images/Gallery-2.jpg";
import GalleryPic3 from "../images/Gallery-3.avif";
import GalleryPic4 from "../images/Gallery-4.avif";

export const psychologistData = {
  profile: {
    name: "Alejandro Ramos",
    title: "Psicólogo Clínico y Terapeuta Cognitivo-Conductual",
    license: "Cédula Prof. 8492019 / Reg. Sanitario 49201",
    tagline:
      "Un espacio seguro para sanar, reencontrarte y recuperar tu equilibrio emocional.",
    experienceYears:
      "+8 años de experiencia acompañando procesos de transformación personal.",
    location:
      "Consultorio Presencial en Zapopan, Jal. | Sesiones en Línea a todo el mundo",
    photo: HeroPic,
    photoAbout: AboutMePic,
  },

  hero: {
    badge: "Terapia Presencial y En Línea",
    title: "Recupera la paz mental y la claridad en tu vida cotidiana",
    subtitle:
      "Acompañamiento terapéutico profesional y libre de juicios para superar la ansiedad, el estrés y resolver conflictos emocionales.",
    ctaPrimary: "Agendar Cita de Valoración",
    ctaSecondary: "Conocer Enfoque Terapéutico",
    guarantees: [
      "Espacio 100% confidencial",
      "Atención personalizada",
      "Horarios flexibles",
    ],
  },

  benefits: [
    {
      id: 1,
      title: "Manejo de Ansiedad y Estrés",
      description:
        "Aprende herramientas prácticas para gestionar el sobrepensamiento, los ataques de pánico y la tensión diaria.",
      icon: "Brain",
    },
    {
      id: 2,
      title: "Autoestima y Relaciones Sanas",
      description:
        "Fortalece tu seguridad, establece límites asertivos y mejora tus vínculos afectivos o de pareja.",
      icon: "Heart",
    },
    {
      id: 3,
      title: "Duelo y Transiciones de Vida",
      description:
        "Acompañamiento empático para superar pérdidas, rupturas amorosas o cambios drásticos en tu vida.",
      icon: "Compass",
    },
    {
      id: 4,
      title: "Desarrollo Personal",
      description:
        "Identifica patrones limitantes y construye hábitos emocionales alineados con tus metas personales.",
      icon: "Sparkles",
    },
  ],

  about: {
    title: "Hola, soy la Alejandro Ramos",
    bio: [
      "Sé que dar el primer paso para ir a terapia puede generar dudas. Mi compromiso es brindarte un ambiente cálido, libre de juicios y totalmente confidencial donde te sientas escuchado y respaldado desde la primera sesión.",
      "Mi enfoque se basa en la Terapia Cognitivo-Conductual (TCC), combinada con técnicas de Aceptación y Compromiso, lo que nos permite no solo entender el origen de tus malestares, sino también trabajar con herramientas aplicables a tu día a día.",
    ],
    credentials: [
      "Licenciatura en Psicología Clínica (Mención Honorífica)",
      "Maestría en Terapia Cognitivo-Conductual",
      "Certificación en Manejo de Trastornos de Ansiedad y Depresión",
      "Miembro de la Asociación Mexicana de Psicología",
    ],
  },

  services: [
    {
      id: "individual",
      title: "Terapia Individual",
      forWho: "Adultos y Jóvenes (18+ años)",
      description:
        "Proceso enfocado en tus necesidades específicas: ansiedad, autoestima, toma de decisiones o bienestar emocional.",
      duration: "50 minutos",
      modality: "Presencial u Online",
      price: "$500 MXN",
      popular: true,
      features: [
        "Evaluación inicial personalizada",
        "Herramientas y ejercicios semanales",
        "Seguimiento entre sesiones por WhatsApp",
      ],
    },
    {
      id: "pareja",
      title: "Terapia de Pareja",
      forWho: "Parejas en cualquier etapa",
      description:
        "Espacio neutral para mejorar la comunicación, resolver conflictos recurrentes y reconstruir la confianza.",
      duration: "70 minutos",
      modality: "Presencial u Online",
      price: "$900 MXN",
      popular: false,
      features: [
        "Dinámicas de comunicación asertiva",
        "Resolución de acuerdos y límites",
        "Acompañamiento a ambas partes",
      ],
    },
  ],

  testimonials: [
    {
      id: 1,
      quote:
        "Llegué a consulta con crisis de ansiedad frecuentes. Alejandro me dio herramientas que realmente me sirvieron en mi trabajo y día a día. Hoy me siento con el control de mi vida.",
      author: "Carlos M.",
      detail: "Paciente de Terapia Individual (8 meses)",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "La modalidad en línea se me acomoda perfecto por mis horarios. Es un profesional muy empático y acertado. Siento un cambio enorme en mi autoestima.",
      author: "Mariana R.",
      detail: "Paciente Online",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Nos ayudó muchísimo a mi pareja y a mí a entendernos sin engancharnos en discusiones destructivas. El espacio presencial es muy acogedor.",
      author: "Andrea & Jorge",
      detail: "Terapia de Pareja",
      rating: 5,
    },
  ],

  faq: [
    {
      question: "¿Cómo sé si necesito ir a terapia?",
      answer:
        "No necesitas estar en una crisis grave para acudir. La terapia es útil si sientes que tus emociones te abruman, si estás pasando por un cambio difícil, o si simplemente deseas conocerte mejor y mejorar tu calidad de vida.",
    },
    {
      question: "¿Qué diferencia hay entre la modalidad presencial y en línea?",
      answer:
        "La efectividad terapéutica es la misma. La modalidad en línea ofrece comodidad desde tu hogar vía videollamada segura (Google Meet/Zoom), mientras que la presencial brinda un entorno físico neutral en el consultorio.",
    },
    {
      question: "¿Cómo funciona la primera sesión de valoración?",
      answer:
        "Es un encuentro para conocernos, explorar los motivos de tu consulta, resolver tus dudas y trazar los objetivos principales de tu proceso antes de confirmar tu agenda regular.",
    },
    {
      question: "¿Cuáles son las formas de pago?",
      answer:
        "Aceptamos transferencias SPEI, tarjetas de crédito/débito y pago en efectivo directamente en consultorio.",
    },
  ],

  bookingConfig: {
    title: "Agenda tu primera sesión",
    subtitle:
      "Selecciona el servicio, elige la fecha/hora que mejor se adapte a ti y confirma tu cita en menos de 2 minutos.",
    availableDays: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    timeSlots: [
      "09:00 AM",
      "11:00 AM",
      "01:00 PM",
      "04:00 PM",
      "06:00 PM",
      "07:30 PM",
    ],
    whatsappContact: "3327825329",
  },
  // Agregar dentro de export const psychologistData = { ... }

  gallery: {
    title: "Conoce el Consultorio",
    subtitle:
      "Un entorno diseñado para brindarte comodidad, privacidad y tranquilidad durante tu proceso.",
    images: [
      {
        id: 1,
        src: GalleryPic4,
        caption: "Espacio de consulta presencial",
      },
      {
        id: 2,
        src: GalleryPic3,
        caption: "Atención cálida y profesional",
      },
      {
        id: 3,
        src: GalleryPic2,
        caption: "Recepción y sala de espera",
      },
      {
        id: 4,
        src: GalleryPic1,
        caption: "Sesiones en línea con equipo profesional",
      },
    ],
  },
};
