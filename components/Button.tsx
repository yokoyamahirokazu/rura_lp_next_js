import Link from 'next/link';
import styles from '@styles/components/Parts.module.css';
import { IoDocumentTextOutline, IoMailOutline } from 'react-icons/io5';
interface Props {
  children?: string;
  href?: string;
  types?: string;
  type?: string;
  bgColor?: string;
  size?: string;
  icon?: string;
  errorText?: string;
  submittingText?: string;
  as?: string;
  target?: string;
  id?: string;
  classNames?: string;
}

const Button = ({
  children,
  href,
  types,
  bgColor,
  size,
  id,
  icon,
  classNames,
  errorText,
  as,
  submittingText,
}: Props) => {
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
      {types == 'submit' ? (
        <button
          type="submit"
          className={classNames}
          data-formrun-error-text={errorText}
          data-formrun-submitting-text={submittingText}
        >
          {children}
        </button>
      ) : (
        <Link href={href} as={as}>
          <a className={classNames} id={id}>
            {(() => {
              if (icon) {
                if (icon == 'download') {
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
