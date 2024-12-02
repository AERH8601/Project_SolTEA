import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GestionAgendamientos = () => {
  const [agendamientos, setAgendamientos] = useState([]);

  useEffect(() => {
    const fetchAgendamientos = async () => {
      try {
        const res = await axios.get("/api/agendamientos");
        setAgendamientos(res.data);
      } catch (err) {
        console.error("Error al obtener agendamientos:", err);
      }
    };
    fetchAgendamientos();
  }, []);

  const actualizarEstado = async (id, estado) => {
    try {
      await axios.put("/api/agendamientos/estado", { id, estado });
      setAgendamientos((prev) =>
        prev.map((agendamiento) =>
          agendamiento.id === id ? { ...agendamiento, estado } : agendamiento
        )
      );
    } catch (err) {
      console.error("Error al actualizar estado:", err);
    }
  };

  return (
    <div>
      <h1>Gestión de Agendamientos</h1>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Servicio</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {agendamientos.map((agendamiento) => (
            <tr key={agendamiento.id}>
              <td>{agendamiento.cliente_id}</td>
              <td>{agendamiento.servicio_id}</td>
              <td>{agendamiento.fecha}</td>
              <td>{agendamiento.hora}</td>
              <td>{agendamiento.estado}</td>
              <td>
                {agendamiento.estado === 'pendiente' && (
                  <>
                    <button onClick={() => actualizarEstado(agendamiento.id, 'aceptado')}>Aceptar</button>
                    <button onClick={() => actualizarEstado(agendamiento.id, 'rechazado')}>Rechazar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GestionAgendamientos;
