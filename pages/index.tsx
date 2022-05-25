import { NextPage } from 'next';

import { IBlog, ICategory } from '@/types';
import {
  Hero,
  Case,
  Recommend,
  Faqs,
  Handbook,
  Service,
  Scene,
  Design,
  Features,
  Newsindex,
} from '@components';
import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';
import { config } from '@site.config';
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
      <Case articles={props.caseItem} />
      <Service />
      <ContactSection downloadId='indexD1' contactId='indexC1' />
      <Scene />
      <Design />
      <ContactSection downloadId='indexD2' contactId='indexC2' />
      <Recommend articles={props.recommendItem} />
      <Features />
      <ContactSection downloadId='indexD3' contactId='indexC3' />
      <Newsindex articles={props.blogItem} />
      <Handbook articles={props.handbookItem} />
      <Faqs articles={props.faqItem} />
      <ContactSection downloadId='indexD4' contactId='indexC4' />
    </>
  );
};

export async function getStaticProps(): Promise<{
  props: {
    blogItem;
    caseItem;
    recommendItem;
    faqItem;
    handbookItem;
    cateoryItem;
  };
}> {
  const caseData = await client.get({ endpoint: 'case' });
  const recommendData = await client.get({ endpoint: 'recommend' });
  const faqData = await client.get({ endpoint: 'faq' });
  const handbookData = await client.get({
    endpoint: 'whitepaper',
    queries: { limit: config.defaultMaxLimit },
  });
  const blogData = await client.get({
    endpoint: 'blog',
    queries: { limit: 5 },
  });
  const categoryData = await client.get({ endpoint: 'categories' });

  return {
    props: {
      blogItem: blogData.contents,
      caseItem: caseData.contents,
      recommendItem: recommendData.contents,
      faqItem: faqData.contents,
      handbookItem: handbookData.contents,
      cateoryItem: categoryData.contents,
    },
  };
}

export default Index;
