import type { PluginListenerHandle } from '@capacitor/core';

declare module '@capacitor/core' {
  interface PluginRegistry {
    CapacitorFirebaseDynamicLinks: CapacitorFirebaseDynamicLinksPlugin;
  }
}

export interface DeepLinkOpen {
  url: string;
}

export interface CapacitorFirebaseDynamicLinksPlugin {
  addListener(
    eventName: 'deepLinkOpen',
    listenerFunc: (data: DeepLinkOpen) => void,
  ): PluginListenerHandle;
}
