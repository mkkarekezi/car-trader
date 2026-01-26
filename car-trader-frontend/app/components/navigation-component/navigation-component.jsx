"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./navigation-component.css";
import { SignOut } from "../../(auth)/signout/signout.jsx";

export function Navigation(props) {
  const isWhite = props.variant === "white";

  return (
    <nav className="navigation">
      <Link
        href="/"
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
  const router = useRouter();

  return (
    <nav className="second-navigation">
      <Link href="/" className="second-navigation-link">
        <img src="/icons/arrow-left.svg" alt="" onClick={() => router.back()} />
      </Link>

      <Link className="second-navigation-logo" href="/">
        <img src="/icons/logo.svg" alt="" />
      </Link>
    </nav>
  );
}

export function NavigationDashboard() {
  const router = useRouter();
  const { loading, error, handleSignOut } = SignOut(router);
  return (
    <nav className="navigation-dashboard">
      <Link href="/" className="navigation-dashboard-links">
        home
      </Link>
      <div className="navigation-dashboard-wrapper">
        <Link href="/dashboard/upload" className="navigation-dashboard-links">
          upload a car
        </Link>
        <Link href="/dashboard/listings" className="navigation-dashboard-links">
          my uploads
        </Link>
        <button
          onClick={handleSignOut}
          disabled={loading}
          className="navigation-dashboard-links"
        >
          {loading ? "Logging out..." : "Sign Out"}
        </button>
      </div>
    </nav>
  );
}
