import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [	starlight({
    title: 'notes.kbegiedza.eu',
    social: {
      github: 'https://github.com/kbegiedza/notes.kbegiedza.eu'
    },
    sidebar: [{
      label: 'Languages',
      autogenerate: {
        directory: 'languages'
      }
      // items: [
      // 	// Each item here is one entry in the navigation menu.
      // 	{ label: 'Example Guide', link: '/guides/example/' },
      // ],
    }, {
      label: 'Databases',
      autogenerate: {
        directory: 'databases'
      }
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  })]
});