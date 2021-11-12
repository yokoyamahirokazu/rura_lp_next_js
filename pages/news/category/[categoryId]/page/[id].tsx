import { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { BreadCrumb, Categories, Loader, Meta, Pager } from '@components';
import { IBanner, IBlog, ICategory, IPopularArticles, ITag } from '@/types';
import { getContents } from '@blog';
import { Tags } from '@components/Tags';

type PageProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  popularArticles: IPopularArticles;
  banner: IBanner;
  pager: [];
  selectedCategory: ICategory;
  tags: ITag[];
};

const Page: NextPage<PageProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div>
      <div>
        <h1>{props.selectedCategory.name}</h1>
        <BreadCrumb category={props.selectedCategory} />
        {props.blogs.length === 0 && <>記事がありません</>}
        <ul>
          {props.blogs.map((blog) => {
            return (
              <li key={blog.id} className="list">
                <Link href="/news/[blogId]" as={`/news/${blog.id}`}>
                  <a className="link">
                    <>
                      {blog.ogimage && (
                        <picture>
                          <img src={`${blog.ogimage.url}?w=670`} className="ogimage lazyload" />
                        </picture>
                      )}
                      <dl className="content">
                        <dt className="title">{blog.title}</dt>
                        <dd>
                          <Meta
                            createdAt={blog.createdAt}
                            category={blog.category}
                            tags={blog.tag}
                          />
                        </dd>
                      </dl>
                    </>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {props.blogs.length > 0 && (
          <ul className="pager">
            <Pager
              pager={props.pager}
              currentPage={props.currentPage}
              selectedCategory={props.selectedCategory}
            />
          </ul>
        )}
      </div>

      <Categories categories={props.categories} />
      <Tags tags={props.tags} />
    </div>
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
  const articleFilter = categoryId !== undefined ? `category[equals]${categoryId}` : undefined;
  const { blogs, pager, categories, tags } = await getContents(page, articleFilter);
  const selectedCategory =
    categoryId !== undefined ? categories.find((content) => content.id === categoryId) : undefined;

  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      categories,
      pager,
      selectedCategory,
      tags,
    },
  };
}
export default Page;
