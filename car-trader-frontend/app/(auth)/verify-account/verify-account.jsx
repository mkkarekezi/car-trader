import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function VerifyAccount() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [state, setState] = useState({
    verificationCode: "",
    loading: false,
    error: "",
    success: "",
    email: "",
  });

  useEffect(() => {
    const emailParam = searchParams.get("email");
    const canVerify = sessionStorage.getItem("canVerify");

    if (!emailParam || !canVerify) {
      setState((prev) => ({
        ...prev,
        error: "Unauthorized access. Redirecting...",
      }));
      setTimeout(() => router.push("/signup"), 2000);
      return;
    }

    setState((prev) => ({ ...prev, email: emailParam }));
  }, [searchParams, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, error: "", success: "" }));

    if (!state.verificationCode || state.verificationCode.length !== 6) {
      setState((prev) => ({
        ...prev,
        error: "Please enter the 6-digit verification code",
      }));
      return;
    }

    if (!/^\d{6}$/.test(state.verificationCode)) {
      setState((prev) => ({ ...prev, error: "Code must be 6 digits" }));
      return;
    }

    setState((prev) => ({ ...prev, loading: true }));

    try {
      const response = await fetch(
        "http://localhost:500/api/auth/verify-account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: state.email.toLowerCase().trim(),
            code: state.verificationCode,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Verification failed");
      }

      sessionStorage.removeItem("canVerify");

      setState((prev) => ({
        ...prev,
        success: "Account verified successfully! Redirecting...",
      }));

      setTimeout(() => {
        router.push("/account/login");
      }, 2000);
    } catch (err) {
      setState((prev) => ({ ...prev, error: err.message }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  return {
    state,
    setState,
    handleSubmit,
  };
}
