import { Navigation } from "../components/navigation-component/navigation-component.jsx";
import CarComponent from "../components/car-component/car-component.jsx";
import Filtering from "../components/filtering-component/filtering-component.jsx";
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
            From spacious SUVs to sporty convertibles, your perfect rental car
            is a few steps away. Learn more about Uber car rentals, search for
            vehicles that match your daily or weekly car rental needs, and enjoy
            worldwide booking for travel plans near and far.
          </p>
          <Filtering />
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
              Competitive deals from top brands
            </h3>
            <p className="home-about-wrapper-info-par">
              Compare rates and vehicles from popular rental car companies to
              get the best deal every time.
            </p>
          </div>
          <div className="home-about-wrapper-info">
            <h3 className="home-about-wrapper-info-title">
              <img src="/icons/calendar-blank-fill.svg" alt="" />
              Flexible scheduling
            </h3>
            <p className="home-about-wrapper-info-par">
              Book a rental car the same day or months in advance for as long as
              a month, a weekend—whatever you need. When plans change, free
              cancellation options are available.
            </p>
          </div>
          <div className="home-about-wrapper-info">
            <h3 className="home-about-wrapper-info-title">
              <img src="/icons/plus-circle-fill.svg" alt="" />
              Helpful add-ons
            </h3>

            <p className="home-about-wrapper-info-par">
              Customize your rental car with bike racks, car seats, ski racks,
              and more. Your ride, your choice. Always.
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
