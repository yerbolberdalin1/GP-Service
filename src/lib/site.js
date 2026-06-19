// Единая конфигурация контактов и брендовых данных GP Service.
export const SITE = {
  name: 'GP Service',
  city: 'Шымкент',
  since: 2016,
  phoneDisplay: '+7 778 562 68 55',
  phoneHref: 'tel:+77785626855',
  whatsappNumber: '77785626855',
  email: 'shymkent.gps2016@gmail.com',
  instagram: 'gp_service_',
  instagramUrl: 'https://instagram.com/gp_service_',
  tagline: 'Ваш комфорт — наши услуги',
}

const DEFAULT_TEXT =
  'Здравствуйте! Хочу уточнить услугу GP Service.\n' +
  'Услуга: \n' +
  'Адрес / район: \n' +
  'Когда нужно: \n' +
  'Комментарий: '

/**
 * Формирует ссылку перехода в WhatsApp с заранее подготовленным текстом.
 * @param {string} text — текст сообщения (по умолчанию — базовый шаблон заявки).
 */
export function wa(text = DEFAULT_TEXT) {
  const base = `https://wa.me/${SITE.whatsappNumber}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

/** Короткий помощник: ссылка с уточнением конкретной услуги. */
export function waService(serviceTitle) {
  return wa(`Здравствуйте! Хочу уточнить услугу GP Service: ${serviceTitle}.`)
}
