import Head from 'next/head';
import { config } from '@site.config';

interface Props {
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  ogpImg?: string;
  noIndex?: string;
}

const SeoContent = ({ pageTitle, pageDescription, pageUrl, ogpImg, noIndex }: Props) => {
  const defaultTitle =
    '遠隔接客サービス RURA｜まるで瞬間移動。 高スキルのスタッフを全国に０秒派遣。 お店の無人化や人材不足に効果を発揮。';
  const defaultDescription =
    '時給450円から店舗スタッフを採用可能遠隔接客サービス RURA※特許出願中。RURAはロボットやバーチャルキャラクター越しに接客を行なうシステムで、全国各地にいるRURAワーカーが、WEB経由で店舗の接客。一人のスタッフが複数店舗をまたいで接客が可能';
  const defaultPageUrl = config.baseUrl;
  const defaultOgpImg = `${config.baseUrl}/images/og_image.jpg`;

  const title = pageTitle ? `${pageTitle} | 遠隔接客サービス RURA` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pageUrl ? `${defaultPageUrl}${pageUrl}` : defaultPageUrl;
  const imgUrl = ogpImg ? ogpImg : defaultOgpImg;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta name="twitter:card" content={imgUrl} />
      <meta name="twitter:site" content="@RURAtimeleap" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex" />}
    </Head>
  );
};

export default SeoContent;
