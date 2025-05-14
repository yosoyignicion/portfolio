import React from 'react';
import './Home.css';
// Corrected import path
import profilePic from '../assets/profile.png'; // Asegúrate de tener la imagen en src/assets

function Home() {
  return (
    <div className="home-section">
      <header className="home-header">
        <div className="profile-intro">
          <div className="profile-image-container">
            {/* Corrected img tag usage and removed unnecessary placeholder div if image is present */}
            <img src={profilePic} alt="Ignacio Badenes" className="profile-image" />
            {/* If you want a placeholder ONLY when profilePic is not available, you'd add conditional rendering.
                For now, assuming profilePic will always be there after fixing the import.
                If not, the original placeholder can be conditionally rendered:
                {!profilePic && <div className="profile-image-placeholder"></div>}
            */}
          </div>
          <div className="profile-text">
            {/* Removed brackets */}
            <h1>Ignacio Badenes Rodriguez</h1>
            <p className="professional-tagline">Desarrollador Junior | Entusiasta de la IA | Creador de Contenido Digital</p>
          </div>
        </div>
        <p className="professional-summary">
          Apasionado por la intersección entre la tecnología y la creatividad. Con experiencia en el desarrollo de soluciones web innovadoras y un profundo interés en el potencial transformador de la inteligencia artificial. Busco constantemente nuevos desafíos para expandir mis habilidades y contribuir a proyectos significativos.
        </p>
      </header>

      <section className="home-subsection studies-certs">
        <h2><i className="icon-graduation-cap"></i> Estudios y Certificaciones</h2>
        <div className="grid-container">
          <div className="grid-item">
            <h3>ESO + FPB: Mantenimiento e instalación de sistemas informáticos y redes de comunicación</h3>
            <p>IES Vicent Castell Doménech (2016 - 2018)</p>
            <p className="item-description">Especialización en Sistemas Operativos Windows y Linux. Instalación, gestión y mantenimiento de Linux Server. Actualizacion y Administracion con sistemas operativos.</p>
          </div>
          <div className="grid-item">
            <h3>Licencia TIP en Vigilancia de Seguridad Privada</h3>
            <p>Agil Centros (2021)</p>
            <p className="item-description">Estudio de la Legislatura, Disciplinas Persuasivas, Protocolos de Actuación ante Incidencias y Teórica de la Defensa Personal.</p>
          </div>
          <div className="grid-item">
            <h3>Certificados Oficiales. </h3>
            <p>Diferentes Academias Presencial/Online (2018-2024)</p>
            <p className="item-description">Wordpress, SEO, Analisis Web, Productividad Personal, Comercio Electrónico, Marketing Digital, Manejo en productividad de la Inteligencia Artificial.
              + info en mi perfil de LinkedIn.</p>
          </div>
        </div>
      </section>

      <section className="home-subsection skills">
        <h2><i className="icon-cogs"></i> Habilidades</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Técnicas</h3>
            <ul>
              <li>Git, Docker</li>
              <li>Vite, Astro, React</li>
              <li>HTML5 & CSS3 [Frontend]</li>
              <li>Python: Flask / FastAPI </li>
              <li>Javascript(Node.js) [Backend]</li>
              <li>Bases de datos: SQL (Lite / Supabase)</li>
              <li>Administración de Alojamiento Web conocimiento Alto</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Aptitudes</h3>
            <ul>
              <li>Buena Educación</li>
              <li>Pensamiento Consciente</li>
              <li>Iniciativa y Aprendizaje rápido</li>
              <li>Trabajo en Equipo y Colaboración</li>
              <li>Comunicación Efectiva y Coherencia</li>
              <li>Adaptabilidad y Investigación autodidacta</li> 
              <li>Gestion del tiempo y Resolución de Problemas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="home-subsection experience">
        <h2><i className="icon-briefcase"></i> Motivacion actual</h2>
        
        <div className="experience-item">
          <h3>Freelance - Edición Audiovisual y Desarrollo con IA</h3>
          <p>Proyectos Independientes (2020 - Presente)</p>
          <ul className="experience-details">
            <li>Creación de contenido audiovisual para mi contenido público de música (YT Channel)</li>
            <li>Investigación y conocimiento de la correcta empleabilidad de herramientas IA</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Actualmente desarrollador Junior, aprendiendo y adaptandome a nuevas tecnicas</h3>
          <p>Estudio Autodidacta (2022 - Presente)</p>
          <ul className="experience-details">
            <li>IA en editores de código</li>
            <li>Nuevas librerias en mi abanico</li>
            <li>Frameworks innovadores y populares</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;