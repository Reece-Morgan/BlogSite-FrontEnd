import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.description}>
        <h1>The Developer&#39;s Blog Site</h1>
        <p>
          Welcome to the blog site for developers. Here you will find articles
          on various topics related to software development.
        </p>
      </div>
    </header>
  );
};
