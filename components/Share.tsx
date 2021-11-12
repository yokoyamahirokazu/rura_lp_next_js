import { config } from '../site.config';
import styles from '@styles/components/Components.module.css';
import { SiTwitter, SiFacebook, SiLine } from 'react-icons/si';

type ShareProps = {
  id: string;
  title?: string;
};

export const Share: React.FC<ShareProps> = (props) => {
  const twitterLink = `https://twitter.com/intent/tweet?text=${props.title}&url=${config.baseUrl}/${props.id}/&hashtags=microcms`;
  const facebookLink = `https://www.facebook.com/sharer.php?u=${config.baseUrl}/${props.id}/`;

  return (
    <div>
      <ul className={styles.shareIcons}>
        <li>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <SiTwitter />
          </a>
        </li>
        <li>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <SiFacebook />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <SiLine />
          </a>
        </li>
      </ul>
    </div>
  );
};
