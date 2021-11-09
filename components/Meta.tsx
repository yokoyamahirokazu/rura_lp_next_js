import NextLink from 'next/link';
import { ICategory, ITag } from '@/types';
import { formatDate } from '@utils';

type MetaProps = {
  category?: ICategory;
  createdAt?: string;
  tags?: ITag[];
  isDetail?: boolean;
};

export const Meta: React.FC<MetaProps> = (props) => {
  return (
    <div>
      <div className="upper">
        {props.category &&
          (props.isDetail ? (
            <NextLink href={`/news/category/${props.category.id}/page/1`}>
              <a className="/news/category">{props.category.name}</a>
            </NextLink>
          ) : (
            <span className="category">{props.category.name}</span>
          ))}
        <ul className="tag">
          {props.tags &&
            props.tags.map((tag, _) => (
              <li key={tag.id}>
                {props.isDetail ? (
                  <NextLink href={`/news/tag/${tag.id}/page/1`}>
                    <a>{tag.name}</a>
                  </NextLink>
                ) : (
                  <span>{tag.name}</span>
                )}
              </li>
            ))}
        </ul>
      </div>

      <div className="meta">
        <span className="timestamp">
          <time dateTime={formatDate(props.createdAt ?? '', 'YYYY-MM-DD')}>
            {formatDate(props.createdAt ?? '', 'YYYY.MM.DD')}
          </time>
        </span>
      </div>
    </div>
  );
};
