import Link from 'next/link';
import { ICategory, ITag } from '@/types';
import styles from '@styles/components/Components.module.css';

type BreadCrumbProps = {
  category?: ICategory;
  tag?: ITag;
};

export const BreadCrumb: React.FC<BreadCrumbProps> = (props) => {
  const hasCategory = (category?: ICategory) => {
    if (!category) {
      return false;
    }

    return Object.keys(category).length > 0;
  };

  const hasTag = (tag?: ITag) => {
    if (!tag) {
      return false;
    }

    return Object.keys(tag).length > 0;
  };

  return (
    <ul className={styles.breadcrumb}>
      <li className={styles.breadcrumbList}>
        <Link href='/'>HOME</Link>
      </li>
      <li className={styles.slush}>/</li>
      <li className={styles.breadcrumbList}>
        <Link href='/news/page/1'>新着情報</Link>
      </li>
      {hasCategory(props.category) && (
        <>
          <li className={styles.slush}>/</li>
          <li className={styles.breadcrumbList}>
            <Link href={`/news/category/${props.category?.id}/page/1`}>
              {props.category?.name}
            </Link>
          </li>
        </>
      )}
      {hasTag(props.tag) && (
        <>
          <li className={styles.slush}>/</li>
          <li className={styles.breadcrumbList}>
            <Link href={`/news/tag/${props.tag?.id}/page/1`}>
              {props.tag.name}
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};
