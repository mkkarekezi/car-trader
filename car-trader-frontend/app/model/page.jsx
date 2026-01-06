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
          <select name="transmission" className="model-route-main-form-select">
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

          <select name="color" className="model-route-main-form-select">
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

          <select name="transmission" className="model-route-main-form-select">
            <option value="">manual</option>
            <option value="">automatic</option>
          </select>

          <select name="transmission" className="model-route-main-form-select">
            <option value="">combustion</option>
            <option value="">electric</option>
            <option value="">hybrid</option>
          </select>

          <select name="transmission" className="model-route-main-form-select">
            <option value="">usa</option>
            <option value="">france</option>
            <option value="">germany</option>
            <option value="">uk</option>
          </select>

          <input
            type="number"
            placeholder="millage"
            className="model-route-main-form-input"
          />

          <input
            type="number"
            placeholder="doors"
            className="model-route-main-form-input"
          />

          <input
            type="number"
            placeholder="horsepower"
            className="model-route-main-form-input"
          />

          <input
            type="number"
            placeholder="year"
            className="model-route-main-form-input"
          />

          <input
            type="submit"
            placeholder="predict"
            className="model-route-main-form-submit"
          />
        </form>

        <div className="model-results">
          <p className="model-results-title">
            your predicted price will appear below
          </p>

          <div className="model-results-wrapper">
            <div className="model-results-wrapper-clear">
              <img src="/icons/prohibit.svg" alt="" />
              <span>clear form</span>
            </div>

            <p className="model-results-wrapper-output">
              __,__,__,__ rwandan Francs (rWF)
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
