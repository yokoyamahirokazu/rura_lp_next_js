import { config } from '@site.config';
import { IBlog, ICategory, ITag, MicroCmsResponse, Queries } from '@types';
import { client } from '@framework';

const limit = parseInt(config.defaultLimit);

export const getContents = async (
  currentPage: number = 1,
  articleFilter?: string,
): Promise<{
  blogs: IBlog[];
  categories: ICategory[];
  pager: number[];
  tags: ITag[];
}> => {
  const [{ blogs, pager }, categories, tags] = await Promise.all([
    getBlogsByFilter(limit, currentPage, articleFilter),
    getCategories(),

    getTags(),
  ]);
  return {
    blogs: blogs.contents,
    categories: categories.contents,
    pager,
    tags: tags.contents,
  };
};

export const getAllBlogs = async (): Promise<MicroCmsResponse<IBlog>> => {
  const res = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: 'blog',
    queries: { limit: config.defaultMaxLimit },
  });
  return res;
};

export const getBlogs = async (limit: number): Promise<MicroCmsResponse<IBlog>> => {
  const res = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: 'blog',
    queries: { limit: limit },
  });

  return res;
};

export const getBlogsByFilter = async (
  limit: number,
  currentPage: number,
  articleFilter?: string,
): Promise<{ blogs: MicroCmsResponse<IBlog>; pager: number[] }> => {
  const queries: Queries = {
    limit: limit,
    filters: articleFilter,
    offset: (currentPage - 1) * limit,
  };
  const blogs = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: 'blog',
    queries: queries,
  });
  const pager = [...Array(Math.ceil(blogs.totalCount / 10)).keys()];
  return { blogs, pager };
};

export const getBlogById = async (blogId: string): Promise<IBlog> => {
  const res = await client.get<IBlog>({
    endpoint: 'blog',
    contentId: blogId,
    queries: { depth: 2 },
  });
  return res;
};

export const getCategories = async (): Promise<MicroCmsResponse<ICategory>> => {
  const res = await client.get<MicroCmsResponse<ICategory>>({ endpoint: 'categories' });
  return res;
};

export const getTags = async (): Promise<MicroCmsResponse<ITag>> => {
  const res = await client.get<MicroCmsResponse<ITag>>({
    endpoint: 'tags',
    queries: { limit: 1000 },
  });
  return res;
};
