import Link from 'next/link';
import React from 'react';
import styles from '@styles/components/Header.module.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { IoIosMenu } from 'react-icons/io';
import { useRouter } from 'next/router';
import { Link as Scroll } from 'react-scroll';
import Image from 'next/image';
import Button from '@components/Button';

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

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
      <button className={styles.drawerBtn} onClick={toggleDrawer}>
        <IoIosMenu />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='right'>
        <div className={styles.drawerInner}>
          <div className={styles.drawerInnerContent}>
            <div className={styles.drawerLogo}>
              <Link href="/">
                <a>
                  <div className={styles.drawerLogoImg}>
                    <Image
                      src='/images/rura_logo_blue.svg'
                      alt='遠隔接客サービスRURA'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                </a>
              </Link>
            </div>

            <ul>
              <li>
                <Link href={'/'}>
                  <a onClick={toggleDrawer}>ホーム</a>
                </Link>
              </li>

              {router.pathname == '/' ? (
                <>
                  {navItem.map((items) => (
                    <li key={items.url}>
                      <Scroll
                        to={items.url}
                        smooth={true}
                        duration={600}
                        onClick={toggleDrawer}
                      >
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
                        <a onClick={toggleDrawer}>{items.name}</a>
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>

            <div className={styles.drawerInnerBtn}>
              <div onClick={toggleDrawer}>
                <Button
                  bgColor='primary'
                  size='normal'
                  types='link'
                  href='/download'
                  id='drawerD'
                >
                  資料ダウンロード
                </Button>
              </div>
              <div onClick={toggleDrawer}>
                <Button
                  bgColor='secondary'
                  size='normal'
                  types='link'
                  href='/contact'
                  id='drawerC'
                >
                  お問い合わせ
                </Button>
              </div>
            </div>
            <ul className={styles.simple}>
              <li>
                <Link href={'/company'}>
                  <a onClick={toggleDrawer}>運営会社</a>
                </Link>
              </li>
              <li>
                <Link href={'/company/privacy-policy'}>
                  <a onClick={toggleDrawer}>プライバシーポリシー</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
