import NavBar from "./components/navbar/NavBar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import "./App.css";
import Tools from "./pages/tools/Tools";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
