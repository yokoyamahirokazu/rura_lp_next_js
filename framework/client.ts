import { createClient } from 'microcms-js-sdk';

import { config } from '@site.config';
export const client = createClient({
  serviceDomain: config.serviceId,
  apiKey: config.apiKey,
});
export const clientCopy = createClient({
  serviceDomain: config.serviceIdMake,
  apiKey: config.apiKeyMake,
});
