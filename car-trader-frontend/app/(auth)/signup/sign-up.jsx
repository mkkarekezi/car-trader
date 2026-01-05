import { useState } from "react";

export function CreateAccount() {
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  // Handle send verification code (creates user in DB)
  const handleSendCode = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !username || !password) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[a-zA-Z]+$/;

    if (
      !emailRegex.test(email) ||
      !usernameRegex.test(username) ||
      password.length < 8
    ) {
      setError("Please enter valid data");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:500/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.toLowerCase().trim(),
          email: email.toLowerCase().trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send verification code");
      }

      setCodeSent(true);
      setSuccess("Verification code sent to your email!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle signup (verifies the code)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!codeSent) {
      setError("Please send verification code first");
      return;
    }

    if (!verificationCode || verificationCode.length !== 6) {
      setError("Please enter the 6-digit verification code");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:500/api/auth/verify-account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.toLowerCase().trim(),
            code: verificationCode,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Verification failed");
      }

      setSuccess("Account verified successfully! Redirecting...");

      setTimeout(() => {
        window.location.href = "/account/login";
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
}
