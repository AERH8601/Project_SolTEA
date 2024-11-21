import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("/admin/users", { withCredentials: true });
                console.log("Usuarios obtenidos:", res.data);
                setUsers(res.data);
            } catch (err) {
                console.error("Error al obtener usuarios:", err);
            }
        };
        
        fetchUsers();
    }, []);

    const handleRoleChange = async (id, role) => {
        try {
            await axios.put("/admin/user/role", { id, role }, { withCredentials: true });
            setUsers(users.map(user => (user.id === id ? { ...user, role } : user)));
        } catch (err) {
            console.error("Error al actualizar rol:", err);
        }
    };

    const handleStatusChange = async (id, isActive) => {
        try {
            await axios.put("/admin/user/status", { id, isActive }, { withCredentials: true });
            setUsers(users.map(user => (user.id === id ? { ...user, isActive } : user)));
        } catch (err) {
            console.error("Error al cambiar estado:", err);
        }
    };

    if (loading) return <p>Cargando usuarios...</p>;

    return (
        <div>
            <h1>Administración de Usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
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
                            <td>{user.isActive ? "Active" : "Inactive"}</td>
                            <td>
                                <button onClick={() => handleStatusChange(user.id, !user.isActive)}>
                                    {user.isActive ? "Deactivate" : "Activate"}
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
