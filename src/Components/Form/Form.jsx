import React, { useState,useEffect } from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetDoctors } from '../../redux/action/DoctorAction';
import { useDispatch, useSelector} from "react-redux";
import { combineData } from '../../redux/action/action';
import { createAppointment } from '../../redux/action/action';
import { getCitas } from '../../redux/action/action';

const Form = () => {

  const dispatch = useDispatch()
  const { doctors} = useSelector((state) => state.doctors);
  const { currentUser} = useSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMedicoDetailsOpen, setIsMedicoDetailsOpen] = useState(false);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [selectedMedicoDetails, setSelectedMedicoDetails] = useState(null);
  const [infoForm, setinfoForm] = useState({
    name: '',
    date: '',
    cedula: '',
    numTelef: '',
    Tip_Diabe: '',
    descriction: '',
  });
const [citas, setCitas] = useState([])

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    dispatch(GetDoctors());
  }, [dispatch]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openMedicoDetailsModal = (doctor) => {
    setSelectedMedicoDetails(doctor.location);
    setIsMedicoDetailsOpen(true);
  };

  const closeMedicoDetailsModal = () => {
    setIsMedicoDetailsOpen(false);
  };

  const handleMedicoSelect = (doctor) => {

    //TODO: MEJORAR ESTA PARTE 
    setSelectedMedico(doctors.find((m) => m.displayName === doctor));
    closeModal();
    openMedicoDetailsModal(doctors.find((m) => m.displayName === doctor));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica si todos los campos en infoForm están llenos
    const areAllFieldsFilled = Object.values(infoForm).every((value) => value.trim() !== '');

    if (!areAllFieldsFilled) {
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
      return;
    }

    const data = combineData(selectedMedico, infoForm, currentUser.uid)

    createAppointment(data)

    setCitas( await getCitas(currentUser.uid))

    console.log(citas)
  };
  
  const handleChange = (e) => {
    let { name, value } = e.target;
    setinfoForm({ ...infoForm, [name]: value });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit} className="appointment-form">
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
                value={infoForm.name} 
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Fecha de Nacimiento</label>
              <input
                type="date"
                id="date"
                name="date"
                value={infoForm.date} 
                onChange={handleChange}
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
                value={infoForm.cedula} 
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="columna">
            <div className="form-group">
              <label htmlFor="numTelef">Número de Teléfono</label>
              <input
                type="text"
                className="form-control"
                placeholder="Número de Teléfono"
                value={infoForm.numTelef} 
                onChange={handleChange}
                id="numTelef"
                name="numTelef"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Tip_Diabe">Tipo de Diabetes</label>
              <select name="Tip_Diabe" id="Tip_Diabe" value={infoForm.Tip_Diabe} onChange={handleChange} >
                <option value="--selelect">--Seleccionar--</option>
                <option value="Tipo 1">Tipo 1</option>
                <option value="Tipo 2">Tipo 2</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="descriction">Motivo de la Cita</label>
              <br />
              <textarea 
              name="descriction" 
              id="descriction" 
              rows="4" 
              value={infoForm.descriction} 
              onChange={handleChange}
              placeholder="Ingrese el motivo aquí..."
              >
              </textarea>
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
                {doctors?.map((doctor, index) => (
                  <div className="medico-card" key={index}>
                    <h3>{doctor.displayName}</h3>
                    <button onClick={() => handleMedicoSelect(doctor.displayName)}>
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
