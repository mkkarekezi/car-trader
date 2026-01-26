import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateAccount() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSendCode = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { email, username, password } = formData;

    if (!email || !username || !password) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[a-zA-Z]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!usernameRegex.test(username)) {
      setError("Username must contain only letters");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
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

      setSuccess("Verification code sent! Redirecting...");

      // Store email in sessionStorage
      sessionStorage.setItem("canVerify", "true");
      sessionStorage.setItem("verificationEmail", email.toLowerCase().trim());

      setTimeout(() => {
        router.push("/verify-account"); // No email in URL
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    loading,
    error,
    success,
    handleSendCode,
  };
}
