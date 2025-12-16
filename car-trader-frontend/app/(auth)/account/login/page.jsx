import { SecondNavigation } from "../../../components/navigation-component.jsx";
import "../../../css/auth-route.css";
import Link from "next/link";
export default function LogIn() {
  return (
    <section className="login-route">
      <SecondNavigation />

      <main className="login-route-wrapper">
        <h1 className="login-route-heading">log into your account</h1>
        <form action="" className="login-route-form">
          <input
            type="text"
            placeholder="enter your email"
            className="login-route-form-input"
          />
          <input
            type="text"
            placeholder="enter your email"
            className="login-route-form-input"
          />

          <input
            type="submit"
            value="log in"
            className="login-route-form-submit"
          />
        </form>

        <p className="login-route-reset">
          forgot password &nbsp;
          <Link
            href="account/reset-password"
            className="login-route-reset-link"
          >
            reset passowrd
          </Link>
        </p>
      </main>
    </section>
  );
}
