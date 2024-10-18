import React, { useState } from 'react';

const CalculadoraEnergetica = () => {
  const [consumoTotal, setConsumoTotal] = useState(0);
  const [dispositivos, setDispositivos] = useState([
    { nombre: 'Refrigerador', potencia: 150, cantidad: 1, horas: 24 },
    { nombre: 'Aire Acondicionado', potencia: 2000, cantidad: 1, horas: 8 },
    { nombre: 'Televisor', potencia: 100, cantidad: 1, horas: 4 },
    { nombre: 'Computadora', potencia: 250, cantidad: 1, horas: 6 },
  ]);

  const handleInputChange = (index, field, value) => {
    const nuevosDispositivos = [...dispositivos];
    nuevosDispositivos[index][field] = value;
    setDispositivos(nuevosDispositivos);
  };

  const calcularConsumo = () => {
    const consumo = dispositivos.reduce((total, dispositivo) => {
      return total + (dispositivo.potencia * dispositivo.cantidad * dispositivo.horas) / 1000;
    }, 0);
    setConsumoTotal(consumo);
  };

  return (
    <div>
      <h1>Calculadora Energética</h1>
      <p>Calcula tu consumo energético en función de los dispositivos que usas diariamente.</p>

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

      <button onClick={calcularConsumo}>Calcular Consumo</button>

      <h2>Consumo total diario: {consumoTotal.toFixed(2)} kWh</h2>
      <h3>Consumo total mensual: {(consumoTotal * 30).toFixed(2)} kWh</h3>
    </div>
  );
};

export default CalculadoraEnergetica;
