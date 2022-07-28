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
        pageTitle='葬儀業界に新たな店舗運営を'
        pageDescription='RURAは、少人数で多拠点の接客を可能にし、効率的な店舗運営を支援するサービス。複数の店舗に『RURA』を設置することで、来館されたお客様への接客を自宅や本社からモニター越しに行なうことができます。優秀なスタッフが少人数で複数箇所を接客できるため、人件費削減や、少人数運営が可能になることでのさらなる店舗拡大、収益向上が同時に実現可能。'
      />
      <Header
        navItemList={navItem}
        original={'true'}
        dlLink={'/download/u-fskwgyeq'}
        donwloadId={'funeralHeaderD'}
        contactId={'funeralHeaderC'}
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
            downloadId='funeralD1'
            contactId='funeralC1'
            bgProps={contactBgData}
            copy={contactCopyData}
            type={'funeral'}
            dlLink={'/download/u-fskwgyeq'}
          />
          <Solution />
          <ContactSection
            downloadId='funeralD2'
            contactId='funeralC2'
            bgProps={contactBgData}
            copy={contactCopyData}
            type={'funeral'}
            dlLink={'/download/u-fskwgyeq'}
          />
          <Functions />
          <Case />
          <ContactSection
            downloadId='funeralD3'
            contactId='funeralC3'
            bgProps={contactBgData}
            copy={contactCopyData}
            type={'funeral'}
            dlLink={'/download/u-fskwgyeq'}
          />
          <Company />
        </div>
      </div>
      <Footer
        dlLink={'/download/u-fskwgyeq'}
        donwloadId={'funeralFooterD'}
        contactId={'funeralFooterC'}
        mediaLink={
          'https://media.timeleap-rura.com?utm_source=rura-lp&utm_medium=banner_footer_funeral'
        }
      />
    </>
  );
};

export default Funeral;
