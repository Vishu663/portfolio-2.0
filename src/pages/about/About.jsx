import "./About.css";
import { Element } from "react-scroll";
import Typewriter from "typewriter-effect";
import coder from "../../assets/coder.png";
import { Link } from "react-scroll";
import { FaFileAlt } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Element name="about">
        <div className="about-main">
          <div className="about-content">
            <div className="about-me">
              {/* <h1>Hi, I'm Vishal 👋</h1> */}
              <div className="typewriter-intro">
                <h1>Hi, I'm</h1>
                <Typewriter
                  options={{
                    strings: [
                      "Vishal 👋",
                      "a Software Developer 👨‍💻",
                      " a Frontend Developer 🖥️",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p>
                living in Mumbai, India. I have 1 year of experience in
                designing world-class websites and products. If you have a
                project in mind, dont hesitate to reach out.
              </p>
              <Link to="contact" smooth={true} offset={0} duration={500}>
                <button>Send me a message</button>
              </Link>
            </div>
            <div className="about-picture">
              <img src={coder} alt="coder" />
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
