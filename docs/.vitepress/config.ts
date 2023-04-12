import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/techforward/",
  title: "TechForward",
  description: "A club to find out new technologies to improve productivity and quality of work",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Calendar', link: '/introduction/calendar' }
    ],
   
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Course Introduction', link: '/introduction/course-introduction' },
          { text: 'Calendar', link: '/introduction/calendar' }
        ]
      },
      {
        text: 'Days',
        items: [
          { text: 'DALL-E', link: '/days/dall-e' },
          { text: 'Presentational Software', link: '/days/presentational-software' },
          { text: 'ChatGPT', link: '/days/chatgpt' },
          { text: 'Programming', link: '/days/programming' }
        ]
      }
    ],

    footer: {
      copyright: `Copyright © 2023-${new Date().getFullYear()} Brett Ormsby`,
    },
  },

  
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/techforward/icon.svg"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/techforward/icon.svg"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/techforward/icon.svg"}],
    ['link', { rel: "shortcut icon", href: "/techforward/icon.svg"}],
  ],
})
