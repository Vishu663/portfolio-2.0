import { Element } from "react-scroll";
import { useState } from "react";
import Modal from "../../components/modal/Modal"; // Assuming you have a Modal component
import "./Projects.css";
import { FaAirbnb } from "react-icons/fa";
import { TiPrinter } from "react-icons/ti";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const webprint = () => {
    alert(`It is a private repo can't allow access`);
  };

  const instructions = () => {
    alert(
      "Please use email as test@gmail.com and psw as test123 for testing purposes"
    );
  };

  const airbnblogin = () => {
    alert(
      "Please use email as joe@gmail.com and psw as joe123 for testing purposes"
    );
  };

  return (
    <>
      <Element name="projects">
        <div className="project-main">
          <div className="project-content-0">
            <div className="project-description">
              <h3>
                <FaAirbnb className="project-icon" />
                Airbnb Clone
              </h3>
              <div>
                <h6>WEB DESIGN</h6>
                <h5>A full-featured hotel booking MERN stack APP</h5>
              </div>
              <div className="home-buttons">
                <a
                  href="https://github.com/Vishu663/AIRBNB-CLONE.git"
                  target="_blank"
                >
                  <button className="home-btn-1">Visit Code</button>
                </a>
                <a
                  href="https://airbnb-clone-frontend-steel.vercel.app"
                  target="_blank"
                >
                  <button className="home-btn-2" onClick={airbnblogin}>
                    Visit App
                  </button>
                </a>
              </div>
            </div>
            <img
              decoding="async"
              loading="lazy"
              src="/airbnb-portfolio.png"
              alt=""
            />
          </div>
          <div className="project-content-1">
            <div className="project-description">
              <h3>
                <img src="/ai-svgrepo-com.svg" className="project-icon" />
                AI Code Assistant Web App
              </h3>
              <div>
                <h6>WEB DESIGN</h6>
                <h5>AI code assistant built using Next.js and Gemini API</h5>
              </div>
              <div className="home-buttons">
                <a href="https://github.com/Vishu663/ai-assistant-vs" target="_blank">
                <button className="home-btn-1">Visit Code</button></a>
                <a href="https://ai-assistant-vs.vercel.app/" target="_blank">
                  <button className="home-btn-2">Visit App</button>
                </a> 
              </div>
            </div>
            <img
              decoding="async"
              src="/AI-assistant-portfolio-2.png"
              alt=""
            />
          </div>
          <div className="project-content-2">
            <div className="project-description">
              <h3>
                <TiPrinter className="project-icon" />
                WebPrint
              </h3>
              <div>
                <h6>WEB DESIGN</h6>
                <h5>Remote 3D printing MERN Stack App</h5>
              </div>
              <div className="home-buttons">
                <button className="home-btn-1" onClick={webprint}>
                  Visit Code
                </button>
                <a href="https://webprint-2.vercel.app/" target="_blank">
                  <button className="home-btn-2" onClick={instructions}>
                    Visit App
                  </button>
                </a>
              </div>
            </div>
            <img decoding="async" loading="lazy" src="/webprint.png" alt="" />
          </div>
          <div className="project-content-3">
            <div className="project-description">
              <h3>
                <img src="/weatherupp-logo.svg" className="project-icon" />
                WeatherUpp
              </h3>
              <div>
                <h6>WEB DESIGN</h6>
                <h5>Simple Weather Information React based App</h5>
              </div>
              <div className="home-buttons">
                <a
                  href="https://github.com/Vishu663/weather-app.git"
                  target="_blank"
                >
                  <button className="home-btn-1">Visit Code</button>
                </a>
                <a href="https://weatherupp.vercel.app/" target="_blank">
                  <button className="home-btn-2">Visit App</button>
                </a>
              </div>
            </div>
            <img decoding="async" src="/weatherupp-portfolio.png" alt="" />
          </div>
        </div>
        {/* <div className="navigation-buttons">
          <button id="backward">Backward</button>
          <button id="forward">Forward</button>
        </div> */}
      </Element>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
