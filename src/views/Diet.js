import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Dietas.css';

const DietData = [
  {
    id: 1,
    title: "Desayuno",
    description: "Platillos saludables para el desayuno.",
    items: [
      {
        name: "Tortilla de vegetales",
        preparation: "Ingredientes:\n- 2 huevos\n- 1/4 de pimiento rojo, cortado en cubos\n- 1/4 de pimiento verde, cortado en cubos\n- 1/4 de cebolla roja, cortada en cubos\n- Espinacas frescas\n- Aceite de oliva virgen extra\n- Sal y pimienta al gusto",
        image: "https://i.imgur.com/PVai24j.jpg",
      },
      {
        name: "Yogur con frutas",
        preparation: "Preparación detallada del Yogur con frutas.",
        image: "https://i.imgur.com/JSh4nPF.png",
      },
      {
        name: "Batido de proteínas",
        preparation: "Preparación detallada del Batido de proteínas.",
        image: "https://i.imgur.com/JSh4nPF.png",
      },
      {
        name: "Omelette de espinacas",
        preparation: "Preparación detallada del Omelette de espinacas.",
        image: "https://i.imgur.com/JSh4nPF.png",
      },
    ],
  },
  {
    id: 2,
    title: "Almuerzo",
    description: "Platillos saludables para el almuerzo.",
    items: [
      {
        name: "Platillo 1 del almuerzo",
        preparation: "Preparación detallada del Platillo 1 del almuerzo.",
        image: "https://i.imgur.com/JSh4nPF.png",
      },
      {
        name: "Platillo 2 del almuerzo",
        preparation: "Preparación detallada del Platillo 2 del almuerzo.",
        image: "https://i.imgur.com/JSh4nPF.png",
      },
      {
        name: "Platillo 3 del almuerzo",
        preparation: "Preparación detallada del Platillo 3 del almuerzo.",
        image: "https://i.imgur.com/JSh4nPF.png",
      },
    ],
  },
  {
    id: 3,
    title: "Cena",
    description: "Platillos saludables para la cena.",
    items: [
      {
        name: "Platillo 1 de la cena",
        preparation: "Preparación detallada del Platillo 1 de la cena.",
        image: "https://i.imgur.com/JSh4nPF.png",
      },
      {
        name: "Platillo 2 de la cena",
        preparation: "Preparación detallada del Platillo 2 de la cena.",
        image: "https://i.imgur.com/JSh4nPF.png",
      },
      {
        name: "Platillo 3 de la cena",
        preparation: "Preparación detallada del Platillo 3 de la cena.",
        image: "https://i.imgur.com/JSh4nPF.png",
      },
    ],
  },
];

function Diet() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategoryItems = () => {
    if (selectedCategory === null) {
      return DietData.flatMap(category => category.items);
    }
    const category = DietData.find(category => category.id === selectedCategory);
    return category ? category.items : [];
  };

  const handleCardClick = (itemIndex) => {
    setSelectedItem(itemIndex);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="diet-container">
      <h2>Alimenta tu bienestar, Elige lo saludable</h2>

      <div className="filter-buttons">
        <Button
          variant="outline-primary"
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? "active" : ""}
        >
          Mostrar Todos
        </Button>
        {DietData.map((category) => (
          <Button
            key={category.id}
            variant="outline-primary"
            onClick={() => setSelectedCategory(category.id)}
            className={selectedCategory === category.id ? "active" : ""}
          >
            {category.title}
          </Button>
        ))}
      </div>

      <Row className="category-items">
        {getCategoryItems().map((item, index) => (
          <Col key={index} xs={12} sm={6} md={3} lg={4}>
            <div className="column">
              <Card
                className="item-card"
                onClick={() => handleCardClick(index)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Img src={item.image} alt={item.name} />
                <Card.Body>
                  <h5>{item.name}</h5>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      {selectedItem !== null && (
        <Modal show={true} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {getCategoryItems()[selectedItem].name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img
              src={getCategoryItems()[selectedItem].image}
              alt={getCategoryItems()[selectedItem].name}
            />
            <p>
              {getCategoryItems()[selectedItem].preparation}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Diet;