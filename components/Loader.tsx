import styles from "@styles/components/Loader.module.scss";
import Image from "next/image";

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <Image
        className={styles.loadingicon}
        src='/images/icon_loading.svg'
        alt='検索中'
      />
    </div>
  );
};
