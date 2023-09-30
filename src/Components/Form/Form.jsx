import React, { useState } from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMedicoDetailsOpen, setIsMedicoDetailsOpen] = useState(false);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [medicos] = useState([
    { nombre: 'Médico 1', detalles: 'Detalles del Médico 1' },
    { nombre: 'Médico 2', detalles: 'Detalles del Médico 2' },
    { nombre: 'Médico 3', detalles: 'Detalles del Médico 3' },
    { nombre: 'Médico 4', detalles: 'Detalles del Médico 4' },
    { nombre: 'Médico 5', detalles: 'Detalles del Médico 5' },
    // Agrega más médicos según sea necesario
  ]);
  const [selectedMedicoDetails, setSelectedMedicoDetails] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openMedicoDetailsModal = (medico) => {
    setSelectedMedicoDetails(medico.detalles);
    setIsMedicoDetailsOpen(true);
  };

  const closeMedicoDetailsModal = () => {
    setIsMedicoDetailsOpen(false);
  };

  const handleMedicoSelect = (medico) => {
    setSelectedMedico(medico);
    closeModal();
    openMedicoDetailsModal(medicos.find((m) => m.nombre === medico));
  };

  return (
    <div className="formulario">
      <form className="appointment-form">
        <div className="columnas">
          <div className="columna">
            <h1>Agendar cita</h1>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Fecha de Nacimiento</label>
              <input
                type="date"
                id="date"
                name="date"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cedula">Cédula</label>
              <input
                type="text"
                className="form-control"
                placeholder="Cédula"
                id="cedula"
                name="cedula"
                required
              />
            </div>
          </div>
          <div className="columna">
            <div className="form-group">
              <label htmlFor="phone">Número de Teléfono</label>
              <input
                type="text"
                className="form-control"
                placeholder="Número de Teléfono"
                id="phone"
                name="phone"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipoDiabetes">Tipo de Diabetes</label>
              <select name="tipoDiabetes" id="tipoDiabetes">
                <option value="--selelect">--Seleccionar--</option>
                <option value="Tipo 1">Tipo 1</option>
                <option value="Tipo 2">Tipo 2</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="motivo">Motivo de la Cita</label>
              <br />
              <textarea name="motivo" id="motivo" rows="4" placeholder="Ingrese el motivo aquí..."></textarea>
            </div>
            <div>
              <button className="btn btn-primary" onClick={openModal}>
                Seleccionar medico
              </button>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Cita
        </button>
      </form>

      {/* Primer modal para seleccionar médico */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Selecciona un médico</h2>
            <div className="medicos-list-container">
              <div className="medicos-list">
                {medicos.map((medico, index) => (
                  <div className="medico-card" key={index}>
                    <h3>{medico.nombre}</h3>
                    <button onClick={() => handleMedicoSelect(medico.nombre)}>
                      Seleccionar
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Segundo modal para ver detalles del médico */}
      {isMedicoDetailsOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Detalles del Médico</h2>
            <p>{selectedMedicoDetails}</p>
            <button onClick={closeMedicoDetailsModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
