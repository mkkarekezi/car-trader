"use client";
import { useState, useEffect } from "react";
import "./dashboard-route.css";
import { useRouter } from "next/navigation";
import { logout } from "./logout.jsx";
import { UploadCar } from "./upload-car.jsx";
import { FetchListings } from "./my-listings.jsx";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();

  //
  const {
    formData,
    images,
    loading,
    error,
    handleInputChange,
    handleFileChange,
    handleSubmit,
  } = UploadCar();

  //
  const handleLogout = async () => {
    await logout(router);
  };

  //
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const loadListings = async () => {
      const data = await FetchListings();
      setListings(data);
    };
    loadListings();
  }, []);

  return (
    <section className="dashboard-route">
      <nav className="dashboard-route-nav">
        <Link href="#" className="dashboard-route-nav-home">
          <img
            src="/icons/logo.svg"
            className="dashboard-route-nav-home-icon"
          />
        </Link>
        <button className="dashboard-route-nav-logout" onClick={handleLogout}>
          logout
        </button>
      </nav>

      <header className="dashboard-route-header">helo</header>

      <main className="dashboard-route-main">
        <div className="dashboard-route-main-upload">
          <h1 className="dashboard-route-main-upload-title">
            Upload a new car
          </h1>
          <form
            onSubmit={handleSubmit}
            className="dashboard-route-main-upload-from"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="brand/name of your car"
              className="dashboard-route-main-upload-from-input"
              required
            />
            <input
              type="number"
              name="mileage"
              value={formData.mileage}
              onChange={handleInputChange}
              placeholder="enter mileage in km"
              className="dashboard-route-main-upload-from-input"
              required
            />

            <div className="dashboard-route-main-upload-from-input-choose">
              <label>Transmission Type</label>
              <select
                name="transmissiontype"
                value={formData.transmissiontype}
                onChange={handleInputChange}
              >
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>

            <div className="dashboard-route-main-upload-from-input-choose">
              <label>Powertrain System</label>
              <select
                name="fueltype"
                value={formData.fueltype}
                onChange={handleInputChange}
              >
                <option value="combustion">combustion</option>
                <option value="electric">electric</option>
                <option value="hybrid">hybrid</option>
              </select>
            </div>

            <input
              type="number"
              name="releaseyear"
              value={formData.releaseyear}
              onChange={handleInputChange}
              placeholder="enter the release year"
              className="dashboard-route-main-upload-from-input"
              required
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="enter asking price"
              className="dashboard-route-main-upload-from-input"
              required
            />

            {["fullview", "sideview", "backview", "insideview"].map((view) => (
              <div
                key={view}
                className="dashboard-route-main-upload-from-input-img"
              >
                <span>
                  Car {view} {images[view]?.name}
                </span>
                <label>
                  <img
                    src="/icons/paperclip.svg"
                    alt=""
                    className="dashboard-route-main-upload-from-input-img-icon"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, view)}
                    style={{ display: "none" }}
                    required
                  />
                </label>
              </div>
            ))}

            {error && <p>{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="dashboard-route-main-upload-from-submit"
            >
              {loading ? "Uploading..." : "Upload Car"}
            </button>
          </form>
        </div>

        <div className="dashboard-route-main-contenet-listings">
          <h1 className="dashboard-route-main-contenet-listings-title">
            your current listings
          </h1>

          <div className="dashboard-route-main-contenet-listings-wrapper">
            {listings.map((car) => (
              <div
                key={car._id}
                className="dashboard-route-main-contenet-listings-wrapper-item"
              >
                <img
                  src={car.images?.fullview || "media/car-placeholder.webp"}
                  alt=""
                  className="dashboard-route-main-contenet-listings-wrapper-img"
                />
                <p>{car.name}</p>
                <div className="dashboard-route-main-contenet-listings-wrapper-info">
                  <img src="/icons/coins.svg" alt="" />
                  <p>{car.price.toLocaleString()} rwf</p>
                </div>
                <div className="dashboard-route-main-contenet-listings-wrapper-info">
                  <img src="/icons/transmission.svg" alt="" />
                  <p>{car.transmissiontype}</p>
                </div>
                <div className="dashboard-route-main-contenet-listings-wrapper-info">
                  <img src="/icons/gas-pump.svg" alt="" />
                  <p>{car.fueltype}</p>
                </div>
                <div className="dashboard-route-main-contenet-listings-wrapper-info">
                  <img src="/icons/calendar-dot.svg" alt="" />
                  <p>{car.releaseyear}</p>
                </div>
                <div className="dashboard-route-main-contenet-listings-wrapper-info">
                  <img src="/icons/road-horizon.svg" alt="" />
                  <p>{car.mileage}km</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
