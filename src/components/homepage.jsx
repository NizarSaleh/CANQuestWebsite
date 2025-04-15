// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Banner images
import cityBg from '../assets/blkwtcit.png'; // Grayscale city background
import starBurst from '../assets/downloadNow.png'; // Star image with "Play Now!" integrated

// (Halftone background ignored)
// import comicHalftoneBlue from '../assets/comicHalftoneBlue.png';

// The custom bubble image for the Purpose section
import purposeBubble from '../assets/purposebubble.png';

// Carousel images
import comicpage1 from '../assets/comicpage1.png';
import comicpage2 from '../assets/comicpage2.png';
import comicpage3 from '../assets/comicpage3.png';
import comicpage4 from '../assets/comicpage4.png';

function HomePage() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile on resize.
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile-adjusted styles for the purpose section and bubble
  const purposeSectionStyle = {
    ...styles.purposeSection,
    ...(isMobile && { padding: '2rem 0' }), // no horizontal padding on mobile
  };

  const purposeBubbleStyleCombined = {
    ...styles.purposeBubble,
    ...(isMobile && {
      maxWidth: '100%',
      minHeight: '778px', // Original 400px plus an extra ~378px (~10cm)
      padding: '3rem 0',  // Remove horizontal padding
    }),
  };

  const handleDownload = () => {
    navigate('/download');
  };

  return (
    <div style={styles.pageContainer}>

      {/* TOP BANNER */}
      <section style={styles.cityBanner}>
        <h1 style={styles.titleText}>CANQUEST</h1>
        <h2 style={styles.subtitleText}>GAMIFIED VEHICLE HACKING PLATFORM</h2>
        <button style={styles.starButton} onClick={handleDownload}>
          <img src={starBurst} alt="Play Now!" style={styles.starImage} />
        </button>
      </section>

      {/* PURPOSE SECTION */}
      <section style={purposeSectionStyle}>
        <div style={purposeBubbleStyleCombined}>
          <h2 className="myComicHeader" style={styles.purposeHeading}>
            Purpose
          </h2>
          <p style={styles.purposeText}>
            The goal of CANQuest is to create an open-source, gamified platform 
            that helps users of all skill levels learn about automotive cybersecurity. 
            The platform simulates a virtual vehicle environment with real-world 
            vulnerabilities and a series of Capture-the-Flag (CTF) challenges. By 
            working with a custom CAN bus and UDS server, players develop their 
            penetration testing skills in a realistic, hands-on way.
          </p>
          <p style={styles.purposeText}>
            In addition to playing the game, CANQuest encourages the community to 
            contribute by creating new levels and vulnerabilities...
          </p>
        </div>
      </section>

      {/* TRAILER / DEMO SECTION */}
      <section style={styles.trailerSection}>
        <div style={styles.trailerInner}>
          <h2 className="myComicHeader" style={styles.panelHeading}>Trailer / Demo</h2>
          <p style={styles.panelText}>
            Check out our quick trailer to see CANQUEST in action:
          </p>
          <div style={styles.videoContainer}>
            <div style={styles.videoWrapper}>
              <iframe
                style={styles.responsiveIframe}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="CANQUEST Trailer"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* COMIC BOOK STORY / CAROUSEL SECTION */}
      <section style={styles.panelSection}>
        <h2 className="myComicHeader" style={styles.panelHeading}>
          Comic Book Story
        </h2>
        <p style={styles.comicSubheading}>
          Learn The Story Behind CANQuest
        </p>
        <ComicCarousel />
      </section>

      {/* TESTIMONIES SECTION */}
      <section style={styles.panelSection}>
        <h2 className="myComicHeader" style={styles.panelHeading}>TESTIMONIES</h2>
        <div style={styles.testimonyContainer}>
          <TestimonyBubble
            quote="PEOPLE OF ALL AGES [CAN] LEARN BASICS IN A FUN, ENGAGING AND GAMIFIED MANNER"
            name="BENCE VARGA, SENIOR AUTOMOTIVE PENETRATION TESTER"
          />
          <TestimonyBubble
            quote="CANQUEST IS A CUSTOMIZABLE AND USEFUL TOOL FOR SECURITY ENGINEERS TO LEARN"
            name="IVAN GRANERO, SENIOR SECURITY ENGINEER"
          />
        </div>
      </section>
    </div>
  );
}

/* CAROUSEL COMPONENT */
function ComicCarousel() {
  const images = [comicpage1, comicpage2, comicpage3, comicpage4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      style={carouselStyles.container}
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <img
        src={images[currentIndex]}
        alt={`Comic Page ${currentIndex + 1}`}
        style={carouselStyles.image}
      />
      <button
        style={{
          ...carouselStyles.arrowLeft,
          opacity: showArrows ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        style={{
          ...carouselStyles.arrowRight,
          opacity: showArrows ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

/* TESTIMONY BUBBLE COMPONENT */
function TestimonyBubble({ quote, name }) {
  return (
    <div style={styles.testimonyWrapper}>
      <div style={styles.speechBubble}>
        <div style={styles.bubbleTailOuter}></div>
        <div style={styles.bubbleTailInner}></div>
        <p style={styles.testimonyQuote}>{quote}</p>
      </div>
      <p style={styles.testimonyName}>{name}</p>
    </div>
  );
}

/* STYLES */
const styles = {
  /* Root container filling the full viewport width */
  pageContainer: {
    width: '100vw',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    backgroundColor: '#8AA4CC',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  /* ----- TOP BANNER ----- */
  cityBanner: {
    width: '100%',
    background: `url(${cityBg}) center center / cover no-repeat`,
    padding: '4rem 0 6rem 0', // Removed horizontal padding to reach the edges
    textAlign: 'center',
    margin: 0,
  },
  titleText: {
    fontFamily: "'Bangers', cursive", // Titles in Bangers
    margin: '0 0 1rem 0',
    fontSize: '3rem',
    color: '#fff',
    letterSpacing: '2px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
  },
  subtitleText: {
    fontFamily: "'Bangers', cursive",
    margin: '0 0 2rem 0',
    fontSize: '1.5rem',
    color: '#fff',
    letterSpacing: '1px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
  },
  starButton: {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    marginTop: '1rem',
  },
  starImage: {
    width: '625px',        // 2.5× original size
    maxWidth: '80vw',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },

  /* ----- PURPOSE SECTION ----- */
  purposeSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0',  // Removed horizontal padding
    boxSizing: 'border-box',
    margin: 0,
  },
  purposeBubble: {
    backgroundImage: `url(${purposeBubble})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'contain',
    width: '100%',
    maxWidth: '700px',
    minHeight: '400px',
    padding: '3rem 2rem',
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
  },
  purposeHeading: {
    fontFamily: "'Bangers', cursive",
    fontSize: '2rem',
    color: '#000',
    marginBottom: '1rem',
  },
  purposeText: {
    fontFamily: "'Walter Turncoat', cursive",
    fontSize: '1rem',
    color: '#333',
    lineHeight: 1.6,
    maxWidth: '600px',
    margin: '0.5rem auto',
  },

  /* ----- TRAILER / DEMO SECTION ----- */
  trailerSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0',  // Removed horizontal padding
    boxSizing: 'border-box',
    background: 'none',
    margin: 0,
  },
  trailerInner: {
    width: '100%',
    maxWidth: '900px',
    background: '#ffec00',
    border: '6px solid #000',
    boxShadow: '8px 8px 0 #000',
    padding: '1rem',
    textAlign: 'center',
  },
  panelHeading: {
    fontFamily: "'Bangers', cursive",
    fontSize: '2rem',
    color: '#ff0000',
    marginBottom: '1rem',
  },
  panelText: {
    fontFamily: "'Walter Turncoat', cursive",
    fontSize: '1.1rem',
    color: '#333',
    margin: '0.5rem 0',
  },
  videoContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '1rem auto',
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  responsiveIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },

  /* ----- PANEL SECTIONS (Comic Story / Testimonies) ----- */
  panelSection: {
    width: '100%',
    maxWidth: '900px',
    background: '#ffec00',
    border: '6px solid #000',
    boxShadow: '8px 8px 0 #000',
    margin: '2rem 0',
    padding: '1rem',
    textAlign: 'center',
  },
  comicSubheading: {
    fontFamily: "'Walter Turncoat', cursive",
    fontSize: '1.2rem',
    fontStyle: 'italic',
    marginBottom: '1rem',
  },

  /* ----- TESTIMONIES ----- */
  testimonyContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '1rem',
  },
  testimonyWrapper: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  speechBubble: {
    position: 'relative',
    background: '#fff',
    border: '4px solid #000',
    padding: '1rem',
    boxSizing: 'border-box',
    height: '120px',
    marginBottom: '0.5rem',
  },
  bubbleTailOuter: {
    position: 'absolute',
    bottom: '-20px',
    left: '40px',
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '20px solid #000',
  },
  bubbleTailInner: {
    position: 'absolute',
    bottom: '-16px',
    left: '42px',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '16px solid #fff',
  },
  testimonyQuote: {
    fontFamily: "'Walter Turncoat', cursive",
    fontSize: '0.9rem',
    color: '#000',
    fontStyle: 'italic',
    margin: 0,
  },
  testimonyName: {
    fontFamily: "'Walter Turncoat', cursive",
    fontSize: '0.8rem',
    color: '#000',
    textAlign: 'center',
  },
};

/* ----- CAROUSEL STYLES ----- */
const carouselStyles = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
    overflow: 'hidden',
    border: '4px solid #000',
    boxShadow: '6px 6px 0 #000',
  },
  image: {
    width: '100%',
    display: 'block',
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    zIndex: 10,
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    zIndex: 10,
  },
};

export default HomePage;
