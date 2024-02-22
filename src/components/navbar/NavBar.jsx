import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
    return <>
    <div className="navbar">
        <h3>Vishal Sanap</h3>
        <GiHamburgerMenu className="navbar-icon" />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contacts</li>
        </ul>
    </div>
    </>
}