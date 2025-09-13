import { useState } from "react";
import { Menu, X } from "lucide-react";
import useAuth from "../../hooks/auth";
import { Link } from "react-router";
import "./header.css";

export default function HeaderComp() {
    const [isOpen, setIsOpen] = useState(false);
    const { email, isAuthenticated } = useAuth();
    const close = () => setIsOpen(false);

    return (
        <header className="nav" role="banner">
            <div className="header_section">

                {/* Desktop nav*/}
                <nav className="desktop-nav" aria-label="Main navigation">
                    <Link to="/" className="logo" onClick={close}>
                        <img src="images/logo2.png" alt="Logo" />
                    </Link>
                    {isAuthenticated && <Link to="/games/create" className="nav-item">ADD GAME</Link>}
                    <Link to="/about" className="nav-item">ABOUT</Link>
                    <Link to="/products" className="nav-item">VIDEO GAMES</Link>
                    <Link to="/contact" className="nav-item">CONTACT US</Link>
                    {isAuthenticated && <Link to="/blog" className="nav-item">BLOG</Link>}
                    <Link to="/search" className="nav-item">SEARCH</Link>

                    {isAuthenticated ? (
                        <>
                            <Link to="/profile" className="nav-item">PROFILE</Link>
                            <Link to="/logout" className="nav-item">LOG OUT</Link>
                            <Link to="/profile" className="nav-item user-email">{email}</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-item">SIGN IN</Link>
                            <Link to="/register" className="nav-item">REGISTER</Link>
                        </>
                    )}
                </nav>

                {/* Mobile toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}Menu
                </button>
            </div>

            {/* Mobile menu  */}
            <nav className={`mobile-nav ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
                <Link to="/" className="mobile-menu" onClick={close}>HOME</Link>
                {isAuthenticated && <Link to="/games/create" className="mobile-menu" onClick={close}>ADD GAME</Link>}
                <Link to="/about" className="mobile-menu" onClick={close}>ABOUT</Link>
                <Link to="/products" className="mobile-menu" onClick={close}>VIDEO GAMES</Link>
                <Link to="/contact" className="mobile-menu" onClick={close}>CONTACT US</Link>
                {isAuthenticated && <Link to="/blog" className="mobile-menu" onClick={close}>BLOG</Link>}
                <Link to="/search" className="mobile-menu" onClick={close}>SEARCH</Link>

                {isAuthenticated ? (
                    <>
                        <Link to="/profile" className="mobile-menu" onClick={close}>PROFILE</Link>
                        <Link to="/logout" className="mobile-menu" onClick={close}>LOGOUT</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="mobile-menu" onClick={close}>SIGN IN</Link>
                        <Link to="/register" className="mobile-menu" onClick={close}>REGISTER</Link>
                    </>
                )}
            </nav>
        </header>
    );
}