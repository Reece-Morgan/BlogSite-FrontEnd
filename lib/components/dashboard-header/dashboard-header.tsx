"use client";

import { useEffect, useState } from "react";
import styles from "./dashboard-header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const DashboardHeader = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      const data = await fetch("http://localhost:5189/api/user", {
        credentials: "include",
      });
      const res = await data.json();

      if (res.status !== 401) {
        setIsLoading(false);
      } else {
        router.push("/");
      }
    };

    getUser();
  }, []);

  const logout = () => {
    fetch("http://localhost:5189/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    router.push("/");
  };

  return (
    <header className={styles.header}>
      <h1>User Dashboard</h1>
      <div className={styles.auth}>
        <Link href="/">Home</Link>
        <Link href="#" onClick={logout}>
          Logout
        </Link>
      </div>
    </header>
  );
};
