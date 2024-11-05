import jwt from "jsonwebtoken";

export const checkRole = (requiredRole) => (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(403).json("Access denied!");

    jwt.verify(token, "jwtkey", (err, user) => {
        if (err) return res.status(403).json("Invalid token");
        if (user.role !== requiredRole) return res.status(403).json("Permission denied");
        req.user = user;
        next();
    });
};