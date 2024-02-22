import "./Home.css";
import coder from "../../assets/coder.png";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Home() {
	return (
		<>
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
						<a href="https://www.linkedin.com/in/vishal-sanap-83537119b/" target="_blank">
							<FaLinkedin className="social-icon" />
						</a>
						<a href="https://www.canva.com/design/DAFwd067WvU/GpA3rnDy-0-FS689Y7P18A/view?utm_content=DAFwd067WvU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">
							<FaFileAlt className="social-icon" />
						</a>
					</div>
					<div className="main-button">
						<button>Get free quote</button>
					</div>
				</div>
				<div className="main-right">
					<img src={coder} alt="coder" />
				</div>
			</div>
		</>
	);
}
