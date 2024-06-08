import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    social: {
      github: 'https://github.com/kbegiedza/notes.kbegiedza.eu'
    },
    title: 'notes.kbegiedza.eu',
    locales: {
      root: {
        label: 'English',
        lang: 'en-GB'
      },
      pl: {
        label: 'Polski',
        lang: 'pl-PL'
      }
    },
    sidebar: [
      {
        label: 'Software Engineer',
        collapsed: true,
        items: [
          {
            label: 'Fundamentals',
            collapsed: true,
            autogenerate: {
              directory: 'software-engineer/fundamentals'
            }
          },
          {
            label: 'Paradigms',
            collapsed: true,
            autogenerate: {
              directory: 'software-engineer/paradigms'
            }
          },
          {
            label: 'Principles',
            collapsed: true,
            autogenerate: {
              directory: 'software-engineer/principles'
            }
          },
          {
            label: 'Data Structures & Algorithms',
            collapsed: true,
            autogenerate: {
              directory: 'software-engineer/data-structures-and-algorithms'
            }
          },
          {
            label: 'Communication',
            collapsed: true,
            autogenerate: {
              directory: 'software-engineer/communication'
            }
          }
        ]
      },
      // {
      //   label: '.NET Engineer',
      //   collapsed: true,
      //   autogenerate: {
      //     directory: 'dotnet-engineer'
      //   }
      // },
      {
        label: 'Frontend Engineer',
        collapsed: true,
        autogenerate: {
          directory: 'frontend-engineer'
        }
      },
      {
        label: 'Cloud',
        collapsed: true,
        autogenerate: {
          directory: 'cloud'
        }
      },
      // {
      //   label: 'Reference',
      //   autogenerate: {
      //     directory: 'reference'
      //   }
      // }
    ],
    customCss: ['./src/styles/tailwind.css']
  }), tailwind({
    applyBaseStyles: false
  }), react()]
});