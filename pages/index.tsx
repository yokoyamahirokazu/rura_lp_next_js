import { NextPage } from 'next';
import { Hero, Scene, Newsindex } from '@components';

import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';
import { IBlog, ICategory, IPopularArticles } from '@/types';
import { client } from 'framework/client';

interface caseItems {
  id?: string;
  caseName?: string;
  caseType?: string;
  caseBody?: string;
  width: number;
  height: number;
  caseImg?: {
    url: string;
  };
  caseLogo1?: {
    url: string;
  };
  caseLogo2?: {
    url: string;
  };
}
interface recommendItems {
  id?: string;
  company?: string;
  name?: string;
  body?: string;
  img?: {
    url: string;
  };
}
interface faqItems {
  id?: string;
  question?: string;
  answer?: string;
}
interface handbookItems {
  id?: string;
  title?: string;
  smallBanner?: string;
  img?: {
    url: string;
  };
  smallBannerImg?: {
    url: string;
  };
}

type IndexProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  popularArticles: IPopularArticles;
  pager: [];
  blogItem: IBlog[];
  caseItem: caseItems[];
  recommendItem: recommendItems[];
  faqItem: faqItems[];
  handbookItem: handbookItems[];
};

const Index: NextPage<IndexProps> = (props) => {
  return (
    <>
      <SeoContent />
      <Hero />
      <Newsindex articles={props.blogItem} />
      <ContactSection downloadId='indexD1' contactId='indexC1' />
      <Scene />
    </>
  );
};

export async function getStaticProps() {
  const blogData = await client.get({
    endpoint: 'blog',
    queries: { limit: 5 },
  });
  const categoryData = await client.get({ endpoint: 'categories' });

  return {
    props: {
      blogItem: blogData.contents,
      cateoryItem: categoryData.contents,
    },
  };
}

export default Index;
