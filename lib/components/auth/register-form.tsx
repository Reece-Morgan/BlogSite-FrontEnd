"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import styles from "./auth.module.css";

export const RegisterForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const data = await fetch("http://localhost:5189/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const res = await data.json();

    // TODO: log user in on successful register

    await router.push('/login');
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};
