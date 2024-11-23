import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("/api/admin/users", { withCredentials: true }); // GET request
                console.log("Usuarios obtenidos en el frontend:", res.data); // Agrega este log
                setUsers(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error al obtener usuarios:", err);
                setError("No se pudieron obtener los usuarios.");
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleRoleChange = async (id, role) => {
        try {
            const res = await axios.put("/api/admin/user/role", { id, role }, { withCredentials: true });
            console.log("Rol actualizado:", res.data); // Confirmación en consola
            setUsers(users.map(user => (user.id === id ? { ...user, role } : user)));
        } catch (err) {
            console.error("Error al actualizar rol:", err); // Log de error
        }
    };

    const handleStatusChange = async (id, isActive) => {
        try {
            await axios.put("/api/admin/user/status", { id, isActive }, { withCredentials: true });
            setUsers(users.map(user => (user.id === id ? { ...user, isActive } : user)));
        } catch (err) {
            console.error("Error al cambiar estado:", err);
        }
    };

    if (loading) return <p>Cargando usuarios...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="admin-users">
            <h1>Administración de Usuarios</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <select
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                >
                                    <option value="cliente">Cliente</option>
                                    <option value="empleado">Empleado</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                            <td>{user.isActive ? "Activo" : "Inactivo"}</td>
                            <td>
                                <button onClick={() => handleStatusChange(user.id, !user.isActive)}>
                                    {user.isActive ? "Desactivar" : "Activar"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminUsers;
