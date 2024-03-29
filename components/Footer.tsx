import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as Scroll } from 'react-scroll';

import Button from '@components/Button';
import styles from '@styles/components/Footer.module.css';

type Props = {
  dlLink?: string;
  donwloadId?: string;
  contactId?: string;
  mediaLink?: string;
};

export const Footer: React.FC<Props> = (props) => {
  const router = useRouter();

  const navItem = [
    { url: 'case', name: '導入事例' },
    { url: 'service', name: '遠隔接客サービス' },
    { url: 'scene', name: '導入シーン' },
    { url: 'design', name: 'デザイン' },
    { url: 'features', name: '機能' },
    { url: 'news', name: '新着一覧' },
    { url: 'handbook', name: 'お役立ち資料' },
    { url: 'faq', name: 'FAQ' },
  ];

  const thisYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerNavFlex}>
          <ul className={styles.footerNav}>
            <li>
              <Link href={'/'}>
                <a>ホーム</a>
              </Link>
            </li>
            {router.pathname == '/' ? (
              <>
                {navItem.map((items) => (
                  <li key={items.url}>
                    <Scroll to={items.url} smooth={true} duration={600}>
                      {items.name}
                    </Scroll>
                  </li>
                ))}
              </>
            ) : (
              <>
                {navItem.map((items) => (
                  <li key={items.url}>
                    <Link href='/' as={`/#${items.url}`}>
                      <a>{items.name}</a>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
          <ul className={styles.footerNav}>
            <li>
              <Link href={'/news/page/1'}>
                <a>新着情報</a>
              </Link>
              <ul>
                <li>
                  <Link
                    href='/news/category/[categoryId]/page/[id]'
                    as={'/news/category/presselease/page/1'}>
                    <a>プレスリリース</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/news/category/[categoryId]/page/[id]'
                    as={'/news/category/media/page/1'}>
                    <a>メディア掲載</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/news/category/[categoryId]/page/[id]'
                    as={'/news/category/event/page/1'}>
                    <a>イベント・セミナー</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/news/category/[categoryId]/page/[id]'
                    as={'/news/category/useful/page/1'}>
                    <a>お役立ちコンテンツ</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/news/category/[categoryId]/page/[id]'
                    as={'/news/category/corporate/page/1'}>
                    <a>コーポレート</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={'/company'}>
                <a>運営会社</a>
              </Link>
            </li>
            <li>
              <Link href={'/company/privacy-policy'}>
                <a>プライバシーポリシー</a>
              </Link>
            </li>
          </ul>
          <div className={styles.footerBtn}>
            <Link
              href={
                props.mediaLink
                  ? props.mediaLink
                  : 'https://media.timeleap-rura.com?utm_source=rura-lp&utm_medium=banner_footer'
              }>
              <a target='_blank'>
                <div className={styles.footerRuraMagazineBanner}>
                  <div className={styles.footerRuraMagazineLogo}>
                    <Image
                      src='/images/rura_magazine_logo_blue.svg'
                      alt='遠隔接客・リモート接客サービスの導入事例・比較・調査など配信中 RURA Magazine'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <p>
                    遠隔（リモート）接客をより身近に。
                    <br />
                    未来の接客を探索するWEBメディア
                  </p>
                </div>
              </a>
            </Link>
            <Button
              bgColor='primary'
              size='normal'
              types='link'
              href={props.dlLink ? props.dlLink : '/download'}
              id={props.donwloadId ? props.donwloadId : 'footerD'}>
              資料ダウンロード
            </Button>
            <Button
              bgColor='secondary'
              size='normal'
              types='link'
              href='/contact'
              id={props.donwloadId ? props.donwloadId : 'footerC'}>
              お問い合わせ
            </Button>
          </div>
        </div>
        <div className={styles.footerLogo}>
          <p>遠隔接客サービス</p>
          <div className={styles.footerLogoImg}>
            <Image
              src='/images/rura_logo_white.svg'
              alt='RURA'
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
          <div className={styles.footerCompany}>
            <p>
              運営会社
              <br />
              タイムリープ株式会社
              <a
                href='https://timeleap.co.jp/'
                target='_blank'
                rel='noreferrer'>
                https://timeleap.co.jp/
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className={styles.footerCopyRight}>
        Copyright© {thisYear} Timeleap inc. All Rights Reserved.
      </p>
    </footer>
  );
};
