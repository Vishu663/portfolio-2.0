import { Element, Link } from "react-scroll";
import "./footer.css";
import { FaCss3Alt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <Element name="footer">
        <div className="footer-main">
          <div className="footer-content">
            <div className="socials">
              <span>Follow me on other channels</span>
              <div className="social">
                <div className="social-img">
                  <FaLinkedin className="social-logo" />
                </div>
                <div className="social-data">
                  <a
                    href="https://www.linkedin.com/in/vishal-sanap-83537119b/"
                    target="_blank"
                  >
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="social">
                <div className="social-img">
                  <FaGithub className="social-logo" />
                </div>
                <div className="social-data">
                  <a href="https://github.com/Vishu663" target="_blank">
                    <span>Checkout my GitHub</span>
                  </a>
                </div>
              </div>
              <div className="social">
                <div className="social-img">
                  <MdEmail className="social-logo" />
                </div>
                <div className="social-data">
                  <span>Mail me at vishalsanap664@gmail.com</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="navigation">
              <span>Navigations</span>
              <ul>
                <li>
                  <Link to="home" smooth={true} offset={0} duration={500}>
                    → Home
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} offset={2} duration={500}>
                    → About
                  </Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} offset={1} duration={500}>
                    → Work
                  </Link>
                </li>
                <li>
                  <Link to="tools" smooth={true} offset={0} duration={500}>
                    → Tools
                  </Link>
                </li>
              </ul>
            </div>
            <hr />
            <div className="blogs">
              <span>Checkout my posts on LinkedIn</span>
              <a
                href="https://www.linkedin.com/posts/vishal-sanap-83537119b_coding-javascript-dsa-activity-7209817583267549185-okWh?utm_source=share&utm_medium=member_desktop"
                target="_blank"
              >
                1. 🔍 Solving DSA Problems: Kadane's Algorithm and More 🔍
              </a>
              <br />
              <a
                href="https://www.linkedin.com/posts/vishal-sanap-83537119b_appreciation-post-for-the-conclusion-activity-7195316189001068544-7tw3?utm_source=share&utm_medium=member_desktop"
                target="_blank"
              >
                2. Appreciation Post for the Conclusion of Our BE Project!
              </a>
              <br />
              <a
                href="https://www.linkedin.com/posts/vishal-sanap-83537119b_vishals-portfolio-activity-7194750699971239936-mORN?utm_source=share&utm_medium=member_desktop"
                target="_blank"
              >
                3. "Quick Update" : Just added my portfolio to the projects
                section.
              </a>
              <br />
              <a
                href="https://www.linkedin.com/posts/vishal-sanap-83537119b_typescript-programming-techjourney-activity-7193927783599771649-sUnR?utm_source=share&utm_medium=member_desktop"
                target="_blank"
              >
                4. Recently, I've been exploring TypeScript, and let me tell
                you, it's been quite the adventure! 🚀💻
              </a>
            </div>
          </div>
          <div className="privacy-policy">
            <span>Copyright © 2025. All rights are reserved</span>
            <ul>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </Element>
    </>
  );
}
