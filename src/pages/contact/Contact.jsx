import { Element } from "react-scroll";
import "./Contact.css";
import Typewriter from "typewriter-effect";
import { useState } from "react";

export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  let name, value;
  const data = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    if (value.trim() === "") {
      setErrorMessage(`Please fill ${name} field`);
    } else {
      setErrorMessage("");
    }
  };
  const [errorMessage, setErrorMessage] = useState("");

  const getData = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (Object.values(user).some((value) => value.trim() === "")) {
      setErrorMessage("Please fill all fields");
      return;
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(
        "https://portfolio-1aa30-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json",
        options
      );
      if (response.ok) {
        alert("Message Sent");
        // Clear form fields after successful submission
        setUser({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Error sending message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message");
    }
  };

  return (
    <>
      <Element name="contact">
        <div className="contact-main">
          <div className="contact-content">
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
            <div className="feedback-form">
              <p>Don't hesitate, send me a message</p>
              <form className="contact-form" method="POST">
                <input
                  type="name"
                  name="name"
                  value={user.name}
                  placeholder="Enter your full name"
                  required
                  onChange={data}
                />
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="Enter your email"
                  required
                  onChange={data}
                />
                <input
                  type="text"
                  name="subject"
                  value={user.subject}
                  placeholder="Enter the Subject"
                  required
                  onChange={data}
                />
                <textarea
                  type="text"
                  name="message"
                  value={user.message}
                  placeholder="Type your Message Here"
                  required
                  onChange={data}
                />
                <button onClick={getData}>Submit</button>
              </form>
              <p>*Note: I'll try and get back to you in next 48 hours*</p>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
