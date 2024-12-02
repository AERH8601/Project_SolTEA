import { db } from "../db.js";

// Crear agendamiento
export const crearAgendamiento = (req, res) => {
    const { cliente_id, servicio_id, fecha, hora, notas } = req.body;
    const q = "INSERT INTO agendamientos (cliente_id, servicio_id, fecha, hora, notas) VALUES (?, ?, ?, ?, ?)";
    db.query(q, [cliente_id, servicio_id, fecha, hora, notas], (err, data) => {
        if (err) return res.status(500).json("Error al crear el agendamiento.");
        return res.status(200).json("Agendamiento creado exitosamente.");
    });
};

// Actualizar estado
export const actualizarEstado = (req, res) => {
    const { id, estado } = req.body;
    const q = "UPDATE agendamientos SET estado = ? WHERE id = ?";
    db.query(q, [estado, id], (err, data) => {
        if (err) return res.status(500).json("Error al actualizar el estado.");
        return res.status(200).json("Estado actualizado.");
    });
};

// Listar agendamientos
export const listarAgendamientos = (req, res) => {
    const { cliente_id } = req.query;
    const q = cliente_id
        ? "SELECT * FROM agendamientos WHERE cliente_id = ?"
        : "SELECT * FROM agendamientos";
    db.query(q, [cliente_id], (err, data) => {
        if (err) return res.status(500).json("Error al obtener los agendamientos.");
        return res.status(200).json(data);
    });
};

// Cancelar agendamiento
export const cancelarAgendamiento = (req, res) => {
    const { id } = req.params;
    const q = "DELETE FROM agendamientos WHERE id = ?";
    db.query(q, [id], (err, data) => {
        if (err) return res.status(500).json("Error al cancelar el agendamiento.");
        return res.status(200).json("Agendamiento cancelado.");
    });
};
