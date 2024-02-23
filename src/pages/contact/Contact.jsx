import { Element } from "react-scroll";
import "./Contact.css";
import Typewriter from "typewriter-effect";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
	return (
		<>
			<Element name="contact">
				<div className="contact-main">
					<div className="contact-left">
						<div className="cl-top">
							<div className="contact-tw">
								<span>Contact</span>
								<Typewriter
									options={{
										strings: [
											"To Collab Ideas.",
											"To Grow Together.",
											"To Get Free Quote.",
											"To Build Journeys.",
										],
										autoStart: true,
										loop: true,
									}}
								/>
							</div>
						</div>
						<div className="cl-bottom">
							<ul>
								<li>
									<MdEmail />
									<p>vishalsanap664@gmail.com</p>
								</li>
								<li>
									<FaInstagram />
									<p>Follow on Instagram</p>
								</li>
								<li>
									<FaGithub />
									<p>Connect on LinkedIn</p>
								</li>
							</ul>
						</div>
					</div>
					<div className="contact-right">
						<form className="contact-form">
							<input type="name" placeholder="Enter your full name" />
							<input type="email" placeholder="Enter your email" />
							<input type="text" placeholder="Enter the Subject"/>
							<input type="text" placeholder="Type your Message Here"/>
                            <button>Submit</button>
						</form>
					</div>
				</div>
			</Element>
		</>
	);
}
