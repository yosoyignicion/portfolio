import React from 'react';
import './Freelance.css'; // Crearemos este archivo CSS
// Podrías importar la misma imagen de perfil o una diferente si lo deseas
import profilePic from '../assets/profile.png'; // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom'; // Importa Link

function Freelance() {
  return (
    <div className="freelance-section">
      <header className="freelance-header">
        <div className="freelance-profile-intro">
          <img src={profilePic} alt="Ignacio Badenes" className="freelance-profile-image" />
          <div className="freelance-profile-text">
            <h2>Ignacio Badenes Rodriguez</h2>
            <p className="freelance-tagline">Soluciones Creativas en Edición Audiovisual, Programación y IA</p>
          </div>
        </div>
        <p className="freelance-summary">
          Ofrezco servicios freelance especializados, combinando mi pasión por la tecnología y la creatividad. Mi enfoque se centra en la edición audiovisual de impacto, el desarrollo de software a medida y la implementación inteligente de herramientas de inteligencia artificial para optimizar procesos y crear experiencias únicas. ¡Hablemos de tu próximo proyecto!
        </p>
      </header>

      <section className="services-tiers">
        <h2>Paquetes de Servicios Freelance</h2>
        <div className="tiers-container">
          {/* Tier Básico */}
          <div className="tier-card basic-tier">
            <div className="tier-icon-container">
              <span className="tier-icon">🚀</span> {/* Placeholder icon */}
            </div>
            <h3>Proyectos Básicos</h3>
            <p className="tier-description">
              Ideal para tareas puntuales, pequeñas optimizaciones o consultas rápidas. Ediciones de video cortas, scripts sencillos, o configuración inicial de herramientas IA.
            </p>
            <ul className="tier-details">
              <li><strong>Entrega Estimada:</strong> 1-3 días hábiles</li>
              <li><strong>Costo Aproximado:</strong> Desde 50€ - 150€ (o tarifa por hora)</li>
              <li><strong>Complejidad:</strong> Baja</li>
              <li><strong>Ejemplos:</strong> Edición de un reel para redes, un script de automatización simple, asesoramiento IA.</li>
            </ul>
            <Link to="/contacto" className="tier-cta">Consultar Proyecto Básico</Link> {/* Actualizado a /contacto */}
          </div>

          {/* Tier Mediano */}
          <div className="tier-card medium-tier">
            <div className="tier-icon-container">
              <span className="tier-icon">💡</span> {/* Placeholder icon */}
            </div>
            <h3>Proyectos Medianos</h3>
            <p className="tier-description">
              Soluciones más elaboradas que requieren desarrollo y personalización. Videos promocionales completos, desarrollo de módulos para webs existentes, integración de IA en flujos de trabajo.
            </p>
            <ul className="tier-details">
              <li><strong>Entrega Estimada:</strong> 1-2 semanas</li>
              <li><strong>Costo Aproximado:</strong> Desde 200€ - 700€</li>
              <li><strong>Complejidad:</strong> Media</li>
              <li><strong>Ejemplos:</strong> Video corporativo, desarrollo de una API pequeña, chatbot básico.</li>
            </ul>
            <Link to="/contacto" className="tier-cta">Explorar Proyecto Mediano</Link> {/* Actualizado a /contacto */}
          </div>


          {/* Tier Grande */}
          <div className="tier-card large-tier">
            <div className="tier-icon-container">
              <span className="tier-icon">🌟</span> {/* Placeholder icon */}
            </div>
            <h3>Proyectos Grandes / Colaboraciones</h3>
            <p className="tier-description">
              Desarrollos completos, proyectos a largo plazo o integraciones complejas. Creación de aplicaciones web desde cero, sistemas avanzados con IA, producción audiovisual de alta gama.
            </p>
            <ul className="tier-details">
              <li><strong>Entrega Estimada:</strong> 3+ semanas (según alcance)</li>
              <li><strong>Costo Aproximado:</strong> A partir de 800€ (presupuesto personalizado)</li>
              <li><strong>Complejidad:</strong> Alta</li>
              <li><strong>Ejemplos:</strong> Aplicación web completa, sistema de recomendación IA, documental corto.</li>
            </ul>
            <Link to="/contacto" className="tier-cta">Discutir Proyecto Grande</Link> {/* Actualizado a /contacto y texto si quieres */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Freelance;