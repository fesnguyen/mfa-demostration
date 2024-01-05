import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'articles',
  exposes: {
    './Routes': 'apps/articles/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
