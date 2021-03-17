import { WebPlugin } from '@capacitor/core';

import type { CapacitorFirebaseDynamicLinksPlugin } from './definitions';

export class CapacitorFirebaseDynamicLinksWeb
  extends WebPlugin
  implements CapacitorFirebaseDynamicLinksPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
