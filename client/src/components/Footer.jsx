import React from 'react'
import Logo from "../img/SolTEA_Logo.png"

function Footer() {
  return (
    <footer>
        <img src={Logo} alt="" />
        <span className='text'>
            Hecho en <b>Reacyt.js</b>
        </span>
    </footer>
  )
}

export default Footer