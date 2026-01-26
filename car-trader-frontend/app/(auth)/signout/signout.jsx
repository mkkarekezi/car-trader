import { useState } from "react";

export function SignOut(router) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignOut = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Important: sends cookies with request
      });

      const data = await response.json();
      console.log("Logout response:", data);

      if (data.success) {
        // Clear token from localStorage
        localStorage.removeItem("token");

        // Redirect to login or home page
        router.push("/login");
      } else {
        setError(data.message || "Logout failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Logout error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleSignOut };
}
