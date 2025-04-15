import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameServerDocButtonContainer from '../utils/game-udsserver-doc-button.jsx';
import { createQuadBoxStyle } from '../utils/styleUtils.js';

function GameDocPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const videoUrls = [
    'https://www.youtube.com/embed/QHS8mHqutkY?si=LiX26sX90wmMLjSB',
    'https://www.youtube.com/embed/VgG16wHiKwk?si=mENu4hU1gPkwZYwL',
    'https://www.youtube.com/embed/y3cNs6wLcKg?si=j5J9z9XLuY-efExW',
    'https://www.youtube.com/embed/aX-wTsvQzFs?si=BsJ5VcQzWLeR8pOb',
    'https://www.youtube.com/embed/jmQo_t6SzoM?si=5QFte0Rghpyg2Wp8',
    'https://www.youtube.com/embed/Sen6MPuh2Ow?si=T0Y6DlYSPQaVx_3d'
  ];

  return (
    <div style={styles.container}>
      <GameServerDocButtonContainer />
      <h1 style={styles.mainHeading}>Game Documentation</h1>

      {/* Introduction Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Introduction</h2>
        <p style={styles.text}>
          CANQuest is a gamified platform designed to help users develop automotive cybersecurity skills through interactive, Capture-the-Flag (CTF) challenges. 
          As an open-source project, CANQuest invites the community to actively contribute by creating custom levels and injecting new vulnerabilities into the simulated vehicle environment. 
          This guide will walk you through the process of designing and implementing new levels using Unreal Engine, giving you the tools to expand the game and enhance the training experience for others. 
          Whether you're an expert or a beginner, your contributions will help shape the future of automotive cybersecurity education.
        </p>
      </section>

      {/* Getting Started Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Getting Started</h2>

        <h3 style={styles.minorHeading}>Prerequisites</h3>
        <p style={styles.text}>
          Before you begin, ensure you have the following software, tools, and knowledge:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Unreal Engine 5.4:</strong> You will need Unreal Engine 5.4 or higher to open and modify the project. You can download it from the <a href="https://www.unrealengine.com/en-US/download" target="_blank" rel="noopener noreferrer" style={styles.link}>Epic Games website</a>.
          </li>
          <li style={styles.listItem}>
            <strong>Git:</strong> Git is necessary to clone the repository and manage version control. You can download Git from <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" style={styles.link}>here</a>. After installation, verify that Git is working by opening a terminal/command prompt and typing:
            <div style={{ marginTop: '0.5rem' }}>
              <code style={styles.code}>git --version</code>
            </div>
          </li>
          <li style={styles.listItem}>
            <strong>C++/Blueprint Knowledge:</strong> The project is primarily developed in Blueprint but C++ is also utilized, so familiarity with C++ and Blueprints will help you understand and contribute effectively.
          </li>
          <li style={styles.listItem}>
            <strong>Visual Studio (Windows):</strong> For Windows users, Visual Studio is required for compiling and debugging Unreal Engine projects. Ensure you have the necessary components installed for Unreal Engine development (e.g., Desktop development with C++ for Visual Studio).
          </li>
          <li style={styles.listItem}>
            <strong>Basic Understanding of CAN Bus and Automotive Cybersecurity (Optional):</strong> To contribute to gameplay mechanics, especially creating vulnerabilities or CTF challenges, some understanding of CAN Bus systems and automotive cybersecurity principles will be helpful.
          </li>
        </ul>

        <h3 style={styles.minorHeading}>Installation</h3>
        <p style={styles.text}>
          Follow these steps to set up the development environment on your machine:
        </p>
        <ol style={styles.list}>
          <li style={styles.listItem}>
            <strong>Install Unreal Engine 5.4:</strong> Download and install Unreal Engine 5.4 from the Epic Games Launcher: <a href="https://www.unrealengine.com/en-US/download" target="_blank" rel="noopener noreferrer" style={styles.link}>Download Unreal Engine</a>. Open the Epic Games Launcher, sign in or create an account, then install Unreal Engine 5.4.
          </li>
          <li style={styles.listItem}>
            <strong>Install Git:</strong> Download and install Git from <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" style={styles.link}>here</a>. After installation, verify that Git is working by opening a terminal/command prompt and typing:
            <div style={{ marginTop: '0.5rem' }}>
              <code style={styles.code}>git --version</code>
            </div>
          </li>
          <li style={styles.listItem}>
            <strong>Install Visual Studio (Windows):</strong> Windows: Download Visual Studio from <a href="https://visualstudio.microsoft.com/downloads/" target="_blank" rel="noopener noreferrer" style={styles.link}>here</a>, and during installation, make sure to include the <code style={styles.code}>Desktop development with C++</code> workload.
          </li>
          <li style={styles.listItem}>
            <strong>Clone the Repository:</strong> Open your terminal or command prompt, and navigate to the directory where you want to clone the repository. 
            <div style={{ marginTop: '0.1rem' }}>
              Run the following command:  
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <code style={styles.code}>git clone https://github.com/CAN-Quest-Game/CANQuest.git</code>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              This will create a local copy of the <a href="https://github.com/CAN-Quest-Game/CANQuest" target="_blank" rel="noopener noreferrer" style={styles.link}>repository</a>.
            </div>
          </li>
          <li style={styles.listItem}>
            <strong>Open the Project in Unreal Engine:</strong> Navigate to the cloned repository folder and locate the <code style={styles.code}>CANQuest.uproject</code> file. Double-click the file to open it in Unreal Engine 5.4. Allow it to install any missing dependencies.
          </li>
          <li style={styles.listItem}>
            <strong>Build the Project (Optional for First-Time Setup):</strong> If this is the first time opening the project, Unreal Engine will automatically build the necessary files. If you encounter issues, try building manually via <code style={styles.code}>File {">"} Generate Visual Studio project files</code> (for Windows) by right-clicking the <code style={styles.code}>.uproject</code> file in Windows Explorer.
          </li>
          <li style={styles.listItem}>
            <strong>Running the Project:</strong> After opening the project in Unreal Engine, press <code style={styles.code}>Play</code> in the Unreal Editor to run the game.
          </li>
        </ol>
      </section>

      {/* Tutorial Section */}
      <section style={styles.section}>
      <h2 style={styles.subHeading}>Tutorial</h2>
        <p style={styles.text}>
          This section will walk you through the process of creating a new level for CANQuest within Unreal Engine.
        </p>
        <section style={styles.panelSection}>
          <div style={styles.carouselContainer}>
            <Slider {...sliderSettings}>
              {videoUrls.map((videoUrl, index) => (
                <div key={index}>
                  <div style={styles.videoWrapper}>
                    <iframe
                      style={styles.video}
                      src={videoUrl}
                      title={`Tutorial Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </section>

      {/*Game Server Communication Section  */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Game Server Communication</h2>
        <p style={styles.text}>
          The game and the server communicate with each other using custom commands. Below on the left is a list of commands that the server can send and receive from the game.
          On the right is a list of actions that the game can take based on the commands it receives from the server. The list of actions are already baked into the game, so you don't need to worry about implementing them.
          This is the only way the game and server can communicate with each other. Therefore, you can use a testing server to send string commands to the game and test the vehicle actions.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Server Commands</th>
              <th style={styles.tableHeader}>Vehicle Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>0x00</td>
              <td style={styles.tableCell}>Engine on</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x01</td>
              <td style={styles.tableCell}>Engine off</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x02</td>
              <td style={styles.tableCell}>Door Open</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x03</td>
              <td style={styles.tableCell}>Door Close</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x04</td>
              <td style={styles.tableCell}>Radio On</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x05</td>
              <td style={styles.tableCell}>Radio Off</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x06</td>
              <td style={styles.tableCell}>Headlights On</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x07</td>
              <td style={styles.tableCell}>Headlights Off</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x08</td>
              <td style={styles.tableCell}>Left Turn Signal On</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x09</td>
              <td style={styles.tableCell}>Left Turn Signal Off</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x0A</td>
              <td style={styles.tableCell}>Right Turn Signal On</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x0B</td>
              <td style={styles.tableCell}>Right Turn Signal Off</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x0C</td>
              <td style={styles.tableCell}>Hazard Lights On</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x0D</td>
              <td style={styles.tableCell}>Hazard Lights Off</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x0E</td>
              <td style={styles.tableCell}>Wipers On</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>0x0F</td>
              <td style={styles.tableCell}>Wipers Off</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/*Dummy Server Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Testing Server</h2>
        <p style={styles.text}>
          To make development easier, we’ve provided a testing server that you can use to connect to the game while building your own levels.
          The server is a simple Python script that communicates with the game by sending and receiving commands.
        </p>
        <a href="https://github.com/CAN-Quest-Game/CANQuest_test_server" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <strong>View on GitHub</strong>
        </a>
      </section>

      {/* Quadrilateral Boxes Section */}
      <div style={styles.quadBoxesContainer}>
        <div style={createQuadBoxStyle({
          width: '70%',
          maxWidth: '700px',
          margin: '0 0 0 -200px',
          transform: 'skew(-10deg)',
          position: 'relative',
          overflow: 'hidden',
        })}>
          <h3 style={styles.quadTitle}>Level Creation Guide</h3>
          <div style={styles.quadContent}>
            <p style={styles.quadText}>
              Follow these steps to create your own levels for CANQuest:
            </p>
            <ol style={styles.quadList}>
              <li>Design your level layout in Unreal Engine</li>
              <li>Implement CAN Bus vulnerabilities</li>
              <li>Create challenges and objectives</li>
              <li>Test and refine your level</li>
              <li>Share with the community</li>
            </ol>
          </div>
        </div>

        <div style={createQuadBoxStyle({
          width: '60%',
          maxWidth: '700px',
          margin: '0 10px 0 10px', // top, right, bottom, left
          transform: 'skew(-10deg)',
        })}>
          <h3 style={styles.quadTitle}>Game Features</h3>
          <div style={styles.quadContentRight}>
            <p style={styles.quadText}>
              Key features of CANQuest:
            </p>
            <ul style={styles.quadList}>
              <li>Interactive CTF challenges</li>
              <li>Realistic CAN Bus simulation</li>
              <li>Custom level creation</li>
              <li>Community-driven content</li>
              <li>Educational focus</li>
            </ul>
          </div>
        </div>

        <div style={createQuadBoxStyle({
          width: '70%',
          maxWidth: '700px',
          margin: '0 -200px 0 0',
          transform: 'skew(-10deg)',
        })}>
          <h3 style={styles.quadTitle}>Level Creation Guide</h3>
          
        </div>
      </div>

      {/* Example of another quadBox with different properties */}
      <div style={styles.quadBoxesContainer}>
        <div style={createQuadBoxStyle({
          width: '30%',
          margin: '0 0 0 -100px',
          transform: 'skew(-5deg)',
          backgroundColor: '#ff6b6b',
        })}>
          <h3 style={styles.quadTitle}>Example Box</h3>
          <div style={styles.quadContent}>
            <p style={styles.quadText}>
              This is an example of using the createQuadBoxStyle function with different properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '2rem 4rem',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    overflowX: 'hidden',
  },
  mainHeading: {
    fontSize: '3rem',
    color: '#E95420',
    marginBottom: '1.5rem',
    marginTop: '2rem',
    textAlign: 'center',
    width: '100%',
  },
  section: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto 1rem auto',
    padding: '1rem',
  },
  subHeading: {
    fontSize: '2rem',
    color: '#1a1a1a',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #E95420',
  },
  minorHeading: {
    fontSize: '1.5rem',
    color: '#333',
    marginTop: '1.5rem',
    marginBottom: '0.8rem',
  },
  text: {
    fontSize: '1.1rem',
    color: '#333',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  list: {
    fontSize: '1.1rem',
    color: '#333',
    lineHeight: '1.6',
    paddingLeft: '2rem',
    marginBottom: '1rem',
  },
  listItem: {
    marginBottom: '0.8rem',
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#e0e0e0',
    padding: '0.2rem 0.4rem',
    borderRadius: '4px',
    fontSize: '0.95em',
  },
  link: {
    color: '#E95420',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
  carouselContainer: {
    margin: '2rem auto',
    padding: '0 2rem',
    maxWidth: '800px',
    width: '100%',
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    marginBottom: '1rem',
    backgroundColor: '#000',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: '10px solid #000',
  },
  panelSection: {
    background: '#ffec00',
    border: '6px solid #000',
    margin: '1rem auto',
    padding: '1rem',
    maxWidth: '900px',
    boxShadow: '8px 8px 0 #000',
  },
  quadBoxesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '2rem 0',
    position: 'relative',
  },
  quadTitle: {
    transform: 'skew(10deg)',
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  quadContent: {
    transform: 'skew(10deg)',
    marginLeft: '150px',
  },
  quadContentRight: {
    transform: 'skew(10deg)',
    marginRight: '150px',
  },
  quadText: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    lineHeight: '1.6',
  },
  quadList: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    paddingLeft: '2rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  tableHeader: {
    borderBottom: '2px solid #333',
    padding: '0.5rem',
    textAlign: 'left',
    backgroundColor: '#E95420',
    color: '#fff',
  },
  tableCell: {
    borderBottom: '1px solid #ddd',
    padding: '0.5rem',
  },
};

export default GameDocPage;