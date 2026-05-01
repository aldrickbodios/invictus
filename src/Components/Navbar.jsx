import logoImg from '../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
import { IoIosClose, IoMdMenu } from "react-icons/io";
import { useState, useEffect } from 'react';

import '../styles/Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: "Home", path: "#home" },
        { name: "Services", path: "#services" },
        { name: "Projects", path: "#projects" },
        { name: "About", path: "#about" },
        { name: "Contact", path: "#contact" }  
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="navbar">
            <div className="navbar-content">
                <a href="/" className="navbar-logo-link">
                    <img src={logoImg} alt="Invictus Logo" className="navbar-logo" />
                    <span> Invictus Developments and <br /> Services Corporation</span>
                </a>

                <nav className="navbar-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="navbar-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <button className="navbar-toggle" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                >
                    {isOpen ? <IoIosClose size={24} /> : <IoMdMenu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="navbar-mobile-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="navbar-mobile-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Navbar;