import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hypérion Documentation',
  tagline: 'Documentation technique et organisationnelle',
  favicon: 'img/favicon.ico',

  url: 'https://Julien-Trastour.github.io',
  baseUrl: '/Hyperion-Docs/',

  organizationName: 'Julien-Trastour',
  projectName: 'hyperion-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/Julien-Trastour/Hyperion-Docs.git/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/hyperion-social-card.jpg',
    navbar: {
      title: 'Hypérion Docs',
      logo: {
        alt: 'Hypérion Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '📚 Documentation',
        },
        {
          href: 'https://github.com/Julien-Trastour/Hyperion-Docs.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/index_microservices',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/hyperion',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Julien-Trastour/Hyperion-Docs.git',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hypérion. Propulsé par Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;