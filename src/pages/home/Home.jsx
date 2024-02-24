import "./Home.css";
import coder from "../../assets/coder.png";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { Element, Link } from "react-scroll";

export default function Home() {
	return (
		<>
			<Element name="home">
				<div className="home-main">
					<div className="main-left">
						<div className="main-tw">
							<span>Hello I'm</span>
							<Typewriter
								options={{
									strings: [
										"Vishal",
										"a Software Developer",
										" a Frontend Developer",
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</div>
						<div className="main-socials">
							<a href="https://github.com/Vishu663" target="_blank">
								<FaGithub className="social-icon" />
							</a>
							<a
								href="https://www.linkedin.com/in/vishal-sanap-83537119b/"
								target="_blank"
							>
								<FaLinkedin className="social-icon" />
							</a>
							<a
								href="https://www.canva.com/design/DAFwd067WvU/GpA3rnDy-0-FS689Y7P18A/view?utm_content=DAFwd067WvU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
								target="_blank"
							>
								<FaFileAlt className="social-icon" />
							</a>
						</div>
						<div className="main-button">
						<Link to="contact" smooth={true} offset={-67} duration={500}><button>Get free quote</button></Link>
						</div>
					</div>
					<div className="main-right">
						<img className="coder1" src={coder} alt="coder" />
					</div>
				</div>
			</Element>
		</>
	);
}
