import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.js";
import { checkRole } from "../middlewares/checkRole.js";

const router  = express.Router()

router.get("/", getPosts); 
router.get("/:id", getPost);
router.post("/", checkRole("empleado"), addPost); // Solo empleados y admins pueden añadir posts
router.delete("/:id", checkRole("admin"), deletePost); // Solo admins pueden eliminar posts
router.put("/:id", checkRole("empleado"), updatePost); // Empleados y admins pueden actualizar posts

export default router
