"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FetchListings } from "./dashboard-listings.jsx";
import { useRouter } from "next/navigation";
import "./dashboard-listing.css";

export default function DashboardListings() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadListings() {
      const data = await FetchListings();
      setListings(data);
      setLoading(false);
    }
    loadListings();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // or a spinner component
  }
  return (
    <div className="dashboard-listings">
      <aside className="dashboard-listings-aside">
        <h1>car trader</h1>
      </aside>

      <main className="dashboard-listings-main">
        <header className="dashboard-listings-main-header">
          <h1>user name{}</h1>
          <div className="dashboard-listings-main-links">
            <Link
              href="/dashboard/upload"
              className="dashboard-listings-main-links-link"
            >
              upload a car
            </Link>
            <Link
              href="/dashboard/listings"
              className="dashboard-listings-main-links-link"
            >
              my uploads
            </Link>
          </div>
        </header>

        <div className="dashboard-listings-main-wrapper">
          <div className="dashboard-listings-main-wrapper-title">
            <p className="dashboard-listings-main-wrapper-title-p">name</p>
            <p className="dashboard-listings-main-wrapper-title-p">price</p>
            <p className="dashboard-listings-main-wrapper-title-p">
              transmission type
            </p>
            <p className="dashboard-listings-main-wrapper-title-p">fuel type</p>
            <p className="dashboard-listings-main-wrapper-title-p">millage</p>
            <p className="dashboard-listings-main-wrapper-title-p">
              release year
            </p>
          </div>

          {listings.map((listing, index) => (
            <div key={index} className="dashboard-listings-main-wrapper-items">
              <p className="dashboard-listings-main-wrapper-items-p">
                {listing.name}
              </p>
              <p className="dashboard-listings-main-wrapper-items-p">
                {listing.price.toLocaleString()}
              </p>
              <p className="dashboard-listings-main-wrapper-items-p">
                {listing.transmissiontype}
              </p>
              <p className="dashboard-listings-main-wrapper-items-p">
                {listing.fueltype}
              </p>
              <p className="dashboard-listings-main-wrapper-items-p">
                {listing.mileage.toLocaleString()} miles
              </p>
              <p className="dashboard-listings-main-wrapper-items-p">
                {listing.releaseyear}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
