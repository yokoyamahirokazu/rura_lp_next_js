import { IBlog } from "@/types";
import styles from "@styles/components/Components.module.css";
import { Meta } from "@components";

type LatestProps = {
  blogs: IBlog[];
};

export const Latest: React.FC<LatestProps> = (props) => {
  return (
    <div className={styles.latestPost}>
      <ul className={styles.news}>
        {props.blogs.slice(0, 5).map((blog) => {
          return (
            <li key={blog.id}>
              <a href={`/news/${blog.id}`}>
                <h3>{blog.title}</h3>
                <Meta
                  createdAt={blog.createdAt}
                  category={blog.category}
                  tags={blog.tag}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
