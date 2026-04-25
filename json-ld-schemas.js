/**
 * Centro Khamlungpa — JSON-LD Structured Data Schemas
 * For SEO + AI agent indexation
 */

// LocalBusiness Schema — Main center info
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://khamlungpa.com",
  "name": "Centro Khamlungpa",
  "description": "Único centro budista FPMT en Guadalajara. Meditación guiada, estudios budistas tibetanos. 20+ años.",
  "image": "https://khamlungpa.com/og-image.jpg",
  "url": "https://khamlungpa.com",
  "telephone": "+52-[NÚMERO]",
  "email": "info@khamlungpa.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Río de Janeiro 2675, Providencia 3a. Secc",
    "addressLocality": "Guadalajara",
    "addressRegion": "Jalisco",
    "postalCode": "44630",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "20.6789",
    "longitude": "-103.2586"
  },
  "sameAs": [
    "https://www.instagram.com/centrokhamlungpa",
    "https://www.facebook.com/centrokhamlungpa"
  ],
  "affiliation": {
    "@type": "Organization",
    "name": "FPMT",
    "url": "https://www.fpmt.org"
  },
  "foundingDate": "2003",
  "priceRange": "Donativo voluntario",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "19:30",
      "closes": "20:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": "08:30",
      "closes": "08:45"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "20:00",
      "closes": "21:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "08:30",
      "closes": "08:45"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "20:00",
      "closes": "21:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "20:00",
      "closes": "21:30"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "[Número de reseñas]"
  }
};

// Course Schema — Programs offered
const courseSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Budismo en Pocas Palabras",
    "description": "Introducción a los conceptos fundamentales del budismo tibetano. Ideal para principiantes.",
    "url": "https://khamlungpa.com/programas/budismo-pocas-palabras",
    "provider": {
      "@type": "Organization",
      "name": "Centro Khamlungpa",
      "url": "https://khamlungpa.com"
    },
    "instructor": {
      "@type": "Person",
      "name": "Ven. Norbu"
    },
    "learningResourceType": "Course",
    "educationalLevel": "Beginner",
    "duration": "PT2H",
    "numberOfCredits": 1
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Descubre el Budismo",
    "description": "Programa estructurado de 14 módulos en 2 años. Aprende filosofía budista tibetana.",
    "url": "https://khamlungpa.com/programas/descubre-el-budismo",
    "provider": {
      "@type": "Organization",
      "name": "Centro Khamlungpa",
      "url": "https://khamlungpa.com"
    },
    "instructor": {
      "@type": "Person",
      "name": "Ven. Norbu"
    },
    "learningResourceType": "Course",
    "educationalLevel": "Intermediate",
    "duration": "P2Y"
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Explorando el Budismo",
    "description": "10 módulos en 3 años. Estudio profundo de textos clásicos del budismo tibetano.",
    "url": "https://khamlungpa.com/programas/explorando-el-budismo",
    "provider": {
      "@type": "Organization",
      "name": "Centro Khamlungpa",
      "url": "https://khamlungpa.com"
    },
    "instructor": {
      "@type": "Person",
      "name": "Gueshe Lobsang Dawa"
    },
    "learningResourceType": "Course",
    "educationalLevel": "Advanced",
    "duration": "P3Y"
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Programa Básico FPMT",
    "description": "9 módulos en 5 años. Certificación oficial FPMT en práctica y filosofía budista.",
    "url": "https://khamlungpa.com/programas/programa-basico",
    "provider": {
      "@type": "Organization",
      "name": "Centro Khamlungpa",
      "url": "https://khamlungpa.com"
    },
    "instructor": {
      "@type": "Person",
      "name": "Gueshe Lobsang Dawa"
    },
    "learningResourceType": "Course",
    "educationalLevel": "Advanced",
    "duration": "P5Y"
  }
];

// Event Schema — Weekly meditation session
const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Meditación Guiada Abierta",
  "description": "Sesión semanal de meditación guiada. Sin experiencia requerida. Presencial + online.",
  "url": "https://khamlungpa.com/calendario",
  "image": "https://khamlungpa.com/og-image.jpg",
  "startDate": "2026-04-28T20:00:00-05:00",
  "endDate": "2026-04-28T21:30:00-05:00",
  "eventStatus": "EventScheduled",
  "eventAttendanceMode": "MixedEventAttendanceMode",
  "location": [
    {
      "@type": "Place",
      "name": "Centro Khamlungpa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Dirección]",
        "addressLocality": "Guadalajara",
        "addressRegion": "Jalisco",
        "postalCode": "[Código postal]",
        "addressCountry": "MX"
      }
    },
    {
      "@type": "VirtualLocation",
      "url": "https://meet.google.com/[ID]"
    }
  ],
  "organizer": {
    "@type": "Organization",
    "name": "Centro Khamlungpa",
    "url": "https://khamlungpa.com",
    "telephone": "+52-[NÚMERO]"
  },
  "performer": {
    "@type": "Person",
    "name": "Ven. Norbu"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://khamlungpa.com/empieza-aqui",
    "price": "0",
    "priceCurrency": "MXN",
    "availability": "InStock"
  },
  "recurrenceRule": "FREQ=WEEKLY;BYDAY=MO"
};

// FAQPage Schema — For Empieza-aqui
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es el budismo tibetano?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El budismo tibetano es una tradición milenaria que enfatiza la meditación y el estudio para alcanzar la iluminación. Centro Khamlungpa sigue la tradición Gelugpa, basada en compasión, sabiduría y entendimiento directo de la realidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito experiencia previa en meditación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Centro Khamlungpa está diseñado para principiantes completos. Nuestras sesiones de meditación guiada comienzan con instrucciones básicas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el costo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las sesiones de meditación guiada son con donativo voluntario. No hay costo mínimo ni obligación de donar. Los cursos de estudio tienen un costo reducido según tu posibilidad de contribución."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué debo llevar a la primera sesión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solo necesitas traer ropa cómoda. El centro proporciona cojines de meditación. Puedes traer tu propio cojín si lo prefieres."
      }
    },
    {
      "@type": "Question",
      "name": "¿Debo tener creencias religiosas específicas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No necesitas cambiar tus creencias religiosas. Centro Khamlungpa es abierto a personas de cualquier trasfondo. La meditación y el budismo son compatibles con otras creencias espirituales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son los beneficios de la meditación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La meditación regular ayuda a: reducir estrés y ansiedad, mejorar concentración y claridad mental, desarrollar compasión por uno mismo y otros, encontrar paz interior, y fortalecer el bienestar emocional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es una sesión típica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Estructura típica de 90 minutos: Meditación guiada (30-40 min), Enseñanza breve (20-30 min), Preguntas y respuestas (10-20 min), Cierre tranquilo (5 min). Puedes llegar en cualquier momento durante los primeros 10 minutos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay actividades online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. La mayoría de nuestras sesiones de meditación guiada están disponibles tanto presencial como online. Puedes participar desde casa si prefieres."
      }
    }
  ]
};

// Organization Schema — FPMT affiliation
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Centro Khamlungpa",
  "alternateName": "Khamlungpa",
  "url": "https://khamlungpa.com",
  "logo": "https://khamlungpa.com/logo.svg",
  "description": "Centro budista tibetano FPMT en Guadalajara. Meditación y enseñanzas desde 2003.",
  "foundingDate": "2003",
  "numberOfEmployees": "[Número de maestros/staff]",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "General",
    "telephone": "+52-[NÚMERO]",
    "email": "info@khamlungpa.com"
  },
  "sameAs": [
    "https://www.instagram.com/centrokhamlungpa",
    "https://www.facebook.com/centrokhamlungpa"
  ]
};

// Person Schemas — Teachers
const venNorbuSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ven. Norbu",
  "jobTitle": "Maestro Residente",
  "affiliation": {
    "@type": "Organization",
    "name": "Centro Khamlungpa"
  },
  "description": "Maestro residente certificado por FPMT con dedicación al budismo tibetano Gelugpa.",
  "knowsAbout": ["Budismo Tibetano", "Meditación", "Filosofía Budista"]
};

const gesheSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gueshe Lobsang Dawa",
  "jobTitle": "Maestro Colaborador",
  "affiliation": {
    "@type": "Organization",
    "name": "Centro Khamlungpa"
  },
  "description": "Gueshe (título doctoral en filosofía budista) con especialidad en estudios avanzados del budismo tibetano.",
  "knowsAbout": ["Budismo Tibetano", "Filosofía Budista", "Lógica Budista"]
};

/**
 * Helper function to inject schemas into page <head>
 * Usage: injectSchema(localBusinessSchema)
 */
function injectSchema(schema) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Initialize all schemas for homepage
 */
function initializeHomeSchemas() {
  injectSchema(localBusinessSchema);
  injectSchema(eventSchema);
  injectSchema(organizationSchema);
  courseSchemas.forEach(course => injectSchema(course));
}

/**
 * Initialize FAQ schema for Empieza-aqui page
 */
function initializeFAQSchemas() {
  injectSchema(localBusinessSchema);
  injectSchema(faqPageSchema);
}

/**
 * Initialize teacher schemas for Maestros page
 */
function initializeTeacherSchemas() {
  injectSchema(localBusinessSchema);
  injectSchema(venNorbuSchema);
  injectSchema(gesheSchema);
}
