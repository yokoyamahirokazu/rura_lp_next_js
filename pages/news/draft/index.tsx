import { NextPage } from 'next';
import { IBanner, IBlog, ICategory, IPopularArticles, ITag } from '@/types';
import { useDraft } from '@hooks';
import { BreadCrumb } from '@components/BreadCrumb';
import { Latest } from '@components/Latest';
import { Loader } from '@components/Loader';
import { Meta } from '@components/Meta';
import { Post, Share } from '@components';
import { getContents } from '@blog';
import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import Button from '@components/Button';

type DraftProps = {
  blogs: IBlog[];
  categories: ICategory[];
  popularArticles: IPopularArticles;
  banner: IBanner;
  tags: ITag[];
};

const Draft: NextPage<DraftProps> = (props) => {
  const { data, isLoading } = useDraft();

  if (isLoading || !data) {
    return <Loader />;
  }
  return (
    <>
      <div>
        <BreadCrumb category={data.blog.category} />

        <div className={styles.postOgpImage}>
          <picture>
            <source
              media="(min-width: 1160px)"
              type="image/webp"
              srcSet={`${data.blog.ogimage.url}?w=820&fm=webp, ${data.blog.ogimage.url}?w=1640&fm=webp 2x`}
            />
            <source
              media="(min-width: 820px)"
              type="image/webp"
              srcSet={`${data.blog.ogimage.url}?w=740&fm=webp, ${data.blog.ogimage.url}?w=1480&fm=webp 2x`}
            />
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet={`${data.blog.ogimage.url}?w=728&fm=webp, ${data.blog.ogimage.url}?w=1456&fm=webp 2x`}
            />
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet={`${data.blog.ogimage.url}?w=375&fm=webp, ${data.blog.ogimage.url}?w=750&fm=webp 2x`}
            />
            <Image
              src={`${data.blog.ogimage?.url}?w=820&q=100`}
              alt={data.blog.title}
              layout={'fill'}
              objectFit={'contain'}
            />
          </picture>
        </div>
        <div className={styles.postContent}>
          <h1 className={styles.title}>{data.blog.title}</h1>
          <div className={styles.postMetaFlex}>
            <Meta category={data.blog.category} createdAt={data.blog.createdAt} isDetail={true} />
            <Share id={data.blog.id} title={data.blog.title} />
          </div>

          {/* <div className={styles.postBody}>{data.blog.toc_visible && <Toc toc={data.toc} />}</div> */}
          <Post body={data.body} />

          <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: data.body }}></div>

          <div className={styles.postContactBox}>
            <div className={styles.postContactBoxLogo}>
              <div className={styles.postContactBoxLogoImg}>
                <Image
                  src="/images/rura_logo_blue.svg"
                  alt={data.blog.title}
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
              <p>資料ダウンロード・お問い合わせはこちら</p>
            </div>
            <div className={styles.contactSectionLogoBtn}>
              <Button
                bgColor="primary"
                size="large"
                types="link"
                href="/download/"
                icon="download"
                id={`${data.blog.id}D`}
              >
                資料ダウンロード
              </Button>
              <Button
                bgColor="secondary"
                size="large"
                types="link"
                href="/contact"
                icon="contact"
                id={`${data.blog.id}C`}
              >
                お問い合わせ
              </Button>
            </div>
          </div>
          <Share id={data.blog.id} title={data.blog.title} />
        </div>
        <Latest blogs={props.blogs} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const { blogs, categories, tags } = await getContents();
  return {
    props: {
      blogs,
      categories,
      tags,
    },
  };
}
export default Draft;
