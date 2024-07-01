import styles from "./page.module.css";
import { BlogList, Header } from "@blog/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <p className={styles.intro}>
          Welcome to the blog site for developers. Here you will find articles
          on various topics related to software development.
        </p>
        <BlogList />
      </main>
    </>
  );
}
