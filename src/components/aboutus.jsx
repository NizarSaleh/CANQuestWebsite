// components/AboutUs.jsx
import React from 'react';
import groupPhoto from '../assets/group.jpg';
import kevinPhoto from '../assets/kevin.jpg';
import shamsPhoto from '../assets/shams.jpg';
import aliPhoto from '../assets/ali.jpg';
import souadPhoto from '../assets/souad.jpg';
import nizarPhoto from '../assets/nizar.jpg';
import exclamationPng from '../assets/exclamation.png';

function AboutUs() {
  return (
    <div style={styles.pageContainer}>
      {/* Group Photo Section (with "MEET THE TEAM!" Box) */}
      <div style={styles.groupPhotoSection}>
        <div style={styles.meetTeamPanel}>
          <h1 className= "myComicHeader" style={styles.meetTeamTitle}>MEET THE TEAM!</h1>
        </div>
        <div style={styles.photoContainer}>
          <img src={groupPhoto} alt="Our Team" style={styles.groupPhoto} />
          <img src={exclamationPng} alt="!!!" style={styles.exclamationMark} />
        </div>
      </div>

      {/* Member Row: Kevin */}
      <div style={styles.memberRow}>
        <img src={kevinPhoto} alt="Kevin" style={styles.memberPhoto} />
        <div style={styles.infoSection}>
          <h2 style={styles.memberName}>
            <a
              href="https://www.linkedin.com/in/kevin-mitchell-81b56829/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              KEVIN MITCHEL (CLIENT)
            </a>
          </h2>
          <div style={styles.descriptionBox}>
            <p style={styles.descriptionText}>
              He is the best most epic client ever!
            </p>
          </div>
        </div>
      </div>

      {/* Member Row: Shams */}
      <div style={styles.memberRow}>
        <img src={shamsPhoto} alt="Shams" style={styles.memberPhoto} />
        <div style={styles.infoSection}>
          <h2 style={styles.memberName}>
            <a
              href="https://www.linkedin.com/in/shams-ahson/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              SHAMS AHSON
            </a>
          </h2>
          <div style={styles.descriptionBox}>
            <p style={styles.descriptionText}>
              Cybersecurity expert and bestest hacker to have ever lived.
            </p>
          </div>
        </div>
      </div>

      {/* Member Row: Ali */}
      <div style={styles.memberRow}>
        <img src={aliPhoto} alt="Ali" style={styles.memberPhoto} />
        <div style={styles.infoSection}>
          <h2 style={styles.memberName}>
            <a
              href="https://www.linkedin.com/in/ali-a-chowdhury/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              ALI CHOWDHURY
            </a>
          </h2>
          <div style={styles.descriptionBox}>
            <p style={styles.descriptionText}>
              An expert in system design and a creative force behind our projects.
            </p>
          </div>
        </div>
      </div>

      {/* Member Row: Souad */}
      <div style={styles.memberRow}>
        <img src={souadPhoto} alt="Souad" style={styles.memberPhoto} />
        <div style={styles.infoSection}>
          <h2 style={styles.memberName}>
            <a
              href="https://www.linkedin.com/in/souad-omar-0105aa217/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              SOUAD OMAR
            </a>
          </h2>
          <div style={styles.descriptionBox}>
            <p style={styles.descriptionText}>
              A brilliant strategist ensuring our solutions are both effective and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Member Row: Nizar */}
      <div style={styles.memberRow}>
        <img src={nizarPhoto} alt="Nizar" style={styles.memberPhoto} />
        <div style={styles.infoSection}>
          <h2 style={styles.memberName}>
            <a
              href="https://www.linkedin.com/in/nizarsaleh"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              NIZAR SALEH
            </a>
          </h2>
          <div style={styles.descriptionBox}>
            <p style={styles.descriptionText}>
              A versatile programmer with a passion for digital innovation and security.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Acknowledgments */}
      <div style={styles.acknowledgmentPanel}>
        <h3 style={styles.ackSubHeading}>ETAS Collaboration</h3>
        <p style={styles.ackPanelText}>
          We’re proud to collaborate with ETAS, a leader in embedded solutions for the automotive industry.
          Their guidance helps make CANQUEST’s hacking features realistic.
        </p>
      </div>

      <div style={styles.acknowledgmentPanel}>
        <h3 style={styles.ackSubHeading}>Senior Design Faculty</h3>
        <p style={styles.ackPanelText}>
          Special thanks to the University of Michigan-Dearborn CECS Senior Design faculty for their mentorship and support.
        </p>
      </div>

      <div style={styles.acknowledgmentPanel}>
        <h3 style={styles.ackSubHeading}>Contact Us</h3>
        <p style={styles.ackPanelText}>
          <strong>Email:</strong> canquestgame@gmail.com <br />
          <strong>GitHub:</strong> github.com/CANQUEST
        </p>
        <p style={styles.ackPanelText}>
          We are open source! Feel free to contribute or explore the repo for more details.
        </p>
      </div>
    </div>
  );
}

const styles = {
  // Overall page container
  pageContainer: {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: '2rem',
    backgroundColor: '#8AA4CC',
  },

  // Group photo section at the top
  groupPhotoSection: {
    width: '100%',
    maxWidth: '1200px',
    margin: '2rem auto',
    textAlign: 'center',
  },
  meetTeamPanel: {
    backgroundColor: '#ffec00',
    border: '8px solid #000',
    boxShadow: '8px 8px 0 #000',
    width: '40%',
    height: '180px',
    margin: '0 auto 1.5rem auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meetTeamTitle: {
    margin: 0,
    fontSize: '4rem',
    color: '#000',
    
  },
  photoContainer: {
    position: 'relative',
    border: '8px solid #000',
    boxShadow: '8px 8px 0 #000',
    background: '#fff',
    margin: '0 auto',
  },
  groupPhoto: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
  exclamationMark: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    width: '60px',
    transform: 'rotate(-20deg)',
    zIndex: 2,
  },

  // Member row: 1200px wide container, left-aligned with group photo
  memberRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '2rem auto',
    width: '100%',
    maxWidth: '1200px',
  },

  // Member photo style
  memberPhoto: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    border: '4px solid #000',
    boxShadow: '4px 4px 0 #000',
    marginRight: '1rem',
  },

  // Info Section for member details: now fixed at 900px to match 300+900 = 1200px total
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '900px', // Fixed width for consistent alignment
  },
  memberName: {
    fontSize: '2rem',
    color: '#000',
    fontWeight: 'bold',
    margin: '0 0 0.5cm 0', // 0.5 cm gap below the name
    textTransform: 'uppercase',
  },

  // Description box: occupies full width of the infoSection (900px) with a fixed height
  descriptionBox: {
    backgroundColor: '#ffec00',
    border: '4px solid #000',
    padding: '1rem',
    width: '100%', // 100% of 900px equals 900px
    height: '245px', // Fixed height for the description box
    boxShadow: '4px 4px 0 #000',
  },
  descriptionText: {
    margin: 0,
    fontSize: '1.2rem',
    color: '#000',
  },

  // Additional acknowledgment panels: set to 900px wide and left-aligned at 300px
  acknowledgmentPanel: {
    width: '1200px',
    margin: '0rem 0 1rem 8rem', // 300px left margin aligns with member info sections
    border: '8px solid #000',
    boxShadow: '8px 8px 0 #000',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#ffec00', // Bronze background
  },
  ackSubHeading: {
    fontSize: '2rem',
    color: '#000',
    margin: 0,
    marginBottom: '0.5rem',
  },
  ackPanelText: {
    fontSize: '1.2rem',
    color: '#333',
    margin: '0.5rem auto',
    maxWidth: '600px',
  },
};

export default AboutUs;
