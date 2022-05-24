import { config } from '@site.config';
import styles from '@styles/components/Components.module.css';
import NextLink from 'next/link';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopyOutline } from 'react-icons/io5';
import { SiTwitter, SiFacebook, SiLine } from 'react-icons/si';

type ShareProps = {
  id: string;
  title?: string;
  tagData?: string;
};

export const Share: React.FC<ShareProps> = (props) => {
  const updateText = config.baseUrl + '/news/' + props.id;

  const twitterLink = `https://twitter.com/intent/tweet?text=${props.title}&url=${config.baseUrl}/news/${props.id}/${props.tagData}`;
  const facebookLink = `https://www.facebook.com/sharer.php?u=${config.baseUrl}/news/${props.id}/`;
  const LineLink = `https://social-plugins.line.me/lineit/share?url=${config.baseUrl}/news/${props.id}/`;

  return (
    <div>
      <ul className={styles.shareIcons}>
        <li>
          <CopyToClipboard
            text={updateText}
            onCopy={() => alert(`クリップボードにURLをコピーしました！`)}>
            <button>
              <IoCopyOutline />
            </button>
          </CopyToClipboard>
        </li>
        <li>
          <NextLink href={twitterLink}>
            <a target='_blank' rel='noopener noreferrer'>
              <SiTwitter />
            </a>
          </NextLink>
        </li>
        <li>
          <NextLink href={facebookLink}>
            <a target='_blank' rel='noopener noreferrer'>
              <SiFacebook />
            </a>
          </NextLink>
        </li>
        <li>
          <NextLink href={LineLink}>
            <a target='_blank' rel='noopener noreferrer'>
              <SiLine />
            </a>
          </NextLink>
        </li>
      </ul>
    </div>
  );
};
