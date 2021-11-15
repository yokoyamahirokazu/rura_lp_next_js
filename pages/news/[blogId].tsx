import { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { BreadCrumb } from '@components/BreadCrumb';
import { Latest } from '@components/Latest';
import { Loader } from '@components/Loader';
import { Meta } from '@components/Meta';
import { Post, Share, Toc } from '@components';
import { IBlog, ICategory, TocTypes } from '@/types/interface';
import { convertToToc, convertToHtml } from '@scripts';
import { getAllBlogs, getBlogById, getContents } from '@blog';
import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import Button from '@components/Button';

type DetailProps = {
  blog: IBlog;
  body: string;
  toc: TocTypes[];
  blogs: IBlog[];
  categories: ICategory[];
};

const Detail: NextPage<DetailProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  const cotegoryLink = '/news/category/' + props.blog.category.id + '/page/1';
  const cotegoryLinkName = props.blog.category.name + 'の記事一覧を見る';
  return (
    <>
      <div>
        <BreadCrumb category={props.blog.category} />

        <div className={styles.postOgpImage}>
          <picture>
            <source
              media="(min-width: 1160px)"
              type="image/webp"
              srcSet={`${props.blog.ogimage.url}?w=820&fm=webp, ${props.blog.ogimage.url}?w=1640&fm=webp 2x`}
            />
            <source
              media="(min-width: 820px)"
              type="image/webp"
              srcSet={`${props.blog.ogimage.url}?w=740&fm=webp, ${props.blog.ogimage.url}?w=1480&fm=webp 2x`}
            />
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet={`${props.blog.ogimage.url}?w=728&fm=webp, ${props.blog.ogimage.url}?w=1456&fm=webp 2x`}
            />
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet={`${props.blog.ogimage.url}?w=375&fm=webp, ${props.blog.ogimage.url}?w=750&fm=webp 2x`}
            />

            <Image
              src={`${props.blog.ogimage?.url}?w=820&q=100`}
              alt={props.blog.title}
              layout={'fill'}
              objectFit={'contain'}
            />
          </picture>
        </div>
        <div className={styles.postContent}>
          <h1 className={styles.title}>{props.blog.title}</h1>
          <div className={styles.postMetaFlex}>
            <Meta category={props.blog.category} createdAt={props.blog.createdAt} isDetail={true} />
            <Share id={props.blog.id} title={props.blog.title} />
          </div>

          <div className={styles.postBody}>{props.blog.toc_visible && <Toc toc={props.toc} />}</div>
          <Post body={props.body} />

          <div className={styles.postContactBox}>
            <div className={styles.postContactBoxLogo}>
              <div className={styles.postContactBoxLogoImg}>
                <Image
                  src="/images/rura_logo_blue.svg"
                  alt={props.blog.title}
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
              <p>資料ダウンロード・お問い合わせはこちら</p>
            </div>
            <div className={styles.contactSectionLogoBtn}>
              <Button bgColor="primary" size="large" types="link" href="/download/" icon="download">
                資料ダウンロード
              </Button>
              <Button bgColor="secondary" size="large" types="link" href="/contact" icon="contact">
                お問い合わせ
              </Button>
            </div>
          </div>
          <Share id={props.blog.id} title={props.blog.title} />
          <div className={styles.categoryLinkBtnBox}>
            <Button bgColor="normal" size="normal" types="link" href={cotegoryLink}>
              {cotegoryLinkName}
            </Button>
            <Button bgColor="normal" size="normal" types="link" href="/news/page/1">
              全ての記事を見る
            </Button>
          </div>
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
  const blogId: any = context.params?.blogId || '1';
  const blog = await getBlogById(blogId);
  const toc = convertToToc(blog.body);
  const body = convertToHtml(blog.body);
  const { blogs, categories } = await getContents();

  return {
    props: {
      blog,
      body,
      toc,
      blogs,
      categories,
    },
  };
}
export default Detail;
