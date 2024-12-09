import { useEffect, useRef } from "react";
import "./Home.css";
import { Link } from "react-scroll";
import { Element } from "react-scroll";
import { FaFileAlt } from "react-icons/fa";

export default function Home() {
  const contentBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentBoxRef.current.classList.add("fade-in");
        } else {
          contentBoxRef.current.classList.remove("fade-in");
        }
      },
      { threshold: 0.3 }
    );

    if (contentBoxRef.current) {
      observer.observe(contentBoxRef.current);
    }

    return () => {
      if (contentBoxRef.current) {
        observer.unobserve(contentBoxRef.current);
      }
    };
  }, []);

  return (
    <>
      <Element name="home">
        <div className="home-main">
          <div className="main-content">
            <div className="content-box" ref={contentBoxRef}>
              <div className="intro-box">Hi I'm Vishal 👋</div>
              <div className="tagline">
                <h1>I design apps, and websites that blow your mind</h1>
              </div>
              <div className="home-buttons">
                <Link to="projects" smooth={true} offset={1} duration={500}>
                  <button className="home-btn-1">My Work</button>
                </Link>
                <a
                  href="https://docs.google.com/document/d/1VD0PgEqy6GirSLD9TDsj8Z1cbXW5HT4m/edit?usp=sharing&ouid=108871303173466295011&rtpof=true&sd=true"
                  target="_blank"
                >
                  <button className="home-btn-2">
                    <FaFileAlt /> Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
