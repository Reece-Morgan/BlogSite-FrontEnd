import { DashboardHeader } from "../../lib/components/dashboard-header/dashboard-header";
import styles from "./page.module.css";

export default function UserDashboard() {
  return (
    <>
      <DashboardHeader />
      <main className={styles.main}>
      </main>
    </>
  );
}
