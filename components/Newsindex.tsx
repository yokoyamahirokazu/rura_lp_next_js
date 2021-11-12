import styles from '@styles/components/Components.module.css';
import { IBlog } from '@/types';
import { Meta } from '@components';
import Link from 'next/link';
import Button from '@components/Button';

type CaesProps = {
  articles: IBlog[];
};
export const Newsindex: React.FC<CaesProps> = (props) => {
  return (
    <section>
      <div className={styles.section_inner}>
        <div className={styles.sectionFlex}>
          <div className={styles.sectionFlexLeft}>
            <h2 className={styles.headline}>
              新着情報<span>ニュースリリースやイベント情報など</span>
            </h2>
          </div>
          <div className={styles.sectionFlexRight}>
            {props.articles.length === 0 && <>記事がありません</>}
            <ul className={styles.news}>
              {props.articles.map((blog) => {
                return (
                  <li key={blog.id}>
                    <Link href="/news/[blogId]" as={`/news/${blog.id}`}>
                      <a>
                        <h3>{blog.title}</h3>
                        <Meta createdAt={blog.createdAt} category={blog.category} tags={blog.tag} />
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={styles.newx_list_link}>
              <Button bgColor="normal" size="normal" types="link" href="/news/">
                全ての記事を見る
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsindex;
