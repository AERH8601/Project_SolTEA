import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js"; // Importa las rutas de autenticación
import userRoutes from "./routes/users.js"; // Importa las rutas de usuarios
import postRoutes from "./routes/posts.js"; // Importa las rutas de publicaciones
import contactRoutes from "./routes/contact.js"; // Importa las rutas de contactos
import adminRoutes from "./routes/admin.js"; // Importa las rutas de administración
import agendamientoRoutes from "./routes/agendamiento.js";


const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000", // URL del frontend
    credentials: true, // Permitir el envío de cookies
}));

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/agendamientos", agendamientoRoutes);


// Iniciar el servidor
app.listen(8800, () => {
    console.log("Connected!");
});
