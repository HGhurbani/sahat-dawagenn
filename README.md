# Sahat Dawagen Website

A modern, bilingual corporate website for **Sahat Dawagen**, built with **Vue 3** and **Vite**.

This project presents the company’s brand, products, quality standards, and contact channels through a clean, responsive interface in both **Arabic** and **English**.

## ✨ Key Features

- **Bilingual interface (AR / EN)** powered by `vue-i18n`
- **Multi-page experience** using `vue-router`
- **State management** with `pinia`
- **Products showcase** with pricing and nutritional highlights
- **Quality & certifications section** with customer testimonials
- **Editable dashboard page** for updating homepage and product content
- **WhatsApp quick-contact button**
- **Smooth page transitions** and responsive layout

## 🛠️ Tech Stack

- **Framework:** Vue 3 (`<script setup>`)
- **Build Tool:** Vite
- **Routing:** Vue Router 4
- **State Management:** Pinia
- **Internationalization:** Vue I18n
- **Styling:** CSS (component-scoped + global styles)

## 📁 Project Structure

```text
src/
├── assets/          # Images, logos, icons, certificate graphics
├── components/      # Reusable UI components
├── locales/         # Translation files (ar.json, en.json)
├── pages/           # Route-level pages (Home, Products, About, ...)
├── router/          # Route definitions
├── stores/          # Pinia stores
├── App.vue          # Main layout wrapper
├── i18n.js          # i18n setup
└── main.js          # App bootstrap
```

## 🚀 Getting Started

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd sahat-dawagenn
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run development server

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## 📦 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build locally

## 🌍 Localization

Translations are stored in:

- `src/locales/ar.json`
- `src/locales/en.json`

You can add new keys there and consume them in components with `$t('key')`.

## ✅ Production Build

To generate optimized production assets:

```bash
npm run build
```

Build output is generated in the `dist/` directory.

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## 📄 License

This project is currently unlicensed.
If you plan to open-source it publicly, consider adding an MIT license file.
