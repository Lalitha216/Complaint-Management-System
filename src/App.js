import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import UserSignup from './UserSignup';
import UserLogin from './UserLogin';
import AdminSignup from './AdminSignup';
import AdminLogin from './AdminLogin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import PostComplaint from './PostComplaint';
import Feedback from './Feedback';
import ViewComplaints from './ViewComplaints';
import Home from './Home';
import ViewFeedback from './ViewFeedback';
import StatusPage from './StatusPage';
import ViewStatus from './ViewStatus'; // Import Home component
import blackBackground from './images/bg2.png'; // Import black background
import Events from './Events';
import ViewEvents from './ViewEvents';
import './App.css';

// Background Wrapper Component
const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  // Conditional background based on the route
  const isHomePage = location.pathname === '/';
  const backgroundStyle = {
    backgroundImage: isHomePage ? 'none' : `url(${blackBackground})`, // Fixed template literal
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '95vh',
    width: '100%',
    marginTop:'2rem',
  };

  return <div style={backgroundStyle}>{children}</div>;
};

// Main App Component
const App = () => {
  return (
    <Router>
      <BackgroundWrapper>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/user/signup">User Signup</Link></li>
            <li><Link to="/user/login">User Login</Link></li>
            <li><Link to="/admin/signup">Admin Signup</Link></li>
            <li><Link to="/admin/login">Admin Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/post-complaint" element={<PostComplaint />} />
          <Route path="/view-complaints" element={<ViewComplaints />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/view-feedback" element={<ViewFeedback />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/viewstatus" element={<ViewStatus />} />
          <Route path="/events" element={<Events />}></Route>
        <Route path="/viewevents" element={<ViewEvents />}></Route>
        </Routes>
      </BackgroundWrapper>
    </Router>
  );
};

export default App;
