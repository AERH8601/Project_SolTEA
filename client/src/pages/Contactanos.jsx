import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 4.6097, // Coordenadas de ejemplo (Bogotá)
  lng: -74.0817,
};

const Contactanos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    mensaje: '',
    ubicacion: '', // Para almacenar la ubicación del usuario
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "TU_API_KEY", // Reemplaza con tu clave API de Google Maps
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados: ", formData);
    // Aquí puedes enviar los datos al backend o realizar alguna otra acción
  };

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <div>
      <h1>Contáctanos</h1>
      <p>Si tienes alguna duda o quieres obtener más información, no dudes en contactarnos. Completa el formulario a continuación y te ayudaremos lo antes posible.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} />
        </div>
        
        <div className="form-group">
          <label htmlFor="ciudad">Ciudad:</label>
          <input type="text" id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleChange} />
        </div>
        
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>

      <h2>Selecciona tu ubicación en el mapa:</h2>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        onClick={(event) => {
          const lat = event.latLng.lat();
          const lng = event.latLng.lng();
          setSelectedLocation({ lat, lng });
          setFormData({ ...formData, ubicacion: `${lat}, ${lng}` });
        }}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>
    </div>
  );
};

export default Contactanos;
