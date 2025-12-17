import Link from "next/link";
import "../css/navigation-component.css";

export function Navigation(props) {
  const isWhite = props.variant === "white";

  return (
    <nav className="navigation">
      <div className="navigation-wrapper">
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
        <Link
          href="#"
          className={isWhite ? "navigation-links-white" : "navigation-links"}
        >
          rent a car
        </Link>
        <Link
          href="#"
          className={isWhite ? "navigation-links-white" : "navigation-links"}
        >
          buy a car
        </Link>
        <Link
          href="#"
          className={isWhite ? "navigation-links-white" : "navigation-links"}
        >
          model
        </Link>
      </div>

      <Link
        href="/saved-cars"
        className={isWhite ? "navigation-links-white" : "navigation-links"}
      >
        sign in
      </Link>
    </nav>
  );
}

export function SecondNavigation() {
  return (
    <nav className="second-navigation">
      <Link href="#" className="second-navigation-link">
        <img src="/icons/arrow-left.svg" alt="" />
      </Link>
      <Link href="#" className="second-navigation-link-home">
        <img
          src="/icons/logo.svg"
          alt=""
          className="second-navigation-icon-home"
        />
      </Link>
    </nav>
  );
}
