import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.js";
import { checkRole } from "../middlewares/roleCheck.js";

const router  = express.Router()

router.get("/", getPosts); // Acceso general
router.get("/:id", getPost); 
router.post("/", checkRole("empleado"), addPost); // Solo empleados pueden añadir posts
router.delete("/:id", checkRole("empleado"), deletePost); // Solo empleados pueden eliminar posts
router.put("/:id", checkRole("empleado"), updatePost); // Solo empleados pueden actualizar posts

export default router
