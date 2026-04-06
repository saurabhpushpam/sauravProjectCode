"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);

    alert("Logged in");
  };

  return (
    <>
      <h1>Login</h1>
            <h1>Enter Email</h1>
      <input onChange={(e) => setEmail(e.target.value)} />
            <h1>Enter Password</h1>
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </>
  );
}