import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "selbsttest.org",
  base: '/survey-landingpage/',
  description: "Verlässliche anonyme Selbsttests für Ihr Team",
  sitemap: {
    hostname: 'https://selbsttest.org'
  },
  head: [
      ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
      ['link', { rel: 'stylesheet', href: '/assets/aos.css' }],
  ],
  themeConfig: {
    logo: './assets/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'DEMO', link: 'https://app.selbsttest.org/umfrage/los/MZuv99fPiTsod5Bde?previewId=xJ5bRJatKLqyBE54c' },
      { text: 'Preise', link: '/pricing' },
      {
        text: 'App',
        items: [
          { text: 'Anmelden', link: 'https://app.selbsttest.org/' },
          {text: 'Registrieren', link: 'https://app.selbsttest.org/'}
        ]
      },
          { text: 'Datenschutz', link: '/privacy' },
          { text: 'Impressum', link: '/imprint' }
    ],
/*
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
*/
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chartonomy' }
    ],

    footer: {
      message: 'selbsttest.org · Verlässliche anonyme Selbsttests für Ihr Team · Kontakt: kontakt@selbsttest.org',
      copyright: '© 2025 selbsttest.org'
    }
  }
})