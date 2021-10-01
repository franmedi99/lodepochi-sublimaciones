import React from 'react'
import logo from '../assets/img/logo.jpg'

export default function Nav() {
    return (
        <div className='navegacion'>
            <div >
                <img className="logo" src={logo} alt={logo} />
            </div>
            <div>
                <h3>Lo de Pochi</h3>
                <h2>Sublimaciones</h2>
            </div>
        </div>
    )
}
