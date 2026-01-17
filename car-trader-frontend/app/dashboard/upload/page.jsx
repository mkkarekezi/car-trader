"use client";
import Link from "next/link";
export default function DashboardUpload() {
  return (
    <div className="dashboard-upload">
      <aside className="dashboard-upload-aside">
        <h1>car trader</h1>
      </aside>

      <main className="dashboard-upload-main">
        <Link className="dashboard-upload-main-linl">
          upload a car
          <img src="/icons/arrow-left.svg" alt="" />
        </Link>
        <form onSubmit={handleSubmit} className="dashboard-upload-main-from">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="brand/name of your car"
            className="dashboard-upload-main-from-input"
            required
          />
          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleInputChange}
            placeholder="enter mileage in km"
            className="dashboard-upload-main-from-input"
            required
          />

          <label className="dashboard-upload-main-from-input">
            <select
              name="transmissiontype"
              value={formData.transmissiontype}
              onChange={handleInputChange}
            >
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </label>

          <label className="dashboard-upload-main-from-input">
            <select
              name="fueltype"
              value={formData.fueltype}
              onChange={handleInputChange}
            >
              <option value="combustion">combustion</option>
              <option value="electric">electric</option>
              <option value="hybrid">hybrid</option>
            </select>
          </label>

          <input
            type="number"
            name="releaseyear"
            value={formData.releaseyear}
            onChange={handleInputChange}
            placeholder="enter the release year"
            className="dashboard-upload-main-from-input"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="enter asking price"
            className="dashboard-upload-main-from-input"
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
            className="dashboard-upload-main-from-submit"
          >
            {loading ? "Uploading..." : "Upload Car"}
          </button>
        </form>
      </main>
    </div>
  );
}
