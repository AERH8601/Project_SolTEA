import express from "express";
import { getUser, updateUser } from "../controllers/user.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/:id", verifyToken, getUser); // Ruta para obtener el perfil
router.put("/:id", verifyToken, updateUser); // Ruta para actualizar el perfil

export default router;
