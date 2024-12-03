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

// Configuración de CORS
const corsOptions = {
    origin: "http://localhost:3000", // Permite solicitudes desde el frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    credentials: true, // Permite el envío de cookies
};

app.use(cors(corsOptions)); // Aplica CORS
app.options("*", cors(corsOptions)); // Maneja solicitudes preflight (OPTIONS)

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Logs para depuración
app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    console.log("Cuerpo de la solicitud:", req.body);
    console.log("Cookies recibidas:", req.cookies);
    next();
});

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/agendamientos", agendamientoRoutes);

// Iniciar el servidor
app.listen(8800, () => {
    console.log("Servidor iniciado en http://localhost:8800");
});
