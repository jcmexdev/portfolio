# Juan Carlos Garcia - Senior Software Engineer Portfolio 🚀

Welcome to my personal portfolio repository! This project serves as a comprehensive showcase of my expertise in backend systems, distributed architectures, and modern web development.

Check out the live version here: [https://jcmexdev.github.io/portfolio/](https://jcmexdev.github.io/portfolio/)

---

## 🌟 Key Features

The portfolio is designed with a premium, robust frontend experience:

- **Fully Responsive Architecture**: Fluid layouts ensuring optimal viewing across mobile, tablet, and desktop breakpoints.
- **Multilingual Support (i18n)**: Instant English/Spanish translation via a custom vanilla JavaScript `locales` dictionary—no page reloads required.
- **Integrated Interactive Terminal**: A functional command-line interface `>_ open terminal` overlay running custom bash-like commands (type `help`, `whoami`, `projects`).
- **Dark/Light Mode Theme Toggle**: Automatic preference detection based on user OS settings with manual override capabilities.
- **Harvard Standard CV**: A web-native, perfectly outlined curriculum vitae that prints seamlessly on A4 paper using specialized CSS `@media print` queries.

---

## 🏗️ Architecture: Static Site Generator (Eleventy)

Initially built as raw HTML, the project was migrated to **Eleventy (11ty)** to establish a scalable, maintainable architecture devoid of code duplication.

### Why Eleventy?
Eleventy is blazingly fast and requires zero configuration to start. By utilizing Nunjucks (`.njk`) partials, the global `<header>` (Navbar) and `<footer>` are injected automatically into every page (including deeply nested blog posts) during the build process, while retaining relative path configurations flawlessly.

### Project Structure

```text
jcmexdev.github.io/portfolio/
├── .eleventy.js          # Eleventy configuration and passthrough rules
├── .github/workflows/    # CI/CD deployment logic for GitHub Pages
├── package.json          # Build scripts & dependencies
└── src/                  # 🟢 Main Source Code Directory
    ├── index.html        # Landing page (Main site)
    ├── cv.html           # Harvard Format Interactive CV
    ├── style.css         # Global Styles & Theming variables
    ├── script.js         # Core Logic, i18n & The Interactive Terminal
    ├── locales/          # Translation Dictionaries (EN/ES)
    ├── blog/             # Deep technical case study articles
    ├── assets/           # Images, Demo Videos, PDF Documents
    └── _includes/
        └── partials/     # Reusable Nunjucks templates (header.njk, footer.njk)
```

*(Note: The `_site/` directory is automatically generated on build and ignored by Git).*

---

## 💻 Local Development

Want to run this project locally to explore the architecture or test changes?

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- NPM

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jcmexdev/portfolio.git
   cd portfolio
   ```

2. **Install dependencies (Eleventy):**
   ```bash
   npm install
   ```

3. **Spin up the local development server:**
   ```bash
   npm start
   ```

4. **View the application:**
   Open your browser and navigate to `http://localhost:8080`.

*Note: The `npm start` command uses the `--serve` flag, meaning Eleventy will continually watch for changes in the `src/` directory and hot-reload the browser automatically!*

---

## 🚀 Deployment (GitHub Actions)

This project leverages a sophisticated CI/CD pipeline using **GitHub Actions**.

Whenever code is pushed to the `main` or `master` branch, the `.github/workflows/deploy.yml` action triggers:
1. It spins up an Ubuntu runner.
2. Installs the Node environment.
3. Executes `npm run build` (triggering Eleventy to compile the `src/` folder into the `_site/` output).
4. Employs the official `actions/deploy-pages@v4` action to publish the artifact securely to **GitHub Pages**.

No manual deployment intervention is necessary!

---
*Crafted with precision & logic.*
