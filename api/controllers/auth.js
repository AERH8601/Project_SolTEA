import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res)=>{
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q,[req.body.email, req.body.username], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?, ?, ?)"
        const values = [req.body.username, req.body.email, hash, req.body.role || 'cliente'];


        db.query(q,values, (err,data)=>{
            if (err) {
                console.error('Error al insertar usuario:', err);  // Esto ayudará a ver más detalles del error
                return res.status(500).json("Error al registrar el usuario.");
            }
            return res.status(200).json("User has been created.")});
    });
};

export const login = (req, res)=>{
//CHECK USER

const q = "SELECT * FROM users WHERE username = ?";

db.query(q, [req.body.username], (err,data)=>{
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //CHECK PASSWORD
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

    if(!isPasswordCorrect) return res.status(400).json("Wrong username or password")

    // GENERATE TOKEN
    const token = jwt.sign({ id: data[0].id, role: data[0].role }, "jwtkey");
    const { password, ...other } = data[0];

    // SET TOKEN AS COOKIE
    res.cookie("access_token", token, {
        httpOnly: true, // Evita acceso desde el cliente
        secure: false, // Cambia a true en producción con HTTPS
        sameSite: "lax", // Controla cómo se envían las cookies entre sitios
    }).status(200).json(other);
})

}

export const logout = (req, res) => {
    try {
      res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
      }).status(200).json("User has been logged out.");
    } catch (err) {
      console.error("Error en el logout:", err); // Muestra el error en la consola
      res.status(500).json("Error al cerrar la sesión.");
    }
  };
  
