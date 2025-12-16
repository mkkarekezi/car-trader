import { SecondNavigation } from "../../../components/navigation-component.jsx";
import "../../../css/auth-route.css";
import Link from "next/link";
export default function ResetPassword() {
  return (
    <section className="signup-route">
      <SecondNavigation />

      <main className="signup-route-wrapper">
        <h1 className="signup-route-heading">log into your account</h1>
        <form action="" className="signup-route-form">
          <input
            type="text"
            placeholder="enter your email"
            className="signup-route-form-input"
          />
          <input
            type="text"
            placeholder="choose a username"
            className="signup-route-form-input"
          />
          <input
            type="text"
            placeholder="choose password your"
            className="signup-route-form-input"
          />
          <div className="signup-route-form-code">
            <button className="signup-route-form-code-send">
              <span>send code</span>
              <img src="/icons/arrow-up-right.svg" alt="" />
            </button>
            <input
              type="number"
              placeholder="enter verification code"
              className="signup-route-form-input"
            />
          </div>
          <input
            type="submit"
            value="log in"
            className="signup-route-form-submit"
          />
        </form>
        <p className="signup-route-login">
          forgot password &nbsp;
          <Link
            href="account/reset-password"
            className="signup-route-login-link"
          >
            reset passowrd
          </Link>
        </p>
      </main>
    </section>
  );
}
