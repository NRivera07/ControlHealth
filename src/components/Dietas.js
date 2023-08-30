import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaUtensils } from 'react-icons/fa';
import './styles/Dietas.css';

// Establecer el elemento de la aplicación
Modal.setAppElement('#root'); // Cambia "#root" por el selector correcto

const dietasData = [
  {
    id: 1,
    title: "Desayuno",
    description: "Platillos saludables para el desayuno.",
    items: [
      "Omelette de espinacas",
      "Yogur con frutas",
      "Batido de proteínas",
    ],
    preparation: [
      "Preparación detallada del Omelette de espinacas.",
      "Preparación detallada del Yogur con frutas.",
      "Preparación detallada del Batido de proteínas.",
    ],
  },
  {
    id: 2,
    title: "Almuerzos",
    description: "Platillos saludables para el almuerzo.",
    items: [
      "Ensalada de pollo",
      "Pescado a la parrilla",
      "Vegetales salteados",
    ],
    preparation: [
      "Preparación detallada de la Ensalada de pollo.",
      "Preparación detallada del Pescado a la parrilla.",
      "Preparación detallada de los Vegetales salteados.",
    ],
  },
  {
    id: 3,
    title: "Cenas",
    description: "Platillos saludables para la cena.",
    items: [
      "Sopa de verduras",
      "Tofu a la plancha",
      "Ensalada de aguacate",
    ],
    preparation: [
      "Preparación detallada de la Sopa de verduras.",
      "Preparación detallada del Tofu a la plancha.",
      "Preparación detallada de la Ensalada de aguacate.",
    ],
  },
];

function Dietas() {
  const [selectedDieta, setSelectedDieta] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDietaClick = (dietaId) => {
    setSelectedDieta(dietaId);
    setSelectedItem(null); // Reiniciar la selección del platillo al cambiar de categoría
  };

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  const closeModal = () => {
    setSelectedDieta(null);
    setSelectedItem(null);
  };

  return (
    <div className="dietas-container">
      <h2>Dietas para Personas Diabéticas</h2>
      <ul className="dietas-list">
        {dietasData.map(d => (
          <li key={d.id}>
            <button className="dieta-button" onClick={() => handleDietaClick(d.id)}>
              <FaUtensils className="dieta-icon" />
              {d.title}
            </button>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={selectedDieta !== null}
        onRequestClose={closeModal}
        contentLabel="Detalles de Dieta"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedDieta !== null && selectedItem === null && (
          <div className="modal-content">
            <h3>{dietasData[selectedDieta - 1].title}</h3>
            <p>{dietasData[selectedDieta - 1].description}</p>
            <ul>
              {dietasData[selectedDieta - 1].items.map((item, index) => (
                <li key={index}>
                  <button className="item-button" onClick={() => handleItemClick(index)}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <button className="close-button" onClick={closeModal}>Cerrar</button>
          </div>
        )}
        {selectedDieta !== null && selectedItem !== null && (
          <div className="modal-content">
            <h3>{dietasData[selectedDieta - 1].items[selectedItem]}</h3>
            <p>{dietasData[selectedDieta - 1].preparation[selectedItem]}</p>
            <button className="close-button" onClick={closeModal}>Cerrar</button>
          </div>
        )}
      </Modal>
    </div>
  );
}


export default Dietas;
