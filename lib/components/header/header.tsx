"use client";

import { useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const getUser = async () => {
      const data = await fetch("http://localhost:5189/api/user", {
        credentials: "include",
      });
      const res = await data.json();

      if (res.status !== 401) {
        setUsername(res.username);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
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

    setIsLoggedIn(false);
  };

  return (
    <header className={styles.header}>
      <h1>The Developer&#39;s Blog Site</h1>

      {isLoggedIn ? (
        <div className={styles.auth}>
          <Link href="/user-dashboard">Hi {username}</Link>
          <Link href="#" onClick={logout}>
            Logout
          </Link>
        </div>
      ) : (
        <div className={styles.auth}>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      )}
    </header>
  );
};
