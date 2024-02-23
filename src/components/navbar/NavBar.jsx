import { Link } from "react-scroll";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
    return <>
    <div className="navbar">
        <h3>Vishal Sanap</h3>
        <GiHamburgerMenu className="navbar-icon" />
        <ul className="nav-list">
            <li><Link to="home" smooth={true} offset={-73} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={-70} duration={500}>About</Link></li>
            <li><Link to="projects" smooth={true} offset={-70} duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth={true} offset={-67} duration={500}>Contact</Link></li>
        </ul>
    </div>
    </>
}