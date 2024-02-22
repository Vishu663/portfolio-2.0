import "./About.css";
import coder2 from "../../assets/coder-2.jpeg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { Element } from "react-scroll";

export default function About() {
	return (
		<>
			<Element name="about">
				<div className="about-main">
					<div className="about-left">
						<img src={coder2} alt="" />
					</div>
					<div className="about-right">
						<div className="ar-top">
							<h3>About Me</h3>
							<p>
								Hardworking and passionate internship/job seeker with strong
								organizational skills eager to secure entry-level Software
								Developer position. Ready to help team achieve company goals.
								Learning Web Development and developing new skills. Passionate
								learner. Responsible and obedient, fulfilling roles as T&P
								Student Coordinator and Class Representative. Words and actions
								aligned with a thriving passion for creating a career in the
								technical industry.
							</p>
						</div>
						<div className="ar-bottom">
							<h3>My Skills</h3>
							<ul>
								<li>
									<span>
										<FaHtml5 />
									</span>
									<p>HTML</p>
								</li>
								<li>
									<span>
										<FaCss3Alt />
									</span>
									<p>CSS</p>
								</li>
								<li>
									<span>
										<IoLogoJavascript />
									</span>
									<p>JavaScript</p>
								</li>
								<li>
									<span>
										<FaReact />
									</span>
									<p>React</p>
								</li>
								<li>
									<span>
										<FaGitAlt />
									</span>
									<p>Git</p>
								</li>
								<li>
									<span>
										<FaGithub />
									</span>
									<p>GitHub</p>
								</li>
								<li>
									<span>
										<FaFigma />
									</span>
									<p>Figma</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Element>
		</>
	);
}
