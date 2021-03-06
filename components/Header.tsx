import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState, useEffect } from 'react';
import { Link as Scroll } from 'react-scroll';

import Button from '@components/Button';
import DrawerMenu from '@components/DrawerMenu';
import TopButton from '@components/TopButton';

import styles from '../styles/components/Header.module.css';

export const Header: React.FC = () => {
  const router = useRouter();

  const navItem = [
    { url: 'case', name: '導入事例' },
    { url: 'scene', name: '導入シーン' },
    { url: 'features', name: '機能' },
    { url: 'news', name: '新着一覧' },
    { url: 'handbook', name: 'お役立ち資料' },
    { url: 'faq', name: 'FAQ' },
  ];
  const [isHeaderShown, setIsHeaderClass] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);
  const headerHeight = 0;

  const scrollEvent = useCallback(() => {
    const offset = window.pageYOffset;

    if (offset > headerHeight) {
      setIsHeaderClass(false);
    } else {
      setIsHeaderClass(true);
    }

    setLastPosition(offset);
  }, [lastPosition]);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <>
      <header
        className={
          isHeaderShown == true
            ? styles.header
            : `${styles.headerFixed} ${styles.header}`
        }>
        <div className={styles.logo}>
          <Link href='/'>
            <a>
              <div className={styles.logoImg}>
                <Image
                  src='/images/rura_logo_blue.svg'
                  alt='遠隔接客サービスRURA'
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
              {router.pathname == '/' ? (
                <>
                  {navItem.map((navContent) => (
                    <li key={navContent.name}>
                      <Scroll to={navContent.url} smooth={true} duration={600}>
                        {navContent.name}
                      </Scroll>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {navItem.map((navContent) => (
                    <li key={navContent.name}>
                      <Link href='/' as={`/#${navContent.url}`}>
                        {navContent.name}
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </nav>

          <Button
            bgColor='primary'
            size={isHeaderShown == true ? 'normal' : 'headerSmall'}
            types='link'
            href='/download'
            id='headerD'>
            資料ダウンロード
          </Button>
          <Button
            bgColor='secondary'
            size={isHeaderShown == true ? 'normal' : 'headerSmall'}
            types='link'
            href='/contact'
            id='headerC'>
            お問い合わせ
          </Button>
        </div>
        <DrawerMenu />
      </header>
      <TopButton />
    </>
  );
};
