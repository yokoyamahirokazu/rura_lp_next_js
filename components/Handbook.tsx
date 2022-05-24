import Button from '@components/Button';
import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
type CaesProps = {
  articles: Article[];
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
            導入ハンドブック ダウンロード
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
    </section>
  );
};

export default Handbook;
