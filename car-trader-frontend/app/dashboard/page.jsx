"use client";
import "../css/dashboard-route.css";
import { useRouter } from "next/navigation";
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
          <form action="" className="dashboard-route-main-upload-from">
            <input
              type="text"
              placeholder="brand/name of your car"
              className="dashboard-route-main-upload-from-input"
            />
            <input
              type="text"
              placeholder="enter millage in km"
              className="dashboard-route-main-upload-from-input"
            />

            <div className="dashboard-route-main-upload-from-input-choose">
              <label>Transmission Type</label>
              <select name="transmission">
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            <div className="dashboard-route-main-upload-from-input-choose">
              <label>powertrain system </label>
              <select name="transmission">
                <option value="">combustion</option>
                <option value="">electric</option>
                <option value="">hybrid</option>
              </select>
            </div>
            <input
              type="number"
              placeholder="enter the release year"
              className="dashboard-route-main-upload-from-input"
            />
            <input
              type="number"
              placeholder="enter asking price"
              className="dashboard-route-main-upload-from-input"
            />

            <div className="dashboard-route-main-upload-from-input-img">
              <span>car full view</span>
              <label style={{ cursor: "pointer" }}>
                <img
                  src="/icons/paperclip.svg"
                  alt=""
                  className="dashboard-route-main-upload-from-input-img-icon"
                />
                <input type="file" style={{ display: "none" }} />
              </label>
            </div>
            <div className="dashboard-route-main-upload-from-input-img">
              <span>car full view</span>
              <label style={{ cursor: "pointer" }}>
                <img
                  src="/icons/paperclip.svg"
                  alt=""
                  className="dashboard-route-main-upload-from-input-img-icon"
                />
                <input type="file" style={{ display: "none" }} />
              </label>
            </div>
            <div className="dashboard-route-main-upload-from-input-img">
              <span>car full view</span>
              <label style={{ cursor: "pointer" }}>
                <img
                  src="/icons/paperclip.svg"
                  alt=""
                  className="dashboard-route-main-upload-from-input-img-icon"
                />
                <input type="file" style={{ display: "none" }} />
              </label>
            </div>
            <div className="dashboard-route-main-upload-from-input-img">
              <span>car full view</span>
              <label style={{ cursor: "pointer" }}>
                <img
                  src="/icons/paperclip.svg"
                  alt=""
                  className="dashboard-route-main-upload-from-input-img-icon"
                />
                <input type="file" style={{ display: "none" }} />
              </label>
            </div>

            <input
              type="submit"
              placeholder="enter asking price"
              className="dashboard-route-main-upload-from-submit"
            />
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
