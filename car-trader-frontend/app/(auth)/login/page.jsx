"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { LoginAccount } from "./log-in.jsx";
import { SecondNavigation } from "../../components/navigation-component/navigation-component.jsx";
import "../auth-route.css";

export default function LogIn() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard/upload");
    }
  }, [router]);

  const { formData, setFormData, loading, error, handleSubmit } =
    LoginAccount(router);

  return (
    <section className="auth">
      <SecondNavigation />
      <div className="auth-wrapper">
        <main className="auth-wrapper-main">
          <h1 className="auth-wrapper-main-heading">log into your account</h1>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit} className="auth-wrapper-main-form">
            <input
              type="email"
              placeholder="enter your email"
              className="auth-wrapper-main-form-input"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="enter your password"
              className="auth-wrapper-main-form-input"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <input
              type="submit"
              value={loading ? "logging in..." : "log in"}
              className="auth-wrapper-main-form-submit"
              disabled={loading}
            />
          </form>

          <Link href="/signup" className="auth-wrapper-main-link">
            create account
          </Link>
        </main>
      </div>
    </section>
  );
}
