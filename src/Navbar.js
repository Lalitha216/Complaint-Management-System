import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from './utils/logout'; // Import the logout function
import Modal from './Modal'; // Import the Modal component

const Navbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleLogout = () => {
    logout(navigate); // Call the logout function
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user/signup">User Signup</Link></li>
        <li><Link to="/user/login">User Login</Link></li>
        <li><Link to="/admin/signup">Admin Signup</Link></li>
        <li><Link to="/admin/login">Admin Login</Link></li>
        <li>
          <button className="logout-button" onClick={handleLogout}>Logout</button> {/* Styled Logout button */}
        </li>
      </ul>
      {showModal && <Modal message="Logged out successfully!" onClose={closeModal} />} {/* Render modal if showModal is true */}
    </nav>
  );
};

export default Navbar;