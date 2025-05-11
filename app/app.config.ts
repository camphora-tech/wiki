export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'CamphoraTech Wiki'
  },
  header: {
    title: 'CamphoraTech Wiki',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/camphora-tech/wiki',
      target: '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-x',
      to: 'https://x.com/camphoratech',
      target: '_blank',
      'aria-label': 'CamphoraTech on X'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/camphora-tech',
      target: '_blank',
      'aria-label': 'CamphoraTech on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/getting-started/installation/pro/nuxt',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank'
      }]
    }
  }
})