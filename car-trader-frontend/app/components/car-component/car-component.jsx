"use client";
import { useState, useEffect } from "react";
import "./car-component.css";

export default function CarComponent() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:500/api/sell/get-all")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCars(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading cars...</div>;

  return (
    <>
      {cars.map((car) => (
        <div key={car._id} className="car-card">
          <div className="card-card-wrapper">
            <h3 className="car-card-name">{car.name}</h3>
            <img
              className="car-card-image"
              src={car.images?.fullview || "/media/car-placeholder.webp"}
              alt={car.name}
            />

            <div className="car-card-info">
              <div className="car-card-info-wrapper">
                <img className="car-card-icon" src="icons/transmission.svg" />
                <p className="car-card-info-wrapper-txt">
                  {car.transmissiontype}
                </p>
              </div>
              <div className="car-card-info-wrapper">
                <img className="car-card-icon" src="icons/gas-pump.svg" />
                <p className="car-card-info-wrapper-txt">{car.fueltype}</p>
              </div>
              <div className="car-card-info-wrapper">
                <img className="car-card-icon" src="icons/calendar-dot.svg" />
                <p className="car-card-info-wrapper-txt">{car.releaseyear}</p>
              </div>
              <div className="car-card-info-wrapper">
                <img className="car-card-icon" src="icons/road-horizon.svg" />
                <p className="car-card-info-wrapper-txt">{car.mileage} km</p>
              </div>
            </div>
          </div>
          <div className="car-card-cta">
            <p className="car-card-cta-text">buy now - ${car.price}</p>
            <img className="car-card-icon" src="/icons/arrow-right.svg" />
          </div>
        </div>
      ))}
    </>
  );
}
