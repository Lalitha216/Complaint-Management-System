// import React from 'react';

// const Home = () => {
//   return (
//     <div className="home">
//       {/* Image added using <img> tag */}
      
//     </div>
//   );
// };

// export default Home;

import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
import LandingImage from "./images/—Pngtree—contact our male customer service_5412873.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      
      {/* Main Content */}
      <main className="main-content">
        <br></br><br></br>
        {/* Image Section */}
        <div className="image-section">
          <img src={LandingImage} alt="Customer Support Representative" />
        </div>

        {/* Text Section */}
        <div className="text-section">
          <h1>Complaint Management System</h1>
          <p className="main-text">
          Welcome to your College Complaint Management System 
          <br></br>
          A dedicated platform designed to address student concerns effectively. From academic issues to campus facilities, we're committed to making your college experience better through prompt resolution and transparent communication.
          </p>
          <div className="features-list">
          <p>✓ Convenient complaint posting for all campus issues</p>
            <p>✓ Real-time status tracking of your submitted complaints</p>
            <p>✓ Campus events page with timely updates and announcements</p>
            <p>✓ Comprehensive feedback system to improve our services</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;