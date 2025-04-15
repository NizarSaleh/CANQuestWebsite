// components/header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // update the path if needed

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.headerInner}>
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
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: '#ffec00',
    padding: '1rem 0', // Removed horizontal padding for a full bleed background.
    borderBottom: '8px solid #000',
  },
  headerInner: {
    width: '95%',
    maxWidth: '1200px',
    margin: '0 auto',
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
    borderRadius: '50%',
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
