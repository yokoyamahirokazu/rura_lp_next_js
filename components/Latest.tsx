import { Meta } from '@components';
import styles from '@styles/components/Components.module.css';
import { IBlog } from '@types';
import NextLink from 'next/link';

type LatestProps = {
  blogs: IBlog[];
};

export const Latest: React.FC<LatestProps> = (props) => {
  return (
    <div className={styles.latestPost}>
      <ul className={styles.news}>
        {props.blogs.slice(0, 5).map((blog) => {
          return (
            <li key={blog.id}>
              <NextLink href={`/news/${blog.id}`}>
                <a>
                  <h3>{blog.title}</h3>
                  <Meta
                    createdAt={blog.createdAt}
                    category={blog.category}
                    tags={blog.tag}
                  />
                </a>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
