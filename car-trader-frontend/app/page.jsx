import { Navigation } from "./components/navigation-component.jsx";
import Footer from "./components/footer-component.jsx";
import SingleCarComponent from "./components/single-car-component.jsx";
import Filtering from "./components/filtering-component.jsx";
import "./css/home-route.css";

export default function HomeRoute() {
  return (
    <section className="home-route">
      <header className="home-route-header">
        <Navigation variant="white" />
        <div className="home-route-header-wrapper">
          <h1 className="home-route-wrapper-heading">
            your trusted car trading platform
          </h1>
          <p className="home-route-wrapper-heading-sub">
            From spacious SUVs to sporty convertibles, your perfect rental car
            is a few steps away. Learn more about Uber car rentals, search for
            vehicles that match your daily or weekly car rental needs, and enjoy
            worldwide booking for travel plans near and far.
          </p>
          <Filtering />
        </div>
      </header>

      <div className="home-route-about">
        <h1 className="home-route-about-heading">
          here is why travelers choose scout
        </h1>
        <div className="home-route-about-wrapper">
          <div className="home-route-about-wrapper-content">
            <img
              src="/icons/list-dashes.svg"
              alt=""
              className="home-route-about-wrapper-content-icon"
            />
            <h3 className="home-route-about-wrapper-content-title">
              Competitive deals from top brands
            </h3>
            <p className="home-route-about-wrapper-content-sub-title">
              Compare rates and vehicles from popular rental car companies to
              get the best deal every time.
            </p>
          </div>
          <div className="home-route-about-wrapper-content">
            <img
              src="/icons/calendar-blank-fill.svg"
              alt=""
              className="home-route-about-wrapper-content-icon"
            />
            <h3 className="home-route-about-wrapper-content-title">
              Flexible scheduling
            </h3>
            <p className="home-route-about-wrapper-content-sub-title">
              Book a rental car the same day or months in advance for as long as
              a month, a weekend—whatever you need. When plans change, free
              cancellation options are available.
            </p>
          </div>
          <div className="home-route-about-wrapper-content">
            <img
              src="/icons/plus-circle-fill.svg"
              alt=""
              className="home-route-about-wrapper-content-icon"
            />
            <h3 className="home-route-about-wrapper-content-title">
              Helpful add-ons
            </h3>
            <p className="home-route-about-wrapper-content-sub-title">
              Customize your rental car with bike racks, car seats, ski racks,
              and more. Your ride, your choice. Always.
            </p>
          </div>
        </div>
      </div>

      <main className="home-route-main">
        <h1 className="home-route-main-heading">Cheap car rentals in rwanda</h1>
        <div className="home-route-main-listing">
          <SingleCarComponent />
        </div>
        <Footer />
      </main>
    </section>
  );
}
