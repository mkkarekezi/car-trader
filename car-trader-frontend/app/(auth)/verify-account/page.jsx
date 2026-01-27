"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { VerifyAccount } from "./verify-account.jsx";
import { SecondNavigation } from "../../components/navigation-component/navigation-component.jsx";
import "../auth-route.css";

function VerifyAccountContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const { state, setState, handleSubmit } = VerifyAccount(emailParam);

  return (
    <section className="auth">
      <SecondNavigation />
      <div className="auth-wrapper">
        <main className="auth-wrapper-main">
          <h1 className="auth-wrapper-main-heading">verify your account</h1>
          <p className="auth-wrapper-main-text">
            Enter the 6-digit code sent to {state.email}
          </p>
          <form onSubmit={handleSubmit} className="auth-wrapper-main-form">
            {state.error && <p className="error-message">{state.error}</p>}
            {state.success && (
              <p className="success-message">{state.success}</p>
            )}
            <input
              type="text"
              placeholder="enter 6-digit code"
              className="auth-wrapper-main-form-input"
              value={state.verificationCode}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  verificationCode: e.target.value,
                }))
              }
              maxLength={6}
              disabled={state.loading}
            />
            <input
              type="submit"
              value={state.loading ? "verifying..." : "verify account"}
              className="auth-wrapper-main-form-submit"
              disabled={state.loading}
            />
          </form>
        </main>
      </div>
    </section>
  );
}

export default function VerifyAccountPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyAccountContent />
    </Suspense>
  );
}
