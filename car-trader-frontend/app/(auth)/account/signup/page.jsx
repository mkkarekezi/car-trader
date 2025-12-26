"use client";
import Link from "next/link";
import { CreateAccount } from "./sign-up.jsx";

import { SecondNavigation } from "../../../components/navigation-component.jsx";
import "../../../css/auth-route.css";

export default function SignUP() {
  const {
    formData,
    setFormData,
    verificationCode,
    setVerificationCode,
    codeSent,
    loading,
    error,
    success,
    handleSendCode,
    handleSubmit,
  } = CreateAccount();

  return (
    <section className="signup-route">
      <SecondNavigation />

      <main className="signup-route-wrapper">
        <h1 className="signup-route-heading">log into your account</h1>
        <form onSubmit={handleSubmit} className="signup-route-form">
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <input
            type="email"
            placeholder="enter your email"
            className="signup-route-form-input"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            disabled={codeSent}
          />
          <input
            type="text"
            placeholder="choose a username"
            className="signup-route-form-input"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            disabled={codeSent}
          />
          <input
            type="password"
            placeholder="choose your password"
            className="signup-route-form-input"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            disabled={codeSent}
          />
          <div className="signup-route-form-code">
            <button
              type="button"
              onClick={handleSendCode}
              className="signup-route-form-code-send"
              disabled={loading || codeSent}
            >
              <span>{codeSent ? "Code Sent" : "Send Code"}</span>
              <img src="/icons/arrow-up-right.svg" alt="" />
            </button>
            <input
              type="text"
              placeholder="enter verification code"
              className="signup-route-form-input"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              maxLength={6}
              disabled={!codeSent}
            />
          </div>
          <input
            type="submit"
            value={loading ? "Signing up..." : "Sign Up"}
            className="signup-route-form-submit"
            disabled={loading || !codeSent}
          />
        </form>
        <p className="signup-route-login">
          forgot password &nbsp;
          <Link
            href="/account/reset-password"
            className="signup-route-login-link"
          >
            reset password
          </Link>
        </p>
      </main>
    </section>
  );
}
