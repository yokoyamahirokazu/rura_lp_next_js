import { IBanner, IBlog, ICategory, IPopularArticles } from '@/types';
import { getContents } from '@blog';
import { BreadCrumb, Categories, Loader, Meta, Pager } from '@components';
import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';
import styles from '@styles/components/Components.module.css';
import { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';

type PageProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  popularArticles: IPopularArticles;
  banner: IBanner;
  pager: [];
  selectedCategory: ICategory;
};

const Page: NextPage<PageProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <SeoContent
        pageTitle={props.selectedCategory.name}
        pageDescription={`「${props.selectedCategory.name}]カテゴリー記事一覧ページです。`}
        pageUrl={router.asPath}
      />
      <BreadCrumb />
      <div className={styles.newsListHead}>
        <div className={styles.newsListHeadInnder}>
          <div className={styles.headline_box_center_nomargin}>
            <h1 className={styles.headline}>{props.selectedCategory.name}</h1>
          </div>
          <Categories categories={props.categories} />
        </div>
      </div>
      <div className={styles.newsListContent}>
        {props.blogs.length === 0 && (
          <div className={styles.noPost}>
            <p>記事がありません</p>
          </div>
        )}

        {(() => {
          if (props.selectedCategory.id == 'corporate') {
            return (
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
            );
          } else {
            return (
              <ul className={`${styles.news} ${styles.newsImages}`}>
                {props.blogs.map((blog) => {
                  return (
                    <li key={blog.id}>
                      <Link href='/news/[blogId]' as={`/news/${blog.id}`}>
                        <a>
                          {blog.ogimage ? (
                            <div className={styles.newsImagesBox}>
                              <Image
                                src={`${blog.ogimage.url}?w=670`}
                                alt={blog.title}
                                layout={'fill'}
                                objectFit={'cover'}
                              />
                            </div>
                          ) : (
                            <div className={styles.newsImagesBox}>
                              <Image
                                src='/images/noimage.png'
                                alt={blog.title}
                                layout={'fill'}
                                objectFit={'cover'}
                              />
                            </div>
                          )}

                          <div className={styles.newsImagesTxt}>
                            <h3>{blog.title}</h3>
                            <Meta
                              createdAt={blog.postDate}
                              category={blog.category}
                              tags={blog.tag}
                            />
                          </div>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            );
          }
        })()}

        {props.blogs.length > 0 && (
          <ul className='pager'>
            <Pager
              pager={props.pager}
              currentPage={props.currentPage}
              selectedCategory={props.selectedCategory}
            />
          </ul>
        )}
      </div>
      <ContactSection
        downloadId={`${props.selectedCategory.id}D`}
        contactId={`${props.selectedCategory.id}C`}
      />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const page: any = context.params?.id || '1';
  const categoryId = context.params?.categoryId;
  const articleFilter =
    categoryId !== undefined ? `category[equals]${categoryId}` : undefined;
  const { blogs, pager, categories } = await getContents(page, articleFilter);
  const selectedCategory =
    categoryId !== undefined
      ? categories.find((content) => content.id === categoryId)
      : undefined;

  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      categories,
      pager,
      selectedCategory,
    },
  };
}
export default Page;
