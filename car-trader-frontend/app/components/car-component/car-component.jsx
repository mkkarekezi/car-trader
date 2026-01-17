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
          <img
            className="car-card-image"
            src={car.images?.fullview || "/media/car-placeholder.webp"}
            alt={car.name}
          />

          <div className="car-card-info">
            <h3 className="car-card-info-name">{car.name}</h3>
            <div className="car-card-info-specs">
              <p className="car-card-info-specs-txt">
                <img
                  className="car-card-info-specs-icon"
                  src="icons/calendar-dot.svg"
                />
                {car.releaseyear}
              </p>

              <p className="car-card-info-specs-txt">
                <img
                  className="car-card-info-specs-icon"
                  src="icons/road-horizon.svg"
                />
                {car.mileage} km
              </p>

              <p className="car-card-info-specs-txt">
                <img
                  className="car-card-info-specs-icon"
                  src="icons/coins.svg"
                />
                {car.price}
              </p>
            </div>
          </div>

          <p className="car-card-cta">
            view details
            <img className="car-card-icon" src="/icons/arrow-right.svg" />
          </p>
        </div>
      ))}
    </>
  );
}
