import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { config } from '@site.config';

export default async function getSearch(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const query: any = req.query.q;
  if (!query) {
    res.status(400).json({ error: `missing queryparamaeter` });
  }

  return axios
    .get(
      `https://${
        config.serviceId
      }.microcms.io/api/v1/blog?q=${encodeURIComponent(query)}`,
      {
        headers: { 'X-API-KEY': config.apiKey },
      }
    )
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}
