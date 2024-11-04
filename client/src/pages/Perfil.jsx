import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Perfil = () => {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/users/${currentUser.id}`);
        setUserData(res.data);
      } catch (err) {
        console.error("Error al obtener los datos del perfil:", err);
      }
    };

    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/api/users/${currentUser.id}`, userData);
      alert("Perfil actualizado correctamente");
    } catch (err) {
      console.error("Error al actualizar el perfil:", err);
    }
  };

  return (
    <div>
      <h1>Mi Perfil</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={userData.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={userData.direccion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ciudad:</label>
          <input
            type="text"
            name="ciudad"
            value={userData.ciudad}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Actualizar Perfil</button>
      </form>
    </div>
  );
};

export default Perfil;
