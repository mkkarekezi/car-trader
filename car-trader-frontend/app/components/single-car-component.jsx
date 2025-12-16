import "../css/single-car-component.css";
export default function SingleCarComponent() {
  return (
    <div className="car-card">
      <div className="card-card-wrapper">
        <h3 className="car-card-name">r1s dual standard</h3>
        <img className="car-card-image" src="/media/car-placeholder.webp" />

        <div className="car-card-info">
          <div className="car-card-info-wrapper">
            <img className="car-card-icon" src="icons/transmission.svg" />
            <p className="car-card-info-wrapper-txt">automatic</p>
          </div>
          <div className="car-card-info-wrapper">
            <img className="car-card-icon" src="icons/gas-pump.svg" />
            <p className="car-card-info-wrapper-txt">hybrid</p>
          </div>
          <div className="car-card-info-wrapper">
            <img className="car-card-icon" src="icons/calendar-dot.svg" />
            <p className="car-card-info-wrapper-txt">2017</p>
          </div>
          <div className="car-card-info-wrapper">
            <img className="car-card-icon" src="icons/road-horizon.svg" />
            <p className="car-card-info-wrapper-txt">80 km</p>
          </div>
        </div>
      </div>
      <div className="car-card-cta">
        <p className="car-card-cta-text">buy now</p>
        <img className="car-card-icon" src="/icons/arrow-right.svg" />
      </div>
    </div>
  );
}
