import { Navigation } from "../../components/navigation-component.jsx";
import "../../css/buy-route.css";
export default function CarDetailsPage({ params }) {
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
