import React, { useState } from 'react'
import streamIcon from '../../assets/img/svg/stream.svg'
import './Navbar.css'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return (
        <>
            <header className="header-wrapper">
                <nav className={navbar ? "navbar navbar-expand-lg fixed-top text-center text-lg-start fixed-navbar" : "navbar navbar-expand-lg fixed-top text-center text-lg-start"}>
                    <div className="container">
                        <a className="navbar-brand" href="#">Web<span>X</span>pert</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <img src={streamIcon} alt="" />
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact Us</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
