import { registerPlugin } from '@capacitor/core';

import type { CapacitorFirebaseDynamicLinksPlugin } from './definitions';

const CapacitorFirebaseDynamicLinks = registerPlugin<CapacitorFirebaseDynamicLinksPlugin>(
  'CapacitorFirebaseDynamicLinks',
  {
    web: () =>
      import('./web').then(m => new m.CapacitorFirebaseDynamicLinksWeb()),
  },
);

export * from './definitions';
export { CapacitorFirebaseDynamicLinks };
