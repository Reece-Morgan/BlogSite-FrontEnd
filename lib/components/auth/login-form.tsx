"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import styles from "./auth.module.css";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const data = await fetch("http://localhost:5189/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const res = await data.json();

    if (res.message === "Invalid Credentials") {
      setErrorMsg("Incorrect email or password. Please try again.");
      setShowError(true);
      return;
    }

    await router.push("/");
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <h1>Log In</h1>
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
      <button type="submit">Sign In</button>
      {showError && <p>{errorMsg}</p>}
    </form>
  );
};
