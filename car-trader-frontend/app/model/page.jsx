import { Navigation } from "../components/navigation-component/navigation-component.jsx";
import "./page.css";
export default function Model() {
  return (
    <section className="model-route">
      <Navigation />

      <main className="model-route-main">
        <h1 className="model-route-main-heading">
          Car rentals nearby for any occasion
        </h1>

        <form action="post" className="model-route-main-form">
          <div className="model-route-main-form-input">
            <img src="/icons/steering-wheel.svg" alt="" />
            <select name="transmission">
              <option value="">toyota</option>
              <option value="">bmw</option>
              <option value="">honda</option>
              <option value="">hyundai</option>
              <option value="">volkswagen</option>
              <option value="">audi</option>
              <option value="">tesla</option>
              <option value="">mercedes-benz</option>
              <option value="">jeep</option>
            </select>
          </div>

          <div className="model-route-main-form-input">
            <img src="/icons/steering-wheel.svg" alt="" />
            <select name="transmission">
              <option value="">brown</option>
              <option value="">blue</option>
              <option value="">white</option>
              <option value="">yellow</option>
              <option value="">silver</option>
              <option value="">orange</option>
              <option value="">green</option>
              <option value="">gray</option>
              <option value="">red</option>
              <option value="">black</option>
            </select>
          </div>

          <div className="model-route-main-form-input">
            <img src="/icons/transmission.svg" alt="" />
            <select name="transmission">
              <option value="">manual</option>
              <option value="">automatic</option>
            </select>
          </div>

          <div className="model-route-main-form-input">
            <img src="/icons/gas-pump.svg" alt="" />
            <select name="transmission">
              <option value="">combustion</option>
              <option value="">electric</option>
              <option value="">hybrid</option>
            </select>
          </div>
          <div className="model-route-main-form-input">
            <img src="/icons/gas-pump.svg" alt="" />
            <select name="transmission">
              <option value="">usa</option>
              <option value="">france</option>
              <option value="">germany</option>
              <option value="">uk</option>
            </select>
          </div>

          <div className="model-route-main-form-input">
            <img src="/icons/road-horizon.svg" alt="" />
            <input type="number" placeholder="millage" />
          </div>

          <div className="model-route-main-form-input">
            <img src="/icons/road-horizon.svg" alt="" />
            <input type="number" placeholder="doors" />
          </div>

          <div className="model-route-main-form-input">
            <img src="/icons/road-horizon.svg" alt="" />
            <input type="number" placeholder="horsepower" />
          </div>

          <div className="model-route-main-form-input">
            <img src="/icons/calendar-dot.svg" alt="" />
            <input type="number" placeholder="release year" />
          </div>

          <input type="submit" placeholder="predict" />
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
