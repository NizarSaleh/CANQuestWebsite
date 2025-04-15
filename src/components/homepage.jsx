// components/HomePage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Banner images
import cityBg from '../assets/blkwtcit.png'; // grayscale city background
import starBurst from '../assets/playNow.png'; // star shape image (with "Download Now" integrated)

// Halftone background (blue) – used only for the halftone block overlay
import comicHalftoneBlue from '../assets/comicHalftoneBlue.png';

// The custom bubble shape for the Purpose text
import purposeBubble from '../assets/purposebubble.png';

// Carousel images
import comicpage1 from '../assets/comicpage1.png';
import comicpage2 from '../assets/comicpage2.png';
import comicpage3 from '../assets/comicpage3.png';
import comicpage4 from '../assets/comicpage4.png';

function HomePage() {
  const navigate = useNavigate();

  // Handler for the star button: route to "/download"
  const handleDownload = () => {
    navigate('/download');
  };

  return (
    <div style={styles.pageContainer}>
      {/* TOP BANNER (City Banner) */}
      <section style={styles.cityBanner}>
        <img src={cityBg} alt="City Background" style={styles.cityBackground} />

        <h1 style={styles.titleText}>CANQUEST</h1>
        <h2 style={styles.subtitleText}>GAMIFIED VEHICLE HACKING PLATFORM</h2>

        <div style={styles.starContainer}>
          <button style={styles.downloadButton} onClick={handleDownload}>
            <img src={starBurst} alt="Play Now!" style={styles.starImage} />
          </button>
        </div>
      </section>

      {/* HALFTONE BLOCK: Full-width, 1200px tall with overlay */}
      <div style={styles.halftoneBlock}>
        <div style={styles.halftoneOverlay}></div>

        {/* PURPOSE BUBBLE placed on top of the halftone overlay */}
        <div style={styles.purposeBubble}>
          <h2 className="myComicHeader" style={styles.purposeHeading}>
            Purpose
          </h2>
          <p style={styles.purposeText}>
            The goal of CanQuest is to create an open-source, gamified platform that
            helps users of all skill levels learn about automotive cybersecurity. The
            platform simulates a virtual vehicle environment with real-world
            vulnerabilities and a series of capture-the-flag (CTF) challenges. By
            interacting with a custom CAN bus and UDS server, players develop their
            penetration testing skills in a realistic, hands-on way.
          </p>
          <p style={styles.purposeText}>
            In addition to playing the game, CanQuest encourages the community to
            contribute by creating new levels and vulnerabilities. This documentation
            is designed to help developers get started with the Unreal Engine project,
            clone the repository, and build their own custom CTF challenges. By
            open-sourcing CanQuest, we aim to promote technical skill development,
            knowledge sharing, and innovation within the automotive security space.
          </p>
        </div>

        {/* TRAILER / DEMO SECTION
            Positioned absolutely so that it sits under the bubble (zIndex=2) yet
            above the halftone (zIndex=1). */}
        <section style={styles.trailerSection}>
          <div style={styles.trailerInner}>
            <h2 className="myComicHeader" style={styles.panelHeading}>
              Trailer / Demo
            </h2>
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
      </div>

      {/* COMIC BOOK STORY / CAROUSEL SECTION */}
      <section style={{ ...styles.panelSection, marginTop: '2cm' }}>
        <h2 className="myComicHeader" style={styles.panelHeading}>
          Comic Book Story
        </h2>
        <p style={styles.comicSubheading}>
          Learn The Story Behind CanQuest
        </p>
        <ComicCarousel />
      </section>

      {/* TESTIMONIES SECTION */}
      <section style={styles.panelSection}>
        <h2 className="myComicHeader" style={styles.panelHeading}>
          TESTIMONIES
        </h2>
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

/* CAROUSEL */
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
      {/* Always render arrows, but adjust their opacity for seamless fading */}
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

/* TESTIMONY BUBBLE */
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
  pageContainer: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#8AA4CC', // Blue background
    padding: 0,
    margin: 0,
  },

  // --- TOP CITY BANNER ---
  cityBanner: {
    position: 'relative',
    width: '100%',
    height: '450px',
    overflow: 'hidden',
    marginBottom: 0,
    borderBottom: '6px solid #000',
  },
  cityBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  titleText: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#fff',
    fontSize: '4rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    margin: 0,
    letterSpacing: '2px',
  },
  subtitleText: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#fff',
    fontSize: '1.8rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    margin: 0,
    letterSpacing: '1px',
  },
  starContainer: {
    position: 'absolute',
    bottom: '-3cm',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '450px',
    height: '450px',
  },
  downloadButton: {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  },
  starImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },

  // --- HALFTONE BLOCK ---
  halftoneBlock: {
    position: 'relative',
    width: '100%',
    height: '1200px', // Adjust as needed
    marginBottom: 0,
  },
  halftoneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${comicHalftoneBlue})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.4,
    zIndex: 1, // behind bubble & trailer
  },

  // PURPOSE BUBBLE
  purposeBubble: {
    position: 'absolute',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '1000px',
    minHeight: '2500px',
    backgroundImage: `url(${purposeBubble})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    padding: '2rem',
    textAlign: 'center',
    zIndex: 3, // ensures bubble is above the trailer
  },
  purposeHeading: {
    fontSize: '2.5rem',
    margin: '1rem 0 1rem 0',
    color: '#000',
  },
  purposeText: {
    fontSize: '1.1rem',
    color: '#333',
    fontFamily: "'Ubuntu', sans-serif",
    margin: '0 auto 1rem auto',
    maxWidth: '600px',
    lineHeight: 1.6,
  },

  // TRAILER SECTION (inside halftoneBlock, absolutely positioned below bubble)
  trailerSection: {
    position: 'absolute',
    top: '650px', // Adjust as needed for vertical spacing
    left: '50%',
    transform: 'translateX(-50%) skewX(-20deg)',
    zIndex: 2, // below bubble (zIndex:3), above halftone (zIndex:1)
    background: '#ffec00',
    border: '6px solid #000',
    boxShadow: '8px 8px 0 #000',
    padding: '1rem',
    width: '70%',
    boxSizing: 'border-box', // Ensure padding is contained
  },
  trailerInner: {
    transform: 'skewX(20deg)', // Reverse the outer skew
    padding: '0 6rem', // Increase left/right padding
  },

  // --- STANDARD PANEL SECTIONS (Comic Story, Testimonies) ---
  panelSection: {
    background: '#ffec00',
    border: '6px solid #000',
    margin: '1rem auto',
    padding: '1rem',
    maxWidth: '900px',
    boxShadow: '8px 8px 0 #000',
  },
  panelHeading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#ff0000',
    textAlign: 'center',
  },
  comicSubheading: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  panelText: {
    fontSize: '1.2rem',
    color: '#333',
    fontFamily: "'Ubuntu', sans-serif",
    margin: '0.5rem 0',
  },

  // --- TESTIMONIES ---
  testimonyContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  },
  testimonyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    textAlign: 'center',
  },
  speechBubble: {
    position: 'relative',
    width: '100%',
    background: '#fff',
    border: '4px solid #000',
    padding: '1rem',
    boxSizing: 'border-box',
    height: '120px',
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
    fontSize: '1rem',
    color: '#000',
    fontFamily: "'Ubuntu', sans-serif",
    fontStyle: 'italic',
    margin: '0.5rem 0',
  },
  testimonyName: {
    fontSize: '0.9rem',
    fontFamily: "'Ubuntu', sans-serif",
    color: '#000',
    textAlign: 'center',
    marginTop: '0.5cm',
  },

  // --- VIDEO ---
  videoContainer: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
  },
  responsiveIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

const carouselStyles = {
  container: {
    position: 'relative',
    width: '70%',
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
