import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@components/Button';

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
  return (
    <section className={styles.slantBg}>
      <div className={styles.slantBg_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            導入ハンドブック ダウンロード
            <span>導入事例やメリットをわかりやすくまとめています。</span>
          </h2>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.contentFlex}>
            {props.articles.map((recommend) => (
              <div key={recommend.id} className={styles.contentFlexThree}>
                {(() => {
                  if (!recommend.smallBannerImg) {
                    return (
                      <Link href="/">
                        <a className={styles.handbookLink}>
                          <div className={`${styles.boxShadowA} ${styles.boxRound}`}>
                            <div className={styles.boxRound_inner}>
                              <div className={styles.imageBoxB}>
                                <Image
                                  src={recommend.img && recommend.img.url}
                                  alt={recommend.title && recommend.title}
                                  layout={'fill'}
                                  objectFit={'contain'}
                                />
                              </div>
                            </div>
                            <div className={styles.handbookLinkHover}>
                              <Button bgColor="secondary" size="normal" types="link" href="/">
                                ダウンロードへ進む
                              </Button>
                            </div>
                          </div>
                          <div className={styles.txtBoxC}>
                            <h3 className={styles.headlineMinBlk}>
                              {recommend.title && recommend.title}
                            </h3>
                          </div>
                        </a>
                      </Link>
                    );
                  } else {
                    return (
                      <Link href="/">
                        <a className={styles.handbookLink}>
                          <div className={`${styles.boxShadowA} ${styles.boxRound}`}>
                            <div className={styles.boxRound_inner}>
                              <div className={styles.handbookSmallLink}>
                                <div className={styles.handbookSmallImg}>
                                  <div className={styles.imageBoxSquare}>
                                    <Image
                                      src={recommend.smallBannerImg && recommend.smallBannerImg.url}
                                      alt={recommend.title && recommend.title}
                                      layout={'fill'}
                                      objectFit={'cover'}
                                    />
                                  </div>
                                </div>
                                <div className={styles.handbookSmallTxt}>
                                  <div className={styles.txtBoxC}>
                                    <h3 className={styles.headlineMinBlk}>
                                      {recommend.title && recommend.title}
                                      <span>導入ハンドブック</span>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.handbookLinkHover}>
                              <Button bgColor="secondary" size="normal" types="link" href="/">
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
