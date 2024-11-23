import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null))

    const login = async (inputs) => {
        const res = await axios.post("/api/auth/login", inputs, { withCredentials: true });
        setCurrentUser({ ...res.data, role: res.data.role });
    };

    const logout = async () => {
        try {
            await axios.post("/api/auth/logout", {}, { withCredentials: true });
            setCurrentUser(null);
        } catch (err) {
            console.error("Error al cerrar sesión:", err); // Log del error para ayudar en la depuración
        }
    };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}