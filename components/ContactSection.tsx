import Image from 'next/image';
import styles from '@styles/components/Components.module.css';
import Button from '@components/Button';

interface Props {
  ids?: string;
}
const ContactSection: React.FC<Props> = ({ ids }: Props) => {
  return (
    <section id={ids && ids} className={styles.contactSection}>
      <div className={styles.contactSectionBg}>
        <Image
          src="/images/contact_section_bg.jpg"
          alt="資料ダウンロード・お問い合わせ"
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>

      <div className={styles.contactSection_inner}>
        <div className={styles.contactSectionFlex}>
          <div className={styles.contactSectionTxt}>
            <h2 className={styles.headlineBigWh}>変わる接客、変わらない体験</h2>
            <div className={styles.contactSectionLogo}>
              <p className={styles.contactSectionLogoTxt}>遠隔接客サービス</p>
              <div className={styles.contactSectionLogoImg}>
                <Image
                  src="/images/rura_logo_white.svg"
                  alt="遠隔接客サービスRURA"
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
            </div>
            <div className={styles.contactSectionLogoBtn}>
              <Button bgColor="primary" size="large" types="link" href="/download/" icon="download">
                資料ダウンロード
              </Button>
              <Button bgColor="secondary" size="large" types="link" href="/contact" icon="contact">
                お問い合わせ
              </Button>
            </div>
          </div>
          <div className={styles.contactSectionImg}>
            <div className={styles.contactSectionImgB}>
              <div className={styles.boxShadowB}>
                <div className={styles.imageBoxD}>
                  <Image
                    src="/images/rura_dl_document_2.png"
                    alt="資料ダウンロード・お問い合わせ"
                    layout={'fill'}
                    objectFit={'contain'}
                  />
                </div>
              </div>
            </div>
            <div className={styles.contactSectionImgA}>
              <div className={styles.boxShadowB}>
                <div className={styles.imageBoxD}>
                  <Image
                    src="/images/rura_dl_document_1.png"
                    alt="資料ダウンロード・お問い合わせ"
                    layout={'fill'}
                    objectFit={'contain'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
