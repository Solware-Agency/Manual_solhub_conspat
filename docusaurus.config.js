// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SolHub',
  tagline: 'Tu aplicacion web ideal para laboratorios patológicos',
  favicon: 'img/SolHub_ISOTIPO_ORIG.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://tu-dominio.vercel.app', // CAMBIAR POR TU URL REAL DE VERCEL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tu-usuario-github', // CAMBIAR POR TU USUARIO DE GITHUB
  projectName: 'manual-web', // CAMBIAR POR EL NOMBRE DE TU REPO

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Inicio',
        logo: {
          alt: 'Solware Logo',
          src: 'img/SolHub_ISOTIPO_ORIG.svg',
        },
        items: [
          {
            type: 'html',
            position: 'left',
            value: '<a href="https://www.solhub.agency/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; font-weight: 500; transition: color 0.3s ease;" onmouseover="this.style.color=\'#41e2b8\'" onmouseout="this.style.color=\'inherit\'">SolHub</a>',
          },
          {
            type: 'html',
            position: 'left',
            value: '<a href="/docs/Inicio" style="color: inherit; text-decoration: none; font-weight: 500; transition: color 0.3s ease;" onmouseover="this.style.color=\'#41e2b8\'" onmouseout="this.style.color=\'inherit\'">Manual</a>',
          },
          {
            type: 'html',
            position: 'left',
            value: '<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28TbL6x8Jj7yLpzgpH2OQ1MV5t5zdvwYRbjCTVKTjj-pNNzSSZ3mGSpguP7Sv4AksuyRdav2bJ" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; font-weight: 500; transition: color 0.3s ease;" onmouseover="this.style.color=\'#41e2b8\'" onmouseout="this.style.color=\'inherit\'">Agenda tu Cita</a>',
          },
          {
            type: 'html',
            position: 'left',
            value: '<a href="/demo" style="color: inherit; text-decoration: none; font-weight: 500; transition: color 0.3s ease;" onmouseover="this.style.color=\'#41e2b8\'" onmouseout="this.style.color=\'inherit\'">Ver Demostración</a>',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://www.solware.agency/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; font-weight: 500; margin-right: 15px; transition: color 0.3s ease;" onmouseover="this.style.color=\'#41e2b8\'" onmouseout="this.style.color=\'inherit\'">Solware</a>',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Forma parte de nuestra comunidad',
            items: [
              {
                html: '<div style="display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 1rem; margin-top: 1.5rem;"><a href="https://www.linkedin.com/company/agencia-solware/posts/?feedView=all" target="_blank" rel="noopener noreferrer" class="footer-social-link" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 8px; transition: color 0.3s ease;"><svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg> Mantente al día en LinkedIn</a><a href="https://www.instagram.com/solware_/" target="_blank" rel="noopener noreferrer" class="footer-social-link" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 8px; transition: color 0.3s ease;"><svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> No te pierdas lo nuevo en Instagram</a><a href="https://api.whatsapp.com/send?phone=%2B584129974533&context=AfdQaFIYoG4xbnNYuYYWrBJ0fQypn2iVMR2TX9Or4nqNa3ruF5Q85KRETWpTmF3QAYqbtNZmAY65Altq-5_0o2QfkKgGH9vmz5uWssRPqLSXTUm2tKeSuNjg6kNH_fHKCtVJI6QZTeKJFV5al0dvklKp3Q&source=FB_Page&app=facebook&entry_point=page_cta" target="_blank" rel="noopener noreferrer" class="footer-social-link" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 8px; transition: color 0.3s ease;"><svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 339.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56 81.2 56 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg> Escríbenos en WhatsApp y aclara tus dudas</a><a href="tel:+584129974533" class="footer-social-link" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 8px; transition: color 0.3s ease;"><svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.5 11.5a.678.678 0 0 1-.6-.122L7.122 9.6a.678.678 0 0 1-.122-.58l.122-1.034a.678.678 0 0 0-.122-.58L5.122 5.5a.678.678 0 0 0-.58-.122L3.508 5.4a.678.678 0 0 0-.58.122L1.328 6.654a.678.678 0 0 0-.063 1.015l1.034 1.034a.678.678 0 0 0 .58.122l1.034-.122a.678.678 0 0 0 .58.122l1.034.122a.678.678 0 0 0 .58-.122l1.034-1.034a.678.678 0 0 0-.063-1.015L3.654 1.328z"/></svg> +584129974533</a><a href="mailto:ventas@solware.agency" class="footer-social-link" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 8px; transition: color 0.3s ease;"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> ventas@solware.agency</a></div>',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Solware. Todos los derechos reservados.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
