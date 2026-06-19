# GP Service — сайт услуг (Шымкент)

Современный минималистичный сайт компании GP Service: грузчики, такелаж, переезды,
грузоперевозки, доставка, аренда оборудования и услуги для бизнеса. Стек —
**React + Vite + Tailwind CSS**. Основной сценарий заявки — переход в **WhatsApp**
(`+7 778 562 68 55`). Цены не показываются: стоимость рассчитывается индивидуально.

---

## Быстрый просмотр без установки

Откройте файл **`preview.html`** двойным кликом в браузере — это автономная копия
главной страницы (со всеми разделами, раскрытием подуслуг, FAQ и формой-заявкой
в WhatsApp). Нужен только интернет (подключаются шрифты и Tailwind с CDN).

## Запуск проекта для разработки

Требуется Node.js 18+.

```bash
npm install      # установка зависимостей
npm run dev      # локальный сервер (http://localhost:5173)
npm run build    # production-сборка в папку dist/
npm run preview  # предпросмотр собранного dist/
```

## Публикация

После `npm run build` папка **`dist/`** — готовый статический сайт. Залейте её на
любой статический хостинг (Netlify, Vercel, GitHub Pages, хостинг домена `gpsrv.kz`).
В `vite.config.js` задан `base: './'`, поэтому сборка работает и в подпапке, и при
открытии напрямую с диска.

---

## Структура

```
gp-service/
├─ index.html               # SEO-мета, шрифты, корневой div
├─ preview.html             # автономный предпросмотр (без сборки)
├─ src/
│  ├─ App.jsx               # сборка всех секций
│  ├─ main.jsx, index.css   # точка входа и стили (Tailwind + утилиты)
│  ├─ components/           # Header, Hero, Services, ServiceCard, Business,
│  │                        # Equipment, Advantages, About, Works, HowWeWork,
│  │                        # QuoteForm, FAQ, Contacts, Footer, FloatingWhatsApp,
│  │                        # Logo, Icons
│  ├─ data/                 # ВЕСЬ КОНТЕНТ: services, equipment, business,
│  │                        # advantages, steps, faq
│  ├─ hooks/useReveal.js    # плавное появление секций при скролле
│  ├─ lib/site.js           # контакты + помощник ссылок WhatsApp
│  └─ assets/img/           # оптимизированные фото GP Service
└─ tailwind.config.js       # фирменная палитра, тени, анимации
```

## Как менять контент

- **Услуги и подуслуги** — `src/data/services.js` (8 категорий, текст кнопок и
  готовый текст сообщения WhatsApp для каждой услуги).
- **Аренда оборудования** — `src/data/equipment.js`.
- **Блок «Для бизнеса»** — `src/data/business.js`.
- **Преимущества, шаги работы, FAQ** — `src/data/advantages.js`, `steps.js`, `faq.js`.
- **Контакты и номер WhatsApp** — `src/lib/site.js` (одно место для телефона,
  e-mail, Instagram, текста заявки по умолчанию).
- **Цвета и типографика** — `tailwind.config.js`.
- **Фото** — `src/assets/img/` (замените файлы, сохранив имена).

## Особенности

- Адаптивная вёрстка (desktop / tablet / mobile), mobile-first.
- 8 карточек услуг с раскрытием полного списка подуслуг по кнопке «Подробнее».
- Все ключевые кнопки ведут в WhatsApp с подготовленным текстом; форма-калькулятор
  собирает поля и открывает WhatsApp с готовым сообщением (без backend и таблиц).
- Лёгкие анимации: появление секций, hover-состояния, раскрытие подуслуг и FAQ.
- SEO: `<title>`, meta description, Open Graph, JSON-LD (`MovingCompany`).
- Изображения взяты из присланных ассетов GP Service и оптимизированы для веба.
