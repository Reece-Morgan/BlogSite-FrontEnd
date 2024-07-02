import { Dashboard, DashboardHeader } from "@blog/components";
import styles from "./page.module.css";

export default function UserDashboard() {
  return (
    <>
      <DashboardHeader />
      <main className={styles.main}>
        <Dashboard />
      </main>
    </>
  );
}
