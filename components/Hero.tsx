import Image from 'next/image';
import React, { useEffect, useState, useCallback } from 'react';
import { IoIosPlay } from 'react-icons/io';
import { LazyVideo } from 'react-lazy-media';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

import { ICopy } from '@/types';
import Button from '@components/Button';
import styles from '@styles/components/Hero.module.css';

type HeroCopy = {
  articles?: ICopy[];
  mainCopyProps?: string;
  subCopyProps?: string;
  bgImage?: string;
  workerImage?: string;
};

export const Hero: React.FC<HeroCopy> = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const isClient = typeof window === 'object';
  const getWindowDimensions = useCallback(() => {
    return {
      width: isClient ? window?.innerWidth : 0,
      height: isClient ? window?.innerHeight : 0,
    };
  }, [isClient]);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getWindowDimensions]);

  const windowWidth = windowDimensions.width;

  return (
    <>
      <div className={styles.hero}>
        {windowWidth < 640 ? (
          <Image
            src='/images/contact_section_bg.jpg'
            alt='資料ダウンロード・お問い合わせ'
            layout={'fill'}
            objectFit={'cover'}
          />
        ) : (
          <LazyVideo
            poster={'/images/videoPoster.jpg'}
            src={'/videos/rura_lp_movie.mp4'}
            autoplay={true}
            muted={true}
            loop={true}
            controls={false}
          />
        )}
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            {props.mainCopyProps ? (
              <p className={styles.heroCopy}>{props.mainCopyProps}</p>
            ) : (
              props.articles.map((copy) => {
                return (
                  <p
                    className={styles.heroCopy}
                    key={copy.id}
                    dangerouslySetInnerHTML={{ __html: copy.mainCopy }}></p>
                );
              })
            )}

            {props.subCopyProps ? (
              <h1
                className={styles.heroTitle}
                dangerouslySetInnerHTML={{ __html: props.subCopyProps }}></h1>
            ) : (
              props.articles.map((copy) => {
                return (
                  <h1
                    key={copy.id}
                    className={styles.heroTitle}
                    dangerouslySetInnerHTML={{ __html: copy.subCopy }}></h1>
                );
              })
            )}

            <div className={styles.heroBtn}>
              <Button
                bgColor='primary'
                size='large'
                types='link'
                href='/download'
                icon='download'
                id='heroD'>
                資料ダウンロード
              </Button>
              <Button
                bgColor='secondary'
                size='large'
                types='link'
                href='/contact'
                icon='contact'
                id='heroC'>
                お問い合わせ
              </Button>
            </div>
            <p className={styles.heroSubText}>
              <span>ショールーム体験受付中！</span>
              ご希望の方は「お問い合わせ」より
            </p>
          </div>
        </div>

        <div className={styles.videoPlayBox}>
          <div
            className={styles.videoPlayImg}
            onClick={openModal}
            id='moviePlay'>
            <div className={styles.imageCircle}>
              <Image
                src='/images/videoPlay.jpg'
                alt='Youtube動画再生'
                layout={'fill'}
                objectFit={'cover'}
                loading={'lazy'}
              />
              <div className={styles.imageCircleOverlay}></div>
              <div className={styles.imagePlayIconWrapper}>
                <div className={styles.imagePlayIcon}>
                  <IoIosPlay />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imagePlayTxt}>
            <p>
              WHAT&apos;S
              <br />
              RURA ?
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={500}
        className={styles.Modal}
        overlayClassName={styles.Overlay}>
        <div className={styles.youtubeWrapper}>
          <YouTube
            videoId='BjCzqX1n_IM'
            className={styles.iframe}
            containerClassName={styles.youtube}
          />
        </div>
      </Modal>
    </>
  );
};

export default Hero;
