export const config = {
  siteMeta: {
    title: 'microcms-blog-with-next',
    description: 'microCMS×Next.jsのブログテンプレートです',
  },
  siteRoot:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_SITEROOT
      : 'http://localhost:3000',
  apiKey: process.env.MICROCMS_APIKEY,
  serviceId: process.env.SERVICE_ID,
  headerLinks: [],
};
