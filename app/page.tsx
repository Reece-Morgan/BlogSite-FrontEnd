import styles from "./page.module.css";
import { BlogList } from "@blog/components";

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.description}>
          <h1>The Developer&#39;s Blog Site</h1>
          <p>
            Welcome to the blog site for developers. Here you will find articles
            on various topics related to software development.
          </p>
        </div>
      </div>
      <main className={styles.main}>
        <BlogList />
      </main>
    </>
  );
}
