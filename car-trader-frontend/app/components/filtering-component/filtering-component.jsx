"use client";
import { useState } from "react";
import "./filtering-component.css";

export default function Filtering() {
  const [filters, setFilters] = useState({
    transmission: "",
    powertrain: "",
    mileage: "",
    year: "",
  });

  const handleSearch = () => {
    console.log("Filters:", filters);
    // Add your search logic here
  };

  return (
    <div className="filtering">
      <label className="filtering-wrapper">
        <img src="/icons/transmission.svg" alt="" />
        <select
          value={filters.transmission}
          onChange={(e) =>
            setFilters({ ...filters, transmission: e.target.value })
          }
        >
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
      </label>

      <label className="filtering-wrapper">
        <img src="/icons/gas-pump.svg" alt="" />
        <select
          value={filters.powertrain}
          onChange={(e) =>
            setFilters({ ...filters, powertrain: e.target.value })
          }
        >
          <option value="combustion">Combustion</option>
          <option value="hybrid">Hybrid</option>
          <option value="electric">Electric</option>
        </select>
      </label>

      <label className="filtering-wrapper">
        <img src="/icons/road-horizon.svg" alt="" />
        <input
          type="number"
          placeholder="Mileage"
          value={filters.mileage}
          onChange={(e) => setFilters({ ...filters, mileage: e.target.value })}
        />
      </label>

      <label className="filtering-wrapper">
        <img src="/icons/calendar-dot.svg" alt="" />
        <input
          type="number"
          placeholder="Release year"
          value={filters.year}
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
        />
      </label>

      <button className="filtering-cta" onClick={handleSearch}>
        <img src="/icons/magnifying-glass.svg" alt="" />
        Search
      </button>
    </div>
  );
}
