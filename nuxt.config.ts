export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/reset.css', '~/assets/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'Weed Garden - Comprehensive Cannabis ERP Software for Growers',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Weed Garden Inc.' },
        { 'http-equiv': 'Content-Language', content: 'en' },
        { name: 'description', content: 'Streamline your cannabis cultivation operations with our comprehensive ERP software. Track costs, generate labels, report insights, and more.' },
        { name: 'keywords', content: 'cannabis ERP, cannabis cultivation software, grow management, etc...' },
        { name: 'referrer', content: 'no-referrer' },
        { property: 'og:site_name', content: 'Weed Garden' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Weed Garden - Comprehensive Cannabis ERP Software' },
        { property: 'og:description', content: 'Streamline your cannabis cultivation with cost tracking, label generation, and more.' },
        { property: 'og:url', content: 'https://weed-garden.com' },
        { property: 'og:image', content: 'https://weed-garden.com/img/happy-grow.png' },
        { property: 'og:image:alt', content: 'Weed Garden ERP dashboard preview with cannabis leaves' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@GrowWithParker' },
        { name: 'twitter:title', content: 'Weed Garden - Comprehensive Cannabis ERP Software' },
        { name: 'twitter:description', content: 'Streamline your cannabis cultivation with cost tracking, label generation, and more.' },
        { name: 'twitter:image', content: 'https://weed-garden.com/img/happy-grow.png' },
        { name: 'twitter:image:alt', content: 'Weed Garden ERP dashboard preview with cannabis leaves' },
        { name: 'twitter:creator', content: '@GrowWithParker' }
      ],
      link: [
        { rel: 'icon', href: '/site-logo.webp', type: 'image/webp' },
        { rel: 'author', href: '/humans.txt' },
        { rel: 'canonical', href: 'https://weed-garden.com' },
        { rel: 'alternate', type: 'application/xml', title: 'Sitemap Index', href: '/sitemap_index.xml' },
        { rel: 'alternate', type: 'application/xml', title: 'Pages Sitemap', href: '/sitemap-pages.xml' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap' }
      ],
      script: [
        { src: 'https://kit.fontawesome.com/26c2ffa3fe.js', crossorigin: 'anonymous' },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Weed Garden - Comprehensive Cannabis ERP Software",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "url": "https://weed-garden.com",
            "description": "Weed Garden is a powerful cannabis ERP software solution designed to streamline cannabis cultivation.",
            // other JSON-LD content
          })
        }
      ],
      noscript: [
        { children: '<p>Weed Garden requires JavaScript to function properly. Please enable JavaScript in your browser.</p>' }
      ]
    }
  },

  modules: ['@vesp/nuxt-fontawesome'],
  fontawesome: {
    icons: {
      brands: ['envira', 'square-facebook', 'discord', 'square-twitter', 'square-youtube'],
      solid: [
          'database',
          'tag',
          'money-check-dollar',
          'chart-pie',
          'note-sticky',
          'camera-retro',
          'arrow-right',
          'list',
          'circle-check', 'seedling', 'warehouse', 'gavel', 'circle-info', 'map', 'handshake', 'blog', 'cart-shopping', 'chevron-down', 'ellipsis', 'tags', 'tools', 'video', 'house', 'bars', 'arrow-right-to-bracket']
    }
  }
});