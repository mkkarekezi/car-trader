import "../css/footer-component.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <p className="footer-links">©2025 car trader</p>
        <div className="separator"></div>
        <p className="footer-links">about scout</p>
        <div className="separator"></div>
        <p className="footer-links">get started</p>
        <div className="separator"></div>
        <p className="footer-links">coming soon</p>
        <div className="separator"></div>
        <p className="footer-links">legal</p>
      </div>

      <div className="footer-wrapper">
        <div className="footer-lang">
          <img className="footer-icons" src="/icons/globe.svg" />
          <p className="footer-links">English(US)</p>
        </div>
        <img className="footer-icons" src="/icons/instagram-logo.svg" />
        <img className="footer-icons" src="/icons/x-logo.svg" />
        <img className="footer-icons" src="/icons/linkedin-logo.svg" />
      </div>
    </footer>
  );
}
