import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import UserMenu from "./components/user-menu";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return (
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>Welcome to Dirigo Abstract</h1>
        <p>Please log in to continue.</p>
        <div style={{ marginTop: "20px" }}>
          <Link href="/sign-in" style={{ marginRight: "20px", padding: "10px 20px", backgroundColor: "#1D9E75", color: "white", borderRadius: "4px", textDecoration: "none" }}>
            Sign In
          </Link>
          <Link href="/sign-up" style={{ padding: "10px 20px", backgroundColor: "#2d3748", color: "white", borderRadius: "4px", textDecoration: "none" }}>
            Sign Up
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Welcome, {user.firstName}!</h1>
        <UserMenu />
      </div>
      <p>You are logged in as {user.emailAddresses[0]?.emailAddress}</p>
      <div style={{ marginTop: "20px" }}>
        <Link href="/upload" style={{ marginRight: "20px", padding: "10px 20px", backgroundColor: "#1D9E75", color: "white", borderRadius: "4px", textDecoration: "none" }}>
          Go to Upload
        </Link>
      </div>
    </main>
  );
}
