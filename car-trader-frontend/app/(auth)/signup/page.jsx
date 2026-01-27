"use client";
import Link from "next/link";
import { CreateAccount } from "./sign-up.jsx";
import { SecondNavigation } from "../../components/navigation-component/navigation-component.jsx";
import "../auth-route.css";

export default function SignUP() {
  const { formData, setFormData, loading, error, success, handleSendCode } =
    CreateAccount();

  return (
    <section className="auth">
      <SecondNavigation />

      <div className="auth-wrapper">
        <main className="auth-wrapper-main">
          <h1 className="auth-wrapper-main-heading">create an account</h1>
          <form onSubmit={handleSendCode} className="auth-wrapper-main-form">
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            <input
              type="email"
              placeholder="enter your email"
              className="auth-wrapper-main-form-input"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              disabled={loading}
            />
            <input
              type="text"
              placeholder="choose a username"
              className="auth-wrapper-main-form-input"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              disabled={loading}
            />
            <input
              type="password"
              placeholder="choose your password"
              className="auth-wrapper-main-form-input"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              disabled={loading}
            />
            <input
              type="submit"
              value={loading ? "sending..." : "create account"}
              className="auth-wrapper-main-form-submit"
              disabled={loading}
            />
          </form>
          <Link href="/login" className="auth-wrapper-main-link">
            log in account
          </Link>
        </main>
      </div>
    </section>
  );
}
