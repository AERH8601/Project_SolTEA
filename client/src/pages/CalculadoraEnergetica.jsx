import React, { useState } from 'react';

const CalculadoraEnergetica = () => {
  const [consumoTotal, setConsumoTotal] = useState(0);
  const [dispositivos, setDispositivos] = useState([
    { nombre: 'Refrigerador', potencia: 150, cantidad: 1, horas: 24 },
    { nombre: 'Aire Acondicionado', potencia: 2000, cantidad: 1, horas: 8 },
    { nombre: 'Televisor', potencia: 100, cantidad: 1, horas: 4 },
    { nombre: 'Computadora', potencia: 250, cantidad: 1, horas: 6 },
  ]);
  const [nuevoDispositivo, setNuevoDispositivo] = useState({
    nombre: '',
    potencia: '',
    cantidad: 1,
    horas: 1,
  });

  const handleInputChange = (index, field, value) => {
    const nuevosDispositivos = [...dispositivos];
    nuevosDispositivos[index][field] = value;
    setDispositivos(nuevosDispositivos);
  };

  const handleNuevoDispositivoChange = (field, value) => {
    setNuevoDispositivo({ ...nuevoDispositivo, [field]: value });
  };

  const agregarDispositivo = () => {
    if (nuevoDispositivo.nombre && nuevoDispositivo.potencia) {
      setDispositivos([...dispositivos, { ...nuevoDispositivo, potencia: Number(nuevoDispositivo.potencia) }]);
      setNuevoDispositivo({ nombre: '', potencia: '', cantidad: 1, horas: 1 });
    } else {
      alert('Por favor completa los campos de nombre y potencia del dispositivo.');
    }
  };

  const calcularConsumo = () => {
    const consumo = dispositivos.reduce((total, dispositivo) => {
      return total + (dispositivo.potencia * dispositivo.cantidad * dispositivo.horas) / 1000;
    }, 0);
    setConsumoTotal(consumo);
  };

  return (
    <div className="calculadora-container">
      <h1>Calculadora Energética</h1>
      <p>Calcula tu consumo energético en función de los dispositivos que usas diariamente.</p>

      <div className="scrollable-container">
        {dispositivos.map((dispositivo, index) => (
          <div key={index} className="dispositivo">
            <h3>{dispositivo.nombre}</h3>
            <label>
              Cantidad:
              <input
                type="number"
                value={dispositivo.cantidad}
                onChange={(e) => handleInputChange(index, 'cantidad', parseInt(e.target.value))}
                min="1"
              />
            </label>
            <label>
              Horas de uso diario:
              <input
                type="number"
                value={dispositivo.horas}
                onChange={(e) => handleInputChange(index, 'horas', parseFloat(e.target.value))}
                min="1"
                max="24"
              />
            </label>
            <p>Potencia: {dispositivo.potencia} W</p>
          </div>
        ))}
      </div>

      <div className="nuevo-dispositivo">
        <h2>Agregar Nuevo Dispositivo</h2>
        <label>
          Nombre:
          <input
            type="text"
            value={nuevoDispositivo.nombre}
            onChange={(e) => handleNuevoDispositivoChange('nombre', e.target.value)}
          />
        </label>
        <label>
          Potencia (W):
          <input
            type="number"
            value={nuevoDispositivo.potencia}
            onChange={(e) => handleNuevoDispositivoChange('potencia', e.target.value)}
          />
        </label>
        <label>
          Cantidad:
          <input
            type="number"
            value={nuevoDispositivo.cantidad}
            onChange={(e) => handleNuevoDispositivoChange('cantidad', parseInt(e.target.value))}
            min="1"
          />
        </label>
        <label>
          Horas de uso diario:
          <input
            type="number"
            value={nuevoDispositivo.horas}
            onChange={(e) => handleNuevoDispositivoChange('horas', parseFloat(e.target.value))}
            min="1"
            max="24"
          />
        </label>
        <button onClick={agregarDispositivo}>Agregar</button>
      </div>

      <button className="calcular-btn" onClick={calcularConsumo}>Calcular Consumo</button>

      <div className="resultados">
        <h2>Consumo Total Diario: {consumoTotal.toFixed(2)} kWh</h2>
        <h3>Consumo Total Mensual: {(consumoTotal * 30).toFixed(2)} kWh</h3>
      </div>
    </div>
  );
};

export default CalculadoraEnergetica;
