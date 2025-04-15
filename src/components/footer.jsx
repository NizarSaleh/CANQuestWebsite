// components/footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p className="myComicHeader" style={styles.footerText}>
        © {new Date().getFullYear()} CANQUEST. All rights reserved.
      </p>

      {/* Extra links for Contact & GitHub */}
      <div style={styles.linkContainer}>
        <Link to="/about" style={styles.footerLink}>
          Contact
        </Link>
        <a
          href="https://github.com/CAN-Quest-Game"
          target="_blank"
          rel="noreferrer"
          style={styles.footerLink}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#ffec00',
    padding: '1rem',
    borderTop: '8px solid #000',
    textAlign: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: '1.4rem',
    color: '#000',
    margin: 0,
  },
  linkContainer: {
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  footerLink: {
    fontSize: '1rem',
    color: '#000',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
};

export default Footer;
