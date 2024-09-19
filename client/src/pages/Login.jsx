import React from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form >
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Login</button>
        <p>Esto es un error!</p>
        <span>No tienes una cuenta?
          <Link to="/register">Registrarse</Link>
        </span>
      </form>
    </div>
  )
}

export default Login