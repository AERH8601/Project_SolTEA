import express from "express";
import { addContact } from "../controllers/contact.js";

const router = express.Router();

router.post("/", addContact);

export default router;