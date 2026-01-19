"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  return (
    <nav className="second-navigation">
      <Link href="#" className="second-navigation-link">
        <img src="/icons/arrow-left.svg" alt="" onClick={() => router.back()} />
      </Link>

      <Link className="second-navigation-logo" href="/">
        <img src="/icons/logo.svg" alt="" />
      </Link>
    </nav>
  );
}
