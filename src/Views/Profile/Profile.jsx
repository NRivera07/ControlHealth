import React, { useState } from 'react';
import './Profile.css'; // Crea un archivo CSS para estilos personalizados

const Profile = () => {
  
  const [userData, setUserData] = useState({  
    name: 'Nombre de Usuario',
    email: 'correo@ejemplo.com',
   
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
  };

  
  const handleUpdateProfile = () => {
    
  };

  return (
    <div className="profile-container">
      <h1>Perfil de Usuario</h1>
      <div className="profile-avatar">
       
        <img src="ruta_a_la_foto" alt="Foto de perfil" />
        {/* Input para cargar una nueva foto */}
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      <div className="profile-form">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        {/* Otros campos del formulario para actualizar */}
      </div>
      <button onClick={handleUpdateProfile}>Actualizar Perfil</button>
    </div>
  );
};

export default Profile;