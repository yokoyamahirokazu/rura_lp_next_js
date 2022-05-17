import { GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { BreadCrumb, Categories, Loader, Meta, Pager } from "@components";
import { IBanner, IBlog, ICategory, IPopularArticles, ITag } from "@/types";
import { getContents } from "@blog";
import styles from "@styles/components/Components.module.css";
import Image from "next/image";
import SeoContent from "@components/SeoContent";
import ContactSection from "@components/ContactSection";
import { IoPricetagsOutline } from "react-icons/io5";

type PageProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  popularArticles: IPopularArticles;
  banner: IBanner;
  pager: [];
  selectedTag: ITag;
  tags: ITag[];
};

const Page: NextPage<PageProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <SeoContent
        pageTitle={props.selectedTag.name}
        pageDescription={`「${props.selectedTag.name}]記事一覧ページです。`}
        pageUrl={router.asPath}
      />
      <BreadCrumb />
      <div className={styles.newsListHead}>
        <div className={styles.newsListHeadInnder}>
          <div className={styles.headline_box_center_nomargin}>
            <h1 className={styles.headline}>
              <IoPricetagsOutline />
              {props.selectedTag.name}
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.newsListContent}>
        {props.blogs.length === 0 && (
          <div className={styles.noPost}>
            <p>記事がありません</p>
          </div>
        )}
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
                          layout={"fill"}
                          objectFit={"cover"}
                        />
                      </div>
                    ) : (
                      <div className={styles.newsImagesBox}>
                        <Image
                          src='/images/noimage.png'
                          alt={blog.title}
                          layout={"fill"}
                          objectFit={"cover"}
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
        {props.blogs.length > 0 && (
          <ul className='pager'>
            <Pager
              pager={props.pager}
              currentPage={props.currentPage}
              selectedTag={props.selectedTag}
            />
          </ul>
        )}
      </div>
      <section>
        <div className={styles.section_inner}>
          <Categories categories={props.categories} />
        </div>
      </section>
      <ContactSection
        downloadId={`${props.selectedTag.id}D`}
        contactId={`${props.selectedTag.id}C`}
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
  const page: any = context.params?.id || "1";
  const tagId = context.params?.tagId;

  const articleFilter =
    tagId !== undefined ? `tag[contains]${tagId}` : undefined;

  const { blogs, pager, categories, tags } = await getContents(
    page,
    articleFilter,
  );
  const selectedTag =
    tagId !== undefined
      ? tags.find((content) => content.id === tagId)
      : undefined;

  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      categories,
      pager,
      selectedTag,
      tags,
    },
  };
}
export default Page;
