import { useEffect, useRef } from "react";
import "./Tools.css";
import { Element } from "react-scroll";
import {
  FaFigma,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";

const toolsList = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
    description: "Structuring the web with semantic elements.",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS",
    description: "Styling websites with precision and creativity.",
  },
  {
    icon: <IoLogoJavascript />,
    name: "JavaScript",
    description: "Dynamic scripting for interactive web pages.",
  },
  {
    icon: <FaReact />,
    name: "React",
    description: "Building dynamic and reusable UI components.",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    description: "Server-rendered React for fast web apps.",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    description: "Backend JavaScript runtime for scalable apps.",
  },
  {
    icon: <FaFigma />,
    name: "Figma",
    description: "UX/UI Design & Prototyping.",
  },
  {
    icon: <IoLogoFirebase />,
    name: "Firebase",
    description: "Backend-as-a-Service for real-time apps.",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    description: "Hosting and managing code repositories.",
  },
];

export default function Tools() {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          } else {
            entry.target.classList.remove("animate-slide-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const toolElements = document.querySelectorAll(".tool");
    toolElements.forEach((el) => {
      observer.current.observe(el);
    });

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <Element name="tools">
      <div className="tools-main">
        <div className="tools-content">
          <div className="tool-heading">My Tools & Skills 🛠️</div>
          <h2>These are the tools I use and things I am skilled at</h2>
          <div className="tools">
            {toolsList.map((tool, index) => (
              <div key={index} className="tool">
                <div className="tool-img">{tool.icon}</div>
                <div className="tool-data">
                  <h5>{tool.name}</h5>
                  <span>{tool.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
