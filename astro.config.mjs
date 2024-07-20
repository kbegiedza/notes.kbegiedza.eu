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
            label: 'Introduction',
            collapsed: true,
            link: '/software-engineer/introduction'
          },
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
            label: 'Software Design & Architecture',
            collapsed: true,
            items: [
              {
                label: 'Introduction',
                link: '/software-engineer/software-design/introduction'
              },
              {
                label: 'Design Patterns',
                collapsed: true,
                items: [
                  {
                    label: 'Introduction',
                    link: '/software-engineer/software-design/design-patterns/introduction'
                  },
                  {
                    label: 'Architectural',
                    collapsed: true,
                    autogenerate: {
                      directory: 'software-engineer/software-design/design-patterns/architectural'
                    }
                  },
                  {
                    label: 'Creational',
                    collapsed: true,
                    autogenerate: {
                      directory: 'software-engineer/software-design/design-patterns/creational'
                    }
                  },
                  {
                    label: 'Behavioural',
                    collapsed: true,
                    autogenerate: {
                      directory: 'software-engineer/software-design/design-patterns/behavioural'
                    }
                  },
                  {
                    label: 'Structural',
                    collapsed: true,
                    autogenerate: {
                      directory: 'software-engineer/software-design/design-patterns/structural'
                    }
                  },
                ]
              },
            ]
          },
          {
            label: 'Communication',
            collapsed: true,
            autogenerate: {
              directory: 'software-engineer/communication'
            }
          },
          {
            label: 'Databases',
            collapsed: true,
            autogenerate: {
              directory: 'software-engineer/databases'
            }
          },
          {
            label: 'System Design',
            collapsed: true,
            autogenerate: {
              directory: 'software-engineer/system-design'
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