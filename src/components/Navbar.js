import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState (false);

  return (
    <header className="app-header">
      <div className="social-menu">
        {/* Asegúrate de que tus URLs reales estén aquí */}
        <span><a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">Upwork</a></span>
        <span><a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer">Fiverr</a></span>
        <span><a href="https://es.wallapop.com/user/ignaciob-27401837" target="_blank" rel="noopener noreferrer">Wallapop</a></span>
        <span><a href="https://www.linkedin.com/in/ysii-badenes" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
        <span><a href="https://github.com/yosoyignicion" target="_blank" rel="noopener noreferrer">GitHub</a></span>
      </div>
      {/* Botón Hamburguesa para Móvil (solo visible en móvil) */}
      <button className="mobile-nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)} aria-label="Toggle navigation">
        ☰ {/* Icono de hamburguesa, puedes usar un SVG o una librería de iconos */}
      </button>

      <nav className={`navigation-menu ${isNavOpen ? 'open' : ''}`}>
        {/* Menú Navegación - Derecha */}
        <Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
        <Link to="/freelance" onClick={() => setIsNavOpen(false)}>Freelance</Link>
        <Link to="/youtube" onClick={() => setIsNavOpen(false)}>YouTube</Link>
        <a href="https://discord.gg/aDJshGNrE6" target="_blank" rel="noopener noreferrer" onClick={() => setIsNavOpen(false)}>Comunidad Discord</a>
      </nav>
    </header>
  );
}

export default Navbar;