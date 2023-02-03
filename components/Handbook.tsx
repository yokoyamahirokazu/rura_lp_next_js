import Image from 'next/image';
import Link from 'next/link';

import Button from '@components/Button';
import styles from '@styles/components/Components.module.css';

interface Article {
  id?: string;
  title?: string;
  smallBanner?: string;
  img?: {
    url: string;
  };
  smallBannerImg?: {
    url: string;
  };
}
interface wpArticle {
  id?: string;
  date?: string;
  title?: {
    rendered: string;
  };
  link?: string;
  yoast_head_json?: {
    og_url?: string;
    og_image?: {
      url?: string;
    };
    og_description?: string;
  };
}
type CaesProps = {
  articles: Article[];
  wparticles?: wpArticle[];
};

export const Handbook: React.FC<CaesProps> = (props) => {
  const filter_Handbook = props.articles.filter((output) => {
    return output.smallBannerImg == undefined;
  });
  const unfilter_Handbook = props.articles.filter((output) => {
    return output.smallBannerImg !== undefined;
  });

  return (
    <section className={styles.slantBg} id='handbook'>
      <div className={styles.slantBg_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            お役立ち資料
            <span>導入事例やメリットをわかりやすくまとめています。</span>
          </h2>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.contentFlex}>
            {filter_Handbook.map((handbook) => (
              <div key={handbook.id} className={styles.contentFlexThree}>
                {(() => {
                  if (!handbook.smallBannerImg) {
                    return (
                      <Link
                        href='/download/[id]'
                        as={`/download/${handbook.id}`}>
                        <a className={styles.handbookLink}>
                          <div
                            className={`${styles.boxShadowA} ${styles.boxRound}`}>
                            <div className={styles.boxRound_inner}>
                              <div className={styles.imageBoxB}>
                                <Image
                                  src={handbook.img && handbook.img.url}
                                  alt={handbook.title && handbook.title}
                                  layout={'fill'}
                                  objectFit={'contain'}
                                />
                              </div>
                            </div>
                            <div className={styles.handbookLinkHover}>
                              <Button
                                bgColor='secondary'
                                size='normal'
                                types='link'
                                href='/download/[id]'
                                as={`/download/${handbook.id}`}>
                                ダウンロードへ進む
                              </Button>
                            </div>
                          </div>
                          <div className={styles.txtBoxC}>
                            <h3 className={styles.headlineMinBlk}>
                              {handbook.title && handbook.title}
                            </h3>
                          </div>
                        </a>
                      </Link>
                    );
                  }
                })()}
              </div>
            ))}
          </div>

          <div className={styles.contentFlex}>
            {unfilter_Handbook.map((handbook) => (
              <div key={handbook.id} className={styles.contentFlexThree}>
                {(() => {
                  if (handbook.smallBannerImg) {
                    return (
                      <Link
                        href='/download/[id]'
                        as={`/download/${handbook.id}`}>
                        <a className={styles.handbookLink}>
                          <div
                            className={`${styles.boxShadowA} ${styles.boxRound}`}>
                            <div className={styles.boxRound_inner}>
                              <div className={styles.handbookSmallLink}>
                                <div className={styles.handbookSmallImg}>
                                  <div className={styles.imageBoxSquare}>
                                    <Image
                                      src={
                                        handbook.smallBannerImg &&
                                        handbook.smallBannerImg.url
                                      }
                                      alt={handbook.title && handbook.title}
                                      layout={'fill'}
                                      objectFit={'cover'}
                                    />
                                  </div>
                                </div>
                                <div className={styles.handbookSmallTxt}>
                                  <div className={styles.txtBoxC}>
                                    <h3 className={styles.headlineMinBlk}>
                                      {handbook.title && handbook.title}
                                      <span>導入ハンドブック</span>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.handbookLinkHover}>
                              <Button
                                bgColor='secondary'
                                size='normal'
                                types='link'
                                href='/download/[id]'
                                as={`/download/${handbook.id}`}>
                                ダウンロードへ進む
                              </Button>
                            </div>
                          </div>
                        </a>
                      </Link>
                    );
                  }
                })()}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.ruraMagazineBannerSeciton}>
        <Link href='https://media.timeleap-rura.com?utm_source=rura-lp&utm_medium=banner_middle'>
          <a target='_blank'>
            <div className={styles.ruraMagazineBanner}>
              <p className={styles.ruraMagazineCopy}>
                遠隔接客・リモート接客サービスの導入事例・比較・調査など配信中
              </p>
              <div className={styles.ruraMagazineLogo}>
                <Image
                  src='/images/rura_magazine_logo_white.svg'
                  alt='遠隔接客・リモート接客サービスの導入事例・比較・調査など配信中 RURA Magazine'
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
              <p className={styles.ruraMagazineLeadCopy}>
                遠隔接客をより身近に。未来の接客を探索するWEBメディア
              </p>
              {/* <div className={styles.ruraMagazinePostImageWrapper}>
                {props.wparticles.map((wp) => {
                  return (
                    <div key={wp.id} className={styles.ruraMagazinePostImage}>
                      <Image
                        src={wp.yoast_head_json.og_image[0].url}
                        layout={'fill'}
                        objectFit={'cover'}
                        alt={wp.title.rendered}
                      />
                    </div>
                  );
                })}
              </div> */}
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Handbook;
