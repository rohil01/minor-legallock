import React from "react";
 import "./Home.css";
import Navbar from "../Navbar/Navbar.jsx";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar /> 
      <div className="content-container">
        <h1>WELCOME TO OUR WEBSITE</h1>
        <h2>An E-Vault Revolution for Secure, Transparent, and Efficient Legal records management.</h2>
        <p>
          <b>Enhanced Security and Integrity: </b>
          The E-Vault System, fortified by blockchain technology, provides an unparalleled level of security for legal records. Through cryptographic techniques, this system ensures data integrity and prevents unauthorized access.
        </p>

        <div class="circles-container">
          <div class="circle circle-lawyers"> Lawyers </div>
          <div class="circle circle-clients"> Clients </div>
          <div class="circle circle-judges"> Judges </div>
        </div>
        <div className="box">
          <h3>1. Lawyers:</h3>
          <p>
            Efficient Document Management: Legal professionals can securely upload, retrieve, and track legal documents, streamlining case management and enhancing overall efficiency.
          </p>
        </div>

        <div className="box">
          <h3>2. Clients:</h3>
          <p>
            Transparent Access to Legal Records: Clients gain secure and transparent access to their legal records, promoting trust and transparency in their legal proceedings.
          </p>
        </div> 

        <div className="box">
          <h3>3. Judges:</h3>
          <p>
            Expedited Legal Proceedings: Judges can access relevant legal records quickly and securely, accelerating legal proceedings and fostering a more efficient courtroom environment.
          </p>
        </div>
        <div class="button-container">
          <a href="https://en.wikipedia.org/wiki/EVault" target="_blank" rel="noopener noreferrer">
            <button>Learn More</button>
          </a>
          <a href="mailto:youremail@yourdomain.com" class="contact-us-button">
            Contact Us
          </a>
        </div>

    
    
      </div>
    </div>
  );
};

export default Home;
