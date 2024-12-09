import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const listItemsRef = useRef([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Trigger animations for menu items when the menu is toggled open (responsive screens only)
    if (!isOpen && window.innerWidth <= 768) {
      listItemsRef.current.forEach((item, index) => {
        setTimeout(() => {
          if (item) {
            item.classList.add("animate-fade-in");
          }
        }, index * 100); // Staggered animation delay
      });
    }
  };

  const closeMenu = () => {
    setIsOpen(false);

    // Remove animation class on close (to reset for next open)
    listItemsRef.current.forEach((item) => {
      if (item) {
        item.classList.remove("animate-fade-in");
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      // Ensure the menu is always visible on larger screens
      if (window.innerWidth > 768) {
        setIsOpen(false);
        listItemsRef.current.forEach((item) => {
          if (item) {
            item.classList.remove("animate-fade-in");
          }
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <Link
        to="home"
        smooth={true}
        offset={0}
        duration={500}
        onClick={closeMenu} // Close menu on clicking home
      >
        <h3>VISHAL SANAP</h3>
      </Link>
      <div className="menu-logic">
        <ul
          className={`nav-list ${
            isOpen && window.innerWidth <= 768 ? "show" : ""
          }`}
        >
          {["home", "about", "projects", "tools"].map((section, index) => (
            <li key={section} ref={(el) => (listItemsRef.current[index] = el)}>
              <Link
                to={section}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu} // Ensures menu closes for every section
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
          <li ref={(el) => (listItemsRef.current[4] = el)}>
            <Link
              to="contact"
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu} // Close menu on "Contact"
            >
              <button className="nav-contact-btn">Contact</button>
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu} // Toggle hamburger menu open/close
        >
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}
