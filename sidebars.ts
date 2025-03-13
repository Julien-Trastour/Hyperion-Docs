import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
 const sidebars = {
  docsSidebar: [
    { type: 'doc', id: 'index_microservices', label: '🏠 Accueil' },
    {
      type: 'category',
      label: '🌐 Kronos - API Centrale',
      items: [
        'kronos/kronos_index',
        'kronos/architecture',
        'kronos/deployment',
        {
          type: 'category',
          label: '🔐 Auth Service',
          items: ['kronos/auth_service/index', 'kronos/auth_service/jwt', 'kronos/auth_service/oauth'],
        },
        {
          type: 'category',
          label: '👥 User Service',
          items: ['kronos/user_service/index', 'kronos/user_service/permissions'],
        },
        {
          type: 'category',
          label: '📊 Log Service',
          items: ['kronos/log_service/index', 'kronos/log_service/elasticsearch'],
        },
        {
          type: 'category',
          label: '🚀 Cache Service',
          items: ['kronos/cache_service/index', 'kronos/cache_service/optimisation'],
        },
        {
          type: 'category',
          label: '🌐 Router Service',
          items: ['kronos/router_service/index', 'kronos/router_service/load_balancing'],
        },
        {
          type: 'category',
          label: '🔄 Messaging Service',
          items: ['kronos/messaging_service/index', 'kronos/messaging_service/kafka_rabbitmq'],
        },
        {
          type: 'category',
          label: '🗄 Database',
          items: ['kronos/database/index', 'kronos/database/schema'],
        },
        'kronos/deployment',
      ],
    },
  ],
};

export default sidebars;
