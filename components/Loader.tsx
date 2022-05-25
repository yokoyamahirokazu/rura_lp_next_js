import Image from 'next/image';

import styles from '@styles/components/Loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <Image
        className={styles.loadingicon}
        src='/images/icon_loading.svg'
        alt='検索中'
        width={'32px'}
        height={'32px'}
      />
    </div>
  );
};
