import React from 'react';
import './YouTube.css'; // Usaremos y actualizaremos este archivo CSS
// Asumimos que las imágenes estarán en la carpeta src/assets
import profilePicYSII from '../assets/ysii_profile.png'; // Nueva foto de perfil para esta sección
import youtubeBanner from '../assets/banner-youtube.png'; // Descomenta si tienes un banner específico

function YouTube() {
  // Reemplaza estas URLs con las tuyas reales
  const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/channel/UCK2kJ9xCQrfv1-qn0VjdpVg';
  const BUYMEACOFFEE_URL = 'https://www.buymeacoffee.com/yosoyignicion';

  return (
    <div className="youtube-section-v2"> {/* Nueva clase principal para evitar conflictos */}
      
      {/* Banner Superior */}
      <div className="youtube-top-banner">
      <img src={youtubeBanner} alt="Banner YSII Music" className="youtube-banner-image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      </div>

      <div className="youtube-content-area">
        <header className="youtube-profile-header">
          <img src={profilePicYSII} alt="YSII Music" className="youtube-profile-image" />
          <h1 className="youtube-channel-name">YSII Music</h1>
        </header>

        <section className="youtube-description-section">
          <p>
            Yo Soy Ignicion y me conocen como <strong>YSII Music</strong>. En mi canal subo música generada con Inteligencia Artificial gracias a Suno.
          </p>
          <p>
            Para más información audiovisual, ¡sígueme en mi canal de YouTube!
          </p>
        </section>

        <section className="youtube-cta-buttons">
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-action-button youtube-subscribe-button"
          >
            Visita Mi Canal en YouTube
          </a>
          <a
            href={BUYMEACOFFEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-action-button buymeacoffee-button"
          >
            Apóyame en Buy Me a Coffee
          </a>
        </section>
        
        <p className="donation-appreciation">
          Cualquier voluntad de donación será aceptada desde Buy Me a Coffee. ¡Gracias por tu apoyo!
        </p>
      </div>
    </div>
  );
}

export default YouTube;