import jwt from 'jsonwebtoken';

export const checkRole = (requiredRole) => (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        console.error("No se encontró el token en la cookie");
        return res.status(403).json("Access denied!");
    }

    jwt.verify(token, "jwtkey", (err, user) => {
        if (err) {
            console.error("Error al verificar el token:", err);
            return res.status(403).json("Invalid token!");
        }

        console.log("Usuario autenticado:", user);

        if (user.role !== requiredRole) {
            console.error("Permiso denegado. Rol requerido:", requiredRole, "Rol actual:", user.role);
            return res.status(403).json("Permission denied!");
        }

        console.log("Cookies recibidas:", req.cookies);
        const token = req.cookies.access_token;
        if (!token) {
            console.error("Token no encontrado");
            return res.status(403).json("Access denied!");
        }

        req.user = user;
        next();
    });
};
