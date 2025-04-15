// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/homepage';
import AboutUs from './components/aboutus';
import DownloadPage from './components/download';
import DocumentationPage from './components/documentation';
import GameDocPage from './components/game_doc';
import UdsServerDocPage from './components/uds-server_doc';
import GameDownloadPage from './components/game_download';
import UdsServerDownloadPage from './components/uds-server_download';
import './index.css';

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/game_doc" element={<GameDocPage />} />
          <Route path="/uds-server_doc" element={<UdsServerDocPage />} />
          <Route path="/game_download" element={<GameDownloadPage />} />
          <Route path="/uds-server_download" element={<UdsServerDownloadPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    /* Added relative padding to allow extra spacing on mobile */
    padding: '0 1rem',
  },
};

export default App;