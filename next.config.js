module.exports = {
  images: {
    domains: ['images.microcms-assets.io', 'media.timeleap-rura.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/download/whitepaper/2y-i762tp', // リダイレクト元のURL
        destination: '/download/2y-i762tp', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/hil-rtm3inz8', // リダイレクト元のURL
        destination: '/download/hil-rtm3inz8', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/5snr1ql_3', // リダイレクト元のURL
        destination: '/download/5snr1ql_3', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/4tpxgx6g79', // リダイレクト元のURL
        destination: '/download/4tpxgx6g79', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/yku1q3pbo5', // リダイレクト元のURL
        destination: '/download/yku1q3pbo5', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/mmwa8sv5zba8', // リダイレクト元のURL
        destination: '/download/mmwa8sv5zba8', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/u27m2-8_es', // リダイレクト元のURL
        destination: '/download/u27m2-8_es', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/c21xl2h2pp7', // リダイレクト元のURL
        destination: '/download/c21xl2h2pp7', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/32tupxjzf', // リダイレクト元のURL
        destination: '/download/32tupxjzf', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/8t-k-q4hmlav', // リダイレクト元のURL
        destination: '/download/8t-k-q4hmlav', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/u-fskwgyeq', // リダイレクト元のURL
        destination: '/download/u-fskwgyeq', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/dg12a7b6xeq', // リダイレクト元のURL
        destination: '/download/dg12a7b6xeq', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/moen0aa0l', // リダイレクト元のURL
        destination: '/download/moen0aa0l', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/mxhf1ds1t_i', // リダイレクト元のURL
        destination: '/download/mxhf1ds1t_i', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/6t_vfr79pw', // リダイレクト元のURL
        destination: '/download/6t_vfr79pw', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/96ab8g5nt', // リダイレクト元のURL
        destination: '/download/96ab8g5nt', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
      {
        source: '/download/whitepaper/fnf6-uc77r', // リダイレクト元のURL
        destination: '/download/fnf6-uc77r', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
    ];
  },
};
