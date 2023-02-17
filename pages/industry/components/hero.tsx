import Image from 'next/image';
import React from 'react';

import Button from '@components/Button';
import styles from '@styles/components/Hero.module.css';

type HeroCopy = {
  mainCopyProps?: string;
  subCopyProps?: string;
  bgImage?: string;
  workerImage?: string;
  styleName?: string;
};

export const Hero: React.FC<HeroCopy> = (props) => {
  return (
    <div className={styles.industryHero}>
      <div
        className={props.styleName === 'funeralHero' ? styles.funeralHero : ''}>
        <div className={styles.industryHeroBg}>
          <Image
            src={props.bgImage}
            alt='遠隔接客・リモート接客サービスRURA'
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <div className={styles.industryHeroInner}>
          <div className={styles.industryHeroWorker}>
            <Image
              src={props.workerImage}
              alt='遠隔接客・リモート接客サービスRURA'
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
          <div className={styles.industryHeroContent}>
            <div>
              <p
                className={styles.heroCopy}
                dangerouslySetInnerHTML={{ __html: props.mainCopyProps }}></p>
              <h1
                className={styles.heroTitle}
                dangerouslySetInnerHTML={{ __html: props.subCopyProps }}></h1>
              <div className={styles.industryHeroBtn}>
                <Button
                  bgColor='primary'
                  size='large'
                  types='link'
                  href='/download'
                  icon='download'
                  id='funeralHeroD'>
                  資料ダウンロード
                </Button>
                <Button
                  bgColor='secondary'
                  size='large'
                  types='link'
                  href='/contact'
                  icon='contact'
                  id='funeralHeroC'>
                  お問い合わせ
                </Button>
              </div>
              <p className={styles.heroSubText}>
                <span>ショールーム体験受付中！</span>
                ご希望の方は「お問い合わせ」より
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
