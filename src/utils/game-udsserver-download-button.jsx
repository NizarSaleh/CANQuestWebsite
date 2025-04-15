import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameServerDownloadButtonContainer() {
  const navigate = useNavigate();

  return (
    <div style={styles.buttonContainer}>
      <button style={styles.button} onClick={() => navigate('/game_download')}>Game</button>
      <button style={styles.button} onClick={() => navigate('/uds-server_download')}>Server</button>
    </div>
  );
}

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    margin: '15px',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    color: '#fff',
    background: 'linear-gradient(135deg, #E95420 0%, #D94A1C 100%)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(233, 84, 32, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
      zIndex: 1,
    },
    ':hover': {
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 6px 20px rgba(233, 84, 32, 0.4)',
      background: 'linear-gradient(135deg, #D94A1C 0%, #C43F15 100%)',
    },
    ':active': {
      transform: 'translateY(0) scale(0.98)',
      boxShadow: '0 2px 10px rgba(233, 84, 32, 0.2)',
    }
  },
};

export default GameServerDownloadButtonContainer;