import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaUtensils } from 'react-icons/fa';
import '../styles/Dietas.css';

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
        show={selectedDieta !== null}
        onHide={closeModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Detalles de Dieta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDieta !== null && selectedItem === null && (
            <>
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
            </>
          )}
          {selectedDieta !== null && selectedItem !== null && (
            <>
              <h3>{dietasData[selectedDieta - 1].items[selectedItem]}</h3>
              <p>{dietasData[selectedDieta - 1].preparation[selectedItem]}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dietas;
