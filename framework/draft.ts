import { config } from '@site.config';
import { IDraftResponse } from '@types';
import axios from 'axios';

export const getDraftBlog = async (id: string, draftKey: string): Promise<IDraftResponse> => {
  const res = await axios.get<IDraftResponse>(
    `https://${config.baseUrl}/api/v1/blog/${id}&draftKey=${draftKey}`,
  );
  return res.data;
};
