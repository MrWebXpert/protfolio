import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container mt-5 ">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
                        <li className="nav-item"><a href="#home" className="nav-link px-2 ">Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link px-2 ">About</a></li>
                        <li className="nav-item"><a href="#services" className="nav-link px-2 ">Services</a></li>
                        <li className="nav-item"><a href="#porfolio" className="nav-link px-2 ">Portfolio</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link px-2y">Contact</a></li>
                    </ul>
                    <p className="text-center ">© 2024 Company, copyright All right reserved</p>
                </footer>
            </div></>
    )
}

export default Footer
