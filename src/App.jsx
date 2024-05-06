import NavBar from "./components/navbar/NavBar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import "./App.css";
import ComingSoon from "./pages/comingsoon/ComingSoon";

function App() {
  const path = window.location.pathname;
  if (path === "/ComingSoon") {
    return <ComingSoon />;
  } else {
    return (
      <div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
