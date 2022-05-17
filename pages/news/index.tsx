import { GetStaticPropsContext, NextPage } from 'next';
import Link from 'next/link';
import { BreadCrumb, Categories, Meta, Pager } from '@components';
import { IBlog, ICategory, IPopularArticles } from '@/types';
import { getContents } from '@blog';
import styles from '@styles/components/Components.module.css';
import SeoContent from '@components/SeoContent';
import { useRouter } from 'next/router';

type IndexProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  popularArticles: IPopularArticles;
  pager: [];
};

const Index: NextPage<IndexProps> = (props) => {
  const router = useRouter();

  return (
    <>
      <SeoContent
        pageTitle='新着情報'
        pageDescription='遠隔接客サービスの新着情報をお届けします。'
        pageUrl={router.asPath}
      />
      <BreadCrumb />
      <div className={styles.newsListHead}>
        <div className={styles.newsListHeadInnder}>
          <div className={styles.headline_box_center}>
            <h1 className={styles.headline}>新着情報</h1>
          </div>
          <Categories categories={props.categories} />
        </div>
      </div>
      <div className={styles.newsListContent}>
        {props.blogs.length === 0 && <>記事がありません</>}
        <ul className={styles.news}>
          {props.blogs.map((blog) => {
            return (
              <li key={blog.id}>
                <Link href='/news/[blogId]' as={`/news/${blog.id}`}>
                  <a>
                    <h3>{blog.title}</h3>
                    <Meta
                      createdAt={blog.createdAt}
                      category={blog.category}
                      tags={blog.tag}
                    />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {props.blogs.length > 0 && (
          <ul className='pager'>
            <Pager pager={props.pager} currentPage={props.currentPage} />
          </ul>
        )}
      </div>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const page: any = context.params || '1';
  const { blogs, pager, categories } = await getContents(page);

  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      categories,
      pager,
    },
  };
}

export default Index;
