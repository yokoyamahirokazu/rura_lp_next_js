import Image from 'next/image';

import Button from '@components/Button';
import styles from '@styles/components/Components.module.css';

interface Props {
  ids?: string;
  downloadId?: string;
  contactId?: string;
  bgProps?: string;
  copy?: string;
  type?: string;
  dlLink?: string;
}
const ContactSection: React.FC<Props> = ({
  ids,
  downloadId,
  contactId,
  bgProps,
  copy,
  type,
  dlLink,
}: Props) => {
  return (
    <section id={ids && ids} className={styles.contactSection}>
      <div className={styles.contactSectionBg}>
        <Image
          src={bgProps ? bgProps : '/images/contact_section_bg.jpg'}
          alt='資料ダウンロード・お問い合わせ'
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>

      <div className={styles.contactSection_inner}>
        <div className={styles.contactSectionFlex}>
          <div className={styles.contactSectionTxt}>
            <h2 className={styles.headlineBigWh}>
              {copy ? copy : '変わる接客、変わらない体験'}
            </h2>
            <div className={styles.contactSectionLogo}>
              <p className={styles.contactSectionLogoTxt}>遠隔接客サービス</p>
              <div className={styles.contactSectionLogoImg}>
                <Image
                  src='/images/rura_logo_white.svg'
                  alt='遠隔（リモート）接客サービスRURA'
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
            </div>
            {type === 'funeral' && (
              <p className={styles.contactSectionSubCopy}>
                葬儀業界向けお役立ち資料 無料配布中
              </p>
            )}
            <div className={styles.contactSectionLogoBtn}>
              <Button
                bgColor='primary'
                size='large'
                types='link'
                href={dlLink ? dlLink : '/download/'}
                icon='download'
                id={downloadId}>
                資料ダウンロード
              </Button>
              <Button
                bgColor='secondary'
                size='large'
                types='link'
                href='/contact'
                icon='contact'
                id={contactId}>
                お問い合わせ
              </Button>
            </div>
          </div>
          <div className={styles.contactSectionImg}>
            <div className={styles.contactSectionImgB}>
              <div className={styles.boxShadowB}>
                <div className={styles.imageBoxD}>
                  <Image
                    src='/images/rura_dl_document_2.png'
                    alt='資料ダウンロード・お問い合わせ'
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
                    src='/images/rura_dl_document_1.png'
                    alt='資料ダウンロード・お問い合わせ'
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
