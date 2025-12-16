import { Navigation } from "../components/navigation-component.jsx";
import "../css/model-route.css";
export default function Model() {
  return (
    <section className="model-route">
      <Navigation />

      <main className="model-route-main">
        <h1 className="model-route-main-heading">
          Car rentals nearby for any occasion
        </h1>
        <p className="model-route-main-sub-heading">
          From spacious SUVs to sporty convertibles, your perfect rental car is
          a few steps away. Learn more about Uber car rentals, search for
          vehicles that match your daily or weekly car rental needs, and enjoy
          worldwide booking for travel plans near and far.
        </p>

        <form action="post" className="model-route-main-form">
          <div className="model-route-main-form-input">
            <img src="/icons/steering-wheel.svg" alt="" />
            <input type="text" placeholder="car brand" />
            <img src="/icons/magnifying-glass.svg" alt="" />
          </div>

          <div className="model-route-main-form-input">
            <img src="/icons/transmission.svg" alt="" />
            <select name="transmission">
              <option value="">manual</option>
              <option value="">automatic</option>
            </select>
            <img src="/icons/caret-up-down.svg" alt="" />
          </div>

          <div className="model-route-main-form-input">
            <img src="/icons/gas-pump.svg" alt="" />
            <select name="transmission">
              <option value="">combustion</option>
              <option value="">electric</option>
              <option value="">hybrid</option>
            </select>
            <img src="/icons/caret-up-down.svg" alt="" />
          </div>

          <div className="model-route-main-form-input">
            <img src="/icons/road-horizon.svg" alt="" />
            <input type="number" placeholder="millage" />
            <img src="/icons/caret-up-down.svg" alt="" />
          </div>
          <div className="model-route-main-form-input">
            <img src="/icons/calendar-dot.svg" alt="" />
            <input type="number" placeholder="release year" />
            <img src="/icons/caret-up-down.svg" alt="" />
          </div>
          <div className="model-route-main-form-input">
            <input type="submit" placeholder="predict" />
            <img src="/icons/arrow-circle-up.svg" alt="" />
          </div>
        </form>

        <div className="model-route-main-results">
          <p className="model-route-main-results-title">
            your predicted price will appear below
          </p>

          <div className="model-route-main-results-wrapper">
            <div className="model-route-main-results-wrapper-clear">
              <img src="/icons/prohibit.svg" alt="" />
              <span>clear form</span>
            </div>

            <p className="model-route-main-results-wrapper-output">
              __,__,__,__ rwandan Francs (rWF)
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
