import "./filtering-component.css";
export default function Filtering() {
  return (
    <div className="filtering">
      <div className="filtering-wrapper">
        <div className="filtering-wrapper-main">
          <img
            className="filtering-wrapper-main-icon"
            src="/icons/transmission.svg"
          />
          <p className="filtering-wrapper-main-text">transmission type</p>
        </div>
        <img className="filtering-wrapper-cta" src="/icons/caret-down.svg" />
      </div>
      <div className="filtering-wrapper">
        <div className="filtering-wrapper-main">
          <img className="filtering-wrapper-cta" src="/icons/gas-pump.svg" />
          <p className="filtering-wrapper-main-text">powertrain system</p>
        </div>
        <img className="filtering-wrapper-cta" src="/icons/caret-down.svg" />
      </div>
      <div className="filtering-wrapper">
        <div className="filtering-wrapper-main">
          <img
            className="filtering-wrapper-main-icon"
            src="/icons/road-horizon.svg"
          />
          <p className="filtering-wrapper-main-text">mirage</p>
        </div>
        <img className="filtering-wrapper-cta" src="/icons/caret-down.svg" />
      </div>
      <div className="filtering-wrapper">
        <div className="filtering-wrapper-main">
          <img
            className="filtering-wrapper-main-icon"
            src="/icons/calendar-dot.svg"
          />
          <p className="filtering-wrapper-main-text">release year</p>
        </div>
        <img className="filtering-wrapper-cta" src="/icons/caret-down.svg" />
      </div>
      <div className="filtering-cta">
        <img className="filtering-cta-icon" src="/icons/magnifying-glass.svg" />
        <p className="filtering-cta-text">search</p>
      </div>
    </div>
  );
}
