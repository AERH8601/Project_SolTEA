import { db } from "../db.js";

// Obtener lista de usuarios
export const getUsers = (req, res) => {
    const q = "SELECT id, username, email, role, isActive FROM users";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

// Actualizar rol de usuario
export const updateUserRole = (req, res) => {
    const { id, role } = req.body;
    const q = "UPDATE users SET role = ? WHERE id = ?";
    db.query(q, [role, id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Rol de usuario actualizado");
    });
};

// Desactivar cuenta de usuario
export const deactivateUser = (req, res) => {
    const { id, isActive } = req.body;
    const q = "UPDATE users SET isActive = ? WHERE id = ?";
    db.query(q, [isActive, id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Estado de cuenta actualizado");
    });
};
