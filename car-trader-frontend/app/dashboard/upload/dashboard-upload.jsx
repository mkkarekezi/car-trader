import { useState } from "react";

export function DashboardUploadFunction() {
  const [formData, setFormData] = useState({
    name: "",
    mileage: "",
    transmissiontype: "automatic",
    fueltype: "combustion",
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

  return {
    formData,
    images,
    loading,
    error,
    handleInputChange,
    handleFileChange,
    handleSubmit,
  };
}
