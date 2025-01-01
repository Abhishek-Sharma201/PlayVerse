'use client';

import { useState, useEffect } from 'react'; 
import axios from 'axios';

// Import 'aframe' only on the client-side
if (typeof window !== 'undefined') {
  require('aframe');
}

export default function Page() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false); // State to check if we're in the browser

  useEffect(() => {
    // Ensure we are in the client before attempting to load
    setIsClient(true);

    axios.get('https://ar-vr-news2.p.rapidapi.com/api/news', {
      headers: {
        'x-rapidapi-host': 'ar-vr-news2.p.rapidapi.com',
        'x-rapidapi-key': '8c5b552eedmsh05ac6494e1dd6e7p15f07cjsn464b23ec06d0'
      }
    })
    .then(response => {
      setNews(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError('Failed to fetch AR/VR news');
      setLoading(false);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Explore AR/VR Experience</h1>
      
      <p style={styles.instructions}>Use your VR headset or mobile device to experience the environment!</p>

      {/* Display Loading, Error, or News */}
      {loading && <p>Loading AR/VR News...</p>}
      {error && <p>{error}</p>}

      {/* Render News */}
      {!loading && !error && news.length > 0 ? (
        <>
          <h2 style={styles.newsHeader}>Latest AR/VR News</h2>
          <ul style={styles.newsList}>
            {news.map((item, index) => (
              <li key={index} style={styles.newsItem}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" style={styles.newsLink}>Read more</a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No news available at the moment.</p>
      )}

      {/* Only render the VR scene if we're on the client */}
      {isClient && (
        <a-scene embedded vr-mode-ui style={styles.scene}>
          {/* Classroom GLTF Model */}
          <a-entity 
            gltf-model="url(/vr/untitled.glb)" 
            scale="2 2 2" 
            position="0 0 -3">
          </a-entity>

          {/* YouTube Video Display Simulation */}
          {/* <a-entity position="0 1.6 -3">
            <a-plane 
              position="0 1.6 -3" 
              rotation="0 0 0"
              width="16" 
              height="9" 
              color="#000">
              <a-entity 
                geometry="primitive: plane; width: 16; height: 9" 
                material="shader: flat; src: url(https://img.youtube.com/vi/Azqej8mEHY0/maxresdefault.jpg);">
              </a-entity>
            </a-plane>
          </a-entity> */}

          {/* Invisible VR Environment Objects */}
          <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" visible="false"></a-box>
          <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" visible="false"></a-sphere>
          <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" visible="false"></a-cylinder>
          <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" visible="false"></a-plane>
          <a-sky color="#ECECEC"></a-sky>

          {/* VR Controller */}
          <a-entity 
            id="left-hand" 
            laser-controls="hand: left"
            raycaster="objects: .clickable; rayOrigin: mouse;">
          </a-entity>

          <a-entity 
            id="right-hand" 
            laser-controls="hand: right"
            raycaster="objects: .clickable; rayOrigin: mouse;">
          </a-entity>
        </a-scene>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  instructions: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    fontStyle: 'italic',
  },
  scene: {
    width: '100%',
    height: '100%',
  },
  newsHeader: {
    fontSize: '1.5rem',
    marginTop: '20px',
  },
  newsList: {
    listStyle: 'none',
    padding: 0,
  },
  newsItem: {
    margin: '10px 0',
  },
  newsLink: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};
