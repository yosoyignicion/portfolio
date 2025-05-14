import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-links"> {/* Contenedor para los enlaces */}
        {/* Puedes convertir estos también en Links si van a ser páginas internas */}
        <Link to="/politica-de-privacidad">Política de Privacidad(Soon)</Link> {/* Placeholder */}
        <Link to="/politica-de-cookies">Política de Cookies(Soon)</Link> {/* Placeholder */}
        <Link to="/contacto">Contacto</Link> {/* Enlace a la página de contacto */}
      </div>
      <p className="copyright-text">Copyright {new Date().getFullYear()} @yosoyignicion</p> {/* Año dinámico y clase para el copyright */}
    </footer>
  );
}

export default Footer;