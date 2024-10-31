import { db } from "../db.js";

export const addContact = (req, res) => {
  const q = "INSERT INTO contacts(`nombre`, `email`, `telefono`, `direccion`, `ciudad`, `mensaje`, `ubicacion`) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
  const values = [
    req.body.nombre,
    req.body.email,
    req.body.telefono,
    req.body.direccion,
    req.body.ciudad,
    req.body.mensaje,
    req.body.ubicacion,
  ];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error("Error al guardar el contacto:", err);
      return res.status(500).json("Error al guardar el contacto.");
    }
    return res.status(200).json("Contacto guardado exitosamente.");
  });
};