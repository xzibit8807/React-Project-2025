import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the toggle button
import useAuth from '../../hooks/auth';
import { Link } from "react-router";
import './header.css'


export default function HeaderComp() {
    const [isOpen, setIsOpen] = useState(false);
    const { email, isAuthenticated } = useAuth();


    return (
        <header className="nav">
            <div className="header_section">

                {/* Desktop Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav">
                            <Link to="/" className="logo"><img src="images/logo2.png" /></Link>
                            {isAuthenticated && (
                                <Link to="/games/create" className="nav-item">ADD GAME</Link>
                            )}
                            <Link to="/about" className="nav-item">ABOUT</Link>
                            <Link to="/products" className="nav-item">VIDEO GAMES</Link>
                            <Link to="/contact" className="nav-item">CONTACT US</Link>
                            {isAuthenticated && (
                                <Link to="/blog" className="nav-item">BLOG</Link>
                            )}
                            <Link to="/search" className="nav-item"><img src="images/search-icon.png" />Search</Link>
                            {isAuthenticated
                                ? (
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <Link to="/profile" className="nav-item">PROFILE</Link>
                                        <Link to="/logout" className="navbar-nav mr-auto">LOG OUT</Link>
                                        {email}
                                    </div>
                                )
                                : (
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <Link to="/login" className="nav-item">SIGN IN</Link>
                                        <Link to="/register" className="nav-item">REGISTER</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </nav>
            </div>

            {/* Dropdown Menu (Only Visible on Small Screens) */}
            {isOpen && (
                <nav className="md:hidden bg-blue-700 p-2">
                    <Link to="/" className="block py-2 px-4 hover:bg-blue-500">HOME</Link>
                    {isAuthenticated && (
                        <Link to="/games/create" className="block py-2 px-4 hover:bg-blue-500">ADD GAME</Link>
                    )}
                    <Link to="/about" className="block py-2 px-4 hover:bg-blue-500">ABOUT</Link>
                    <Link to="/products" className="block py-2 px-4 hover:bg-blue-500">VIDEO GAMES</Link>
                    <Link to="/contact" className="block py-2 px-4 hover:bg-blue-500">CONTACT US</Link>
                    {isAuthenticated && (
                        <Link to="/blog" className="block py-2 px-4 hover:bg-blue-500">BLOG</Link>
                    )}
                    <Link to="/search" className="block py-2 px-4 hover:bg-blue-500">Search</Link>
                    {isAuthenticated
                        ? (
                            <div>
                                <Link to="/profile" className="block py-2 px-4 hover:bg-blue-500">PROFILE</Link>
                                <Link to="/logout" className="block py-2 px-4 hover:bg-blue-500">LOGOUT</Link>
                            </div>
                        )
                        : (
                            <div>
                                <Link to="/login" className="block py-2 px-4 hover:bg-blue-500">SIGN IN</Link>
                                <Link to="/register" className="block py-2 px-4 hover:bg-blue-500">REGISTER</Link>
                            </div>
                        )
                    }
                </nav>
            )}
        </header>
    );
}


