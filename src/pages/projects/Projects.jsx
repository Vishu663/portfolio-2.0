import { Element } from "react-scroll";
import { useState } from "react";
import Modal from "../../components/modal/Modal"; // Assuming you have a Modal component
import "./Projects.css";
import wp from "../../assets/webprint-current.png";
import ac from "../../assets/Airbnb-clone-ipad.png";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Element name="projects">
        <div className="projects-main">
          <a>
            <div className="project-card" onClick={openModal}>
              <img className="card-img" src={wp} alt="" />
            </div>
            <h3>WEBPRINT</h3>
          </a>
          <a href="https://github.com/Vishu663/AIRBNB-CLONE">
            <div className="project-card">
              <img className="card-img" src={ac} alt="" />
            </div>
            <h3>Hotel-Booking-App</h3>
          </a>
        </div>
      </Element>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
