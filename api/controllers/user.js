import { db } from "../db.js";

export const getUser = (req, res) => {
  const userId = req.params.id;
  const q = "SELECT username, email, telefono, direccion, ciudad FROM users WHERE id = ?";
  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const updateUser = (req, res) => {
  const userId = req.params.id;
  const q = "UPDATE users SET username = ?, email = ?, telefono = ?, direccion = ?, ciudad = ? WHERE id = ?";
  const values = [req.body.username, req.body.email, req.body.telefono, req.body.direccion, req.body.ciudad];

  db.query(q, [...values, userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Perfil actualizado correctamente");
  });
};