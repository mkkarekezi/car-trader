"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoginAccount } from "./log-in.jsx";
import { SecondNavigation } from "../../../components/navigation-component.jsx";
import "../../../css/auth-route.css";

export default function LogIn() {
  const router = useRouter();
  const { formData, setFormData, loading, error, handleSubmit } =
    LoginAccount(router);

  return (
    <section className="login-route">
      <SecondNavigation />
      <main className="login-route-wrapper">
        <h1 className="login-route-heading">log into your account</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit} className="login-route-form">
          <input
            type="email"
            placeholder="enter your email"
            className="login-route-form-input"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="enter your password"
            className="login-route-form-input"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
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
            href="/account/reset-password"
            className="login-route-reset-link"
          >
            reset password
          </Link>
        </p>
      </main>
    </section>
  );
}
