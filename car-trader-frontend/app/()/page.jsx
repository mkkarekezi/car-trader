import { Navigation } from "../components/navigation-component/navigation-component.jsx";
import CarComponent from "../components/car-component/car-component.jsx";
import "./page.css";

export default function HomeRoute() {
  return (
    <section className="home-route">
      <header className="home-route-header">
        <Navigation variant="white" />
        <div className="home-route-header-wrapper">
          <h1 className="home-route-header-wrapper-heading">
            buy, sell & rent cars with car trader rwanda
          </h1>
          <p className="home-route-header-wrapper-subheading">
            Car Trader Rwanda is a trusted online marketplace where you can buy,
            sell, or rent cars with confidence. We connect car owners, dealers,
            and buyers on one simple, secure platform designed for Rwanda’s
            market.
          </p>
        </div>
      </header>

      <div className="home-about">
        <h1 className="home-about-heading">
          here is why travelers choose scout
        </h1>
        <div className="home-about-wrapper">
          <div className="home-about-wrapper-info">
            <h3 className="home-about-wrapper-info-title">
              <img src="/icons/list-dashes.svg" alt="" />
              Why Choose Us
            </h3>
            <p className="home-about-wrapper-info-par">
              We make car trading easy and transparent. With verified listings,
              fair pricing, and a user-friendly experience, Car Trader Rwanda
              helps you find the right car faster and with less stress.
            </p>
          </div>
          <div className="home-about-wrapper-info">
            <h3 className="home-about-wrapper-info-title">
              <img src="/icons/calendar-blank-fill.svg" alt="" />
              Wide Selection
            </h3>
            <p className="home-about-wrapper-info-par">
              Browse a diverse range of vehicles—from budget cars to luxury
              models—available for sale or rent. New listings are added
              regularly to match every need and budget.
            </p>
          </div>
          <div className="home-about-wrapper-info">
            <h3 className="home-about-wrapper-info-title">
              <img src="/icons/plus-circle-fill.svg" alt="" />
              Safe & Convenient
            </h3>

            <p className="home-about-wrapper-info-par">
              Our platform prioritizes security and convenience, allowing you to
              contact sellers directly, compare options, and make informed
              decisions—all in one place.
            </p>
          </div>
        </div>
      </div>

      <main className="home-route-main">
        <h1 className="home-route-main-heading">Cheap car rentals in rwanda</h1>
        <div className="home-route-main-listing">
          <CarComponent />
        </div>
      </main>
    </section>
  );
}
