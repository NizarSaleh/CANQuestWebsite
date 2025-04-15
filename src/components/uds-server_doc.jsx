import React from 'react';
import GameServerDocButtonContainer from '../utils/game-udsserver-doc-button.jsx';

function UdsServerDocPage() {
  return (
    <div style={styles.container}>
        <GameServerDocButtonContainer />
        <h1 style={styles.heading}>Server Documentation</h1>
        <p style={styles.text}>
            This section provides detailed information about the UDS Server, including setup instructions, usage, and troubleshooting.
        </p>
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
  heading: {
    fontSize: '3rem',
    color: '#E95420',
    marginBottom: '1rem',
    marginTop: '6rem',
  },
  text: {
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default UdsServerDocPage;