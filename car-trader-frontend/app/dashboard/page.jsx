"use client";
import "../css/dashboard-route.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:500/api/auth/signout", {
        method: "POST",
        credentials: "include", // Important: sends cookie to delete
      });

      const data = await response.json();

      if (data.success) {
        router.push("/");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    mileage: "",
    transmissiontype: "automatic",
    fueltype: "gasoline/diesel",
    releaseyear: "",
    price: "",
  });

  const [images, setImages] = useState({
    fullview: null,
    sideview: null,
    backview: null,
    insideview: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, view) => {
    setImages({ ...images, [view]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    Object.keys(images).forEach((key) => {
      if (images[key]) data.append(key, images[key]);
    });

    try {
      const response = await fetch("http://localhost:500/api/sell/uploadcar", {
        method: "POST",
        body: data,
        credentials: "include",
      });

      const result = await response.json();

      if (result.success) {
        alert("Car uploaded successfully!");
        // Reset form
        setFormData({
          name: "",
          mileage: "",
          transmissiontype: "automatic",
          fueltype: "combustion",
          releaseyear: "",
          price: "",
        });
        setImages({
          fullview: null,
          sideview: null,
          backview: null,
          insideview: null,
        });
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Failed to upload car");
    } finally {
      setLoading(false);
    }
  };

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
                <option value="gasoline/diesel">Combustion</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
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
                  Car {view} {images[view] && "✓"}
                </span>
                <label style={{ cursor: "pointer" }}>
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

            {error && <p style={{ color: "red" }}>{error}</p>}

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
            <div className="dashboard-route-main-contenet-listings-wrapper-item">
              <img
                src="media/car-placeholder.webp"
                alt=""
                className="dashboard-route-main-contenet-listings-wrapper-img"
              />
              <p>Aston martin, dB 12</p>
              <div className="dashboard-route-main-contenet-listings-wrapper-info">
                <img src="/icons/coins.svg" alt="" />
                <p>75,000,00 rwf</p>
              </div>
              <div className="dashboard-route-main-contenet-listings-wrapper-info">
                <img src="/icons/transmission.svg" alt="" />
                <p>automatic</p>
              </div>
              <div className="dashboard-route-main-contenet-listings-wrapper-info">
                <img src="/icons/gas-pump.svg" alt="" />
                <p>hybrid</p>
              </div>
              <div className="dashboard-route-main-contenet-listings-wrapper-info">
                <img src="/icons/calendar-dot.svg" alt="" />
                <p>2017</p>
              </div>
              <div className="dashboard-route-main-contenet-listings-wrapper-info">
                <img src="/icons/road-horizon.svg" alt="" />
                <p>80km</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
