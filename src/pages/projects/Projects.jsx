import { Element } from "react-scroll";
import "./Projects.css";
import wp from "../../assets/webprint-current.png";
import ac from "../../assets/Airbnb-clone-ipad.png";

export default function Projects() {
  return (
    <>
      <Element name="projects">
        <div className="projects-main">
          <a href="/ComingSoon">
            <div className="project-card">
              <img className="card-img" src={wp} alt="" />
            </div>
          </a>
          <a href="https://github.com/Vishu663/AIRBNB-CLONE">
            <div className="project-card">
              <img className="card-img" src={ac} alt="" />
            </div>
          </a>
        </div>
      </Element>
    </>
  );
}
