import styles from "./blog-item.module.css";
import { format } from "date-fns";
import { BlogItem as BlogPosts } from "@blog/types";
import Link from "next/link";

interface Props {
  blogList: BlogPosts[];
}

export const BlogItem = ({ blogList }: Props) => {
  return (
    <section className={styles.posts}>
      <ul>
        {blogList.map((item) => (
          <div key={item.id}>
            <li>
              <Link href={`/blog/${item.id}`}>
                <h3>{item.title}</h3>
                <p>{format(item.dateCreated, "dd/MM/yyyy kk:mm")}</p>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};
