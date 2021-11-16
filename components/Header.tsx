import Link from 'next/link';
import styles from '@styles/components/Header.module.css';
import Button from '@components/Button';
import TopButton from '@components/TopButton';
import DrawerMenu from '@components/DrawerMenu';
import { Link as Scroll } from 'react-scroll';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  const router = useRouter();

  const navItem = [
    { url: 'case', name: '導入事例' },
    { url: 'service', name: 'サービス' },
    { url: 'scene', name: 'シーン' },
    { url: 'design', name: 'デザイン' },
    { url: 'features', name: '機能' },
    { url: 'news', name: '新着情報' },
    { url: 'handbook', name: 'ハンドブック' },
    { url: 'faq', name: 'FAQ' },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <div className={styles.logoImg}>
                <Image
                  src="/images/rura_logo_blue.svg"
                  alt="遠隔接客サービスRURA"
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
              <p className={styles.logoText}>遠隔接客サービス</p>
            </a>
          </Link>
        </div>
        <div className={styles.headerRight}>
          <nav className={styles.header_nav}>
            <ul>
              <li>
                <Link href={'/'}>
                  <a>ホーム</a>
                </Link>
              </li>

              {router.pathname == '/' ? (
                <>
                  {navItem.map((items) => (
                    <li>
                      <Scroll to={items.url} smooth={true} duration={600}>
                        {items.name}
                      </Scroll>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {navItem.map((items) => (
                    <li>
                      <Link href="/" as={`/#${items.url}`}>
                        {items.name}
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </nav>

          <Button bgColor="primary" size="normal" types="link" href="/download">
            資料ダウンロード
          </Button>
          <Button bgColor="secondary" size="normal" types="link" href="/contact">
            お問い合わせ
          </Button>
        </div>
        <DrawerMenu />
      </header>
      <TopButton />
    </>
  );
};
