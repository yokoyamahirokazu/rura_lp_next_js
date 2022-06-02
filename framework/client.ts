import { config } from '@site.config';
import { createClient } from 'microcms-js-sdk';
export const client = createClient({
  serviceDomain: config.serviceId,
  apiKey: config.apiKey,
});
export const clientCopy = createClient({
  serviceDomain: config.serviceIdCopy,
  apiKey: config.apiKeyCopy,
});
