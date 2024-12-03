import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';

const AgendarServicio = () => {
    const { currentUser } = useContext(AuthContext); // Usuario autenticado
    const [formData, setFormData] = useState({
        cliente_id: currentUser?.id || '', // Asignar el ID del usuario
        servicio_id: '',
        fecha: '',
        hora: '',
        notas: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData); // Verifica los datos enviados
        try {
            await axios.post("/api/agendamientos", formData);
            alert("Solicitud de agendamiento enviada con éxito");
            setFormData({
                cliente_id: currentUser?.id || '', // Resetea el cliente_id
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
                <label>Servicio</label>
                <select name="servicio_id" value={formData.servicio_id} onChange={handleChange} required>
                    <option value="">Selecciona un servicio</option>
                    <option value="1">Instalación Paneles solares</option>
                    <option value="2">Instalación Sistemas de almacenamiento</option>
                    <option value="3">Instalación Sistemas de energía eólica</option>
                    <option value="4">Instalación argadores de vehículos eléctricos</option>
                    <option value="5">Auditorías de eficiencia energética</option>
                    <option value="6">Consultoría en energías renovables</option>
                    <option value="7">Estudios de viabilidad</option>
                </select>
                <label>Fecha</label>
                <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
                <label>Hora</label>
                <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
                <label>Notas</label>
                <textarea name="notas" value={formData.notas} onChange={handleChange}></textarea>
                <button type="submit">Agendar</button>
            </form>
        </div>
    );
};

export default AgendarServicio;
