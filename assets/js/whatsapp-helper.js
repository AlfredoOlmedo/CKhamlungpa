/**
 * Centro Khamlungpa — WhatsApp Integration Helper
 * Pre-written messages by user persona and context
 */

// WhatsApp Business Phone
const WHATSAPP_PHONE = "5233318374";

/**
 * Message templates organized by journey stage and persona
 */
const waMessages = {
  // HOMEPAGE
  home: {
    primera_vez: {
      title: "Es mi primera vez",
      msg: "Hola, es mi primera vez y me gustaría asistir a una sesión de meditación. ¿Cuál es la próxima disponible?",
      emoji: "🧘"
    },
    programas: {
      title: "Conocer programas",
      msg: "Hola, me gustaría saber más sobre los programas de estudio del budismo tibetano.",
      emoji: "📚"
    },
    info_general: {
      title: "Información general",
      msg: "Hola, quisiera conocer más sobre Centro Khamlungpa.",
      emoji: "ℹ️"
    },
    donacion: {
      title: "Hacer donación",
      msg: "Hola, quisiera hacer una donación al Centro Khamlungpa. ¿Cuáles son las opciones?",
      emoji: "🤝"
    }
  },

  // EMPIEZA-AQUI PAGE
  empieza_aqui: {
    primera_sesion: {
      title: "Primera sesión",
      msg: "Hola, es mi primera vez. Me gustaría asistir a la próxima sesión de meditación guiada. ¿Cómo me presento?",
      emoji: "🧘"
    },
    dudas: {
      title: "Tengo dudas",
      msg: "Tengo preguntas sobre la meditación y el budismo tibetano. ¿Puedo hablar con un maestro?",
      emoji: "❓"
    },
    horarios: {
      title: "Ver horarios",
      msg: "¿Cuáles son los horarios de las sesiones de meditación?",
      emoji: "⏰"
    },
    online: {
      title: "Participar online",
      msg: "¿Puedo participar en las sesiones desde casa por video?",
      emoji: "💻"
    }
  },

  // MAESTROS PAGE
  maestros: {
    consulta_espiritual: {
      title: "Consulta espiritual",
      msg: "Hola, me gustaría hablar con uno de los maestros sobre mis preguntas espirituales.",
      emoji: "🙏"
    },
    conocer_maestros: {
      title: "Conocer maestros",
      msg: "Me gustaría saber más sobre los maestros del centro y sus especialidades.",
      emoji: "👨‍🏫"
    },
    retiro: {
      title: "Retiros espirituales",
      msg: "¿Ofrecen retiros espirituales? Me interesaría participar.",
      emoji: "⛩️"
    }
  },

  // PROGRAMAS PAGE
  programas: {
    basico: {
      title: "Budismo en Pocas Palabras",
      msg: "Hola, me interesa el programa 'Budismo en Pocas Palabras'. ¿Cuándo inicia el próximo?",
      emoji: "📖"
    },
    descubre: {
      title: "Descubre el Budismo",
      msg: "Me gustaría inscribirme en 'Descubre el Budismo'. ¿Cuáles son los requisitos?",
      emoji: "🌱"
    },
    explorando: {
      title: "Explorando el Budismo",
      msg: "Soy practicante avanzado. ¿Puedo acceder a 'Explorando el Budismo'?",
      emoji: "🔬"
    },
    programa_basico: {
      title: "Programa Básico FPMT",
      msg: "Estoy interesado en el Programa Básico FPMT. ¿Cuáles son los requisitos y la duración?",
      emoji: "🏆"
    }
  },

  // CALENDARIO PAGE
  calendario: {
    proximos_eventos: {
      title: "Próximos eventos",
      msg: "¿Cuáles son los próximos eventos y retiros?",
      emoji: "📅"
    },
    asistencia: {
      title: "Confirmar asistencia",
      msg: "Confirmo mi asistencia al evento de este [día].",
      emoji: "✅"
    }
  },

  // DONAR PAGE
  donar: {
    donacion_unica: {
      title: "Donación única",
      msg: "Hola, me gustaría hacer una donación única al centro. ¿Cuál es el proceso?",
      emoji: "💳"
    },
    donacion_mensual: {
      title: "Donación mensual",
      msg: "Estoy interesado en hacer una donación mensual. ¿Cómo me suscribo?",
      emoji: "📊"
    },
    benefactor: {
      title: "Ser benefactor",
      msg: "Me gustaría ser benefactor del centro. ¿Cuál es el proceso para compromisos sostenidos?",
      emoji: "👑"
    },
    metodo_pago: {
      title: "Opciones de pago",
      msg: "¿Cuáles son las formas de pago disponibles para donativos?",
      emoji: "💰"
    }
  },

  // CONTACTO PAGE
  contacto: {
    ubicacion: {
      title: "Dirección",
      msg: "¿Cuál es la dirección exacta del Centro Khamlungpa?",
      emoji: "📍"
    },
    telefono: {
      title: "Teléfono",
      msg: "¿Cuál es el teléfono de contacto del centro?",
      emoji: "☎️"
    },
    email: {
      title: "Correo electrónico",
      msg: "¿Cuál es el email para enviar consultas?",
      emoji: "📧"
    }
  },

  // GENERIC / FALLBACK
  generic: {
    saludo: {
      title: "Saludar",
      msg: "Hola, quisiera hablar con Centro Khamlungpa.",
      emoji: "👋"
    },
    ayuda: {
      title: "Pedir ayuda",
      msg: "Hola, necesito ayuda. ¿Dónde puedo obtener más información?",
      emoji: "🆘"
    }
  }
};

/**
 * Build WhatsApp link with pre-filled message
 * @param {string} message - Message text to pre-fill
 * @returns {string} WhatsApp wa.me URL
 */
function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/?text=${encoded}`;
}

/**
 * Build WhatsApp link with phone number
 * @param {string} phone - WhatsApp business phone (with country code, no +)
 * @param {string} message - Message text to pre-fill
 * @returns {string} WhatsApp link with phone
 */
function buildWhatsAppLinkWithPhone(phone, message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Open WhatsApp modal or send direct message
 * @param {string} category - Message category (e.g., 'home', 'empieza_aqui')
 * @param {string} key - Message key within category
 */
function sendWhatsAppMessage(category, key) {
  const messages = waMessages[category];
  if (!messages || !messages[key]) {
    console.error(`Message not found: ${category}.${key}`);
    return;
  }

  const message = messages[key].msg;
  const link = buildWhatsAppLink(message);
  window.open(link, '_blank');
}

/**
 * Display WhatsApp modal with preset options
 * @param {string} category - Message category to display
 */
function showWhatsAppModal(category) {
  const messages = waMessages[category] || waMessages.generic;
  const modal = document.getElementById('waModal');
  const presetList = document.getElementById('presetList');

  if (!modal || !presetList) {
    console.error('WhatsApp modal elements not found');
    return;
  }

  // Clear previous presets
  presetList.innerHTML = '';

  // Add preset options
  let index = 1;
  Object.entries(messages).forEach(([key, data]) => {
    const preset = document.createElement('div');
    preset.className = 'preset';
    preset.innerHTML = `
      <div class="preset-num">${index}</div>
      <div class="preset-body">
        <div class="preset-title">${data.title}</div>
        <div class="preset-msg">"${data.msg}"</div>
      </div>
    `;
    preset.onclick = () => {
      sendWhatsAppMessage(category, key);
      closeWhatsAppModal();
    };
    presetList.appendChild(preset);
    index++;
  });

  // Open modal
  modal.classList.add('open');
}

/**
 * Close WhatsApp modal
 */
function closeWhatsAppModal() {
  const modal = document.getElementById('waModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

/**
 * Quick send — bypass modal for single-message pages
 * @param {string} message - Message text
 */
function quickWhatsApp(message) {
  const link = buildWhatsAppLink(message);
  window.open(link, '_blank');
}

/**
 * Track WhatsApp interactions for analytics
 * @param {string} category - Message category
 * @param {string} key - Message key
 */
function trackWhatsAppClick(category, key) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'whatsapp_click', {
      'category': category,
      'message_key': key,
      'timestamp': new Date().toISOString()
    });
  }
}

/**
 * Initialize WhatsApp FAB and modal listeners
 */
function initWhatsAppListeners() {
  const fab = document.querySelector('.fab');
  const modal = document.getElementById('waModal');
  const modalClose = document.querySelector('.modal-close');

  // FAB click opens modal with generic messages
  if (fab) {
    fab.addEventListener('click', () => showWhatsAppModal('generic'));
  }

  // Modal close button
  if (modalClose) {
    modalClose.addEventListener('click', closeWhatsAppModal);
  }

  // Click outside modal to close
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeWhatsAppModal();
      }
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeWhatsAppModal();
    }
  });
}

/**
 * Add WhatsApp message hints to buttons
 * Usage: addWhatsAppHint(buttonElement, 'home', 'primera_vez')
 */
function addWhatsAppHint(element, category, key) {
  if (!element || !waMessages[category] || !waMessages[category][key]) {
    return;
  }

  const data = waMessages[category][key];
  element.setAttribute('title', data.msg);
  element.setAttribute('data-wa-category', category);
  element.setAttribute('data-wa-key', key);
}

// Auto-initialize on page load if not already done
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWhatsAppListeners);
} else {
  initWhatsAppListeners();
}
