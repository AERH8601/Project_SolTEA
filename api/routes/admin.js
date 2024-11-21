import express from "express";
import { getUsers, updateUserRole, deactivateUser } from "../controllers/admin.js";
import { checkRole } from "../middlewares/checkRole.js";

const router = express.Router();

router.get("/users", checkRole("admin"), getUsers);
router.put("/user/role", checkRole("admin"), updateUserRole);
router.put("/user/status", checkRole("admin"), deactivateUser);

export default router;
