import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Row, Col, Card } from 'react-bootstrap'; // Importa los componentes de React Bootstrap
import { IoIosAddCircle, IoIosCloseCircle} from 'react-icons/io'; // Importa los íconos de react-icons
import { CiPill } from 'react-icons/ci';
import { AiFillInfoCircle } from 'react-icons/ai';
import './Medication.css';

function Medication() {
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    dose: '',
    units: '',
    timesPerDay: '',
    startDate: getCurrentDate(),
    alarmTime: getCurrentTime(),
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMedicine({ ...newMedicine, [name]: value });
  };

  const handleSaveMedicine = () => {
    const updatedMedicines = [...medicines, newMedicine];
    setMedicines(updatedMedicines);
    setNewMedicine({
      name: '',
      dose: '',
      units: '',
      timesPerDay: '',
      startDate: getCurrentDate(),
      alarmTime: getCurrentTime(),
    });
    setShowModal(false);
  };

  // Agrega un estado para controlar si se deben mostrar los detalles de cada medicamento
  const [showDetails] = useState([]);

  const handleShowDetails = (medicine) => {
    setSelectedMedicine(medicine);
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setSelectedMedicine(null);
    setShowDetailsModal(false);
  };

  return (
    <div className="medication-container">
      <h1>Medicamentos</h1>
      <IoIosAddCircle className='icon-add' variant="primary" onClick={() => setShowModal(true)} />

      <div className="card-container">
        {medicines.map((medicine, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Text>
                <div className='card-text1'>
                <strong>
                  <CiPill className='icon-pill' /> {medicine.name}
                </strong>
                <strong className='dosis'>
                {medicine.dose}
                </strong>
                </div>
                <div className='card-text2'>
                <strong>Unidad</strong> {medicine.units}<br />
                <strong>Hora</strong> {medicine.alarmTime}
                <strong>Detalles:</strong>
                <span
                  onClick={() => handleShowDetails(medicine)}
                  className="toggle-details-icon"
                  >
                <AiFillInfoCircle className='icon-info' />
                
                </span>
                  </div>
                  
                {showDetails[index] && (
                  <div className="details">
                    Veces al día: {medicine.timesPerDay}<br />
                    <strong>Fecha de inicio:</strong> {medicine.startDate}<br />
                  </div>
                )}
              </Card.Text>
               
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Añadir Medicamento</Modal.Title>
          <IoIosCloseCircle
            size={30}
            onClick={() => setShowModal(false)}
            className="close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nombre del Medicamento</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newMedicine.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Dosificación</Form.Label>
                  <Form.Control
                    type="text"
                    name="dose"
                    value={newMedicine.dose}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Unidades</Form.Label>
                  <Form.Control
                    type="number"
                    name="units"
                    value={newMedicine.units}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Col>
              <Form.Group>
                <Form.Label>Tomas del Día</Form.Label>
                <Form.Control
                  type="number"
                  name="timesPerDay"
                  value={newMedicine.timesPerDay}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Fecha de Inicio</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={newMedicine.startDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Hora</Form.Label>
                  <Form.Control
                    type="time"
                    name="alarmTime"
                    value={newMedicine.alarmTime}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' className='btn-guardar' onClick={handleSaveMedicine}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDetailsModal} onHide={handleCloseDetailsModal}>
        <Modal.Header>
          <Modal.Title>Detalles del Medicamento</Modal.Title>
          <IoIosCloseCircle
            size={30}
            onClick={handleCloseDetailsModal}
            className="close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          {selectedMedicine && (
            <div className="details">
              <p><strong>Nombre:</strong> {selectedMedicine.name}</p>
              <p><strong>Dosificación:</strong> {selectedMedicine.dose}</p>
              <p><strong>Unidad:</strong> {selectedMedicine.units}</p>
              <p><strong>Hora:</strong> {selectedMedicine.alarmTime}</p>
              <p><strong>Detalles:</strong></p>
              <p><strong>Veces al día: </strong>{selectedMedicine.timesPerDay}</p>
              <p><strong>Fecha de inicio:</strong> {selectedMedicine.startDate}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Medication;
