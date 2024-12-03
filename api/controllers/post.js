import { db } from "../db.js";

export const getPosts = (req, res) => {
    const q = "SELECT * FROM posts"; // Consulta para obtener los posts
    db.query(q, (err, data) => {
        if (err) {
            console.error("Error al obtener los posts:", err);
            return res.status(500).json("Error al obtener los posts.");
        }
        return res.status(200).json(data);
    });
};

export const getPost = (req,res)=>{
    res.json("from controller")
}

export const addPost = (req,res)=>{
    res.json("from controller")
}

export const deletePost = (req,res)=>{
    res.json("from controller")
}

export const updatePost = (req,res)=>{
    res.json("from controller")
}

