import React, { useState } from 'react';
import axios from 'axios';

const AgendarServicio = () => {
  const [formData, setFormData] = useState({
    cliente_id: '', // Puedes llenarlo con el cliente autenticado
    servicio_id: '',
    fecha: '',
    hora: '',
    notas: '',
  });

  const serviciosDisponibles = [
    { id: 1, nombre: "Instalación de Paneles Solares" },
    { id: 2, nombre: "Sistemas de Almacenamiento de Energía" },
    { id: 3, nombre: "Energía Eólica Residencial" },
    { id: 4, nombre: "Auditorías de Eficiencia Energética" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/agendamientos", formData);
      alert("Solicitud de agendamiento enviada con éxito");
      setFormData({
        cliente_id: '',
        servicio_id: '',
        fecha: '',
        hora: '',
        notas: '',
      });
    } catch (err) {
      console.error("Error al crear agendamiento:", err);
      alert("Hubo un problema al enviar la solicitud.");
    }
  };

  return (
    <div>
      <h1>Agendar Servicio</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Servicio</label>
          <select
            name="servicio_id"
            value={formData.servicio_id}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un servicio</option>
            {serviciosDisponibles.map((servicio) => (
              <option key={servicio.id} value={servicio.id}>
                {servicio.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hora</label>
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Notas</label>
          <textarea
            name="notas"
            value={formData.notas}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
};

export default AgendarServicio;
