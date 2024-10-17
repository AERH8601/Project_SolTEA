import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/SolTEA_Logo.png"
import { AuthContext } from '../context/authContext';
import Login from '../pages/Login';



function Navbar() {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='links'>
                <Link className='link' to='/'>
                    <h6>Inicio</h6>
                </Link>
                <Link className='link' to='/'>
                    <h6>Que te ofrecemos</h6>
                </Link>
                <Link className='link' to='/'>
                    <h6>Proyectos realizados</h6>
                </Link>
                <Link className='link' to='/'>
                    <h6>Blog y noticias</h6>
                </Link>
                <Link className='link' to='/'>
                    <h6>Contactenos</h6>
                </Link>
                <span>{currentUser?.username} </span>
                {currentUser ? (
                    <span onClick={logout}>Logout</span>
                ) : (
                    <Link className="link" to="/login">
                        Login
                    </Link>
                )}
                <span className='pedidos'>
                    <Link to='/write'>Mis pedidos</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar