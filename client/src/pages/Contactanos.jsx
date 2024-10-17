import React from 'react';

const Contactanos = () => {
  return (
    <div>
      <h1>Contáctanos</h1>
      <p>Si tienes alguna duda o quieres obtener más información, no dudes en contactarnos.</p>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contactanos;
