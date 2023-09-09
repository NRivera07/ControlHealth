import React from 'react'

import './Home.css'

function Home() {
  return (
    <div className="home-container">
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
  )
}

export default Home
