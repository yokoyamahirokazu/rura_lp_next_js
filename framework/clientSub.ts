import { createClient } from 'microcms-js-sdk';

import { config } from '@site.config';

export const clientCopy = createClient({
  serviceDomain: config.serviceIdMake,
  apiKey: config.apiKeyMake,
});
