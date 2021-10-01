import React from 'react'
import logo from '../assets/img/logo2.jpg'

export default function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="Lo de pochi Sublimaciones" className="imagesA" />
            <h4>LoDePochi Sublimaciones</h4>
            <div className="contacto">
            <a href="https://www.instagram.com/lodepochi.sublimaciones/?hl=es-la"><i className="fa fa-instagram mr-1"></i>Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100062124255572"><i className="fa fa-facebook mr-1"></i>Facebook</a>
            <a href="https://wa.me/5492235164764"><i className="fa fa-whatsapp mr-1"></i>Whatsapp</a>
            </div>
        </div>
    )
}

