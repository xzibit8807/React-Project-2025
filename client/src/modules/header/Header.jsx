// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // Icons for the toggle button
// import { useContext } from 'react';
// import useAuth from '../../hooks/auth';
import { Link } from "react-router";
import './header.css'


export default function HeaderComp() {
    // const [isOpen, setIsOpen] = useState(false);
    // const { email, isAuthenticated } = useAuth;

    return (
        <header className="nav">
            <div className="header_section">

                {/* Desktop Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="logo"><a href="/"><img src="images/logo.png" /></a></div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav mr-auto">
                            <li className="nav-item"> */}
                        <Link to="/" className="nav-item">HOME</Link>

                        <Link  to="/about" className="nav-item">ABOUT</Link>

                        <Link  to="/products" className="nav-item">VIDEO GAMES</Link>

                        <Link to="/blog" className="nav-item">BLOG</Link>

                        <Link to="/contact" className="nav-item">CONTACT US</Link>

                        <Link to="/search" className="nav-item"><img src="images/search-icon.png" />Search</Link>

                        <Link to="/login" className="nav-item">SIGN IN</Link>

                        <Link to="/register" className="nav-item">REGISTER</Link>

                        <Link to="/profile" className="nav-item">PROFILE</Link>

                        <Link to="/logout" className="nav-item">LOG OUT</Link>

                    </div>
                </nav>


                {/* Mobile Menu Button */}
                {/* <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button> */}
            </div>

            {/* Dropdown Menu (Only Visible on Small Screens) */}
            {/* {isOpen && (
                <nav className="md:hidden bg-blue-700 p-2">
                    <a href="/" className="block py-2 px-4 hover:bg-blue-500">HOME</a>
                    <a href="/about" className="block py-2 px-4 hover:bg-blue-500">ABOUT</a>
                    <a href="/products" className="block py-2 px-4 hover:bg-blue-500">VIDEO GAMES</a>
                    <a href="/contact" className="block py-2 px-4 hover:bg-blue-500">CONTACT US</a>
                    <a href="/blog" className="block py-2 px-4 hover:bg-blue-500">BLOG</a>
                    <a href="/signin" className="block py-2 px-4 hover:bg-blue-500">SIGN IN</a>
                    <a href="/register" className="block py-2 px-4 hover:bg-blue-500">REGISTER</a>
                    <a href="/logout" className="block py-2 px-4 hover:bg-blue-500">LOGOUT</a>
                </nav>
            )} */}
        </header>
    );
}


