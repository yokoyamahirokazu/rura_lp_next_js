import styles from '@styles/components/Components.module.css';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopyOutline } from 'react-icons/io5';
import { SiTwitter, SiFacebook, SiLine } from 'react-icons/si';

import { config } from '../site.config';

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
            onCopy={() => alert(`クリップボードにURLをコピーしました！`)}
          >
            <button>
              <IoCopyOutline />
            </button>
          </CopyToClipboard>
        </li>
        <li>
          <a href={twitterLink} target='_blank' rel='noopener noreferrer'>
            <SiTwitter />
          </a>
        </li>
        <li>
          <a href={facebookLink} target='_blank' rel='noopener noreferrer'>
            <SiFacebook />
          </a>
        </li>
        <li>
          <a href={LineLink} target='_blank' rel='noopener noreferrer'>
            <SiLine />
          </a>
        </li>
      </ul>
    </div>
  );
};
