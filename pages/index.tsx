import { NextPage } from 'next';
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
import { IBlog, ICategory, IPopularArticles, ITag } from '@/types';
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
  tags: ITag[];
  blogItem: IBlog[];
  caseItem: caseItems[];
  recommendItem: recommendItems[];
  faqItem: faqItems[];
  handbookItem: handbookItems[];
};

const Index: NextPage<IndexProps> = (props) => {
  return (
    <div>
      <Hero />
      <Case articles={props.caseItem} />
      <Service />
      <ContactSection num="cs1" />
      <Scene />
      <Design />
      <ContactSection num="cs2" />
      <Recommend articles={props.recommendItem} />
      <Features />
      <ContactSection num="cs3" />
      <Newsindex articles={props.blogItem} />
      <Handbook articles={props.handbookItem} />
      <Faqs articles={props.faqItem} />
    </div>
  );
};

export async function getStaticProps() {
  const caseData = await client.get({ endpoint: 'case' });
  const recommendData = await client.get({ endpoint: 'recommend' });
  const faqData = await client.get({ endpoint: 'faq' });
  const handbookData = await client.get({ endpoint: 'whitepaper' });
  const blogData = await client.get({
    endpoint: 'blog',
    queries: { limit: 5 },
  });

  return {
    props: {
      blogItem: blogData.contents,
      caseItem: caseData.contents,
      recommendItem: recommendData.contents,
      faqItem: faqData.contents,
      handbookItem: handbookData.contents,
    },
  };
}

export default Index;
