import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/SolTEA_Logo.png"
import { AuthContext } from '../context/authContext';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function Navbar() {

  const { currentUser, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú desplegable

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alternar el menú desplegable
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to="/">
            <img src={Logo} alt="SolTEA Logo" />
          </Link>                
        </div>
        <div className='links'>
          <Link className='link' to='/'>
            <h6>Inicio</h6>
          </Link>
          <Link className='link' to='/ofrecemos'>
            <h6>Qué te ofrecemos</h6>
          </Link>
          <Link className='link' to='/catalogo'>
            <h6>Catálogo de productos</h6>
          </Link>
          <Link className='link' to='/calculadora'>
            <h6>Calculadora</h6>
          </Link>
          <Link className='link' to='/blog'>
            <h6>Blog y noticias</h6>
          </Link>
          <Link className='link' to='/contactanos'>
            <h6>Contáctenos</h6>
          </Link>

          {currentUser && (
            <div className="user-icons">
              
              <div className="user-menu">
                <div onClick={toggleMenu} className="user-avatar">
                    {currentUser.profilePicture ? (  
                        <img 
                        src={currentUser.profilePicture || '/path/to/default/profile.jpg'} // Añade una imagen predeterminada si no tienes foto
                        alt="User Profile" 
                        className="user-avatar" 
                        onClick={toggleMenu} 
                        />
                    ) : (
                        <FaUserCircle size={40} color="#888" /> // Ícono predeterminado
                      )}
                </div>

                {menuOpen && (
                  <div className="dropdown-menu">
                    <Link to="/perfil">Mi Perfil</Link>
                    <span onClick={logout}>Logout</span>
                  </div>
                )}
              </div>

              <span className="icon pedidos">
                <Link to='/write'>
                  <FaShoppingCart size={24} />
                </Link>
              </span>

            </div>
          )}

          {!currentUser && (
            <Link className="link" to="/login">
              Login
            </Link>
          )}

          {currentUser && currentUser.role === 'admin' && (
              <Link to="/admin-dashboard">Admin Dashboard</Link>
          )}

          {currentUser && currentUser.role === 'empleado' && (
              <Link to="/empleado-panel">Employee Panel</Link>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;