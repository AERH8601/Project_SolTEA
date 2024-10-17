import React from 'react';

const Catalogo = () => {
  const productos = [
    {
      id: 1,
      nombre: "Panel Solar Monocristalino",
      descripcion: "Alta eficiencia y durabilidad para cualquier instalación solar.",
      precio: "$200",
    },
    {
      id: 2,
      nombre: "Inversor Solar",
      descripcion: "Convierte la energía solar en energía utilizable para tu hogar.",
      precio: "$500",
    },
    {
      id: 3,
      nombre: "Batería de Litio",
      descripcion: "Almacena energía solar para su uso posterior.",
      precio: "$800",
    },
    {
      id: 4,
      nombre: "Controlador de Carga",
      descripcion: "Gestiona el flujo de energía para evitar sobrecargas.",
      precio: "$150",
    },
  ];

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="productos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p><strong>Precio: </strong>{producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
