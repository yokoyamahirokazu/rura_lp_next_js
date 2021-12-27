import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import styles from '@styles/components/Components.module.css';

type PostProps = {
  body?: string;
};

export const Post: React.FC<PostProps> = (props) => {
  const [htmlString, setHtmlString] = useState<string>('');

  useEffect(() => {
    if (props.body) {
      setHtmlString(DOMPurify().sanitize(props.body));
    }
  }, [props.body]);

  return (
    <div
      className={styles.postBody}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    ></div>
  );
};
