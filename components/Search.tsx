import styles from '@styles/components/Search.module.scss';
import { useRouter } from 'next/dist/client/router';

export const Search: React.FC = () => {
  const router = useRouter();

  const onEnterKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value.trim()) {
      return;
    }
    if (e.key === 'Enter') {
      router.push(`/search?q=${e.currentTarget.value}`);
    }
  };

  return (
    <label className={styles.label}>
      サイト内検索
      <input
        className={styles.input}
        type='text'
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
          onEnterKeyEvent(e)
        }
      />
    </label>
  );
};
export default Search;
