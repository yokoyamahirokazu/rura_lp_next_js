import Link from 'next/link';
import styles from '@styles/components/Parts.module.css';
import { IoDocumentTextOutline, IoMailOutline } from 'react-icons/io5';
import { icons } from '@react-icons/all-files';

interface Props {
  children?: string;
  href?: string;
  types?: string;
  bgColor?: string;
  size?: string;
  icon?: string;
  classNames?: string;
}

const Button = ({ children, href, types, bgColor, size, icon, classNames }: Props) => {
  {
    if (size == 'normal') {
      bgColor == 'normal' && (classNames = styles.btn);
      bgColor == 'primary' && (classNames = `${styles.btn} ${styles.primary}`);
      bgColor == 'secondary' && (classNames = `${styles.btn} ${styles.secondary}`);
    }
    if (size == 'large') {
      bgColor == 'primary' && (classNames = `${styles.btn} ${styles.primary}  ${styles.large}`);
      bgColor == 'secondary' && (classNames = `${styles.btn} ${styles.secondary} ${styles.large}`);
    }
  }

  return (
    <>
      {types == 'button' ? (
        <button type="button" className={classNames}>
          {children}
        </button>
      ) : (
        <Link href={href}>
          <a className={classNames}>
            {(() => {
              if (icon) {
                if (icon == 'donwload') {
                  return <IoDocumentTextOutline />;
                }
                if (icon == 'contact') {
                  return <IoMailOutline />;
                }
              }
            })()}

            {children}
          </a>
        </Link>
      )}
    </>
  );
};

export default Button;
