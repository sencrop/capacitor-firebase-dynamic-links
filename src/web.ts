import { PluginListenerHandle, WebPlugin } from '@capacitor/core';

import type { CapacitorFirebaseDynamicLinksPlugin } from './definitions';

export class CapacitorFirebaseDynamicLinksWeb extends WebPlugin implements CapacitorFirebaseDynamicLinksPlugin {
  addListener(): Promise<PluginListenerHandle> {
    throw new Error('not implemented in web');
  }
}
