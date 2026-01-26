"use client";
import { use, useState, useEffect } from "react";
import { Navigation } from "../../components/navigation-component/navigation-component.jsx";
import "./buy-route.css";

export default function CarDetailsPage({ params }) {
  const { id } = use(params);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/sell/get-one/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCar(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!car) return <div>Car not found</div>;
  return (
    <section className="car-page">
      <Navigation variant="black" />

      <div className="car-page-info">
        <h1 className="car-page-info-name">{car.name}</h1>

        <div className="car-page-info-specs">
          <p className="car-page-info-specs-wrapper">
            <img src="/icons/transmission.svg" />
            Transmission type - {car.transmissiontype}
          </p>

          <p className="car-page-info-specs-wrapper">
            <img src="/icons/gas-pump.svg" />
            Transmission type - {car.fueltype}
          </p>

          <p className="car-page-info-specs-wrapper">
            <img src="/icons/calendar-dot.svg" />
            Transmission type - {car.releaseyear}
          </p>

          <p className="car-page-info-specs-wrapper">
            <img src="/icons/road-horizon.svg" />
            Transmission type - {car.mileage}
          </p>
        </div>
      </div>

      <div className="car-page-images-wrapper">
        {/* Full view */}
        <img
          src={car.images.fullview}
          alt="Full view"
          className="car-page-images-wrapper-img"
        />

        <p className="car-page-images-wrapper-info">full view</p>
      </div>

      <div className="car-page-images-wrapper">
        {/* Side view */}
        <img
          src={car.images.sideview}
          alt="Side view"
          className="car-page-images-wrapper-img"
        />

        <p className="car-page-images-wrapper-info">side view</p>
      </div>

      <div className="car-page-images-wrapper">
        {/* Back view */}
        <img
          src={car.images.backview}
          alt="Back view"
          className="car-page-images-wrapper-img"
        />

        <p className="car-page-images-wrapper-info">back view</p>
      </div>

      <div className="car-page-images-wrapper">
        {/* Inside view */}
        <img
          src={car.images.insideview}
          alt="Inside view"
          className="car-page-images-wrapper-img"
        />

        <p className="car-page-images-wrapper-info">inside view</p>
      </div>
    </section>
  );
}
