"use client";

import { useEffect, useState } from "react";
import styles from "./dashboard-header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const DashboardHeader = () => {
  const router = useRouter();

  const logout = async () => {
    await fetch("http://localhost:5189/api/logout", {
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
