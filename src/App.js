import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Freelance from './components/Freelance';
import YouTube from './components/YouTube';
import Contact from './components/Contacto'; // Asegúrate de que la ruta sea correcta


import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="app-main">
        <Routes> {/* Define el contenedor de tus rutas */}
          <Route path="/" element={<Home />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/contacto" element={<Contact />} /> {/* Nueva ruta para Contacto */}
          {/* Puedes añadir una ruta para páginas no encontradas (404) aquí si quieres */}
          {/* <Route path="*" element={<NotFoundComponent />} /> */}
          {/* Puedes añadir una ruta para páginas no encontradas (404) aquí si quieres */}
          {/* <Route path="*" element={<NotFoundComponent />} /> */}
        </Routes>
      </main>

      <Footer />

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'block' }}
      >
        Volver Arriba
      </button>
    </div>
  );
}

export default App;