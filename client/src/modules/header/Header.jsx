export default function HeaderComp() {
    return (
        <div className="header_section">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="logo"><a href="/"><img src="images/logo.png"/></a></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-a" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a" href="/about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a" href="/product">OUR PRODUCTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a" href="/games">VIDEO GAMES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a" href="/blog">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a" href="/contact">CONTACT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a" href="/"><img src="images/search-icon.png"/></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-a" href="/login">SIGN IN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a" href="/register">REGISTER</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}