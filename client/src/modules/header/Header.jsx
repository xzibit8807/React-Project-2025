// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // Icons for the toggle button


export default function HeaderComp() {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="nav">
            <div className="header_section">

                {/* Desktop Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="logo"><a href="/"><img src="images/logo.png" /></a></div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-a" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/products">VIDEO GAMES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/blog">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/contact">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/search"><img src="images/search-icon.png" />Search</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-a" href="/login">SIGN IN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/register">REGISTER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/profile">PROFILE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/logout">LOG OUT</a>
                            </li>
                        </ul>
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


