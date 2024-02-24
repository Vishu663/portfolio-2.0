import { Element } from "react-scroll";
import "./Contact.css";
import Typewriter from "typewriter-effect";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
	const [user,setUser] = useState({
		name: '', email: '',subject: '',message: ''
	})
	let name,value
	const data = (e) => {
		name = e.target.name;
		value = e.target.value;
		setUser({...user, [name]: value});
		console.log(user);
	}
	const getData = (e) => {
		const {name, email, subject, message} = user;
		e.preventDefault();
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name, email, subject, message
			})
		}
		const res = fetch(
			'https://portfolio-1aa30-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json',
			options
		)
		if(res) {
			alert('Message Sent')
		}
		else {
			alert('error sending message')
		}

	}
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
						<form className="contact-form" method='POST'>
							<input type="name" name="name" value={user.name} placeholder="Enter your full name" required onChange={data} />
							<input type="email" name="email" value={user.email} placeholder="Enter your email" required onChange={data} />
							<input type="text" name="subject" value={user.subject} placeholder="Enter the Subject" required onChange={data} />
							<textarea type="text" name="message" value={user.message} placeholder="Type your Message Here" required onChange={data} />
                            <button onClick={getData}>Submit</button>
						</form>
					</div>
				</div>
			</Element>
		</>
	);
}
