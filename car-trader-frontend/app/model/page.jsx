"use client";
import { Navigation } from "../components/navigation-component/navigation-component.jsx";
import "./page.css";
import { useState } from "react";

export default function Model() {
  const [formData, setFormData] = useState({
    carMaker: "",
    transmission: "",
    fuelType: "",
    mileage: "",
    year: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://mkkarekezi-car-trader.hf.space/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            car_maker: formData.carMaker,
            year: parseInt(formData.year),
            mileage_km: parseInt(formData.mileage),
            fuel_type: formData.fuelType,
            transmission_type: formData.transmission,
          }),
        },
      );

      const data = await response.json();
      setPrediction(data.predicted_price_rwf);
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Failed to get prediction");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      carMaker: "",
      transmission: "",
      fuelType: "",
      mileage: "",
      year: "",
    });
    setPrediction(null);
  };

  return (
    <section className="model-route">
      <Navigation />

      <main className="model-route-main">
        <h1 className="model-route-main-heading">
          car tradel model
          <br />
          this models helps you estimate the value of your car
        </h1>

        <form onSubmit={handleSubmit} className="model-route-main-form">
          <select
            name="carMaker"
            value={formData.carMaker}
            onChange={(e) =>
              setFormData({ ...formData, carMaker: e.target.value })
            }
            className="model-route-main-form-select"
            required
          >
            <option value="">Select Car Maker</option>
            <option value="toyota">Toyota</option>
            <option value="bmw">BMW</option>
            <option value="honda">Honda</option>
            <option value="hyundai">Hyundai</option>
            <option value="ford">Ford</option>
            <option value="volkswagen">Volkswagen</option>
            <option value="audi">Audi</option>
            <option value="tesla">Tesla</option>
            <option value="nissan">Nissan</option>
            <option value="mercedes-benz">Mercedes-Benz</option>
            <option value="jeep">Jeep</option>
            <option value="kia">Kia</option>
          </select>

          <select
            name="transmission"
            value={formData.transmission}
            onChange={(e) =>
              setFormData({ ...formData, transmission: e.target.value })
            }
            className="model-route-main-form-select"
            required
          >
            <option value="">Select Transmission</option>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>

          <select
            name="fuelType"
            value={formData.fuelType}
            onChange={(e) =>
              setFormData({ ...formData, fuelType: e.target.value })
            }
            className="model-route-main-form-select"
            required
          >
            <option value="">Select Car transmission type</option>
            <option value="combustion">Combustion</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>

          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={(e) =>
              setFormData({ ...formData, mileage: e.target.value })
            }
            placeholder="Mileage (km)"
            className="model-route-main-form-input"
            required
          />

          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            placeholder="Year"
            className="model-route-main-form-input"
            required
          />

          <input
            type="submit"
            value={loading ? "Predicting..." : "Predict"}
            className="model-route-main-form-submit"
            disabled={loading}
          />
        </form>

        <div className="model-results">
          <img
            src="/icons/prohibit.svg"
            className="model-results-clear"
            onClick={handleClear}
            style={{ cursor: "pointer" }}
            alt=""
          />

          <p className="model-results-output">
            {prediction
              ? `${prediction.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })} Rwandan Francs (RWF)`
              : "__,__,__,__ rwandan Francs (rwf)"}
          </p>
        </div>
      </main>
    </section>
  );
}
