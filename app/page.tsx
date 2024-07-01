import styles from "./page.module.css";
import { BlogList, Header } from "@blog/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <BlogList />
      </main>
    </>
  );
}
