import React from 'react';
import { Link } from 'react-router-dom';
import soltea_video from '../video/soltea_video.mp4'; // Si usas React Router para las rutas

function Home() {
  return (
    <div className="home-container">
      {/* Sección de video de fondo */}
      <div className="video-background">
      <video autoPlay muted loop className="video">
          <source src={soltea_video} type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
        {/* Contenedor de las tarjetas superpuestas */}
        <div className="cards-container">
          <div className="card">
            <Link to="/ofrecemos" className="card-link">
              <h3>Ofrecemos</h3>
            </Link>
          </div>
          <div className="card">
            <Link to="/proyectos" className="card-link">
              <h3>Proyectos</h3>
            </Link>
          </div>
          <div className="card">
            <Link to="/blog" className="card-link">
              <h3>Blog</h3>
            </Link>
          </div>
          <div className="card">
            <Link to="/contactanos" className="card-link">
              <h3>Contáctanos</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
