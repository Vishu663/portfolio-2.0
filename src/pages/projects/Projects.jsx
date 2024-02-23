import { Element } from "react-scroll";
import "./Projects.css";
import wp from "../../assets/webprint-current.png";
import ac from "../../assets/Airbnb-clone-ipad.png";

export default function Projects() {
	return (
		<>
			<Element name="projects">
				<div className="projects-main">
					<div className="project-card"><img className="card-img" src={wp} alt="" /></div>
					<div className="project-card"><img className="card-img" src={ac} alt="" /></div>
					<div className="project-card"></div>
				</div>
			</Element>
		</>
	);
}
