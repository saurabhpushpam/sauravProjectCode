"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    alert("User Created");
  };

  return (
    <>
      <h1>Register</h1>
      <h1>Enter Email</h1>
      <input onChange={(e) => setEmail(e.target.value)} />
      <h1>Enter Password</h1>
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </>
  );
}