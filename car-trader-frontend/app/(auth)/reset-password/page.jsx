import { SecondNavigation } from "../../components/navigation-component/navigation-component.jsx";
import "../auth-route.css";
import Link from "next/link";
export default function ResetPassword() {
  return (
    <section className="reset-route">
      <SecondNavigation />

      <main className="reset-route-wrapper">
        <h1 className="reset-route-heading">log into your account</h1>
        <form action="" className="reset-route-form">
          <input
            type="text"
            placeholder="enter your email"
            className="reset-route-form-input"
          />
          <input
            type="text"
            placeholder="new password your"
            className="reset-route-form-input"
          />
          <div className="reset-route-form-code">
            <button className="reset-route-form-code-send">
              <span>send code</span>
              <img src="/icons/arrow-up-right.svg" alt="" />
            </button>
            <input
              type="number"
              placeholder="enter verification code"
              className="reset-route-form-input"
            />
          </div>
          <input
            type="submit"
            value="log in"
            className="reset-route-form-submit"
          />
        </form>
      </main>
    </section>
  );
}
