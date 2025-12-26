"use client";
import { useState, useEffect } from "react";
import { Navigation } from "../../components/navigation-component.jsx";
import "../../css/buy-route.css";
export default function CarDetailsPage({ params }) {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/sell/get-one/${params.id}`)
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
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (!car) return <div>Car not found</div>;
  return (
    <section className="car-details-page">
      {/* Car Details for ID: {params.id} */}
      <Navigation variant="black" />
      <main className="car-details-main">
        <div className="car-details-main-image">
          {/*  */}

          <div className="car-details-main-image-wrapper">
            <img
              src="/media/car-details.webp"
              className="car-details-main-image-wrapper-img"
            />
            <div className="car-details-main-image-wrapper-info">
              <p className="car-details-main-image-wrapper-info-txt">
                front view
              </p>
            </div>
          </div>
          <div className="car-details-main-image-wrapper">
            <img
              src="/media/car-details.webp"
              className="car-details-main-image-wrapper-img"
            />
            <div className="car-details-main-image-wrapper-info">
              <p className="car-details-main-image-wrapper-info-txt">
                front view
              </p>
            </div>
          </div>
          <div className="car-details-main-image-wrapper">
            <img
              src="/media/car-details.webp"
              className="car-details-main-image-wrapper-img"
            />
            <div className="car-details-main-image-wrapper-info">
              <p className="car-details-main-image-wrapper-info-txt">
                front view
              </p>
            </div>
          </div>
          <div className="car-details-main-image-wrapper">
            <img
              src="/media/car-details.webp"
              className="car-details-main-image-wrapper-img"
            />
            <div className="car-details-main-image-wrapper-info">
              <p className="car-details-main-image-wrapper-info-txt">
                front view
              </p>
            </div>
          </div>

          {/*  */}
        </div>

        <div className="car-details-main-info">
          {/*  */}
          <div className="car-details-main-info-wrapper">
            <h1 className="car-details-main-info-title">
              2020 Toyota Camry SE
            </h1>
            <p className="car-details-main-info-description">
              Death is inescapable, but to be reborn is a gift. The Rebirth
              Issue is here and offers an abundance of interviews with skaters
              like Aylu, Macarena, and Asia along with musicians like Mannequin,
              L.A. Witch, and Jinx of Coven. Don't be intimidated by the reaper
              that awaits
            </p>
          </div>

          {/*  */}
          <div className="car-details-main-info-wrapper-specs">
            <div className="car-details-main-info-wrapper-specs-wrapper">
              <div className="car-details-main-info-wrapper-specs-wrapper-info">
                <img
                  src="/icons/transmission.svg"
                  className="car-details-main-info-wrapper-specs-wrapper-info-icon"
                />
                <p className="car-details-main-info-wrapper-specs-wrapper-info-txt">
                  Transmission type
                </p>
              </div>
              <p className="car-details-main-info-wrapper-specs-name">
                automatic
              </p>
            </div>
            {/*  */}
            <div className="car-details-main-info-wrapper-specs-wrapper">
              <div className="car-details-main-info-wrapper-specs-wrapper-info">
                <img
                  src="/icons/transmission.svg"
                  className="car-details-main-info-wrapper-specs-wrapper-info-icon"
                />
                <p className="car-details-main-info-wrapper-specs-wrapper-info-txt">
                  Transmission type
                </p>
              </div>
              <p className="car-details-main-info-wrapper-specs-name">
                automatic
              </p>
            </div>
            <div className="car-details-main-info-wrapper-specs-wrapper">
              <div className="car-details-main-info-wrapper-specs-wrapper-info">
                <img
                  src="/icons/transmission.svg"
                  className="car-details-main-info-wrapper-specs-wrapper-info-icon"
                />
                <p className="car-details-main-info-wrapper-specs-wrapper-info-txt">
                  Transmission type
                </p>
              </div>
              <p className="car-details-main-info-wrapper-specs-name">
                automatic
              </p>
            </div>
            <div className="car-details-main-info-wrapper-specs-wrapper">
              <div className="car-details-main-info-wrapper-specs-wrapper-info">
                <img
                  src="/icons/transmission.svg"
                  className="car-details-main-info-wrapper-specs-wrapper-info-icon"
                />
                <p className="car-details-main-info-wrapper-specs-wrapper-info-txt">
                  Transmission type
                </p>
              </div>
              <p className="car-details-main-info-wrapper-specs-name">
                automatic
              </p>
            </div>
          </div>

          {/*  */}
          <h1 className="car-details-main-info-price">75,000,000 RF</h1>

          {/*  */}
          <div className="car-details-main-info-cta-wrapper">
            <button className="car-details-main-info-cta-wrapper-buy">
              buy now
            </button>
            <div className="car-details-main-info-cta-wrapper-info">
              <img
                src="/icons/info.svg"
                className="car-details-main-info-cta-wrapper-info-icon"
              />
              <p className="car-details-main-info-cta-wrapper-info-txt">
                a fee is redacted when transactions go through
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

// "use client";
// import { useState, useEffect, use } from "react";
// import { Navigation } from "../../components/navigation-component.jsx";
// import "../../css/buy-route.css";

// export default function CarDetailsPage({ params }) {
//   const { id } = use(params);
//   const [car, setCar] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://localhost:500/api/sell/get-one/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setCar(data.data);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error:", err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!car) return <div>Car not found</div>;

//   const images = [
//     { src: car.images?.frontview, label: "front view" },
//     { src: car.images?.backview, label: "back view" },
//     { src: car.images?.sideview, label: "side view" },
//     { src: car.images?.interiorview, label: "interior view" },
//   ].filter((img) => img.src);

//   return (
//     <section className="car-details-page">
//       <Navigation variant="black" />
//       <main className="car-details-main">
//         <div className="car-details-main-image">
//           {images.map((img, i) => (
//             <div key={i} className="car-details-main-image-wrapper">
//               <img
//                 src={img.src}
//                 className="car-details-main-image-wrapper-img"
//                 alt={img.label}
//               />
//               <div className="car-details-main-image-wrapper-info">
//                 <p className="car-details-main-image-wrapper-info-txt">
//                   {img.label}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="car-details-main-info">
//           <div className="car-details-main-info-wrapper">
//             <h1 className="car-details-main-info-title">
//               {car.releaseyear} {car.name}
//             </h1>
//             <p className="car-details-main-info-description">
//               {car.description}
//             </p>
//           </div>

//           <div className="car-details-main-info-wrapper-specs">
//             <div className="car-details-main-info-wrapper-specs-wrapper">
//               <div className="car-details-main-info-wrapper-specs-wrapper-info">
//                 <img
//                   src="/icons/transmission.svg"
//                   className="car-details-main-info-wrapper-specs-wrapper-info-icon"
//                 />
//                 <p className="car-details-main-info-wrapper-specs-wrapper-info-txt">
//                   Transmission type
//                 </p>
//               </div>
//               <p className="car-details-main-info-wrapper-specs-name">
//                 {car.transmissiontype}
//               </p>
//             </div>

//             <div className="car-details-main-info-wrapper-specs-wrapper">
//               <div className="car-details-main-info-wrapper-specs-wrapper-info">
//                 <img
//                   src="/icons/gas-pump.svg"
//                   className="car-details-main-info-wrapper-specs-wrapper-info-icon"
//                 />
//                 <p className="car-details-main-info-wrapper-specs-wrapper-info-txt">
//                   Fuel type
//                 </p>
//               </div>
//               <p className="car-details-main-info-wrapper-specs-name">
//                 {car.fueltype}
//               </p>
//             </div>

//             <div className="car-details-main-info-wrapper-specs-wrapper">
//               <div className="car-details-main-info-wrapper-specs-wrapper-info">
//                 <img
//                   src="/icons/road-horizon.svg"
//                   className="car-details-main-info-wrapper-specs-wrapper-info-icon"
//                 />
//                 <p className="car-details-main-info-wrapper-specs-wrapper-info-txt">
//                   Mileage
//                 </p>
//               </div>
//               <p className="car-details-main-info-wrapper-specs-name">
//                 {car.mileage} km
//               </p>
//             </div>

//             <div className="car-details-main-info-wrapper-specs-wrapper">
//               <div className="car-details-main-info-wrapper-specs-wrapper-info">
//                 <img
//                   src="/icons/calendar-dot.svg"
//                   className="car-details-main-info-wrapper-specs-wrapper-info-icon"
//                 />
//                 <p className="car-details-main-info-wrapper-specs-wrapper-info-txt">
//                   Year
//                 </p>
//               </div>
//               <p className="car-details-main-info-wrapper-specs-name">
//                 {car.releaseyear}
//               </p>
//             </div>
//           </div>

//           <h1 className="car-details-main-info-price">
//             {car.price?.toLocaleString()} RF
//           </h1>

//           <div className="car-details-main-info-cta-wrapper">
//             <button className="car-details-main-info-cta-wrapper-buy">
//               buy now
//             </button>
//             <div className="car-details-main-info-cta-wrapper-info">
//               <img
//                 src="/icons/info.svg"
//                 className="car-details-main-info-cta-wrapper-info-icon"
//               />
//               <p className="car-details-main-info-cta-wrapper-info-txt">
//                 a fee is deducted when transactions go through
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </section>
//   );
// }
