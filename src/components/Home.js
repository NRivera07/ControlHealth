import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./styles/Home.css"

function Home() {
  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel showArrows={false} showThumbs={false} infiniteLoop={true}>
          <div>
            <img src="/src/img2.jpg" alt="Imagen 1" />
          </div>
          <div>
            <img src="./styles/diabetesok.jpg.webp" alt="Imagen 2" />
          </div>
          <div>
            <img src="./styles/diabetesok.jpg.webp" alt="Imagen 3" />
          </div>
        </Carousel>
      </div>
      <div className="info-section">
        <div className="diabetes-info">
          <h2>Diabetes Tipo 1</h2>
          <p>Información relevante sobre la diabetes tipo 1...</p>
        </div>
        <div className="diabetes-info">
          <h2>Diabetes Tipo 2</h2>
          <p>Información relevante sobre la diabetes tipo 2...</p>
        </div>
      </div>
      <div className="features-section">
        <h2>Funcionalidades de la Aplicación</h2>
        <ul>
          <li>Gestión de dietas personalizadas.</li>
          <li>Rutinas de ejercicio adaptadas.</li>
          <li>Seguimiento de medicación y citas médicas.</li>
          <li>Interfaz amigable y fácil de usar.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
