import React from 'react';
import downloadBackground from '../assets/background.jpg';
import GameServerDownloadButtonContainer from '../utils/game-udsserver-download-button.jsx';

function UdsServerDownload() {
    return (
        <div style={styles.container}>
            <GameServerDownloadButtonContainer />
            <h1 className="myComicHeader" style={styles.mainHeading}>Download Server</h1>

            <section style={styles.comicPanel}>
                <h2 className="myComicHeader" style={styles.subHeading}>
                    Server / Docker Image (Linux)
                </h2>
                <p>
                    Run the CANQUEST server on a Linux environment.
                </p>

                <ol style={styles.list}>
                    <li> 
                        <strong>Linux VM</strong>
                    </li>
                    <div>
                        Set up an Ubuntu VM. See{' '}
                        <a href="https://ubuntu.com/desktop" target="_blank" rel="noreferrer" style={styles.link}>
                            Ubuntu for desktops
                        </a>
                    </div>
                    <li>
                        <strong>Install Docker</strong>
                    </li>
                    <div style={styles.code}>
                        <code>sudo apt-get update</code>
                        <br />
                        <code>sudo apt-get install docker.io</code>
                    </div>
                    <li>
                    <strong>Docker Image</strong>
                    </li>
                    <div style={styles.code}>
                        <code>sudo docker pull canquest0/my-can-handler-image:latest</code>
                    </div>
                    <li>
                    <strong>Docker Run</strong>
                    </li>
                    <div style={styles.code}>
                        <code>sudo docker run -it --rm --network=host --name my-can-handler-container canquest0/my-can-handler-image:latest</code>
                    </div>
                </ol>
            </section>
        </div>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        width: '100%',
        padding: '2rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',    
        background: `url(${downloadBackground}) center center / cover no-repeat`,
    },
    mainHeading: {
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
    section: {
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto 1rem auto',
      padding: '1rem',
    },
    subHeading: {
        fontSize: '2rem',
        color: '#ff0000',
        marginBottom: '0.5rem',
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
      paddingLeft: '2rem',
      textAlign: 'left',
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
      paddingLeft: '2rem',
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
    comicPanel: {
        background: '#ffec00',
        border: '6px solid #000',
        padding: '1rem',
        margin: '1rem 0',
        boxShadow: '8px 8px 0 #000',
        width: '100%',
        maxWidth: '900px',
        textAlign: 'left',
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
  };

export default UdsServerDownload;
