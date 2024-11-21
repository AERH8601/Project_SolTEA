import React from 'react';

const Ofrecemos = () => {
  const servicios = [
    {
      nombre: "Instalación de Paneles Solares",
      descripcion: "Transforma la energía del sol en electricidad limpia y sostenible para tu hogar o negocio.",
      imagen: "solar_panel.jpg",
    },
    {
      nombre: "Sistemas de Almacenamiento de Energía",
      descripcion: "Baterías de última generación para garantizar el suministro incluso en ausencia de sol.",
      imagen: "battery_storage.jpg",
    },
    {
      nombre: "Energía Eólica Residencial",
      descripcion: "Pequeñas turbinas eólicas para generar energía en áreas con vientos constantes.",
      imagen: "wind_turbine.jpg",
    },
    {
      nombre: "Auditorías de Eficiencia Energética",
      descripcion: "Identificamos oportunidades para reducir tu consumo energético y tus costos.",
      imagen: "energy_audit.jpg",
    },
    {
      nombre: "Sistemas de Calefacción Solar",
      descripcion: "Aprovecha el sol para calentar el agua de tu hogar de manera eficiente y económica.",
      imagen: "solar_heating.jpg",
    },
    {
      nombre: "Cargadores para Vehículos Eléctricos",
      descripcion: "Instalación de cargadores rápidos para apoyar tu transición a la movilidad eléctrica.",
      imagen: "ev_charger.jpg",
    },
    {
      nombre: "Consultoría para Empresas",
      descripcion: "Diseñamos estrategias energéticas personalizadas para reducir huella de carbono.",
      imagen: "consulting.jpg",
    },
    {
      nombre: "Iluminación LED",
      descripcion: "Reemplaza tus bombillas tradicionales por iluminación LED eficiente y de larga duración.",
      imagen: "led_lighting.jpg",
    },
    {
      nombre: "Sistemas de Monitoreo Energético",
      descripcion: "Controla y optimiza el consumo energético de tu hogar o empresa en tiempo real.",
      imagen: "energy_monitoring.jpg",
    },
    {
      nombre: "Calentadores de Agua a Gas con Energía Solar",
      descripcion: "Ahorra en gas utilizando un sistema híbrido de energía solar y gas.",
      imagen: "hybrid_heating.jpg",
    },
  ];

  return (
    <div className="ofrecemos">
      <h1>Descubre Nuestros Servicios y Productos</h1>
      <p>En SolTEA, ofrecemos soluciones innovadoras y sostenibles para transformar tu manera de usar la energía.</p>
      <div className="productos">
        {servicios.map((servicio, index) => (
          <div key={index} className="producto">
            <img src={`./images/${servicio.imagen}`} alt={servicio.nombre} />
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ofrecemos;
