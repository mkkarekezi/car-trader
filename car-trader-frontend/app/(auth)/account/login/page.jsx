"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { SecondNavigation } from "../../../components/navigation-component.jsx";
import "../../../css/auth-route.css";

export default function LogIn() {
  const router = useRouter();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(""); // Clear previous errors
    setLoading(true);

    try {
      const response = await fetch("http://localhost:500/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-route">
      <SecondNavigation />

      <main className="login-route-wrapper">
        <h1 className="login-route-heading">log into your account</h1>

        {/* Show error message */}
        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

        <form onSubmit={handleSubmit} className="login-route-form">
          <input
            type="email"
            placeholder="enter your email"
            className="login-route-form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="enter your password"
            className="login-route-form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="submit"
            value={loading ? "logging in..." : "log in"}
            className="login-route-form-submit"
            disabled={loading}
          />
        </form>

        <p className="login-route-reset">
          forgot password &nbsp;
          <Link
            href="account/reset-password"
            className="login-route-reset-link"
          >
            reset password
          </Link>
        </p>
      </main>
    </section>
  );
}
