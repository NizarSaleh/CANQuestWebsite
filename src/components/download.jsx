import React from 'react';
import downloadBackground from '../assets/background.jpg';
import GameServerDownloadButtonContainer from '../utils/game-udsserver-download-button.jsx';

function DownloadPage() {
  return (
    <div style={styles.container}>
      <GameServerDownloadButtonContainer />
      <h1 className="myComicHeader" style={styles.heading}>
        CANQUEST
      </h1>
      <section style={styles.comicPanel}>
        <h2 className="myComicHeader" style={styles.subHeading}>
          Getting Started
        </h2>
        <p style={styles.text}>
          <ol>
            <li>Download the Unreal Engine 5.4 version of CANQUEST from the <strong>Game</strong> tab.</li>
            <li>Download the CANQUEST server from the <strong>Server</strong> tab.</li>
          </ol>
        </p>
      </section>

      <section style={styles.comicPanel}>
                <h2 className="myComicHeader" style={styles.subHeading}>
                    Troubleshooting / Known Issues
                </h2>
                <ul style={styles.list}>
                    <li><strong>Game Won’t Launch</strong></li>
                    <ul>
                        <li>Ensure your GPU drivers are up to date.</li>
                    </ul>
                    <li><strong>Server Unreachable</strong></li>
                    <ul>
                        <li>Confirm Docker is running.</li>
                        <li>Check port 8080.</li>
                        <li>Check correct IP address.</li>
                    </ul>
                    <li><strong>VM Connectivity</strong></li>
                    <ul>
                        <li>Verify your VM network adapter allows inbound traffic.</li>
                        <li>Network Mode to "Bridge Adapter" in VM Network settings (Recommended).</li>
                    </ul>
                </ul>
            </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    padding: '2rem 4rem',
    background: `url(${downloadBackground}) center center / cover no-repeat`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '3rem',
    color: '#ff0000',
    marginBottom: '1.5rem',
    marginTop: '2rem',
    textAlign: 'center',
    width: '100%',
    maxWidth: '900px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  comicPanel: {
    background: '#ffec00',
    border: '6px solid #000',
    padding: '1rem',
    margin: '1rem 0',
    boxShadow: '8px 8px 0 #000',
    width: '100%',
    maxWidth: '900px',
  },
  subHeading: {
    fontSize: '2rem',
    color: '#ff0000',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1.2rem',
    color: '#333',
    fontFamily: "'UbuntuLocal', sans-serif",
  },
  downloadLink: {
    display: 'inline-block',
    backgroundColor: '#ff0000',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: '4px solid #000',
    boxShadow: '4px 4px 0 #000',
    textDecoration: 'none',
    fontSize: '1.2rem',
    marginTop: '1rem',
    fontFamily: "'UbuntuLocal', sans-serif",
  },
  list: {
    fontSize: '1.2rem',
    color: '#333',
    marginLeft: '2rem',
    fontFamily: "'UbuntuLocal', sans-serif",
  },
};

export default DownloadPage;
