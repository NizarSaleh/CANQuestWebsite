// components/header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Import your logo image here:
import logo from '../assets/logo.png'; // <-- update path if needed

function Header() {
  return (
    <header style={styles.header}>
      {/* Logo as Home Link */}
      <Link to="/" style={styles.logoLink}>
        <img 
          src={logo} 
          alt="Home" 
          style={styles.logoImage} 
        />
      </Link>

      {/* Navigation Links */}
      <nav style={styles.nav}>
        <Link to="/download" className="myComicHeader" style={styles.navLink}>
          Play
        </Link>
        <Link to="/documentation" className="myComicHeader" style={styles.navLink}>
          Get Involved
        </Link>
        <Link to="/about" className="myComicHeader" style={styles.navLink}>
          About Us
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: '#ffec00',
    padding: '1rem 2rem',
    borderBottom: '8px solid #000',

    // Let the logo be on the left, links on the right
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoLink: {
    display: 'inline-block',
  },
  logoImage: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '50%',  // make it round
    // optional: border: '2px solid #000', to give a black ring
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
  },
  navLink: {
    fontSize: '1.8rem',
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textDecoration: 'none',
  },
};

export default Header;
