import NextLink from 'next/link';
import { ITag } from '@types';
import styles from '@styles/components/Components.module.css';
import { IoPricetagsOutline } from 'react-icons/io5';

type TagsProps = {
  tags: ITag[];
};

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <>
      <ul className={styles.tagList}>
        {tags.map((tag) => (
          <li key={tag.id}>
            <NextLink
              href='/news/tag/[tagId]/page/[id]'
              as={`/news/tag/${tag.id}/page/1`}>
              <a>
                <IoPricetagsOutline />
                {tag.name}
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </>
  );
};
