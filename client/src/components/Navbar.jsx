import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/SolTEA_Logo.png"
import { AuthContext } from '../context/authContext';

function Navbar() {

  const { currentUser, logout } = useContext(AuthContext);

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

                {currentUser?.role === 'empleado' && (
                    <Link to="/admin">Panel de Administración</Link>
                )}
                {currentUser?.role === 'cliente' && (
                    <Link to="/perfil">Mi Perfil</Link>
                )}

                <Link className='link' to='/ofrecemos'>
                    <h6>Que te ofrecemos</h6>
                </Link>
                <Link className='link' to='/catalogo'>
                    <h6>Catalogo de productos</h6>
                </Link>
                <Link className='link' to='/calculadora'>
                    <h6>Calculadora</h6>
                </Link>
                <Link className='link' to='/blog'>
                    <h6>Blog y noticias</h6>
                </Link>
                <Link className='link' to='/contactanos'>
                    <h6>Contactenos</h6>
                </Link>
                
                {currentUser && (
                    <span className='pedidos'>
                    <Link to='/write'>Mis pedidos</Link>
                    </span>
                )}

                <span>{currentUser?.username} </span>
                {currentUser ? (
                    <span onClick={logout}>Logout</span>
                ) : (
                    <Link className="link" to="/login">
                        Login
                    </Link>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar