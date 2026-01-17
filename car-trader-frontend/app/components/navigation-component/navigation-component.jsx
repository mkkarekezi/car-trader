import Link from "next/link";
import "./navigation-component.css";

export function Navigation(props) {
  const isWhite = props.variant === "white";

  return (
    <nav className="navigation">
      <Link
        href="#"
        className={isWhite ? "navigation-links-white" : "navigation-links"}
      >
        <img
          src="/icons/logo.svg"
          alt="Car Trader Logo"
          className={isWhite ? "logo-white" : "logo-black"}
        />
      </Link>
      <div className="navigation-wrapper">
        <Link
          href="/model"
          className={isWhite ? "navigation-links-white" : "navigation-links"}
        >
          model
        </Link>
        <Link
          href="/login"
          className={isWhite ? "navigation-links-white" : "navigation-links"}
        >
          get started
        </Link>
      </div>
    </nav>
  );
}

export function SecondNavigation() {
  return (
    <nav className="second-navigation">
      <Link href="#" className="second-navigation-link">
        <img src="/icons/arrow-left.svg" alt="" />
      </Link>

      <div className="second-navigation-logo">
        <img src="/icons/logo.svg" alt="" />
      </div>
    </nav>
  );
}
