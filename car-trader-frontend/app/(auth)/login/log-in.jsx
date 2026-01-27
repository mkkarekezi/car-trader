import { useState } from "react";

export function LoginAccount(router) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://car-trader-uvry.onrender.com/api/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        },
      );

      const data = await response.json();
      console.log("Login response:", data);

      if (data.success) {
        router.push("/dashboard/upload");
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

  return { formData, setFormData, loading, error, handleSubmit };
}
