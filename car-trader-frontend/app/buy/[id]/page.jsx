"use client";
import { use, useState, useEffect } from "react";
import { Navigation } from "../../components/navigation-component/navigation-component.jsx";
import "../buy-route.css";

export default function CarDetailsPage({ params }) {
  const { id } = use(params);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:500/api/sell/get-one/${id}`)
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

      <div className="car-details-info">
        <div className="car-details-info-header">
          <h1 className="car-details-info-header-title">{car.name}</h1>

          <p className="car-details-info-header-p">
            Death is inescapable, but to be reborn is a gift. The Rebirth Issue
            is here and offers an abundance of interviews with skaters like
            Aylu, Macarena
          </p>
        </div>

        <div className="car-details-info-specs">
          <div className="car-details-info-specs-wrapper">
            <img
              src="/icons/transmission.svg"
              className="car-details-info-specs-wrapper-icon"
            />
            <p className="car-details-info-specs-wrapper-txt">
              Transmission type - {car.transmissiontype}
            </p>
          </div>

          <div className="car-details-info-specs-wrapper">
            <img
              src="/icons/gas-pump.svg"
              className="car-details-info-specs-wrapper-icon"
            />
            <p className="car-details-info-specs-wrapper-txt">
              Transmission type - {car.fueltype}
            </p>
          </div>
          <div className="car-details-info-specs-wrapper">
            <img
              src="/icons/calendar-dot.svg"
              className="car-details-info-specs-wrapper-icon"
            />
            <p className="car-details-info-specs-wrapper-txt">
              Transmission type - {car.releaseyear}
            </p>
          </div>
          <div className="car-details-info-specs-wrapper">
            <img
              src="/icons/road-horizon.svg"
              className="car-details-info-specs-wrapper-icon"
            />
            <p className="car-details-info-specs-wrapper-txt">
              Transmission type - {car.mileage}
            </p>
          </div>
        </div>

        <div className="car-details-info-cta">
          <h1 className="car-details-info-cta-price">{car.price} rwf</h1>
          <button className="car-details-info-cta-buy">buy now</button>
          <div className="car-details-info-cta-info">
            <img
              src="/icons/info.svg"
              className="car-details-info-cta-info-icon"
            />
            <p className="car-details-info-cta-info-txt">
              a fee is redacted for transactions
            </p>
          </div>
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
