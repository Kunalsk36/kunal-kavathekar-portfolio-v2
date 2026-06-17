<div align="center">
  <br />
  <h1>Kunal Kavathekar Portfolio</h1>
  <p>A modern, highly responsive, and premium personal portfolio showcasing my experience, projects, academic research, and technical certifications.</p>

  <a href="https://kunalkavathekar.vercel.app" target="_blank">
    <strong>View Live Website »</strong>
  </a>
  <br />
  <br />

  [![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat&logo=next.js)](#)
  [![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)](#)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=flat&logo=tailwind-css)](#)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-ff0055?style=flat&logo=framer)](#)
  [![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat&logo=vercel)](#)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#)
</div>

---

## 🌟 Overview

Welcome to the source code for my professional software developer portfolio! 

Designed for recruiters, hiring managers, and potential collaborators, this repository contains the completely custom-built frontend application that powers my online presence. It emphasizes a premium visual hierarchy, fluid animations, robust responsive design across all devices, and an organized showcase of both academic and professional achievements.

## ✨ Features

- **Responsive Design**: Pixel-perfect layouts fully optimized for mobile (320px+), tablet, and ultra-wide desktop displays.
- **Dark / Light Mode**: Beautiful thematic switching utilizing custom CSS properties and semantic color tokens.
- **Professional Project Showcase**: Deep dive into technical projects featuring interactive cards, tech stack tags, and direct links.
- **Research & Intellectual Property**: Dedicated showcase for published research papers, patent publications, and copyright registrations.
- **Academics & Achievements**: Timeline of educational history combined with distinguished awards and recognitions.
- **Certifications Gallery**: Interactive modal gallery displaying professional technical certifications.
- **Smooth Navigation**: Fluid Framer Motion transitions and intersection observers for a highly polished scrolling experience.
- **Resume Integration**: Direct 1-click download access to the latest professional resume.

## 🛠️ Tech Stack

This project is built using modern, industry-standard web technologies:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Language**: JavaScript / JSX
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & React Icons
- **Deployment**: [Vercel](https://vercel.com/)

## 📂 Sections Included

The portfolio flows chronologically through the following components:

1. **Hero**: High-impact introduction, dynamic role typing, and primary calls to action.
2. **About**: Personal background, professional philosophy, and core objectives.
3. **Experience**: Career timeline detailing roles, responsibilities, and key deliverables.
4. **Projects**: Categorized grid (Professional vs. Personal) of full-stack software applications.
5. **Research & Intellectual Property**: Academic papers, patents, and technical copyrights.
6. **Academics & Achievements**: Educational journey and notable technical accolades (e.g., Hackathons).
7. **Certifications**: Professional continuous learning credentials.
8. **Contact**: Responsive communication gateway with direct email, phone, and social links.

## 🚀 Project Highlights

- **Custom CSS Architecture**: Built on top of Tailwind CSS with a highly semantic, custom color variable system (`globals.css`) ensuring flawless dark/light transitions.
- **Component Reusability**: Strict adherence to DRY principles. Custom UI primitives (`Button`, `SectionHeading`, `Container`) ensure universal design consistency.
- **Performance Optimized**: Lazy-loaded images, optimized Framer Motion viewports (`whileInView`), and heavily refined DOM structures ensure a flawless 60fps scrolling experience.
- **Complex Grid Layouts**: Advanced CSS Grid techniques handling asymmetrical multi-column tablet and mobile fallbacks.

## 📁 Folder Structure

```text
kunal-kavathekar-portfolio-v2/
├── public/                 # Static assets (images, resume pdf)
├── src/
│   ├── app/                # Next.js App Router (layout, page, globals.css)
│   ├── components/
│   │   ├── layout/         # Global layout components (Navbar, Footer)
│   │   ├── sections/       # Primary page sections (Hero, About, Projects, etc.)
│   │   └── ui/             # Reusable UI primitives (Buttons, Modals, Containers)
│   ├── data/               # Static JSON/JS data arrays powering the UI
│   ├── hooks/              # Custom React hooks (e.g., useTheme)
│   └── lib/                # Utility functions (Tailwind merge, etc.)
├── tailwind.config.js      # Tailwind CSS configuration and themes
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## ⚙️ Installation & Local Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kunalsk36/kunal-kavathekar-portfolio-v2.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd kunal-kavathekar-portfolio-v2
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The application will start on `http://localhost:3000`*

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 🌐 Deployment

This application is continuously deployed via **Vercel**. Every push to the `main` branch triggers an automatic production build.

**Live URL:** [https://kunalkavathekar.vercel.app](https://kunalkavathekar.vercel.app)

## 📱 Performance & Responsiveness

Great care was taken to ensure universal accessibility and responsiveness:
- **Desktop Optimized**: Full utilization of ultra-wide displays with max-width containers and complex multi-column grid layouts.
- **Tablet Optimized**: Graceful degradation into 2-column arrays, heavily relying on responsive `md:` breakpoints and dynamic odd-item centering.
- **Mobile Optimized**: Strictly enforced single-column flows, robust text-wrapping, comfortable touch targets, and compact spacing to eliminate scroll fatigue.

## 🔮 Future Improvements

A roadmap for upcoming iterations:
- [ ] **Blog Integration**: Add MDX support for publishing technical articles and tutorials directly on the platform.
- [ ] **Project Filtering**: Implement dynamic category filtering (e.g., React, Node.js, AI) in the Projects section.
- [ ] **CMS Integration**: Migrate static `/data` files to a headless CMS (like Sanity or Contentful) for easier content management.
- [ ] **Enhanced Animations**: Add subtle micro-interactions to buttons and cards.
- [ ] **Analytics Dashboard**: Integrate simple, privacy-friendly analytics.

## 👨‍💻 Author

**Kunal Kavathekar**  
*Software Developer*

- **Portfolio**: [https://kunalkavathekar.vercel.app](https://kunalkavathekar.vercel.app)
- **GitHub**: [@Kunalsk36](https://github.com/Kunalsk36)
- **LinkedIn**: [kunal-kavathekar](https://www.linkedin.com/in/kunal-kavathekar)

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
