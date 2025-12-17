// "use client";
// import { useState } from "react";
// import Link from "next/link";

// import { SecondNavigation } from "../../../components/navigation-component.jsx";
// import "../../../css/auth-route.css";

// export default function ResetPassword() {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [verificationCode, setVerificationCode] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Handle send verification code
//   const handleSendCode = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     // Validate all fields
//     if (!email || !username || !password) {
//       setError("All fields are required");
//       return;
//     }

//     //
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const usernameRegex = /^[a-zA-Z]+$/;

//     if (
//       !emailRegex.test(email) ||
//       !usernameRegex.test(username) ||
//       password.length < 8
//     ) {
//       setError("Please enter valid data");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         "http://localhost:500/api/auth/verify-account",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: username.toLowerCase().trim(),
//             email: email.toLowerCase().trim(),
//             password,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to send verification code");
//       }
//       setSuccess("Verification code sent to your email!");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle form submission (verify account)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (!codeSent) {
//       setError("Please send verification code first");
//       return;
//     }

//     if (!verificationCode || verificationCode.length !== 6) {
//       setError("Please enter the 6-digit verification code");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("/api/verify-account", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           code: verificationCode,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Verification failed");
//       }

//       setSuccess("Account verified successfully! Redirecting...");

//       // Redirect to dashboard or home after 2 seconds
//       setTimeout(() => {
//         window.location.href = "/dashboard"; // Update with your actual redirect path
//       }, 2000);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="signup-route">
//       <SecondNavigation />

//       <main className="signup-route-wrapper">
//         <h1 className="signup-route-heading">log into your account</h1>
//         <form action="" className="signup-route-form">
//           <input
//             type="text"
//             placeholder="enter your email"
//             className="signup-route-form-input"
//           />
//           <input
//             type="text"
//             placeholder="choose a username"
//             className="signup-route-form-input"
//           />
//           <input
//             type="text"
//             placeholder="choose password your"
//             className="signup-route-form-input"
//           />
//           <div className="signup-route-form-code">
//             <button className="signup-route-form-code-send">
//               <span>send code</span>
//               <img src="/icons/arrow-up-right.svg" alt="" />
//             </button>
//             <input
//               type="number"
//               placeholder="enter verification code"
//               className="signup-route-form-input"
//             />
//           </div>
//           <input
//             type="submit"
//             value="sign up"
//             className="signup-route-form-submit"
//           />
//         </form>
//         <p className="signup-route-login">
//           forgot password &nbsp;
//           <Link
//             href="account/reset-password"
//             className="signup-route-login-link"
//           >
//             reset passowrd
//           </Link>
//         </p>
//       </main>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";

import { SecondNavigation } from "../../../components/navigation-component.jsx";
import "../../../css/auth-route.css";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={codeSent}
          />
          <input
            type="text"
            placeholder="choose a username"
            className="signup-route-form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={codeSent}
          />
          <input
            type="password"
            placeholder="choose your password"
            className="signup-route-form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
