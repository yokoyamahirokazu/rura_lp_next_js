module.exports = {
  siteUrl: "production"
    ? process.env.NEXT_PUBLIC_BASEURL
    : "http://localhost:3000",
  generateRobotsTxt: true,
};
