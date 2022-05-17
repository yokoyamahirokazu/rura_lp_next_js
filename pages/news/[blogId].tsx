import { GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { BreadCrumb } from "@components/BreadCrumb";
import { Latest } from "@components/Latest";
import { Meta } from "@components/Meta";
import { Share, Loader } from "@components";
import { IBlog, ITag, ICategory } from "@/types/interface";
import { convertToHtml } from "@scripts";
import { getAllBlogs, getBlogById, getContents } from "@blog";
import styles from "@styles/components/Components.module.css";
import Image from "next/image";
import Button from "@components/Button";
import { client } from "@framework/client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SeoContent from "@components/SeoContent";
import { Tags } from "@components/Tags";

type DetailProps = {
  blog: IBlog;
  body: string;
  blogs: IBlog[];
  categories: ICategory[];
  prevEntry: IBlog;
  nextEntry: IBlog;
  tags: ITag[];
};

const Detail: NextPage<DetailProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  const cotegoryLink = "/news/category/" + props.blog.category.id + "/page/1";
  const cotegoryLinkName = props.blog.category.name + "の記事一覧を見る";
  const tagContent = props.blog.tag.map((tagName) => {
    return `&hashtags=${tagName.name}`;
  });
  const tagDataDefalt = tagContent.join("");
  const tagData = tagDataDefalt;

  return (
    <>
      <SeoContent
        pageTitle={props.blog.title}
        pageDescription={props.blog.description && props.blog.description}
        pageUrl={router.asPath}
        ogpImg={props.blog.ogimage && props.blog.ogimage.url}
      />
      <BreadCrumb category={props.blog.category} />
      <div className={styles.postPage}>
        {props.blog.ogimage && (
          <div className={styles.postOgpImage}>
            <picture>
              <source
                media='(min-width: 1160px)'
                type='image/webp'
                srcSet={`${props.blog.ogimage.url}?w=820&fm=webp, ${props.blog.ogimage.url}?w=1640&fm=webp 2x`}
              />
              <source
                media='(min-width: 820px)'
                type='image/webp'
                srcSet={`${props.blog.ogimage.url}?w=740&fm=webp, ${props.blog.ogimage.url}?w=1480&fm=webp 2x`}
              />
              <source
                media='(min-width: 768px)'
                type='image/webp'
                srcSet={`${props.blog.ogimage.url}?w=728&fm=webp, ${props.blog.ogimage.url}?w=1456&fm=webp 2x`}
              />
              <source
                media='(min-width: 768px)'
                type='image/webp'
                srcSet={`${props.blog.ogimage.url}?w=375&fm=webp, ${props.blog.ogimage.url}?w=750&fm=webp 2x`}
              />
              <Image
                src={`${props.blog.ogimage?.url}?w=820&q=100`}
                alt={props.blog.title}
                layout={"fill"}
                objectFit={"contain"}
              />
            </picture>
          </div>
        )}
        <div className={styles.postContent}>
          <h1 className={styles.title}>{props.blog.title}</h1>
          <div className={styles.postMetaFlex}>
            <Meta
              category={props.blog.category}
              createdAt={props.blog.postDate}
              isDetail={true}
            />
            <Share
              id={props.blog.id}
              title={props.blog.title}
              tagData={tagData && tagData}
            />
          </div>

          <div
            className={styles.postBody}
            dangerouslySetInnerHTML={{ __html: props.body }}
          ></div>

          <div className={styles.postContactBox}>
            <div className={styles.postContactBoxLogo}>
              <div className={styles.postContactBoxLogoImg}>
                <Image
                  src='/images/rura_logo_blue.svg'
                  alt={props.blog.title}
                  layout={"fill"}
                  objectFit={"contain"}
                />
              </div>
              <p>資料ダウンロード・お問い合わせはこちら</p>
            </div>
            <div className={styles.contactSectionLogoBtn}>
              <Button
                bgColor='primary'
                size='large'
                types='link'
                href='/download/'
                icon='download'
                id={`${props.blog.id}D`}
              >
                資料ダウンロード
              </Button>
              <Button
                bgColor='secondary'
                size='large'
                types='link'
                href='/contact'
                icon='contact'
                id={`${props.blog.id}C`}
              >
                お問い合わせ
              </Button>
            </div>
          </div>
          <Tags tags={props.blog.tag} />
          <Share
            id={props.blog.id}
            title={props.blog.title}
            tagData={tagData && tagData}
          />
        </div>
        <div className={styles.nextPreviewWrapper}>
          <div className={styles.nextPreview}>
            <div className={styles.nextPreviewbox}>
              {(() => {
                if (props.nextEntry.id) {
                  return (
                    <a
                      className={styles.prev}
                      href={`/news/${props.nextEntry.id}`}
                    >
                      {props.nextEntry.title}
                      <IoIosArrowBack />
                    </a>
                  );
                }
              })()}
            </div>
            <div className={styles.nextPreviewbox}>
              {(() => {
                if (props.prevEntry.id) {
                  return (
                    <a
                      className={styles.next}
                      href={`/news/${props.prevEntry.id}`}
                    >
                      {props.prevEntry.title}
                      <IoIosArrowForward />
                    </a>
                  );
                }
              })()}
            </div>
          </div>
        </div>
        <div className={styles.categoryLinkBtnBox}>
          <Button
            bgColor='normal'
            size='normal'
            types='link'
            href={cotegoryLink}
          >
            {cotegoryLinkName}
          </Button>
          <Button
            bgColor='normal'
            size='normal'
            types='link'
            href='/news/page/1'
          >
            全ての記事を見る
          </Button>
        </div>
        <Latest blogs={props.blogs} />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const ids = blogs.contents.map((blog) => {
    return { params: { blogId: blog.id } };
  });

  return {
    paths: ids,
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const blogId: any = context.params?.blogId || "1";
  const blog = await getBlogById(blogId);
  const body = convertToHtml(blog.body);
  const { blogs, categories, tags } = await getContents();

  const entry = await client.get({ endpoint: "blog", contentId: blogId });
  const fields = "id,title,postDate";
  const prev = await client.get({
    endpoint: "blog",
    queries: {
      limit: 1,
      orders: "-postDate",
      fields,
      filters: `postDate[less_than]${entry.postDate}`,
    },
  });

  const next = await client.get({
    endpoint: "blog",
    queries: {
      limit: 1,
      orders: "postDate",
      fields,
      filters: `postDate[greater_than]${entry.postDate}`,
    },
  });

  const prevEntry = prev.contents[0] || {};
  const nextEntry = next.contents[0] || {};

  return {
    props: {
      blog,
      body,
      blogs,
      tags,
      categories,
      prevEntry,
      nextEntry,
    },
  };
}
export default Detail;
