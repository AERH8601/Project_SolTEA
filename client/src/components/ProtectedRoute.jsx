import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const ProtectedRoute = ({ children, role }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser || currentUser.role !== role) {
    return <Navigate to="/" />; // Redirige a la página de inicio si el usuario no es admin
  }

  return children;
};

export default ProtectedRoute;
