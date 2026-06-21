"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to Dirigo Abstract</h1>
      <p>Title abstracting automation with Clerk authentication</p>
      <div style={{ marginTop: "20px" }}>
        <Link href="/sign-in" style={{ marginRight: "20px", padding: "10px 20px", backgroundColor: "#1D9E75", color: "white", borderRadius: "4px", textDecoration: "none", display: "inline-block" }}>
          Sign In
        </Link>
        <Link href="/sign-up" style={{ padding: "10px 20px", backgroundColor: "#2d3748", color: "white", borderRadius: "4px", textDecoration: "none", display: "inline-block" }}>
          Sign Up
        </Link>
      </div>
    </main>
  );
}
