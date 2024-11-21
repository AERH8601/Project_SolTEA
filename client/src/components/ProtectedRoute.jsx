import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const ProtectedRoute = ({ children, role }) => {
  const { currentUser } = useContext(AuthContext);
  
    // Si no hay usuario logueado o el rol no coincide, redirige
  if (!currentUser || currentUser.role !== role) {
    return <Navigate to="/" />; // Redirige a la página de inicio si el usuario no es admin
  }
  // Si el usuario está autorizado, renderiza el contenido protegido
  return children;
};

export default ProtectedRoute;
