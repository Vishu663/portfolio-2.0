import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <h3>Vishal Sanap</h3>
      <div className="menu-logic">
        <ul className={`nav-list ${isOpen ? "show" : ""}`}>
          <li>
            <Link to="home" smooth={true} offset={-73} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-70} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} offset={-70} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-67} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <GiHamburgerMenu className="navbar-icon" onClick={toggleMenu} />
      </div>
    </div>
  );
}
