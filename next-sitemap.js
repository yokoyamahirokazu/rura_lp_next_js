module.exports = {
  siteUrl: 'production' ? process.env.NEXT_PUBLIC_BASEURL : 'http://localhost:3000',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './out',
};
