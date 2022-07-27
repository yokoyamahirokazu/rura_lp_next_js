import { NextPage } from 'next';
import React from 'react';

import { Header, Footer } from '@components';
import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';
import styles from '@styles/components/Components.module.css';

import About from './components/about';
import Case from './components/case';
import Company from './components/company';
import Functions from './components/functions';
import Hero from './components/hero';
import Solution from './components/solution';
import Task from './components/task';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'simple',
    },
  };
};

const Funeral: NextPage = () => {
  const navItem = [
    { url: 'about', name: 'RURAとは？' },
    { url: 'solution', name: '課題解決' },
    { url: 'case', name: '活用事例' },
    { url: 'company', name: '運営会社' },
  ];

  const mainCopyData = '葬儀業界に新たな店舗運営を';
  const subCopyData =
    '人材不足、店舗拡大に関わる課題をRURAが解決。<br/>お店の省人化や無人化など新しい店舗運営をご提案いたします。';

  const bgImageData = '/images/funeral_bg.png';
  const workerImageData = '/images/funeral_worker.png';
  const contactBgData = '/images/funeral_contact_bg.png';
  const contactCopyData = '葬儀業界に新たな店舗運営を';

  return (
    <>
      <SeoContent
        pageTitle='葬儀業界向け'
        pageDescription='遠隔接客サービスRURAの運営会社タイムリープ株式会社をご紹介します。'
      />
      <Header
        navItemList={navItem}
        original={'true'}
        dlLink={'/download/u-fskwgyeq'}
      />
      <div className='main funeral'>
        <Hero
          mainCopyProps={mainCopyData}
          subCopyProps={subCopyData}
          bgImage={bgImageData}
          workerImage={workerImageData}
          styleName={'funeralHero'}
        />

        <div className={styles.funeral}>
          <Task />
          <About />
          <ContactSection
            downloadId=''
            contactId=''
            bgProps={contactBgData}
            copy={contactCopyData}
            type={'funeral'}
            dlLink={'/download/u-fskwgyeq'}
          />
          <Solution />
          <ContactSection
            downloadId=''
            contactId=''
            bgProps={contactBgData}
            copy={contactCopyData}
            type={'funeral'}
            dlLink={'/download/u-fskwgyeq'}
          />
          <Functions />
          <Case />
          <ContactSection
            downloadId=''
            contactId=''
            bgProps={contactBgData}
            copy={contactCopyData}
            type={'funeral'}
            dlLink={'/download/u-fskwgyeq'}
          />
          <Company />
        </div>
      </div>
      <Footer dlLink={'/download/u-fskwgyeq'} />
    </>
  );
};

export default Funeral;
