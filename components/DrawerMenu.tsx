import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Link as Scroll } from 'react-scroll';

import Button from '@components/Button';
import styles from '@styles/components/Header.module.css';

interface NavItem {
  url?: string;
  name?: string;
}

type NavItemProps = {
  navItemList?: NavItem[];
  original?: string;
  drawerDonwloadId?: string;
  drawerContactId?: string;
  drawerMeidaUrl?: string;
};

const DrawerMenu: React.FC<NavItemProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const router = useRouter();

  return (
    <>
      <button className={styles.drawerBtn} onClick={toggleDrawer}>
        <IoIosMenu />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='right'>
        <div className={styles.drawerInner}>
          <div className={styles.drawerInnerContent}>
            <Link href='/'>
              <a className={styles.drawerLogo}>
                <Image
                  src='/images/rura_logo_blue.svg'
                  alt='遠隔接客サービスRURA'
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </a>
            </Link>
            <ul>
              <li>
                <Link href={'/'}>
                  <a onClick={toggleDrawer}>ホーム</a>
                </Link>
              </li>

              {router.pathname == '/' || props.original === 'true' ? (
                <>
                  {props.navItemList.map((items) => (
                    <li key={items.url}>
                      <Scroll
                        to={items.url}
                        smooth={true}
                        duration={600}
                        onClick={toggleDrawer}>
                        {items.name}
                      </Scroll>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {props.navItemList.map((items) => (
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
                  id={
                    props.drawerDonwloadId ? props.drawerDonwloadId : 'drawerD'
                  }>
                  資料ダウンロード
                </Button>
              </div>
              <div onClick={toggleDrawer}>
                <Button
                  bgColor='secondary'
                  size='normal'
                  types='link'
                  href='/contact'
                  id={
                    props.drawerContactId ? props.drawerContactId : 'drawerC'
                  }>
                  お問い合わせ
                </Button>
              </div>
            </div>
            <Link
              href={
                props.drawerMeidaUrl
                  ? props.drawerMeidaUrl
                  : 'https://media.timeleap-rura.com?utm_source=rura-lp&utm_medium=banner_drawer'
              }>
              <a target='_blank'>
                <div className={styles.drawerRuraMagazineBanner}>
                  <div className={styles.drawerRuraMagazineLogo}>
                    <Image
                      src='/images/rura_magazine_logo_white.svg'
                      alt='遠隔接客サービスの導入事例・比較・調査など配信中 RURA Magazine'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                </div>
              </a>
            </Link>
            {props.original != 'true' && (
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
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
