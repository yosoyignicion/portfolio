import React from 'react';
import './Contacto.css'; // Asegúrate de que este archivo exista y esté actualizado

// Importa iconos si los vas a usar (ej. Font Awesome)
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUpwork, faFiverr, faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  // URLs para tus plataformas (estas deberían coincidir con las de Navbar.js para consistencia)
  const YOUR_UPWORK_URL = "https://www.upwork.com"; // Tomado de Navbar.js
  const YOUR_FIVERR_URL = "https://www.fiverr.com"; // Tomado de Navbar.js
  const YOUR_WALLAPOP_URL = "https://es.wallapop.com/user/ignaciob-27401837"; // Tomado de Navbar.js
  const YOUR_LINKEDIN_URL = "https://www.linkedin.com/in/ysii-badenes"; // Tomado de Navbar.js
  const YOUR_GITHUB_URL = "https://github.com/yosoyignicion"; // Tomado de Navbar.js
  const YOUR_DISCORD_INVITE_URL = "https://discord.gg/aDJshGNrE6"; // Tomado de Navbar.js
  const YOUR_CONTACT_EMAIL = "nbrbadenes99@gmail.com";

  const socialLinks = [
    { name: "Upwork", url: YOUR_UPWORK_URL, /* icon: faUpwork */ },
    { name: "Fiverr", url: YOUR_FIVERR_URL, /* icon: faFiverr */ },
    { name: "Wallapop", url: YOUR_WALLAPOP_URL, /* icon: null (o un icono genérico si lo tienes) */ },
    { name: "LinkedIn", url: YOUR_LINKEDIN_URL, /* icon: faLinkedin */ },
    { name: "GitHub", url: YOUR_GITHUB_URL, /* icon: faGithub */ },
    { name: "Discord", url: YOUR_DISCORD_INVITE_URL, /* icon: faDiscord */ },
  ];

  return (
    <div className="contact-section-simple">
      <header className="contact-header-simple">
        <h1>Conecta Conmigo</h1>
        <p>
          Estoy disponible en varias plataformas. Si tienes alguna pregunta, propuesta de proyecto,
          o simplemente quieres saludar, no dudes en contactarme a través de los siguientes enlaces
          o enviándome un correo electrónico.
        </p>
      </header>

      <div className="contact-links-container">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-button"
            title={link.name}
          >
            {/* link.icon && <FontAwesomeIcon icon={link.icon} /> */}
            <span>{link.name}</span>
          </a>
        ))}
        <a
          href={`mailto:${YOUR_CONTACT_EMAIL}`}
          className="contact-link-button email-button"
          title={`Enviar correo a ${YOUR_CONTACT_EMAIL}`}
        >
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          <span>Enviar Email</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;