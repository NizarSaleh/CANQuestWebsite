// components/AboutUs.jsx
import React, { useState, useEffect } from 'react';
import groupPhoto from '../assets/group.jpg';
import kevinPhoto from '../assets/kevin.jpg';
import shamsPhoto from '../assets/shams.jpg';
import aliPhoto from '../assets/ali.jpg';
import souadPhoto from '../assets/souad.jpg';
import nizarPhoto from '../assets/nizar.jpg';
import exclamationPng from '../assets/exclamation.png';

function AboutUs() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Merge mobile overrides into the base styles
  const mergedStyles = {
    ...styles,
    pageContainer: {
      ...styles.pageContainer,
      padding: isMobile ? '1rem' : '2rem',
    },
    groupPhotoSection: {
      ...styles.groupPhotoSection,
      maxWidth: isMobile ? '100%' : '1200px',
      margin: isMobile ? '1rem auto' : '2rem auto',
    },
    memberRow: {
      ...styles.memberRow,
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'center' : 'flex-start',
      margin: isMobile ? '1rem auto' : '2rem auto',
      width: isMobile ? '90%' : '100%',
    },
    memberPhoto: {
      ...styles.memberPhoto,
      width: isMobile ? '90%' : styles.memberPhoto.width,
      height: isMobile ? 'auto' : styles.memberPhoto.height,
      marginRight: isMobile ? 0 : styles.memberPhoto.marginRight,
      marginBottom: isMobile ? '1rem' : 0,
    },
    infoSection: {
      ...styles.infoSection,
      width: isMobile ? '90%' : styles.infoSection.width,
      alignItems: isMobile ? 'center' : 'flex-start',
      textAlign: isMobile ? 'center' : 'left',
    },
    descriptionBox: {
      ...styles.descriptionBox,
      width: isMobile ? '100%' : styles.descriptionBox.width,
      height: isMobile ? 'auto' : styles.descriptionBox.height,
      padding: isMobile ? '1rem' : styles.descriptionBox.padding,
      marginTop: isMobile ? '0.5rem' : 0,
    },
    acknowledgmentPanel: {
      ...styles.acknowledgmentPanel,
      width: isMobile ? '90%' : styles.acknowledgmentPanel.width,
      margin: isMobile ? '1rem auto' : styles.acknowledgmentPanel.margin,
    },
  };

  return (
    <div style={mergedStyles.pageContainer}>
      {/* Group Photo Section (with "MEET THE TEAM!" Box) */}
      <div style={mergedStyles.groupPhotoSection}>
        <div style={mergedStyles.meetTeamPanel}>
          <h1 className="myComicHeader" style={mergedStyles.meetTeamTitle}>
            MEET THE TEAM!
          </h1>
        </div>
        <div style={mergedStyles.photoContainer}>
          <img src={groupPhoto} alt="Our Team" style={mergedStyles.groupPhoto} />
          <img
            src={exclamationPng}
            alt="!!!"
            style={mergedStyles.exclamationMark}
          />
        </div>
      </div>

      {/* Member Row: Kevin */}
      <div style={mergedStyles.memberRow}>
        <img src={kevinPhoto} alt="Kevin" style={mergedStyles.memberPhoto} />
        <div style={mergedStyles.infoSection}>
          <h2 style={mergedStyles.memberName}>
            <a
              href="https://www.linkedin.com/in/kevin-mitchell-81b56829/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              KEVIN MITCHEL (CLIENT)
            </a>
          </h2>
          <div style={mergedStyles.descriptionBox}>
            <p style={mergedStyles.descriptionText}>
              He is the best most epic client ever!
            </p>
          </div>
        </div>
      </div>

      {/* Member Row: Shams */}
      <div style={mergedStyles.memberRow}>
        <img src={shamsPhoto} alt="Shams" style={mergedStyles.memberPhoto} />
        <div style={mergedStyles.infoSection}>
          <h2 style={mergedStyles.memberName}>
            <a
              href="https://www.linkedin.com/in/shams-ahson/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              SHAMS AHSON
            </a>
          </h2>
          <div style={mergedStyles.descriptionBox}>
            <p style={mergedStyles.descriptionText}>
              Cybersecurity expert and bestest hacker to have ever lived.
            </p>
          </div>
        </div>
      </div>

      {/* Member Row: Ali */}
      <div style={mergedStyles.memberRow}>
        <img src={aliPhoto} alt="Ali" style={mergedStyles.memberPhoto} />
        <div style={mergedStyles.infoSection}>
          <h2 style={mergedStyles.memberName}>
            <a
              href="https://www.linkedin.com/in/ali-a-chowdhury/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              ALI CHOWDHURY
            </a>
          </h2>
          <div style={mergedStyles.descriptionBox}>
            <p style={mergedStyles.descriptionText}>
              An expert in system design and a creative force behind our projects.
            </p>
          </div>
        </div>
      </div>

      {/* Member Row: Souad */}
      <div style={mergedStyles.memberRow}>
        <img src={souadPhoto} alt="Souad" style={mergedStyles.memberPhoto} />
        <div style={mergedStyles.infoSection}>
          <h2 style={mergedStyles.memberName}>
            <a
              href="https://www.linkedin.com/in/souad-omar-0105aa217/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              SOUAD OMAR
            </a>
          </h2>
          <div style={mergedStyles.descriptionBox}>
            <p style={mergedStyles.descriptionText}>
              A brilliant strategist ensuring our solutions are both effective and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Member Row: Nizar */}
      <div style={mergedStyles.memberRow}>
        <img src={nizarPhoto} alt="Nizar" style={mergedStyles.memberPhoto} />
        <div style={mergedStyles.infoSection}>
          <h2 style={mergedStyles.memberName}>
            <a
              href="https://www.linkedin.com/in/nizarsaleh"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              NIZAR SALEH
            </a>
          </h2>
          <div style={mergedStyles.descriptionBox}>
            <p style={mergedStyles.descriptionText}>
              A versatile programmer with a passion for digital innovation and security.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Acknowledgments */}
      <div style={mergedStyles.acknowledgmentPanel}>
        <h3 style={mergedStyles.ackSubHeading}>ETAS Collaboration</h3>
        <p style={mergedStyles.ackPanelText}>
          We’re proud to collaborate with ETAS, a leader in embedded solutions for the automotive industry.
          Their guidance helps make CANQUEST’s hacking features realistic.
        </p>
      </div>

      <div style={mergedStyles.acknowledgmentPanel}>
        <h3 style={mergedStyles.ackSubHeading}>Senior Design Faculty</h3>
        <p style={mergedStyles.ackPanelText}>
          Special thanks to the University of Michigan-Dearborn CECS Senior Design faculty for their mentorship and support.
        </p>
      </div>

      <div style={mergedStyles.acknowledgmentPanel}>
        <h3 style={mergedStyles.ackSubHeading}>Contact Us</h3>
        <p style={mergedStyles.ackPanelText}>
          <strong>Email:</strong> canquestgame@gmail.com <br />
          <strong>GitHub:</strong> github.com/CANQUEST
        </p>
        <p style={mergedStyles.ackPanelText}>
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

  // Group Photo Section (with "MEET THE TEAM!" Box)
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

  // Member Row
  memberRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '2rem auto',
    width: '100%',
    maxWidth: '1200px',
  },

  // Member Photo
  memberPhoto: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    border: '4px solid #000',
    boxShadow: '4px 4px 0 #000',
    marginRight: '1rem',
  },

  // Info Section for member details
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '900px',
  },
  memberName: {
    fontSize: '2rem',
    color: '#000',
    fontWeight: 'bold',
    margin: '0 0 0.5cm 0',
    textTransform: 'uppercase',
  },

  // Description Box
  descriptionBox: {
    backgroundColor: '#ffec00',
    border: '4px solid #000',
    padding: '1rem',
    width: '100%',
    height: '245px',
    boxShadow: '4px 4px 0 #000',
  },
  descriptionText: {
    margin: 0,
    fontSize: '1.2rem',
    color: '#000',
  },

  // Acknowledgment Panels
  acknowledgmentPanel: {
    width: '1200px',
    margin: '0rem 0 1rem 8rem',
    border: '8px solid #000',
    boxShadow: '8px 8px 0 #000',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#ffec00',
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
