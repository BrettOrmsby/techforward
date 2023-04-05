import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/techforward/",
  title: "Technology Club",
  description: "A club to find out new technologies to improve productivity and quality of work",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '../icon.svg',
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
          { text: 'Google Slides', link: '/days/google-slides' },
          { text: 'Chat GPT', link: '/days/chat-gpt' },
          { text: 'Programming', link: '/days/programming' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Adocs",
    },
  },

  
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/icon.svg"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/icon.svg"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/icon.svg"}],
    ['link', { rel: "shortcut icon", href: "/icon.svg"}],
  ],
})
