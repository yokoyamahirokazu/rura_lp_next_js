import Link from 'next/link';
import styles from '@styles/components/Header.module.css';
import Button from '@components/Button';

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img className={styles.logoImg} src="/images/rura_logo_blue.svg" alt="RURA" />
              <p className={styles.logoText}>遠隔接客サービス</p>
            </a>
          </Link>
        </div>
        <div className={styles.headerRight}>
          <nav className={styles.header_nav}>
            <ul>
              <li>
                <Link href="/">
                  <a>導入事例</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>サービス</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>シーン</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>デザイン</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>機能</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>お知らせ</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>FAQ</a>
                </Link>
              </li>
            </ul>
          </nav>
          <Button bgColor="primary" size="normal" types="link" href="/">
            資料ダウンロード
          </Button>
          <Button bgColor="secondary" size="normal" types="link" href="/contact">
            お問い合わせ
          </Button>
        </div>
      </header>
    </>
  );
};
