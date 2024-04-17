import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to Our Website</h1>
      <h2>An E-Vault Revolution for Secure, Transparent, and Efficient Legal records management.</h2>
      <p>
        <b>Enhanced Security and Integrity:</b>
        The E-Vault System, fortified by blockchain technology, provides an unparalleled level of security for legal records. Through cryptographic techniques, this system ensures data integrity and prevents unauthorized access.
      </p>
      <p>
        <b>Fostering Trust, Accessibility, and Excellence in Legal Record Management:</b>
        By empowering users with secure, transparent, and accessible access to legal records, the E-Vault System fosters trust, transparency, and excellence in legal record management.
      </p>
      <h3>1. Legal Professionals:</h3>
      <p>
        Efficient Document Management: Legal professionals can securely upload, retrieve, and track legal documents, streamlining case management and enhancing overall efficiency.
      </p>
      <h3>2. Clients:</h3>
      <p>
        Transparent Access to Legal Records: Clients gain secure and transparent access to their legal records, promoting trust and transparency in their legal proceedings.
      </p>
      <h3>3. Judges:</h3>
      <p>
        Expedited Legal Proceedings: Judges can access relevant legal records quickly and securely, accelerating legal proceedings and fostering a more efficient courtroom environment.
      </p>
      <a href="https://en.wikipedia.org/wiki/EVault" target="_blank" rel="noopener noreferrer">
        <button>Learn More</button>
      </a>
    </div>
  );
};

export default Home;