import { config } from '@site.config';
import { IDraftResponse } from '@types';
import axios from 'axios';

export const getDraftBlog = async (id: string, draftKey: string): Promise<IDraftResponse> => {
  const res = await axios.get<IDraftResponse>(
    `https://${config.baseUrl}.microcms.io/api/v1/blog/${id}?fields=id&draftKey=${draftKey}`,
    { headers: { 'X-MICROCMS-API-KEY': config.apiKey || '' } },
  );
  return res.data;
};
