"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:5189/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    await router.push("/");
  };

  return (
    <form onSubmit={submit}>
      <h1>Please Sign In</h1>
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
    </form>
  );
};
