import { ICategory } from '@/types';
import Button from '@components/Button';
import styles from '@styles/components/Components.module.css';

type CategoriesProps = {
  categories: ICategory[];
};

export const Categories: React.FC<CategoriesProps> = (props) => {
  return (
    <div className={styles.newsCategoryFlex}>
      <p className={styles.newsCategoryTitle}>カテゴリー</p>
      <ul className={styles.newsCategoryList}>
        {props.categories.map((category) => {
          return (
            <li key={category.id}>
              <Button
                bgColor='normal'
                size='normal'
                types='link'
                href='/news/category/[categoryId]/page/[id]'
                as={`/news/category/${category.id}/page/1`}>
                {category.name}
              </Button>
            </li>
          );
        })}
        <li>
          <Button
            bgColor='normal'
            size='normal'
            types='link'
            href='/news/page/1'>
            全ての記事
          </Button>
        </li>
      </ul>
    </div>
  );
};
