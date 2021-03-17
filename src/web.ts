import { WebPlugin, registerWebPlugin } from '@capacitor/core';

import type { CapacitorFirebaseDynamicLinksPlugin } from './definitions';

export class CapacitorFirebaseDynamicLinksWeb extends WebPlugin implements CapacitorFirebaseDynamicLinksPlugin {
  constructor() {
    super({
      name: 'CapacitorFirebaseDynamicLinks',
      platforms: ['web']
    });
  }
}

const CapacitorFirebaseDynamicLinks = new CapacitorFirebaseDynamicLinksWeb();

export { CapacitorFirebaseDynamicLinks };


registerWebPlugin(CapacitorFirebaseDynamicLinks);