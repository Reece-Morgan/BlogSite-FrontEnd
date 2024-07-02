import { BlogItem } from "@blog/types";
import styles from "./dashboard-item.module.css";
import { format } from "date-fns";
import Link from "next/link";

interface Props {
  blogList: BlogItem[];
}

export const DashboardItem = ({ blogList }: Props) => {
  return (
    <section className={styles.posts}>
      <h2>Your Blog Posts</h2>
      <ul>
        {blogList.map((item) => (
          <li key={item.id}>
            <Link href={`/blog/${item.id}`}>
              <h3>{item.title}</h3>
              <p>{format(item.dateCreated, "dd/MM/yyyy kk:mm")}</p>
            </Link>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
