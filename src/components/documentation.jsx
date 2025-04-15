import React from 'react';
import GameServerDocButtonContainer from '../utils/game-udsserver-doc-button.jsx';

function DocumentationPage() {

  return (
    <div style={styles.container}>
        <GameServerDocButtonContainer />
        <h1 style={styles.mainHeading}>Get Involved in CANQuest</h1>
        <section style={styles.section}>
            <h2 style={styles.subHeading}>Mission Statement</h2>
            <p style={styles.text}>
            CANQuest is an open-source project built by four passionate college students as part of our Capstone project. 
            While it started as a class assignment, we designed CANQuest to be more than just a one-time game — we built it as a platform for the community to grow, expand, and make automotive cybersecurity more accessible to everyone.
            </p>
            <p style={styles.text}>
            Our mission is to keep this platform fully free and open-source so that anyone can learn, create, and share. 
            As we move forward in our own careers, we may not always be able to actively support the project. 
            That’s why we rely on you — the community — to take ownership, build new levels, add new vulnerabilities, and continue developing CANQuest for the next generation of cybersecurity learners.
            </p>
            <p style={styles.text}>
            Whether you’re a student, professional, or hobbyist, your contributions will help make a real difference in keeping automotive cybersecurity education open and strong.
            </p>
        </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Troubleshooting</h2>
        <p style={styles.text}>
          Make sure to be on the same network for both the game and the server.
        </p>
        <h3 style={styles.minorHeading}>Game</h3>
        <ul style={styles.list}>
          <li style={styles.listTitle}>Same network and still experiencing lag:</li>
          <ul>
            <li style={styles.listItem}>Reduce the number of devices connected to the same network.</li>
            <li style={styles.listItem}>Lower the graphics quality of the game for better performance.</li>
            <li style={styles.listItem}>Your device may be insufficient to handle Unreal Engine and a Virtual Machine at the same time (or even separately).</li>
          </ul>
          <li style={styles.listTitle}>Unreal Engine freezes or crashes:</li>
          <ul>
            <li style={styles.listItem}>Lower the in-game settings (resolution, post-processing effects).</li>
            <li style={styles.listItem}>Check if your PC meets Unreal Engine 5.4 minimum system requirements.</li>
          </ul>
          <li style={styles.listTitle}>"Not Connected":</li>
          <ul>
            <li style={styles.listItem}>Check that the server is running before you start the game.</li>
            <li style={styles.listItem}>Make sure you are using the correct IP and port.</li>
            <li style={styles.listItem}>Make sure to be on the same network for both the game and the server.</li>
          </ul>
        </ul>
        <h3 style={styles.minorHeading}>Testing Server</h3>
        <ul style={styles.list}>
          <li style={styles.listTitle}>Game won't connect to the server:</li>
          <ul>
            <li style={styles.listItem}>Double-check the IP address in the Python script (line 6).</li>
            <li style={styles.listItem}>Restart the server script every time you run a new game session.</li>
            <li style={styles.listItem}>Make sure no firewalls, VPN, or antivirus programs are blocking the connection.</li>
          </ul>
          <li style={styles.listTitle}>Server crashes or doesn't start:</li>
          <ul>
            <li style={styles.listItem}>Confirm Python is properly installed (Python 3.9 or higher recommended).</li>
          </ul>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    margin: '1rem 0',
    padding: '1rem',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  subHeading: {
    fontSize: '2rem',
    color: '#E95420',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1.1rem',
    color: '#333',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  link: {
    color: '#E95420',
    textDecoration: 'underline',
  },
  list: {
    fontSize: '1.1rem',
    color: '#333',
    lineHeight: '1.6',
    paddingLeft: '2rem',
    marginBottom: '1rem',
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  listTitle: {
    marginTop: '1rem',
    marginBottom: '1rem',
    fontSize: '1.3rem',
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#e0e0e0',
    padding: '0.2rem 0.4rem',
    borderRadius: '4px',
    fontSize: '0.95em',
  },
  minorHeading: {
    fontSize: '1.5rem',
    color: '#333',
    marginTop: '1rem',
    marginBottom: '0.8rem',
  },
};

export default DocumentationPage;