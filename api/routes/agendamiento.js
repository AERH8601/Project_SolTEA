import express from "express";
import {
    crearAgendamiento,
    actualizarEstado,
    listarAgendamientos,
    cancelarAgendamiento
} from "../controllers/agendamiento.js";

const router = express.Router();

router.post("/", crearAgendamiento);
router.put("/estado", actualizarEstado);
router.get("/", listarAgendamientos);
router.delete("/:id", cancelarAgendamiento);

export default router;
