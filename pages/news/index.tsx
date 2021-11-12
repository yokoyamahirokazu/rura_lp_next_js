import { GetStaticPropsContext, NextPage } from 'next';
import Link from 'next/link';
import { BreadCrumb, Categories, Meta, Pager } from '@components';
import { IBlog, ICategory, IPopularArticles, ITag } from '@/types';
import { getContents } from '@blog';
import { Tags } from '@components/Tags';
import styles from '@styles/components/Components.module.css';

type IndexProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  popularArticles: IPopularArticles;
  pager: [];
  tags: ITag[];
};

const Index: NextPage<IndexProps> = (props) => {
  return (
    <>
      <BreadCrumb />

      <Categories categories={props.categories} />

      {props.blogs.length === 0 && <>記事がありません</>}
      <ul className={styles.news}>
        {props.blogs.map((blog) => {
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
      {props.blogs.length > 0 && (
        <ul className="pager">
          <Pager pager={props.pager} currentPage={props.currentPage} />
        </ul>
      )}

      <Tags tags={props.tags} />
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const page: any = context.params || '1';
  const { blogs, pager, categories, tags } = await getContents(page);
  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      categories,
      pager,
      tags,
    },
  };
}

export default Index;
