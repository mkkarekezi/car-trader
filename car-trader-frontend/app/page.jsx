import { Navigation } from "./components/navigation-component.jsx";
import Footer from "./components/footer-component.jsx";
import SingleCarComponent from "./components/single-car-component.jsx";
import Filtering from "./components/filtering-component.jsx";
import "./css/home-route.css";

export default function HomeRoute() {
  return (
    <section className="home-route">
      <header className="home-route-header">
        <Navigation />
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

      <main className="home-route-main">
        <h1 className="home-route-main-heading">
          here is why travelers choose scout
        </h1>

        <div className="home-route-main-about"></div>

        <h1 className="home-route-heading-heading">
          Cheap car rentals in rwanda
        </h1>

        <div className="home-route-main-listing">
          <SingleCarComponent />
          <SingleCarComponent />
          <SingleCarComponent />
          <SingleCarComponent />
          <SingleCarComponent />
        </div>
        <Footer />
      </main>
    </section>
  );
}
