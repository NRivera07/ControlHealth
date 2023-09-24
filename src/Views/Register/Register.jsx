import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerInitiate } from '../../redux/action/action';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import logo from '../../Assets/Images/logo.png';
import Modal from 'react-modal';
import { FaSpinner } from 'react-icons/fa'; // Icono de carga

// Configura react-modal
Modal.setAppElement('#root');

const Register = () => {
  const [state, setState] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    password_confirm: '',
  });
  const { nombre, apellido, email, password, password_confirm } = state;

  const dispatch = useDispatch();
  const { currentUser} = useSelector((state) => state.user);
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password_confirm) {
      return;
    }

    dispatch(registerInitiate(nombre, apellido, email, password));
    openModal(); // Abre el modal cuando el registro es exitoso
  };

  useEffect(() => {
    if (currentUser) {
      history.push('/'); // Redirige a la página de inicio si el usuario está autenticado
    }
  }, [currentUser, history]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    // Verifica si todos los campos están llenos para habilitar el botón "Crear cuenta"
    if (nombre && apellido && email && password && password_confirm) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [nombre, apellido, email, password, password_confirm]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="register-container">
      <div className="box">
        <img src={logo} alt="Logo" className="register-logo" />
        <form onSubmit={handleSubmit}>
          <div className="register-form-group">
            <label htmlFor="nombre"></label>
            <input
              type="text"
              className="register-form-control"
              placeholder="Nombre"
              id="nombre"
              value={nombre}
              name="nombre"
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label htmlFor="apellido"></label>
            <input
              type="text"
              className="register-form-control"
              placeholder="Apellido"
              id="apellido"
              value={apellido}
              name="apellido"
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              className="register-form-control"
              placeholder="Email"
              id="email"
              value={email}
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              className="register-form-control"
              placeholder="Password"
              onChange={handleChange}
              value={password}
              name="password"
              required
            />
          </div>

          <div className="register-form-group">
            <label htmlFor="password_confirm"></label>
            <input
              type="password"
              className="register-form-control"
              placeholder="Confirmar Password"
              onChange={handleChange}
              value={password_confirm}
              name="password_confirm"
              required
            />
          </div>

          <button
            type="submit"
            className="register-btn btn btn-primary"
            disabled={isSubmitDisabled}
          >
            Crear cuenta
          </button>
        </form>
        <p className="register-text">¿Ya tienes una cuenta?</p>
        <Link to="/login" className="register-link">
          Login
        </Link>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Registro Exitoso"
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <div className="modal-content">
          <div className="loading-icon">
            <FaSpinner className="spinner" /> {/* Icono de carga */}
          </div>
          <p>Registrando...</p>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
