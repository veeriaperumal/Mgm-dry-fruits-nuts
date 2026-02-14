import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {

  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);


  // Smooth scroll function
  const handleScroll = (id) => {

    setMenuOpen(false); // Close menu on click

    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  return (
    <header className="header">

      {/* Logo */}
      <div className="header-logo">

        <img src={logo} alt="MGM Logo" className="logo-img" />

        <div className="logo-text">
          <h2>MGM</h2>
          <span>Dry fruits & Nuts</span>
        </div>

      </div>


      {/* Hamburger (Mobile) */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>


      {/* Navbar */}
      <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>

        <nav className="header-nav">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>

           <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </nav>

      </div>

    </header>
  );
}
