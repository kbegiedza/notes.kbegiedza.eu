import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig(
  {
    integrations: [
      starlight(
      {
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
          },
        },
        sidebar: [
          {
            label: 'Software Engineer',
            collapsed: true,
            autogenerate:
            {
              directory: '00-software-engineer'
            }
          },
          {
            label: '.NET Engineer',
            collapsed: true,
            autogenerate:
            {
              directory: '01-dotnet-engineer'
            }
          },
          {
            label: 'Reference',
            autogenerate: { directory: 'reference'}
              // items: [
              //   // Each item here is one entry in the navigation menu.
              //   { label: 'Example Guide', link: '/guides/example/' },
              // ],
          },
        ]
      })
    ]
  });