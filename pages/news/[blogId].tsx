import { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { BreadCrumb } from '@components/BreadCrumb';
import { Categories } from '@components/Categories';
import { Latest } from '@components/Latest';
import { Loader } from '@components/Loader';
import { Meta } from '@components/Meta';
import { Post, Share, Toc } from '@components';
import { IBlog, ICategory, ITag, TocTypes } from '@/types/interface';
import { convertToToc, convertToHtml } from '@scripts';
import { getAllBlogs, getBlogById, getContents } from '@blog';
import { Tags } from '@components/Tags';
import styles from '@styles/components/Components.module.css';
import Image from 'next/image';

type DetailProps = {
  blog: IBlog;
  body: string;
  toc: TocTypes[];
  blogs: IBlog[];
  categories: ICategory[];
  tags: ITag[];
};

const Detail: NextPage<DetailProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
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
          <Meta
            category={props.blog.category}
            createdAt={props.blog.createdAt}
            tags={props.blog.tag}
            isDetail={true}
          />
          <Share id={props.blog.id} title={props.blog.title} />
        </div>

        <div className={styles.postBody}>{props.blog.toc_visible && <Toc toc={props.toc} />}</div>
        <Post body={props.body} />
      </div>

      <Categories categories={props.categories} />
      <Tags tags={props.tags} />
      <Latest blogs={props.blogs} />
    </div>
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
  const { blogs, categories, tags } = await getContents();

  return {
    props: {
      blog,
      body,
      toc,
      blogs,
      categories,
      tags,
    },
  };
}
export default Detail;
