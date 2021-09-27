import type { PluginListenerHandle } from '@capacitor/core';

export interface DeepLinkOpen {
  url: string;
}

export interface CapacitorFirebaseDynamicLinksPlugin {
  addListener(eventName: 'deepLinkOpen', listenerFunc: (data: DeepLinkOpen) => void): PluginListenerHandle;
}
